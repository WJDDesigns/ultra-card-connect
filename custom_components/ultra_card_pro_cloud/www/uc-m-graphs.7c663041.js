export const __webpack_esm_ids__=[4334];export const __webpack_esm_modules__={9009(t,e,i){var r=i(2618),a=i(4791),o=i(8153),n=function(t,e,i,r){var a,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let s=class extends r.WF{static get styles(){return r.AH`
      ha-entity-picker {
        width: 100%;
        display: block;
      }
    `}render(){return r.qy`
      <ha-entity-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value||""}
        .entityFilter=${this.entityFilter}
        @value-changed=${this._valueChanged}
        allow-custom-entity
      ></ha-entity-picker>
    `}_valueChanged(t){t.stopPropagation();const e=t.detail.value;e!==this.value&&(this.value=e,(0,o.rC)(this,"value-changed",{value:e}))}};n([(0,a.MZ)({attribute:!1})],s.prototype,"hass",void 0),n([(0,a.MZ)()],s.prototype,"label",void 0),n([(0,a.MZ)()],s.prototype,"value",void 0),n([(0,a.MZ)()],s.prototype,"entityFilter",void 0),s=n([(0,a.EM)("ultra-card-entity-picker")],s)},4383(t,e,i){i.d(e,{UltraGraphsModule:()=>x});var r=i(2618),a=i(7475),o=i(5320),n=i(9327),s=i(5121),l=i(5155),d=i(9957),c=i(5147),p=i(8938),h=i(8465),u=i(6477),g=(i(9009),i(7921),i(7907)),m=i(9760),y=i(6478),_=i(1001),v=i(1172),f=i(3361);const b=["colors","global_color","fill_area","pie_fill"];class x extends a.m{constructor(){super(...arguments),this.metadata={type:"graphs",title:"Graphs",description:"Display interactive charts and graphs with Home Assistant data",author:"WJD Designs",version:"1.0.0",icon:"mdi:chart-line",category:"data",tags:["charts","graphs","data","visualization","statistics","analytics"]},this._updateInterval=null,this._historyData={},this._historyError={},this._historyLoading={},this._deferredHistoryScheduled={},this._templateResults={},this._tmLastBucket={},this._tmRefetchTimers={},this.clickTimeout=null,this.holdTimeout=null,this.isHolding=!1,this.expandedEntities=new Set,this.DEFAULT_COLORS=["#2196F3","#4CAF50","#FF9800","#F44336","#9C27B0","#00BCD4","#FFEB3B","#795548","#607D8B","#E91E63"],this.FORECAST_ATTRIBUTE_LABELS={temperature:"Temperature",precipitation:"Precipitation",wind_speed:"Wind Speed",humidity:"Humidity",pressure:"Pressure",cloud_coverage:"Cloud Coverage"},this.FORECAST_ATTRIBUTE_UNITS={temperature:"°",precipitation:"mm",wind_speed:"km/h",humidity:"%",pressure:"hPa",cloud_coverage:"%"}}_getCacheStore(){const t=window;if(!t.__ultraGraphsCache)try{const e=localStorage.getItem("__ultraGraphsCache");t.__ultraGraphsCache=e?JSON.parse(e):{}}catch(e){t.__ultraGraphsCache={}}return t.__ultraGraphsCache}_persistCacheStore(t){try{localStorage.setItem("__ultraGraphsCache",JSON.stringify(t))}catch(t){}}_makeCacheKey(t){return"forecast"===(t.data_source||"history")?`forecast::${t.forecast_entity}::${t.forecast_type}::${t.time_period}`:`history::${(t.entities||[]).filter(t=>t.entity).map(t=>`${t.entity}|${t.attribute||"state"}`).join(";")}::${t.time_period}`}_tryReadCache(t){const e=this._getCacheStore(),i=this._makeCacheKey(t),r=e[i];if(!r)return null;const a=Date.now();return r.expiresAt&&r.expiresAt>a&&r.data?r.data:(delete e[i],this._persistCacheStore(e),null)}_writeCache(t,e){const i=this._getCacheStore();i[this._makeCacheKey(t)]={expiresAt:Date.now()+3e5,data:e},this._persistCacheStore(i)}createDefault(t,e){return{id:t||this.generateId("graphs"),type:"graphs",name:"New Graph",data_source:"history",forecast_type:"hourly",forecast_entity:"",chart_type:"line",entities:[],time_period:"24h",title:"Chart",chart_width:"100%",chart_width_percent:100,chart_height:345,background_color:"transparent",show_title:!0,chart_alignment:"center",show_display_name:!0,show_entity_value:!0,info_position:"top_left",title_font_size:12,value_font_size:16,show_legend:!0,legend_position:"bottom_left",show_grid:!0,show_time_intervals:!1,smooth_curves:!0,show_tooltips:!0,show_slice_labels:!0,bar_display_limit:0,chart_layout:"default",use_fixed_y_axis:!1,y_axis_min:void 0,y_axis_max:void 0,tap_action:void 0,hold_action:void 0,double_tap_action:void 0,unified_template_mode:!1,unified_template:"",display_mode:"always",display_conditions:[]}}getChartTypeOptions(t){return[{value:"line",label:(0,y.kg)("editor.graphs.types.line",t,"Line Chart")},{value:"bar",label:(0,y.kg)("editor.graphs.types.bar",t,"Bar Chart")},{value:"pie",label:(0,y.kg)("editor.graphs.types.pie",t,"Pie Chart")},{value:"donut",label:(0,y.kg)("editor.graphs.types.donut",t,"Donut Chart")}]}getTimePeriodOptions(t,e){const i="forecast"===e?"Next":"Last",r=[];return"forecast"!==e&&r.push({value:"today",label:(0,y.kg)("editor.graphs.period.today",t,"Today")}),r.push({value:"1h",label:(0,y.kg)("editor.graphs.period.1h",t,`${i} Hour`)},{value:"3h",label:(0,y.kg)("editor.graphs.period.3h",t,`${i} 3 Hours`)},{value:"6h",label:(0,y.kg)("editor.graphs.period.6h",t,`${i} 6 Hours`)},{value:"12h",label:(0,y.kg)("editor.graphs.period.12h",t,`${i} 12 Hours`)},{value:"24h",label:(0,y.kg)("editor.graphs.period.24h",t,`${i} 24 Hours`)},{value:"2d",label:(0,y.kg)("editor.graphs.period.2d",t,`${i} 2 Days`)},{value:"7d",label:(0,y.kg)("editor.graphs.period.7d",t,`${i} Week`)},{value:"30d",label:(0,y.kg)("editor.graphs.period.30d",t,`${i} Month`)},{value:"90d",label:(0,y.kg)("editor.graphs.period.90d",t,`${i} 3 Months`)},{value:"365d",label:(0,y.kg)("editor.graphs.period.365d",t,`${i} Year`)}),r}getAggregationOptions(t){return[{value:"mean",label:(0,y.kg)("editor.graphs.agg.mean",t,"Average")},{value:"sum",label:(0,y.kg)("editor.graphs.agg.sum",t,"Sum")},{value:"min",label:(0,y.kg)("editor.graphs.agg.min",t,"Minimum")},{value:"max",label:(0,y.kg)("editor.graphs.agg.max",t,"Maximum")},{value:"median",label:(0,y.kg)("editor.graphs.agg.median",t,"Median")},{value:"first",label:(0,y.kg)("editor.graphs.agg.first",t,"First Value")},{value:"last",label:(0,y.kg)("editor.graphs.agg.last",t,"Last Value")},{value:"count",label:(0,y.kg)("editor.graphs.agg.count",t,"Count")},{value:"delta",label:(0,y.kg)("editor.graphs.agg.delta",t,"Change")}]}getLegendPositionOptions(t){return[{value:"top",label:(0,y.kg)("editor.graphs.position.top",t,"Top")},{value:"bottom",label:(0,y.kg)("editor.graphs.position.bottom",t,"Bottom")},{value:"left",label:(0,y.kg)("editor.graphs.position.left",t,"Left")},{value:"right",label:(0,y.kg)("editor.graphs.position.right",t,"Right")},{value:"none",label:(0,y.kg)("editor.graphs.position.hidden",t,"Hidden")}]}_renderInlineToggle(t,e,i,a){return r.qy`
      <div class="uc-graphs-inline-toggle" style="display: flex; align-items: center;">
        ${this.renderUcForm(t,{_v:!!i},[{name:"_v",label:e,selector:{boolean:{}}}],t=>a(!!t.detail.value._v),!0)}
      </div>
    `}renderGeneralTab(t,e,i,a){var o,n,s,l,d,c,p,u,g,m,_,v,f;const x=t,w=(null===(o=null==e?void 0:e.locale)||void 0===o?void 0:o.language)||"en";return r.qy`
      <div class="uc-graphs-general-tab">
        ${this.injectUcFormStyles()}
        <style>
          .uc-graphs-general-tab {
            padding: 8px;
          }
          .settings-section {
            background: var(--secondary-background-color);
            border-radius: var(--uc-r-12, 12px);
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid rgba(var(--rgb-primary-color), 0.12);
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          .section-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-text-color);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .field-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-text-color);
            margin-bottom: 4px;
          }
          .field-description {
            font-size: 13px;
            color: var(--secondary-text-color);
            margin-bottom: 12px;
            opacity: 0.8;
            line-height: 1.4;
          }
        </style>

        <!-- Data Source Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-12, 12px); padding: 20px; margin-bottom: 20px; border: 1px solid rgba(var(--rgb-primary-color), 0.12); width: 100%; max-width: 100%; box-sizing: border-box; overflow: visible;"
        >
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;"
          >
            <ha-icon icon="mdi:database" style="color: var(--primary-color);"></ha-icon>
            ${(0,y.kg)("editor.graphs.data_source.title",w,"Data Source")}
          </div>

          ${this.renderFieldSection((0,y.kg)("editor.graphs.data_source.mode",w,"Mode"),(0,y.kg)("editor.graphs.data_source.desc",w,"Choose between historical data or weather forecasts."),e,{data_source:x.data_source||"history"},[this.selectField("data_source",[{value:"history",label:(0,y.kg)("editor.graphs.mode.history",w,"History")},{value:"forecast",label:(0,y.kg)("editor.graphs.mode.forecast",w,"Forecast")}])],t=>{const e=t.detail.value.data_source;e!==(x.data_source||"history")&&(a({data_source:e}),delete this._historyData[x.id],setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${"forecast"===x.data_source?r.qy`
                <div style="margin-top: 12px;">
                  ${h.Q.renderField((0,y.kg)("editor.graphs.forecast_entity",w,"Weather Entity"),(0,y.kg)("editor.graphs.forecast_entity_desc",w,"Select a weather entity for forecasts."),e,{forecast_entity:x.forecast_entity||""},[h.Q.createSchemaItem("forecast_entity",{entity:{domain:"weather"}})],t=>{var i;const r=(null===(i=t.detail.value)||void 0===i?void 0:i.forecast_entity)||t.detail.value;if(r===x.forecast_entity)return;a({forecast_entity:r}),delete this._historyData[x.id],delete this._deferredHistoryScheduled[x.id],delete this._historyLoading[x.id];try{const t=this._getCacheStore();delete t[this._makeCacheKey(x)],this._persistCacheStore(t)}catch(t){}const o=Object.assign(Object.assign({},x),{forecast_entity:r});this._loadHistoryData(o,e),this.requestUpdate(),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  <div style="margin-top: 16px;">
                    ${this.renderFieldSection((0,y.kg)("editor.graphs.forecast_type",w,"Forecast Type"),(0,y.kg)("editor.graphs.forecast_type_desc",w,"Hourly or daily forecasts."),e,{forecast_type:x.forecast_type||"hourly"},[this.selectField("forecast_type",[{value:"hourly",label:(0,y.kg)("editor.graphs.type.hourly",w,"Hourly")},{value:"daily",label:(0,y.kg)("editor.graphs.type.daily",w,"Daily")}])],t=>{const i=t.detail.value.forecast_type;if(i===x.forecast_type)return;a({forecast_type:i}),delete this._historyData[x.id],delete this._historyError[x.id],delete this._historyLoading[x.id],delete this._deferredHistoryScheduled[x.id];try{const t=this._getCacheStore();delete t[this._makeCacheKey(x)],this._persistCacheStore(t)}catch(t){}const r=Object.assign(Object.assign({},x),{forecast_type:i});this._loadHistoryData(r,e),this.requestUpdate(),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                </div>
              `:""}
        </div>

        <!-- Chart Type Section -->
        <div
          ${this.renderSettingsSection((0,y.kg)("editor.graphs.chart_type.title",w,"Chart Type"),"",[{title:(0,y.kg)("editor.graphs.chart_type.type",w,"Type"),description:(0,y.kg)("editor.graphs.chart_type.desc",w,"Select the visualization style for your data."),hass:e,data:{chart_type:x.chart_type},schema:[this.selectField("chart_type",this.getChartTypeOptions(w))],onChange:t=>{const e=t.detail.value.chart_type;e!==x.chart_type&&(a({chart_type:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Data Sources Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-12, 12px); padding: 20px; margin-bottom: 20px; border: 1px solid rgba(var(--rgb-primary-color), 0.12); width: 100%; max-width: 100%; box-sizing: border-box; overflow: visible;"
        >
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;"
          >
            <ha-icon icon="mdi:database" style="color: var(--primary-color);"></ha-icon>
            ${"forecast"===x.data_source?(0,y.kg)("editor.graphs.forecast_attributes.title",w,"Forecast Attributes"):(0,y.kg)("editor.graphs.data_sources.title",w,"Data Sources")}
          </div>
          ${"forecast"===x.data_source?r.qy`<div
                style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.08); border-radius: var(--uc-r-8, 8px); border-left: 3px solid var(--primary-color);"
              >
                ${(0,y.kg)("editor.graphs.forecast_attributes.desc",w,"Select which forecast values to display from the weather entity configured above. Each attribute will be shown as a separate line on the graph.")}
              </div>`:""}

          <div class="entities-grid" style="display: grid; gap: 12px;">
            ${(null===(n=x.entities)||void 0===n?void 0:n.map((t,i)=>{var o,n,s;return r.qy`
                <div
                  class="entity-card"
                  style="
                    background: var(--primary-background-color); 
                    border-radius: var(--uc-r-8, 8px); 
                    padding: 16px; 
                    border-left: 4px solid ${t.color||this._getDefaultColor(i)};
                    position: relative;
                    transition: all 0.2s ease;
                  "
                >
                  ${((null===(o=x.entities)||void 0===o?void 0:o.length)||0)>1?r.qy`
                        <ha-icon-button
                          @click=${()=>this._removeEntity(x,i,a)}
                          style="
                        position: absolute;
                        top: 8px;
                        right: 8px;
                        --mdc-icon-button-size: 32px;
                        --mdc-icon-size: 16px;
                        color: var(--error-color);
                      "
                        >
                          <ha-icon icon="mdi:close"></ha-icon>
                        </ha-icon-button>
                      `:""}

                  <div
                    style="display: grid; gap: 12px; margin-top: ${((null===(n=x.entities)||void 0===n?void 0:n.length)||0)>1?"20px":"0"};"
                  >
                    <!-- Entity Header -->
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                      <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                        <div
                          style="
                             width: 12px;
                             height: 12px;
                             background: ${t.color||this._getDefaultColor(i)};
                             border-radius: var(--uc-r-2, 2px);
                             flex-shrink: 0;
                           "
                        ></div>
                        <span
                          style="font-size: 14px; font-weight: 500; color: var(--primary-text-color);"
                        >
                          ${t.name||(t.entity?(null===(s=e.states[t.entity])||void 0===s?void 0:s.attributes.friendly_name)||t.entity.split(".")[1]:`Entity ${i+1}`)}
                        </span>
                      </div>
                    </div>

                    <!-- Basic Settings (Always Visible) -->
                    <div style="display: grid; gap: 12px;">
                      <!-- Entity Picker (History Mode Only) -->
                      ${"forecast"!==x.data_source?h.Q.renderField((0,y.kg)("editor.graphs.entity.label",w,"Entity"),(0,y.kg)("editor.graphs.entity.desc",w,"Select an entity to plot."),e,{entity:t.entity||""},[h.Q.createSchemaItem("entity",{entity:{}})],t=>{var r,o;this._updateEntity(x,i,{entity:(null===(r=t.detail.value)||void 0===r?void 0:r.entity)||(null===(o=t.detail.value)||void 0===o?void 0:o.entity)||t.detail.value},a,e)}):""}

                      <!-- Forecast Attribute Selection (Forecast Mode - Always Visible) -->
                      ${"forecast"===x.data_source?this.renderFieldSection((0,y.kg)("editor.graphs.entity.forecast_attr",w,"Forecast Attribute"),(0,y.kg)("editor.graphs.entity.forecast_attr_desc",w,"Which forecast value to plot on the graph."),e,{forecast_attribute:t.forecast_attribute||"temperature"},[this.selectField("forecast_attribute",[{value:"temperature",label:(0,y.kg)("editor.graphs.forecast.temp",w,"Temperature")},{value:"precipitation",label:(0,y.kg)("editor.graphs.forecast.precip",w,"Precipitation")},{value:"wind_speed",label:(0,y.kg)("editor.graphs.forecast.wind",w,"Wind Speed")},{value:"humidity",label:(0,y.kg)("editor.graphs.forecast.humidity",w,"Humidity")},{value:"pressure",label:(0,y.kg)("editor.graphs.forecast.pressure",w,"Pressure")},{value:"cloud_coverage",label:(0,y.kg)("editor.graphs.forecast.clouds",w,"Cloud Coverage")}])],r=>{const o=r.detail.value.forecast_attribute;o!==t.forecast_attribute&&this._updateEntity(x,i,{forecast_attribute:o},a,e)}):""}

                      <!-- Display Name -->
                      <input
                        type="text"
                        .value=${t.name||""}
                        placeholder="${(0,y.kg)("editor.graphs.entity.display_name_placeholder",w,"Display name (optional)")}"
                        @input=${t=>{const e=t.target;this._updateEntity(x,i,{name:e.value},a)}}
                        style="
                          padding: 10px 12px;
                          border: 1px solid var(--divider-color);
                          border-radius: var(--uc-r-6, 6px);
                          background: var(--secondary-background-color);
                          color: var(--primary-text-color);
                          font-size: 14px;
                          transition: border-color 0.2s ease;
                        "
                      />

                      <!-- Series Color (below name) -->
                      <div style="margin-top: 4px;">
                        <ultra-color-picker
                          .value=${t.color||this._getDefaultColor(i)}
                          @value-changed=${t=>{this._updateEntity(x,i,{color:t.detail.value},a)}}
                          style="width: 100%; height: 40px;"
                        ></ultra-color-picker>
                      </div>

                      <!-- Primary entity toggle -->
                      <div
                        style="padding:8px; border-radius:var(--uc-r-6, 6px); background: var(--primary-background-color);"
                      >
                        ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.entity.use_as_card_info",w,"Use as card info"),!0===t.is_primary||0===i&&!(x.entities||[]).some(t=>t.is_primary),t=>{const e=x.entities||[];let r;r=t?e.map((t,e)=>Object.assign(Object.assign({},t),{is_primary:e===i})):e.some((t,e)=>e!==i&&t.is_primary)?e.map((t,e)=>e===i?Object.assign(Object.assign({},t),{is_primary:!1}):t):e.map((t,e)=>Object.assign(Object.assign({},t),{is_primary:e===i})),a({entities:r})})}
                      </div>
                    </div>

                    <!-- Advanced Options (Collapsible) -->
                    <div
                      class="entity-advanced-options"
                      style="
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease, opacity 0.2s ease;
                        opacity: 0;
                        border-top: none;
                        margin-top: 0;
                      "
                    >
                      <div style="padding-top: 16px; display: grid; gap: 16px;">
                        <!-- Attribute Selection (History Mode) -->
                        ${"forecast"!==x.data_source?h.Q.renderField((0,y.kg)("editor.graphs.entity.attribute",w,"Attribute"),(0,y.kg)("editor.graphs.entity.attribute_desc",w,"Use entity state or select a specific attribute to track."),e,{attribute:t.attribute||""},[h.Q.createSchemaItem("attribute",{select:{options:[{value:"",label:(0,y.kg)("editor.graphs.entity.state_default",w,"State (default)")},...this._getEntityAttributes(t.entity,e)],mode:"dropdown"}})],t=>{this._updateEntity(x,i,{attribute:t.detail.value.attribute},a,e)}):""}

                        <!-- Line Chart Specific Options -->
                        ${["line","area"].includes(x.chart_type)?r.qy`
                              <div
                                style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"
                              >
                                <div
                                  style="padding: 8px; border-radius: var(--uc-r-6, 6px); background: var(--secondary-background-color);"
                                >
                                  ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.line.show_points",w,"Show Points"),!1!==t.show_points,t=>this._updateEntity(x,i,{show_points:t},a))}
                                </div>

                                <div
                                  style="padding: 8px; border-radius: var(--uc-r-6, 6px); background: var(--secondary-background-color);"
                                >
                                  ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.line.fill_area",w,"Fill Area"),!0===t.fill_area,t=>this._updateEntity(x,i,{fill_area:t},a))}
                                </div>
                              </div>

                              <!-- Line Width and Style -->
                              <div
                                style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;"
                              >
                              ${this.renderSliderField((0,y.kg)("editor.graphs.line.line_width",w,"Line Width"),"",t.line_width||2,2,1,8,1,t=>this._updateEntity(x,i,{line_width:t},a),"px")}

                                ${this.renderFieldSection((0,y.kg)("editor.graphs.line.line_style",w,"Line Style"),"",e,{line_style:t.line_style||"solid"},[this.selectField("line_style",[{value:"solid",label:(0,y.kg)("editor.graphs.line_styles.solid",w,"Solid")},{value:"dashed",label:(0,y.kg)("editor.graphs.line_styles.dashed",w,"Dashed")},{value:"dotted",label:(0,y.kg)("editor.graphs.line_styles.dotted",w,"Dotted")}])],e=>{const r=e.detail.value.line_style;r!==(t.line_style||"solid")&&(this._updateEntity(x,i,{line_style:r},a),setTimeout(()=>{this.triggerPreviewUpdate()},50))})}
                              </div>
                            `:""}
                        ${["pie","donut"].includes(x.chart_type)?r.qy`
                              <div
                                style="padding: 8px; border-radius: var(--uc-r-6, 6px); background: var(--secondary-background-color);"
                              >
                                ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.pie.show_title",w,"Show Title in Slice"),!1!==t.label_show_name,t=>this._updateEntity(x,i,{label_show_name:t},a))}
                              </div>
                              <div
                                style="padding: 8px; border-radius: var(--uc-r-6, 6px); background: var(--secondary-background-color);"
                              >
                                ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.pie.show_value",w,"Show Value in Slice"),!1!==t.label_show_value,t=>this._updateEntity(x,i,{label_show_value:t},a))}
                              </div>
                            `:""}
                      </div>
                    </div>

                    <!-- Expand/Collapse Button -->
                    <div style="display:flex; justify-content:center; margin-top: 12px;">
                      <ha-button
                        @click=${t=>this._toggleEntityOptions(t,i)}
                        style="--mdc-theme-primary: var(--secondary-text-color); background: transparent;"
                      >
                        <span style="display:inline-flex; align-items:center; gap:6px;">
                          <ha-icon
                            icon="mdi:chevron-down"
                            class="entity-toggle-btn"
                            style="--mdc-icon-size:20px;"
                          ></ha-icon>
                          <span
                            >${(0,y.kg)("editor.graphs.entity.expand_options",w,"Expand Options")}</span
                          >
                        </span>
                      </ha-button>
                    </div>
                  </div>
                </div>
              `}))||""}
            ${0===((null===(s=x.entities)||void 0===s?void 0:s.length)||0)?r.qy`
                  <div
                    style="
                  text-align: center; 
                  padding: 40px 20px; 
                  color: var(--secondary-text-color); 
                  background: var(--primary-background-color); 
                  border-radius: var(--uc-r-8, 8px); 
                  border: 2px dashed var(--divider-color);
                "
                  >
                    <ha-icon
                      icon="mdi:chart-line"
                      style="font-size: 48px; margin-bottom: 12px; opacity: 0.5;"
                    ></ha-icon>
                    <div style="font-size: 16px; margin-bottom: 4px; font-weight: 500;">
                      ${(0,y.kg)("editor.graphs.data_sources.no_entities",w,"No entities added")}
                    </div>
                    <div style="font-size: 14px; opacity: 0.7;">
                      ${(0,y.kg)("editor.graphs.data_sources.add_first_entity",w,"Add your first entity to create a chart")}
                    </div>
                  </div>
                `:""}

            <ha-button
              @click=${()=>this._addEntity(x,a)}
              style="
                margin-top: 8px; 
                width: 100%;
                --mdc-theme-primary: var(--primary-color);
                --mdc-button-outline-color: var(--primary-color);
              "
            >
              <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
              ${(0,y.kg)("editor.graphs.data_sources.add_entity",w,"Add Entity")}
            </ha-button>
          </div>
        </div>

        <!-- Display Options Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-12, 12px); padding: 20px; margin-bottom: 20px; border: 1px solid rgba(var(--rgb-primary-color), 0.12); width: 100%; max-width: 100%; box-sizing: border-box; overflow: visible;"
        >
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;"
          >
            <ha-icon icon="mdi:cog" style="color: var(--primary-color);"></ha-icon>
            ${(0,y.kg)("editor.graphs.display.title",w,"Display Options")}
          </div>

          <div
            style="display: flex; flex-direction: column; gap: 16px; box-sizing: border-box; width: 100%; overflow: visible;"
          >
            <!-- Show Graph Title Toggle -->
            ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_title",w,"Show Graph Title"),!1!==x.show_title,t=>a({show_title:t}))}

            <!-- Show Graph Value Toggle -->
            ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_value",w,"Show Graph Value"),!1!==x.show_entity_value,t=>a({show_entity_value:t}))}

            <!-- Chart Title -->
            ${!1!==x.show_title?r.qy`<div>
                  <label
                    style="display: block; font-size: 14px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 6px;"
                  >
                    ${(0,y.kg)("editor.graphs.display.chart_title",w,"Chart Title")}
                  </label>
                  <input
                    type="text"
                    .value=${x.title||""}
                    placeholder="${(0,y.kg)("editor.graphs.display.chart_title_placeholder",w,"Enter chart title")}"
                    @input=${t=>{const e=t.target;a({title:e.value})}}
                    style="
                      width: 100%;
                      padding: 10px 12px;
                      border: 1px solid var(--divider-color);
                      border-radius: var(--uc-r-6, 6px);
                      background: var(--secondary-background-color);
                      color: var(--primary-text-color);
                      font-size: 14px;
                      transition: border-color 0.2s ease;
                      box-sizing: border-box;
                    "
                  />
                </div>`:""}

            <!-- Title Font Size -->
            ${!1!==x.show_title?this.renderSliderField((0,y.kg)("editor.graphs.display.title_font_size",w,"Title Font Size"),"",null!==(l=x.title_font_size)&&void 0!==l?l:12,12,8,32,1,t=>a({title_font_size:t}),"px"):""}

            <!-- Value Font Size -->
            ${!1!==x.show_entity_value?this.renderSliderField((0,y.kg)("editor.graphs.display.value_font_size",w,"Value Font Size"),"",null!==(d=x.value_font_size)&&void 0!==d?d:16,16,10,48,1,t=>a({value_font_size:t}),"px"):""}

            <!-- Time Period (History Mode Only) -->
            ${"forecast"!==x.data_source?this.renderFieldSection((0,y.kg)("editor.graphs.display.time_period",w,"Time Period"),(0,y.kg)("editor.graphs.display.time_period_desc",w,"How much historical data to show."),e,{time_period:x.time_period},[this.selectField("time_period",this.getTimePeriodOptions(w,x.data_source))],t=>{const i=t.detail.value.time_period;if(i===x.time_period)return;a({time_period:i}),delete this._historyData[x.id],delete this._historyError[x.id],delete this._historyLoading[x.id],delete this._deferredHistoryScheduled[x.id];const r=Object.assign(Object.assign({},x),{time_period:i});this._loadHistoryData(r,e),this._triggerHistoryLoad(r,e),this.requestUpdate(),setTimeout(()=>{this.triggerPreviewUpdate()},50)}):""}

            <!-- Forecast Info (Forecast Mode Only) -->
            ${"forecast"===x.data_source?r.qy`<div
                    style="padding: 12px; background: rgba(var(--rgb-primary-color), 0.08); border-radius: var(--uc-r-8, 8px); border-left: 3px solid var(--primary-color); margin-bottom: 16px;"
                  >
                    <div
                      style="font-size: 13px; color: var(--primary-text-color); font-weight: 500;"
                    >
                      ${(0,y.kg)("editor.graphs.forecast_info.title",w,"Forecast Display")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;"
                    >
                      ${(0,y.kg)("editor.graphs.forecast_info.desc",w,"Forecasts display all available data from your weather service. The forecast type (hourly/daily) determines the time range shown.")}
                    </div>
                  </div>

                  <!-- Forecast Display Limit Controls -->
                  <div
                    style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;"
                  >
                    <div>
                      <label
                        style="font-size: 13px; color: var(--primary-text-color); display: block; margin-bottom: 6px;"
                      >
                        ${(0,y.kg)("editor.graphs.forecast_limit.hours",w,"Limit Hours")}
                      </label>
                      <ha-textfield
                        type="number"
                        min="0"
                        max="168"
                        .value=${String(null!==(c=x.forecast_display_hours)&&void 0!==c?c:0)}
                        @change=${t=>{const i=t.target,r=parseInt(i.value)||0;a({forecast_display_hours:r}),delete this._historyData[x.id],delete this._deferredHistoryScheduled[x.id],delete this._historyLoading[x.id];try{const t=this._getCacheStore();delete t[this._makeCacheKey(x)],this._persistCacheStore(t)}catch(t){}const o=Object.assign(Object.assign({},x),{forecast_display_hours:r});this._loadHistoryData(o,e),this.requestUpdate(),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                        style="width: 100%;"
                        placeholder="0"
                        helper="${(0,y.kg)("editor.graphs.forecast_limit.hours_desc",w,"0 = show all")}"
                      ></ha-textfield>
                    </div>
                    <div>
                      <label
                        style="font-size: 13px; color: var(--primary-text-color); display: block; margin-bottom: 6px;"
                      >
                        ${(0,y.kg)("editor.graphs.forecast_limit.days",w,"Limit Days")}
                      </label>
                      <ha-textfield
                        type="number"
                        min="0"
                        max="14"
                        .value=${String(null!==(p=x.forecast_display_days)&&void 0!==p?p:0)}
                        @change=${t=>{const i=t.target,r=parseInt(i.value)||0;a({forecast_display_days:r}),delete this._historyData[x.id],delete this._deferredHistoryScheduled[x.id],delete this._historyLoading[x.id];try{const t=this._getCacheStore();delete t[this._makeCacheKey(x)],this._persistCacheStore(t)}catch(t){}const o=Object.assign(Object.assign({},x),{forecast_display_days:r});this._loadHistoryData(o,e),this.requestUpdate(),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                        style="width: 100%;"
                        placeholder="0"
                        helper="${(0,y.kg)("editor.graphs.forecast_limit.days_desc",w,"Days override hours")}"
                      ></ha-textfield>
                    </div>
                  </div>`:""}

            <!-- Normalize Values Toggle (only show when multiple entities) -->
            ${((null===(u=x.entities)||void 0===u?void 0:u.filter(t=>"forecast"===x.data_source?t.forecast_attribute:t.entity).length)||0)>1?r.qy`
                  <div style="margin-bottom: 16px;">
                    ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.normalize_values",w,"Normalize values to same scale"),x.normalize_values||!1,t=>a({normalize_values:t}))}
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; margin-left: 40px;"
                    >
                      ${(0,y.kg)("editor.graphs.display.normalize_desc",w,"Useful when comparing entities with different units (e.g., % vs miles)")}
                    </div>
                  </div>
                `:""}

            <!-- Fixed Y-Axis Scale -->
            ${["line","bar"].includes(x.chart_type)?r.qy`
                  <div style="margin-bottom: 16px;">
                    ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.use_fixed_y_axis",w,"Use Fixed Y-Axis Scale"),x.use_fixed_y_axis||!1,t=>{a({use_fixed_y_axis:t}),delete this._historyData[x.id],setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; margin-left: 40px;"
                    >
                      ${(0,y.kg)("editor.graphs.display.use_fixed_y_axis_desc",w,"Set fixed min/max values instead of auto-scaling. Useful for consistent scales across multiple graphs or time periods.")}
                    </div>
                  </div>
                `:""}
            ${x.use_fixed_y_axis&&["line","bar"].includes(x.chart_type)?r.qy`
                  <div style="margin-top: 12px; margin-bottom: 16px;">
                    <!-- Min Value -->
                    <div style="margin-bottom: 16px;">
                      <label
                        style="display: block; font-size: 14px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 6px;"
                      >
                        ${(0,y.kg)("editor.graphs.display.y_axis_min",w,"Minimum Value")}
                      </label>
                      <div
                        style="display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center;"
                      >
                        <input
                          type="number"
                          step="any"
                          .value=${String(null!==(g=x.y_axis_min)&&void 0!==g?g:0)}
                          @input=${t=>{const e=t.target,i=""===e.value?void 0:parseFloat(e.value);a({y_axis_min:i}),delete this._historyData[x.id],setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                          placeholder="0"
                          style="
                            width: 100%;
                            padding: 10px 12px;
                            border: 1px solid var(--divider-color);
                            border-radius: var(--uc-r-6, 6px);
                            background: var(--secondary-background-color);
                            color: var(--primary-text-color);
                            font-size: 14px;
                            transition: border-color 0.2s ease;
                            box-sizing: border-box;
                          "
                        />
                        <button
                          @click=${()=>{a({y_axis_min:0}),delete this._historyData[x.id],setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                          title="${(0,y.kg)("editor.fields.reset_default_value",w,"Reset to default ({value})").replace("{value}","0")}"
                          style="
                            width: 32px;
                            height: 32px;
                            padding: 0;
                            border: 1px solid var(--divider-color);
                            border-radius: var(--uc-r-4, 4px);
                            background: var(--secondary-background-color);
                            color: var(--primary-text-color);
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.2s ease;
                            flex-shrink: 0;
                          "
                          @mouseenter=${t=>{const e=t.target;e.style.background="var(--primary-color)",e.style.color="var(--text-primary-color)",e.style.borderColor="var(--primary-color)"}}
                          @mouseleave=${t=>{const e=t.target;e.style.background="var(--secondary-background-color)",e.style.color="var(--primary-text-color)",e.style.borderColor="var(--divider-color)"}}
                        >
                          <ha-icon icon="mdi:refresh" style="font-size: 18px;"></ha-icon>
                        </button>
                      </div>
                    </div>

                    <!-- Max Value -->
                    <div>
                      <label
                        style="display: block; font-size: 14px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 6px;"
                      >
                        ${(0,y.kg)("editor.graphs.display.y_axis_max",w,"Maximum Value")}
                      </label>
                      <div
                        style="display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center;"
                      >
                        <input
                          type="number"
                          step="any"
                          .value=${String(null!==(m=x.y_axis_max)&&void 0!==m?m:100)}
                          @input=${t=>{const e=t.target,i=""===e.value?void 0:parseFloat(e.value);a({y_axis_max:i}),delete this._historyData[x.id],setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                          placeholder="100"
                          style="
                            width: 100%;
                            padding: 10px 12px;
                            border: 1px solid var(--divider-color);
                            border-radius: var(--uc-r-6, 6px);
                            background: var(--secondary-background-color);
                            color: var(--primary-text-color);
                            font-size: 14px;
                            transition: border-color 0.2s ease;
                            box-sizing: border-box;
                          "
                        />
                        <button
                          @click=${()=>{a({y_axis_max:100}),delete this._historyData[x.id],setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                          title="${(0,y.kg)("editor.fields.reset_default_value",w,"Reset to default ({value})").replace("{value}","100")}"
                          style="
                            width: 32px;
                            height: 32px;
                            padding: 0;
                            border: 1px solid var(--divider-color);
                            border-radius: var(--uc-r-4, 4px);
                            background: var(--secondary-background-color);
                            color: var(--primary-text-color);
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.2s ease;
                            flex-shrink: 0;
                          "
                          @mouseenter=${t=>{const e=t.target;e.style.background="var(--primary-color)",e.style.color="var(--text-primary-color)",e.style.borderColor="var(--primary-color)"}}
                          @mouseleave=${t=>{const e=t.target;e.style.background="var(--secondary-background-color)",e.style.color="var(--primary-text-color)",e.style.borderColor="var(--divider-color)"}}
                        >
                          <ha-icon icon="mdi:refresh" style="font-size: 18px;"></ha-icon>
                        </button>
                      </div>
                    </div>
                  </div>
                `:""}

            <!-- Chart Height -->
            ${this.renderSliderField((0,y.kg)("editor.graphs.display.chart_height",w,"Chart Height"),"",null!==(_=x.chart_height)&&void 0!==_?_:345,345,80,400,5,t=>a({chart_height:t}),"px")}

            <!-- Chart Width (%) -->
            ${this.renderSliderField((0,y.kg)("editor.graphs.display.chart_width",w,"Chart Width (%)"),(0,y.kg)("editor.graphs.display.chart_width_desc",w,"Percentage of the available module width. Alignment controls placement."),null!==(v=x.chart_width_percent)&&void 0!==v?v:100,100,10,100,1,t=>a({chart_width_percent:t}),"%")}
            ${this.renderFieldSection((0,y.kg)("editor.graphs.display.info_position",w,"Info Position"),(0,y.kg)("editor.graphs.display.info_position_desc",w,"Position of the overlay showing the name/value."),e,{info_position:x.info_position||"top_left"},[this.selectField("info_position",[{value:"top_left",label:(0,y.kg)("editor.graphs.position.top_left",w,"Top Left")},{value:"top_right",label:(0,y.kg)("editor.graphs.position.top_right",w,"Top Right")},{value:"bottom_left",label:(0,y.kg)("editor.graphs.position.bottom_left",w,"Bottom Left")},{value:"bottom_right",label:(0,y.kg)("editor.graphs.position.bottom_right",w,"Bottom Right")},{value:"middle",label:(0,y.kg)("editor.graphs.position.middle",w,"Middle")}])],t=>{const e=t.detail.value.info_position;e!==(x.info_position||"top_left")&&(a({info_position:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50))})}

            <!-- Legend Position -->
            ${!1!==x.show_legend?this.renderFieldSection((0,y.kg)("editor.graphs.display.legend_position",w,"Legend Position"),(0,y.kg)("editor.graphs.display.legend_position_desc",w,"Where to place the legend when enabled."),e,{legend_position:x.legend_position||"bottom_left"},[this.selectField("legend_position",[{value:"bottom_left",label:(0,y.kg)("editor.graphs.position.bottom_left",w,"Bottom Left")},{value:"bottom_right",label:(0,y.kg)("editor.graphs.position.bottom_right",w,"Bottom Right")},{value:"top_left",label:(0,y.kg)("editor.graphs.position.top_left",w,"Top Left")},{value:"top_right",label:(0,y.kg)("editor.graphs.position.top_right",w,"Top Right")}])],t=>{const e=t.detail.value.legend_position;e!==(x.legend_position||"bottom_left")&&(a({legend_position:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50))}):""}

            <!-- Chart Alignment -->
            ${this.renderFieldSection((0,y.kg)("editor.graphs.display.chart_alignment",w,"Chart Alignment"),(0,y.kg)("editor.graphs.display.chart_alignment_desc",w,"Alignment of the chart within its container."),e,{chart_alignment:x.chart_alignment||"center"},[this.selectField("chart_alignment",[{value:"left",label:(0,y.kg)("editor.graphs.position.left",w,"Left")},{value:"center",label:(0,y.kg)("editor.graphs.position.center",w,"Center")},{value:"right",label:(0,y.kg)("editor.graphs.position.right",w,"Right")}])],t=>{const e=t.detail.value.chart_alignment;e!==(x.chart_alignment||"center")&&(a({chart_alignment:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50))})}

            <!-- Background Color -->
            <div style="position: relative; overflow: visible;">
              <label
                style="display: block; font-size: 14px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 6px;"
              >
                ${(0,y.kg)("editor.graphs.display.background_color",w,"Background Color")}
              </label>
              <ultra-color-picker
                .value=${x.background_color||"transparent"}
                @value-changed=${t=>{a({background_color:t.detail.value})}}
                style="width: 100%; height: 40px;"
              ></ultra-color-picker>
            </div>

            <!-- Bar Display Limit (Only for Bar Charts) -->
            ${"bar"===x.chart_type?this.renderSliderField((0,y.kg)("editor.graphs.display.bar_display_limit",w,"Max Bars to Display"),(0,y.kg)("editor.graphs.display.bar_display_limit_desc",w,"0 = Unlimited"),null!==(f=x.bar_display_limit)&&void 0!==f?f:0,0,0,100,1,t=>a({bar_display_limit:t}),""):""}

            <!-- Chart Options -->
            <label
              style="display: block; font-size: 14px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 8px;"
              >${(0,y.kg)("editor.graphs.display.chart_options",w,"Chart Options")}</label
            >
            <div
              style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;"
            >
              <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_legend",w,"Show Legend"),!1!==x.show_legend,t=>a({show_legend:t}))}
              </div>
              ${"line"===x.chart_type?r.qy`
                    <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                      ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_grid",w,"Show Grid"),!1!==x.show_grid,t=>a({show_grid:t}))}
                    </div>
                  `:""}
              ${"line"===x.chart_type&&!1!==x.show_grid?r.qy`
                    <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                      ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_grid_values",w,"Show Grid Values"),!1!==x.show_grid_values,t=>a({show_grid_values:t}))}
                    </div>
                  `:""}
              ${"line"===x.chart_type?r.qy`
                    <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                      ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_time_intervals",w,"Show Time Intervals"),!0===x.show_time_intervals,t=>a({show_time_intervals:t}))}
                    </div>
                  `:""}
              ${"line"===x.chart_type?r.qy`
                    <div style="padding: 8px;">
                      <div style="font-size: 0.85rem; font-weight: 500; margin-bottom: 6px; color: var(--primary-text-color);">
                        ${(0,y.kg)("editor.graphs.display.chart_layout",w,"Chart Layout")}
                      </div>
                      <div style="display: flex; gap: 6px;">
                        <button
                          type="button"
                          style="
                            flex: 1;
                            padding: 8px 12px;
                            border-radius: var(--uc-r-8, 8px);
                            border: 1px solid ${"full"!==x.chart_layout?"var(--primary-color)":"var(--divider-color)"};
                            background: ${"full"!==x.chart_layout?"rgba(var(--rgb-primary-color, 3,169,244), 0.15)":"var(--secondary-background-color, transparent)"};
                            color: var(--primary-text-color);
                            cursor: pointer;
                            font-size: 0.82rem;
                            font-weight: 500;
                          "
                          @click=${t=>{a({chart_layout:"default"}),t.target.dispatchEvent(new CustomEvent("uc-optimize-card-settings",{bubbles:!0,composed:!0,detail:{card_padding:16,card_overflow:void 0}}))}}
                        >Default</button>
                        <button
                          type="button"
                          style="
                            flex: 1;
                            padding: 8px 12px;
                            border-radius: var(--uc-r-8, 8px);
                            border: 1px solid ${"full"===x.chart_layout?"var(--primary-color)":"var(--divider-color)"};
                            background: ${"full"===x.chart_layout?"rgba(var(--rgb-primary-color, 3,169,244), 0.15)":"var(--secondary-background-color, transparent)"};
                            color: var(--primary-text-color);
                            cursor: pointer;
                            font-size: 0.82rem;
                            font-weight: 500;
                          "
                          @click=${t=>{a({chart_layout:"full"}),t.target.dispatchEvent(new CustomEvent("uc-optimize-card-settings",{bubbles:!0,composed:!0,detail:{card_padding:0,card_overflow:"hidden"}}))}}
                        >Full</button>
                      </div>
                    </div>
                  `:""}
              ${["pie","donut"].includes(x.chart_type)?r.qy`
                    <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                      ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.add_slice_gap",w,"Add Slice Gap"),Number(x.slice_gap||0)>0,t=>{const e=(x.entities||[]).filter(t=>null==t?void 0:t.entity).length,i=Math.max(2,Math.min(4,Math.round(360/Math.max(30*e,1))));a({slice_gap:t?i:0})})}
                    </div>
                  `:""}
              ${"line"===x.chart_type?r.qy`
                    <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                      ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.smooth_lines",w,"Smooth Lines"),!1!==x.smooth_curves,t=>a({smooth_curves:t}))}
                    </div>
                  `:""}
              ${"line"===x.chart_type?r.qy`
                    <div style="padding:8px; border-radius:var(--uc-r-6, 6px);">
                      ${this._renderInlineToggle(e,(0,y.kg)("editor.graphs.display.show_tooltips",w,"Show Tooltips"),!1!==x.show_tooltips,t=>a({show_tooltips:t}))}
                    </div>
                  `:""}
            </div>
          </div>
        </div>

        <!-- Template Mode (wrapped in a settings-section box so the title,
             help button, toggle and description sit inside one container — same
             pattern as bar/spinbox/camera/etc. Title rendered once on the left
             of the .switch-container row; the toggle's own label is suppressed. -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 16px; margin-bottom: 32px;"
        >
          <div
            class="switch-container"
            style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;"
          >
            <div
              class="switch-label-row"
              style="display:flex;align-items:center;gap:8px;"
            >
              <span
                class="switch-label"
                style="font-size:16px;font-weight:600;white-space:nowrap;"
              >
                ${(0,y.kg)("editor.graphs.unified_template.toggle",w,"Template Mode")}
              </span>
              <button
                type="button"
                class="help-btn"
                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                title="${(0,y.kg)("editor.graphs.unified_template.cheatsheet",w,"Template cheatsheet")}"
                @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"graphs"}}))}}
              >
                <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
              </button>
            </div>
            ${this.renderUcForm(e,{unified_template_mode:x.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>a({unified_template_mode:t.detail.value.unified_template_mode}))}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; line-height: 1.5;">
            ${(0,y.kg)("editor.graphs.unified_template.desc",w,"Optional JSON: colors (array), global_color, fill_area, pie_fill.")}
          </div>
          ${x.unified_template_mode?r.qy`
                <div
                  style="margin-top: 12px;"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                >
                  <ultra-template-editor
                    .hass=${e}
                    .value=${x.unified_template||""}
                    .placeholder=${'{\n  "colors": ["#4CAF50", "#FFC107", "#F44336"],\n  "fill_area": true\n}'}
                    .minHeight=${120}
                    .maxHeight=${360}
                    @value-changed=${t=>a({unified_template:t.detail.value})}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(x.unified_template,b,w)}
                </div>
              `:""}
        </div>
      </div>
    `}renderActionsTab(t,e,i,r){const a=t;return c.A.render(a,e,t=>r(t))}renderPreview(t,e,i,a){var d,c,p,h,g,_,v,f,b,x,w;const $=t,k=(null===(d=null==e?void 0:e.locale)||void 0===d?void 0:d.language)||"en",S=$,C=$.design||{};let T,z,D,M;if($.unified_template_mode&&$.unified_template&&(!this._templateService&&e?this._templateService=new o.I(e):this._templateService&&e&&this._templateService.updateHass(e),e)){e.__uvc_template_strings||(e.__uvc_template_strings={});const t=(0,l.KD)($.unified_template,e,i),r=this._hashString(t),a=`unified_graphs_${$.id}_${r}`;if(this._templateService){const r=(null===(p=null===(c=$.entities)||void 0===c?void 0:c.find(t=>t.is_primary&&t.entity))||void 0===p?void 0:p.entity)||(null===(g=null===(h=$.entities)||void 0===h?void 0:h.find(t=>t.entity))||void 0===g?void 0:g.entity)||"",o=($.entities||[]).filter(t=>"forecast"===$.data_source?t.forecast_attribute:t.entity).map(t=>("forecast"===$.data_source?$.forecast_entity:t.entity)||"").filter(t=>t),s=o.length>1?(0,n.wI)(o,e,$.entities):(0,n.pL)(r,e,{entities:$.entities,chart_type:$.chart_type}),l=o.length>1?(0,n.Qq)(o,e):(0,n.jh)(r,e);this._templateService.subscribeToTemplate(t,a,()=>{this.triggerPreviewUpdate()},s,i,l)}const o=null===(_=e.__uvc_template_strings)||void 0===_?void 0:_[a];if(o&&""!==String(o).trim()){const t=(0,s.cv)(o);(0,s.HD)(t)||(this._templateResults[$.id]=t,t.colors&&Array.isArray(t.colors)&&(T=t.colors),t.global_color&&(z=t.global_color),void 0!==t.fill_area&&(D=t.fill_area),void 0!==t.pie_fill&&(M="number"==typeof t.pie_fill?t.pie_fill:parseFloat(String(t.pie_fill))))}}this._loadHistoryData($,e);const F=C.color||S.color||"var(--primary-text-color)",A=(()=>{const t=C.font_size||S.font_size;if(t&&"string"==typeof t&&""!==t.trim())return/[a-zA-Z%]/.test(t)?t:`${t}px`})(),E=C.font_family||S.font_family||void 0,L=C.font_weight||S.font_weight||void 0,O=C.text_transform||S.text_transform||void 0,I=C.font_style||S.font_style||void 0,P=C.letter_spacing||S.letter_spacing||void 0,H=C.line_height||S.line_height||void 0,U=(()=>{const t=C.text_shadow_h||S.text_shadow_h,e=C.text_shadow_v||S.text_shadow_v,i=C.text_shadow_blur||S.text_shadow_blur,r=C.text_shadow_color||S.text_shadow_color;if(t||e||i||r)return`${t||"0px"} ${e||"0px"} ${i||"0px"} ${r||"rgba(0,0,0,0.2)"}`})(),j=(C.background_color||S.background_color,(t={})=>{const e=[],i=t.color||F;i&&e.push(`color: ${i}`);const r=t.fontSize||A;return r&&e.push(`font-size: ${r}`),E&&e.push(`font-family: ${E}`),L&&e.push(`font-weight: ${L}`),O&&e.push(`text-transform: ${O}`),I&&e.push(`font-style: ${I}`),P&&e.push(`letter-spacing: ${P}`),H&&e.push(`line-height: ${H}`),U&&e.push(`text-shadow: ${U}`),e.join("; ")}),q=C.background_color||S.background_color||"transparent",W=this.getBackgroundImageCSS(Object.assign(Object.assign({},S),C),e),N=(0,u.U9)({color:q,image:"none"!==W?W:void 0,imageSize:C.background_size||S.background_size||"cover",imagePosition:C.background_position||S.background_position||"center",imageRepeat:C.background_repeat||S.background_repeat||"no-repeat",fallback:"transparent"}),B=($.chart_layout,Object.assign(Object.assign({padding:C.padding_top||C.padding_bottom||C.padding_left||C.padding_right||S.padding_top||S.padding_bottom||S.padding_left||S.padding_right?`${this.addPixelUnit(C.padding_top||S.padding_top)||"0px"} ${this.addPixelUnit(C.padding_right||S.padding_right)||"0px"} ${this.addPixelUnit(C.padding_bottom||S.padding_bottom)||"0px"} ${this.addPixelUnit(C.padding_left||S.padding_left)||"0px"}`:"0",margin:C.margin_top||C.margin_bottom||C.margin_left||C.margin_right||S.margin_top||S.margin_bottom||S.margin_left||S.margin_right?`${C.margin_top||S.margin_top||"0px"} ${C.margin_right||S.margin_right||"0px"} ${C.margin_bottom||S.margin_bottom||"0px"} ${C.margin_left||S.margin_left||"0px"}`:"0"},N.styles),{backdropFilter:C.backdrop_filter||S.backdrop_filter||"",border:C.border_style?`${C.border_width||"1px"} ${C.border_style} ${C.border_color||"var(--divider-color)"}`:this.getBorderCSS(S),borderRadius:this.addPixelUnit(C.border_radius||S.border_radius)||"0",width:C.width||S.width||"100%",height:C.height||S.height||"",maxWidth:C.max_width||S.max_width||"",maxHeight:C.max_height||S.max_height||"",minWidth:C.min_width||S.min_width||"",minHeight:C.min_height||S.min_height||"",overflow:C.overflow||S.overflow||"",clipPath:C.clip_path||S.clip_path||"",position:C.position||S.position||"",top:C.top||S.top||"",right:C.right||S.right||"",bottom:C.bottom||S.bottom||"",left:C.left||S.left||"",zIndex:C.z_index||S.z_index||"",boxShadow:C.box_shadow_h||C.box_shadow_v||C.box_shadow_blur||C.box_shadow_spread||C.box_shadow_color?`${C.box_shadow_h||"0px"} ${C.box_shadow_v||"0px"} ${C.box_shadow_blur||"0px"} ${C.box_shadow_spread||"0px"} ${C.box_shadow_color||"rgba(0,0,0,0.2)"}`:"",boxSizing:"border-box",display:"block"}));"line"===$.chart_type&&(B.padding="0"),"full"===$.chart_layout&&(B.margin="0",B.padding="0",B.borderRadius="0");const R=$.entities&&$.entities.length>0&&("forecast"===$.data_source?$.entities.some(t=>t.forecast_attribute):$.entities.some(t=>t.entity));if(!$.chart_type)return this.renderGradientErrorState((0,y.kg)("editor.graphs.error_no_chart_type",k,"Select Chart Type"),(0,y.kg)("editor.graphs.error_no_chart_type_desc",k,"Choose a chart type in the General tab"),"mdi:chart-line");if(!R){const t="forecast"===$.data_source?"Configure forecast attributes in the General tab":"Add entities to display chart";return this.renderGradientErrorState((0,y.kg)("editor.graphs.error_no_entities",k,"Configure Entities"),t,"mdi:chart-line")}const G=$.entities.find(t=>t.is_primary&&t.entity)||$.entities.find(t=>t.entity),J=G?e.states[G.entity]:void 0,V=$.title||(null==G?void 0:G.name)||(null===(v=null==J?void 0:J.attributes)||void 0===v?void 0:v.friendly_name)||"Chart Title",K=((null==G?void 0:G.attribute)?null===(f=null==J?void 0:J.attributes)||void 0===f?void 0:f.unit_of_measurement:null===(b=null==J?void 0:J.attributes)||void 0===b?void 0:b.unit_of_measurement)||"",Q=G?G.attribute?null===(x=null==J?void 0:J.attributes)||void 0===x?void 0:x[G.attribute]:null==J?void 0:J.state:void 0,Z="number"==typeof Q?Q:parseFloat(Q);let Y=this._prepareSimpleChartData($,e,T,z,D);"forecast"===$.data_source&&this._historyData[$.id]&&(Y=this._historyData[$.id].datasets.map((t,e)=>{let i;return i=T&&T[e]?this._formatColor(T[e]):z?this._formatColor(z):t.color,{name:t.name,value:t.values[t.values.length-1]||0,color:i,unit:t.unit,entityId:t.entityId}}));const X=$.info_position||"top_left",tt="full"===$.chart_layout,et="line"!==$.chart_type||!1===$.show_grid||!1===$.show_grid_values||tt?"16px":"32px",it={top_left:`top:12px; left:${et}; text-align:left;`,top_right:"top:12px; right:16px; text-align:right;",bottom_left:`bottom:12px; left:${et}; text-align:left;`,bottom_right:"bottom:12px; right:16px; text-align:right;",middle:"top:50%; left:50%; transform: translate(-50%, -50%); text-align:center;"},rt=(()=>{if(!G||!J)return"";try{const t=void 0!==Q?String(Q):J.state;return(0,m.formatEntityState)(e,G.entity,{state:t,includeUnit:!0})}catch(t){return`${isNaN(Z)?"":Z}${K?` ${K}`:""}`}})(),at=!1!==$.show_display_name&&!1!==$.show_title,ot=!1!==$.show_entity_value,nt=["pie","donut"].includes($.chart_type)||!at&&!ot?r.qy``:r.qy`
          <div
            class="graph-header-info"
            style="
              position:absolute; 
              ${it[X]}; 
              pointer-events:none; 
              z-index:10;
              max-width: calc(100% - 32px);
              box-sizing: border-box;
              overflow: hidden;
              padding: 4px 8px;
              border-radius: var(--uc-r-6, 6px);
              background: rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(4px);
              -webkit-backdrop-filter: blur(4px);
            "
          >
            ${at?r.qy`<div
                  class="graph-title"
                  style="
                    ${j({fontSize:A||`${$.title_font_size||12}px`})}; 
                    font-weight: 600; 
                    ${C.text_align?`text-align:${C.text_align};`:""};
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  ${V}
                </div>`:""}
            ${ot?r.qy`<div
                  class="graph-value"
                  style="
                    ${j({fontSize:A||`${$.value_font_size||16}px`})}; 
                    line-height: 1.1; 
                    font-weight: 600; 
                    margin-top: 6px; 
                    ${C.text_align?`text-align:${C.text_align};`:""};
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  ${rt}
                </div>`:""}
          </div>
        `,st=this._historyData[$.id],lt=!0===this._historyLoading[$.id]&&!st,dt=(this.getBackgroundImageCSS(Object.assign(Object.assign({},S),C),e),$.chart_alignment||"center"),ct="left"===dt?"flex-start":"right"===dt?"flex-end":"center",pt=this._resolveChartWidth($),ht=r.qy`
      <div
        class="uc-graphs-module"
        style="
          ${this.styleObjectToCss(B)};
          position: relative;
          overflow: hidden;
          contain: layout style;
        "
      >
        <uc-preview-container
          .alignment=${$.chart_alignment||"center"}
          .height=${"number"==typeof $.chart_height?$.chart_height:parseInt(String($.chart_height))||200}
        >
          <div
            style="
            display:flex; 
            width:100%; 
            height:100%;
            justify-content:${ct};
            overflow:hidden;
            box-sizing:border-box;
          "
          >
            <div
              style="
              width:${pt}; 
              max-width:100%;
              height:100%;
              position:relative;
              overflow:hidden;
              box-sizing:border-box;
            "
            >
              ${this._renderSimpleChart($,Y,e,(()=>{const t=$,e=$.design||{},i=e.color||t.color||"var(--primary-text-color)",r=[];return i&&r.push(`color: ${i}`),(e.font_size||t.font_size)&&r.push(`font-size: ${e.font_size||t.font_size}`),(e.font_family||t.font_family)&&r.push(`font-family: ${e.font_family||t.font_family}`),(e.font_weight||t.font_weight)&&r.push(`font-weight: ${e.font_weight||t.font_weight}`),(e.text_transform||t.text_transform)&&r.push(`text-transform: ${e.text_transform||t.text_transform}`),(e.font_style||t.font_style)&&r.push(`font-style: ${e.font_style||t.font_style}`),(e.letter_spacing||t.letter_spacing)&&r.push(`letter-spacing: ${e.letter_spacing||t.letter_spacing}`),(e.line_height||t.line_height)&&r.push(`line-height: ${e.line_height||t.line_height}`),r.join("; ")})(),dt,T,z,D,M)}
            </div>
          </div>
        </uc-preview-container>
        ${nt}
        ${!1!==$.show_legend?this._renderLegend(Y,$.legend_position||"bottom_left",j({})):""}
        ${lt?r.qy`<div
              style="
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: none;
                background: linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.18),
                  rgba(0,0,0,0.12)
                );
              "
            >
              <div
                style="
                  background: rgba(0,0,0,0.35);
                  backdrop-filter: blur(2px);
                  border: 1px solid var(--divider-color);
                  border-radius: var(--uc-r-10, 10px);
                  padding: 10px 14px;
                  display: inline-flex;
                  align-items: center;
                  gap: 10px;
                  color: var(--secondary-text-color);
                  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
                "
              >
                <ha-circular-progress active size="small"></ha-circular-progress>
                <span style="font-size: 13px;">Loading history…</span>
              </div>
            </div>`:""}
      </div>
    `,ut=(null===(w=$.design)||void 0===w||w.hover_effect,this.getHoverEffectClass(t)),gt=this.buildStyleString(this.buildDesignStyles(t,e));return this.wrapWithAnimation(this.hasActiveLink($)?r.qy`<div
          class="graphs-module-clickable ${ut}"
          style="${gt}; cursor: pointer; transition: all 0.2s ease; border-radius: var(--uc-r-4, 4px);"
          @click=${t=>this.handleClick(t,$,e)}
          @dblclick=${t=>this.handleDoubleClick(t,$,e)}
          @mousedown=${t=>this.handleMouseDown(t,$,e)}
          @mouseup=${t=>this.handleMouseUp(t,$,e)}
          @mouseleave=${t=>this.handleMouseLeave(t,$,e)}
          @touchstart=${t=>this.handleTouchStart(t,$,e)}
          @touchend=${t=>this.handleTouchEnd(t,$,e)}
        >
          ${ht}
        </div>`:r.qy`<div class="graphs-module-container ${ut}" style="${gt}">${ht}</div>`,t,e)}_prepareSimpleChartData(t,e,i,r,a){var o;const n=[];for(let s=0;s<t.entities.length;s++){const l=t.entities[s];if(!l.entity)continue;const d=e.states[l.entity];if(!d)continue;const c=l.attribute?d.attributes[l.attribute]:d.state,p=parseFloat(c);let h;h=i&&i[s]?this._formatColor(i[s]):r?this._formatColor(r):this._formatColor(l.color)||this._getDefaultColor(s);const u=void 0!==a?a:!0===l.fill_area;n.push({name:l.name||d.attributes.friendly_name||l.entity,value:isNaN(p)?0:p,color:h,unit:d.attributes.unit_of_measurement||"",lineWidth:null!==(o=l.line_width)&&void 0!==o?o:2,showPoints:!1!==l.show_points,fillArea:u,lineStyle:l.line_style||"solid",entityId:l.entity})}return n}_formatColor(t){if(!t)return this._getDefaultColor(0);if(Array.isArray(t)&&t.length>=3){const[e,i,r]=t;return isNaN(e)||isNaN(i)||isNaN(r)?this._getDefaultColor(0):`rgb(${Math.round(e)}, ${Math.round(i)}, ${Math.round(r)})`}return"string"==typeof t&&t.startsWith("#")||"string"==typeof t&&t.startsWith("rgb")?t:"string"!=typeof t||!t.startsWith("var(")&&"transparent"!==t?("string"==typeof t&&t.includes("NaN"),this._getDefaultColor(0)):t}_renderSimpleChart(t,e,i,a,o,n,s,l,d){const c="forecast"===t.data_source&&this._historyData[t.id];if(0===e.length&&!c)return r.qy` <div style="color: var(--secondary-text-color);">No data available</div> `;const p=("number"==typeof t.chart_height?t.chart_height:parseInt(String(t.chart_height))||345)-80;return["pie","donut"].includes(t.chart_type)?this._renderPieChart(t,e,p,a,i,o,n,s,d):["line","area"].includes(t.chart_type)?this._renderLineChart(t,e,p,i,n,s,l):this._renderBarChart(t,e,p,a,i,n,s)}_renderPieChart(t,e,i,a,o,n,s,l,d){let c=e.reduce((t,e)=>t+e.value,0),p=e;if(void 0!==d&&!isNaN(d)){const t=Math.max(0,Math.min(100,d))/100;p=e.map(e=>Object.assign(Object.assign({},e),{value:e.value*t})),c=p.reduce((t,e)=>t+e.value,0)}const h=c,u=Math.max(120,Math.min(i,260)),g=u/2,y="donut"===t.chart_type,_=Number(t.slice_gap)||0,v=y?Math.floor(.72*g):_>0?Math.max(2,Math.floor(.04*g)):0,f=g-v;let b=0;const x=p.map((t,e)=>{const i=h>0?b/h*360:0,r=i+(h>0?t.value/h*360:0);b+=t.value;let a=t.color;return s&&s[e]?a=this._formatColor(s[e]):l&&(a=this._formatColor(l)),{startDeg:i,endDeg:r,color:a,name:t.name,value:t.value,unit:t.unit,entityId:t.entityId}}),w="left"===n?"0 auto 0 0":"right"===n?"0 0 0 auto":"0 auto";return r.qy`
      <div
        style="
        display:block;
        width:${u}px;
        height:${u}px;
        margin:${w};
        overflow:hidden;
        box-sizing:border-box;
      "
      >
        <svg
          width="${u}"
          height="${u}"
          viewBox="${-g} ${-g} ${u} ${u}"
          style="display:block; overflow:visible;"
        >
          ${x.map(t=>{const e=((t,e,i,r)=>{const a=t=>t*Math.PI/180,o=Math.cos(a(i))*t,n=Math.sin(a(i))*t,s=Math.cos(a(r))*t,l=Math.sin(a(r))*t,d=r-i>180?1:0;return e<=0?`M0,0 L${o},${n} A${t},${t} 0 ${d} 1 ${s},${l} Z`:`M${o},${n} A${t},${t} 0 ${d} 1 ${s},${l} L${Math.cos(a(r))*e},${Math.sin(a(r))*e} A${e},${e} 0 ${d} 0 ${Math.cos(a(i))*e},${Math.sin(a(i))*e} Z`})(g,v,t.startDeg,t.endDeg);return r.JW`<path d="${e}" fill="${t.color}" stroke="none" />`})}
          ${_>0?(()=>{const t=t=>t*Math.PI/180,e=Math.max(2,Math.min(6,Math.round(.012*u)));return r.JW`${x.map(i=>{const a=Math.cos(t(i.startDeg)),o=Math.sin(t(i.startDeg)),n=a*(v>0?v:e),s=o*(v>0?v:e),l=a*g,d=o*g;return r.JW`<line x1="${n}" y1="${s}" x2="${l}" y2="${d}" stroke="${"var(--card-background-color)"}" stroke-width="${e}" stroke-linecap="butt" />`})}`})():""}
          ${""}
          ${x.map(e=>{const i=(e.startDeg+e.endDeg)/2,n=t=>t*Math.PI/180,s=y||v>0?v+.55*f:.55*g;let l=Math.cos(n(i))*s,d=Math.sin(n(i))*s;const c=.85*g;Math.abs(l)>c&&(l=Math.sign(l)*c),Math.abs(d)>c&&(d=Math.sign(d)*c);const p=e.endDeg-e.startDeg;let h=`${e.value}${e.unit||""}`;if(o&&e.entityId)try{h=(0,m.formatEntityState)(o,e.entityId,{state:e.value,includeUnit:!0})}catch(t){}const u=(t.entities||[]).find(t=>t&&t.entity===e.entityId),_=(!u||!1!==u.label_show_name)&&p>=15,b=!u||!1!==u.label_show_value,x=p>=10,w=e.name.length>14?e.name.substring(0,14)+"...":e.name,$=h.length>10?h.substring(0,10)+"...":h;return x?r.JW`<g transform="translate(${l}, ${d})" style="pointer-events:none;">
              ${_?r.JW`<text 
                text-anchor="middle" 
                dominant-baseline="middle"
                style="${a||""}; font-size:11px; font-weight:600; fill: currentColor;"
              >${w}</text>`:""}
              ${b?r.JW`<text 
                y="${_?14:0}" 
                text-anchor="middle" 
                dominant-baseline="middle"
                style="${a||""}; font-size:10px; fill: currentColor;"
              >${$}</text>`:""}
            </g>`:r.JW``})}
        </svg>
      </div>
    `}_renderLineChart(t,e,i,a,o,n,s){var l,d;const c=this._historyData[t.id];let p,h;this._historyError[t.id],this._historyLoading[t.id],c?(p=c.timePoints,h=c.datasets):(p=this._generateTimePoints(t.time_period),h=e.map((e,i)=>{t.entities[i];const r=e.value||0,a=new Array(p.length).fill(r);return{name:e.name,color:e.color,values:a,lineWidth:e.lineWidth,showPoints:e.showPoints,fillArea:e.fillArea,lineStyle:e.lineStyle,unit:e.unit||"",entityId:e.entityId}})),h=h.map((e,i)=>{var r,a,l;const d=null===(r=t.entities)||void 0===r?void 0:r[i];let c;c=o&&o[i]?this._formatColor(o[i]):n?this._formatColor(n):this._formatColor(null==d?void 0:d.color)||e.color||this._getDefaultColor(i);const p=void 0!==s?s:!0===(null==d?void 0:d.fill_area)||e.fillArea;return Object.assign(Object.assign({},e),{color:c,lineWidth:null!==(l=null!==(a=null==d?void 0:d.line_width)&&void 0!==a?a:e.lineWidth)&&void 0!==l?l:2,showPoints:!1!==(null==d?void 0:d.show_points),fillArea:p,lineStyle:(null==d?void 0:d.line_style)||e.lineStyle||"solid"})});let u,g,y=h;t.normalize_values&&(y=h.map(t=>{const e=Math.max(...t.values),i=Math.min(...t.values),r=e-i||1;return Object.assign(Object.assign({},t),{originalValues:t.values,values:t.values.map(t=>(t-i)/r*100),normalizedMin:i,normalizedMax:e})})),t.use_fixed_y_axis?(g=null!==(l=t.y_axis_min)&&void 0!==l?l:0,u=null!==(d=t.y_axis_max)&&void 0!==d?d:100,u<=g&&(u=g+1)):(u=Math.max(...y.flatMap(t=>t.values)),g=Math.min(...y.flatMap(t=>t.values)));const _=u-g,v=!1!==t.show_grid,f=!0===t.show_time_intervals,b=t;let x=(t.design||{}).background_color||b.background_color;x="transparent"===x?"var(--card-background-color)":x?this._formatColor(x):"var(--card-background-color, transparent)",Boolean(c&&"history"===c.source);const w="full"===t.chart_layout,$=!1!==t.show_grid_values&&v,k=w?2:$?28:10,S=w?2:5,C=w?2:12,T=300-k-S,z=100-C-(w?2:f?18:8),D=Math.max(1,Math.ceil(p.length/6));return r.qy`
      <div
        class="line-chart-container"
        style="
          width: 100%; 
          height: ${i}px; 
          position: relative; 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0;
          overflow: visible;
          contain: layout style;
        "
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 100"
          preserveAspectRatio="xMidYMid meet"
          style="
            display: block; 
            width: 100%; 
            height: 100%; 
            margin: 0; 
            padding: 0;
            overflow: visible;
          "
        >
          ${v?r.JW`${Array.from({length:4},(e,i)=>{const a=C+(i+1)/5*z,o=u-(i+1)/5*_,n=!1!==t.show_grid_values;return r.JW`
                  <line 
                    x1="${k}" 
                    y1="${a}" 
                    x2="${300-S}" 
                    y2="${a}" 
                    stroke="rgba(255,255,255,.08)" 
                    stroke-width="0.5"
                    vector-effect="non-scaling-stroke"
                  />
                  ${n?w?r.JW`
                          <rect x="${k}" y="${a-5}" width="22" height="8" rx="2" fill="rgba(0,0,0,0.45)" />
                          <text 
                            x="${k+2}" 
                            y="${a+1.5}" 
                            font-size="6" 
                            fill="var(--secondary-text-color)" 
                            opacity="0.85"
                            text-anchor="start"
                          >${Math.round(o)}</text>`:r.JW`<text 
                            x="${k-3}" 
                            y="${a+2}" 
                            font-size="7" 
                            fill="var(--secondary-text-color)" 
                            opacity="0.6"
                            text-anchor="end"
                          >${Math.round(o)}</text>`:""}
                `})}`:""}
          ${w&&v?r.JW`${p.map((t,e)=>{if(e%D!==0&&e!==p.length-1)return r.JW``;const i=p.length>1?k+e/(p.length-1)*T:k+T/2;return r.JW`<line 
                  x1="${i}" y1="${C}" 
                  x2="${i}" y2="${C+z}" 
                  stroke="rgba(255,255,255,.06)" 
                  stroke-width="0.5"
                  vector-effect="non-scaling-stroke"
                />`})}`:""}
          ${(()=>y.map(e=>{var i;const o=e.values.map((t,e)=>`${p.length>1?k+e/(p.length-1)*T:k+T/2},${_>0?C+(u-t)/_*z:C+z/2}`),n=(e=>{if(!t.smooth_curves)return e.map((t,e)=>{const[i,r]=t.split(",");return`${0===e?"M":"L"} ${i} ${r}`}).join(" ");if(e.length<2){const[t,i]=e[0].split(",");return`M ${t} ${i}`}let i="";const r=e.map(t=>{const[e,i]=t.split(",");return{x:parseFloat(e),y:parseFloat(i)}});i=`M ${r[0].x} ${r[0].y}`;for(let t=0;t<r.length-1;t++){const e=r[Math.max(0,t-1)],a=r[t],o=r[t+1],n=r[Math.min(r.length-1,t+2)],s=.5;i+=` C ${a.x+(o.x-e.x)/6*s} ${a.y+(o.y-e.y)/6*s}, ${o.x-(n.x-a.x)/6*s} ${o.y-(n.y-a.y)/6*s}, ${o.x} ${o.y}`}return i})(o),s=o[o.length-1].split(",")[0],l=o[0].split(",")[0],d=this._colorWithAlpha(e.color,.25),c="dashed"===e.lineStyle?"4 3":"dotted"===e.lineStyle?"1 3":"none",g=C+z;return r.JW`<g>
                ${!0===e.fillArea?r.JW`<path d="${n} L ${s} ${g} L ${l} ${g} Z" fill="${d}" stroke="none" />`:""}
                <path d="${n}" stroke="${e.color}" stroke-width="${null!==(i=e.lineWidth)&&void 0!==i?i:2}" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${c}" vector-effect="non-scaling-stroke" />
                ${!1!==e.showPoints?r.JW`${e.values.map((i,o)=>{const n=p.length>1?k+o/(p.length-1)*T:k+T/2,s=_>0?C+(u-i)/_*z:C+z/2,l="transparent"===x?"var(--card-background-color)":x,d=`point-${t.id}-${o}-${h.indexOf(e)}`;return r.JW`
                          <circle 
                            id="${d}"
                            cx="${n}" 
                            cy="${s}" 
                            r="3" 
                            fill="${l}" 
                            stroke="${e.color}" 
                            stroke-width="1.5"
                            vector-effect="non-scaling-stroke"
                            style="cursor: ${!1!==t.show_tooltips?"pointer":"default"};"
                            @mouseenter=${!1!==t.show_tooltips?r=>{const n=e.originalValues?e.originalValues[o]:i;let s=`${n}${e.unit||""}`;e.entityId&&(s=(0,m.formatEntityState)(a,e.entityId,{state:n,includeUnit:!0})),this._showTooltip(r,t.id,e.name,s,p[o])}:null}
                            @mouseleave=${!1!==t.show_tooltips?e=>this._hideTooltip(t.id,e):null}
                          >
                            ${!1!==t.show_tooltips?r.JW`
                              <animate 
                                attributeName="r" 
                                begin="mouseenter" 
                                dur="0.2s" 
                                from="3" 
                                to="5" 
                                fill="freeze" 
                              />
                              <animate 
                                attributeName="r" 
                                begin="mouseleave" 
                                dur="0.2s" 
                                from="5" 
                                to="3" 
                                fill="freeze" 
                              />
                            `:""}
                          </circle>
                        `})}`:""}
              </g>`}))()}
          ${f?r.JW`${p.map((t,e)=>{if(e%D!==0&&e!==p.length-1)return r.JW``;const i=p.length>1?k+e/(p.length-1)*T:k+T/2;if(w){const e=C+z-3,a=4*t.length+4;return r.JW`
                    <rect x="${i-a/2}" y="${e-5}" width="${a}" height="8" rx="2" fill="rgba(0,0,0,0.45)" />
                    <text
                      x="${i}"
                      y="${e+1.5}"
                      font-size="6"
                      fill="var(--secondary-text-color)"
                      opacity="0.85"
                      text-anchor="middle"
                    >${t}</text>`}const a=C+z+10;return r.JW`<text
                  x="${i}"
                  y="${a}"
                  font-size="7"
                  fill="var(--secondary-text-color)"
                  opacity="0.8"
                  text-anchor="middle"
                >${t}</text>`})}`:""}
        </svg>
      </div>
    `}_renderLegend(t,e,i){return r.qy`<div
      class="graph-legend"
      style="
        position:absolute; 
        ${{top_left:"top:8px; left:8px; justify-content:flex-start;",top_right:"top:8px; right:8px; justify-content:flex-end;",bottom_left:"bottom:8px; left:8px; justify-content:flex-start;",bottom_right:"bottom:8px; right:8px; justify-content:flex-end;"}[e]}; 
        display:flex; 
        gap:8px; 
        flex-wrap:wrap; 
        font-size:12px; 
        ${i||""}; 
        z-index:10;
        max-width: calc(100% - 16px);
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 4px 8px;
        border-radius: var(--uc-r-6, 6px);
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      "
    >
      ${t.map(t=>r.qy`<div
            style="
            display:flex; 
            align-items:center; 
            gap:4px;
            min-width: 0;
            flex-shrink: 1;
          "
          >
            <span
              style="
              width:10px; 
              height:10px; 
              background:${t.color}; 
              border-radius:var(--uc-r-2, 2px);
              flex-shrink: 0;
            "
            ></span>
            <span
              style="
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              min-width: 0;
            "
              >${t.name}</span
            >
          </div>`)}
    </div>`}_colorWithAlpha(t,e){if(!t)return`rgba(33, 150, 243, ${e})`;if(t.startsWith("#")){const i=t.replace("#",""),r=parseInt(3===i.length?i.split("").map(t=>t+t).join(""):i,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${255&r}, ${e})`}return t.startsWith("rgb(")?t.replace("rgb(","rgba(").replace(")",`, ${e})`):t}_renderBarChart(t,e,i,a,o,n,s){var l,d,c;const p=this._historyData[t.id];let h=[],u=[];if(p&&Array.isArray(p.timePoints)&&p.timePoints.length&&(h=p.timePoints,u=(p.datasets||[]).map((t,e)=>{let i;return i=n&&n[e]?this._formatColor(n[e]):s?this._formatColor(s):this._formatColor(t.color)||this._getDefaultColor(e),{name:t.name,color:i,values:Array.isArray(t.values)?t.values:[],unit:t.unit,entityId:t.entityId}})),0!==h.length&&0!==u.length||(h=this._generateTimePoints(t.time_period),u=(t.entities||[]).filter(e=>"forecast"===t.data_source?e.forecast_attribute:e.entity).map((i,r)=>{const a=e[r],o=a?a.value:0,l=new Array(h.length).fill(o);let d;return d=n&&n[r]?this._formatColor(n[r]):s?this._formatColor(s):this._formatColor(i.color)||this._getDefaultColor(r),{name:i.name||(null==a?void 0:a.name)||i.entity||this._getForecastAttributeLabel(i.forecast_attribute||""),color:d,values:l,unit:null==a?void 0:a.unit,entityId:(null==a?void 0:a.entityId)||i.entity||t.forecast_entity}})),0===h.length||0===u.length)return r.qy`<div style="color: var(--secondary-text-color);">No data available</div>`;let g=u;t.normalize_values&&u.length>1&&(g=u.map(t=>{const e=Math.max(...t.values),i=Math.min(...t.values),r=e-i||1;return Object.assign(Object.assign({},t),{originalValues:t.values,values:t.values.map(t=>(t-i)/r*100)})}));const y=g.flatMap(t=>t.values);let _,v;t.use_fixed_y_axis?(v=null!==(l=t.y_axis_min)&&void 0!==l?l:0,_=null!==(d=t.y_axis_max)&&void 0!==d?d:100,_<=v&&(_=v+1)):(_=y.length?Math.max(...y):0,v=y.length?Math.min(...y):0);const f=_-v||1,b=Math.max(40,i-28);let x;x=v>=0?b:_<=0?0:_*(b/f);const w=t.chart_alignment||"center",$="left"===w?"flex-start":"right"===w?"flex-end":"center",k=g.length,S=Math.max(12,Math.min(28,32-k)),C=Math.max(48,Math.round(S+Math.max(0,k-1)*S*.55)+12),T=(Math.max(C*h.length,120),!1!==t.show_tooltips),z=null!==(c=t.bar_display_limit)&&void 0!==c?c:0;let D=h,M=g;if(z>0&&h.length>z){const t=h.length-z;D=h.slice(t),M=g.map(e=>Object.assign(Object.assign({},e),{values:e.values.slice(t),originalValues:e.originalValues?e.originalValues.slice(t):void 0}))}const F=Math.max(C*D.length,120),A=!(t.info_position||"top_left").startsWith("top")||!1===t.show_display_name&&!1===t.show_entity_value?12:80,E=!1!==t.show_legend,L=t.legend_position||"bottom_left",O=E&&L.startsWith("bottom"),I=O?Math.ceil(k/2):0,P=O?Math.max(40,24+24*I):12,H=Math.max(40,b-A-P);return r.qy`
      <div
        class="bar-chart-container"
        style="
          width:100%;
          height:${i}px;
          display:flex;
          flex-direction:column;
          align-items:stretch;
          overflow:hidden;
          box-sizing:border-box;
          padding-top:${A}px;
          padding-bottom:${P}px;
        "
      >
        <div
          class="bar-chart-scroll"
          style="
            width:100%;
            max-width:100%;
            flex:1;
            overflow-x:auto;
            overflow-y:hidden;
            box-sizing:border-box;
            -webkit-overflow-scrolling:touch;
            scrollbar-width:thin;
            scrollbar-color:var(--primary-color) transparent;
          "
        >
          <div
            class="bar-chart-groups"
            style="
              position:relative;
              display:flex;
              align-items:flex-end;
              justify-content:${$};
              gap:12px;
              min-width:${F}px;
              width:fit-content;
              height:${H}px;
              padding:0 12px;
              box-sizing:border-box;
            "
          >
            ${D.map((e,i)=>r.qy`
                <div
                  class="bar-group"
                  style="
                    flex:0 0 ${C}px;
                    height:100%;
                    position:relative;
                    box-sizing:border-box;
                  "
                >
                  <div
                    class="bar-group-inner"
                    style="
                      position:relative;
                      width:100%;
                      height:100%;
                    "
                  >
                    <div
                      class="bar-group-zero-line"
                      style="
                        position:absolute;
                        left:0;
                        right:0;
                        top:${v>=0?H:_<=0?0:_*(H/f)}px;
                        border-top:1px solid rgba(255,255,255,0.1);
                        pointer-events:none;
                      "
                    ></div>
                    ${M.map((n,s)=>{var l;const d=null!==(l=n.values[i])&&void 0!==l?l:0,c=t.normalize_values&&n.originalValues?n.originalValues[i]:n.values[i],p=n.entityId;let h=`${null!=c?c:0}${n.unit||""}`;if(o&&void 0!==p&&void 0!==c)try{h=(0,m.formatEntityState)(o,p,{state:c,includeUnit:!0})}catch(t){}const u=H/f,g=v>=0?H:_<=0?0:_*u,y=_===v?g:(_-d)*u,b=Math.min(g,y),x=Math.abs(g-y),w=Math.max(2,Math.min(x,H)),$=.55*S*(s-(k-1)/2),C=1===k;return r.qy`
                        <div
                          class="bar-segment"
                          style="
                            position:absolute;
                            left:50%;
                            bottom:0;
                            width:${S}px;
                            transform:translateX(${$}px);
                            border-radius:var(--uc-r-3, 3px) var(--uc-r-3, 3px) 0 0;
                            background:${n.color};
                            box-shadow:0 4px 10px rgba(0,0,0,0.15);
                            cursor:${T?"pointer":"default"};
                            top:${b}px;
                            height:${w}px;
                            z-index:${100+s};
                          "
                          @mouseenter=${T?i=>this._showTooltip(i,t.id,n.name,h,e):null}
                          @mouseleave=${T?e=>this._hideTooltip(t.id,e):null}
                          title=${T?"":h}
                        >
                          ${C?r.qy`<span
                                style="
                                  position:absolute;
                                  left:50%;
                                  bottom:100%;
                                  transform:translate(-50%, -6px);
                                  font-size:11px;
                                  color: var(--secondary-text-color);
                                  white-space:nowrap;
                                  ${a||""};
                                "
                              >
                                ${h}
                              </span>`:""}
                        </div>
                      `})}
                  </div>
                  <div
                    class="bar-group-label"
                    style="
                      margin-top:4px;
                      font-size:11px;
                      text-align:center;
                      color: var(--secondary-text-color);
                      white-space:nowrap;
                      overflow:hidden;
                      text-overflow:ellipsis;
                    "
                  >
                    ${e}
                  </div>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}_showTooltip(t,e,i,r,a){const o=t.target,{host:n,zIndex:s}=(0,f.I)(o,_.Mu.GRAPH_TOOLTIP);let l=document.getElementById(`graph-tooltip-${e}`);l&&l.parentElement!==n&&(l.remove(),l=null),l||(l=document.createElement("div"),l.id=`graph-tooltip-${e}`,l.style.cssText=`\n        position: fixed;\n        display: none;\n        background: var(--card-background-color);\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-6, 6px);\n        padding: 10px 14px;\n        font-size: 14px;\n        color: var(--primary-text-color);\n        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n        pointer-events: none;\n        z-index: ${s};\n        white-space: nowrap;\n      `,n.appendChild(l)),l.innerHTML=`\n      <div style="font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;">${(0,v.escapeHtml)(i)}</div>\n      <div style="color: var(--secondary-text-color); font-size: 12px;">${(0,v.escapeHtml)(a)}</div>\n      <div style="font-size: 16px; margin-top: 4px; color: var(--primary-color);">${(0,v.escapeHtml)(r)}</div>\n    `;const d=o.getBoundingClientRect(),c=d.left+d.width/2,p=d.top;l.style.display="block",l.style.left=`${c}px`,l.style.top=p-10+"px",l.style.transform="translate(-50%, -100%)"}_hideTooltip(t,e){const i=document.getElementById(`graph-tooltip-${t}`);i&&(i.style.display="none")}_generateTimePoints(t,e){const i=[],r=null!=e?new Date(e):new Date;if("today"===t){const t=new Date(r);t.setHours(0,0,0,0);const e=Math.floor((r.getTime()-t.getTime())/36e5),a=Math.max(1,e);for(let e=0;e<=a;e++){const r=new Date(t);r.setHours(r.getHours()+e),i.push(r.toLocaleTimeString([],{hour:"2-digit"}))}return i}let a=12,o="hour",n=60;switch(t){case"1h":a=12,o="5min",n=5;break;case"3h":a=12,o="15min",n=15;break;case"6h":a=12,o="30min",n=30;break;case"12h":a=12,o="hour",n=60;break;case"24h":a=24,o="hour",n=60;break;case"2d":a=12,o="4hour",n=240;break;case"7d":a=7,o="day";break;case"30d":a=30,o="day";break;case"90d":a=12,o="week";break;case"365d":a=12,o="month"}for(let t=a-1;t>=0;t--){const e=new Date(r);"5min"===o||"15min"===o||"30min"===o?(e.setMinutes(e.getMinutes()-t*n),i.push(e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))):"hour"===o?(e.setHours(e.getHours()-t),i.push(e.toLocaleTimeString([],{hour:"2-digit"}))):"4hour"===o?(e.setHours(e.getHours()-4*t),i.push(e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))):"day"===o?(e.setDate(e.getDate()-t),i.push(e.toLocaleDateString([],{month:"short",day:"numeric"}))):"week"===o?(e.setDate(e.getDate()-7*t),i.push(e.toLocaleDateString([],{month:"short",day:"numeric"}))):"month"===o&&(e.setMonth(e.getMonth()-t),i.push(e.toLocaleDateString([],{month:"short"})))}return i}_generateTimeSeriesData(t,e,i){const r=[];let a=isNaN(t)?50:t;const o=i.toLowerCase().includes("odometer")||i.toLowerCase().includes("counter")||i.toLowerCase().includes("total")||i.toLowerCase().includes("mileage"),n=i.toLowerCase().includes("energy")||i.toLowerCase().includes("kwh");let s=this._hashString(i);const l=()=>(s=1664525*s+1013904223>>>0,(4294967295&s)/4294967296);o&&a>1e3&&(a*=.95);for(let i=0;i<e;i++){const i=l();if(o){const r=.05*t/e;a=a+r+i*r*.5}else if(n)a+=.1*t/e*i;else{const t=(i-.5)*a*.1;a=Math.max(0,a+t)}r.push(Math.round(10*a)/10)}return r}_hashString(t){let e=2166136261;for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619);return e>>>0}_triggerHistoryLoad(t,e){this._historyLoading[t.id]||(this._historyLoading[t.id]=!0,this._deferredHistoryScheduled[t.id]=!0,this._fetchHistoryDataAsync(t,e))}_tmScrubMs(t){const e=null==t?void 0:t.__uc_tm_scrub_ms;return"number"==typeof e?e:void 0}_loadHistoryData(t,e){var i;if(!t.entities||0===t.entities.length)return;if("forecast"===t.data_source)return void this._loadForecastData(t,e);const r=this._tmScrubMs(e),a=null==r?-1:Math.round(r/6e4);if(a!==(null!==(i=this._tmLastBucket[t.id])&&void 0!==i?i:-1)&&(this._tmLastBucket[t.id]=a,this._tmRefetchTimers[t.id]&&window.clearTimeout(this._tmRefetchTimers[t.id]),this._tmRefetchTimers[t.id]=window.setTimeout(()=>{delete this._tmRefetchTimers[t.id],this._historyLoading[t.id]=!0,this._fetchHistoryDataAsync(t,e)},350)),!this._historyData[t.id]&&null==r){const e=this._tryReadCache(t);e&&(this._historyData[t.id]=Object.assign(Object.assign({},e),{source:"cache"}))}if(!this._historyData[t.id]){const i=this._tryFastHistoryPath(t,e);i&&(this._historyData[t.id]=i)}this._historyLoading[t.id]||this._deferredHistoryScheduled[t.id]||(this._deferredHistoryScheduled[t.id]=!0,this._historyLoading[t.id]=!0,this._fetchHistoryDataAsync(t,e))}_tryFastHistoryPath(t,e){try{if(0===t.entities.filter(t=>t.entity).map(t=>t.entity).length)return null;const i=this._generateTimePoints(t.time_period),r=t.entities.filter(t=>t.entity).map((t,r)=>{var a;const o=e.states[t.entity];if(!o)return null;let n=0;n=t.attribute&&o.attributes[t.attribute]?parseFloat(o.attributes[t.attribute])||0:parseFloat(o.state)||0;const s=new Array(i.length).fill(n);return{name:t.name||o.attributes.friendly_name||t.entity,color:this._formatColor(t.color)||this._getDefaultColor(r),values:s,lineWidth:null!==(a=t.line_width)&&void 0!==a?a:2,showPoints:!1!==t.show_points,fillArea:!0===t.fill_area,lineStyle:t.line_style||"solid",unit:(null==o?void 0:o.attributes.unit_of_measurement)||"",entityId:t.entity}}).filter(t=>null!==t);if(0===r.length)return null;const a=r.flatMap(t=>t.values);return{timePoints:i,datasets:r,min:Math.min(...a),max:Math.max(...a),lastUpdated:Date.now(),source:"fast-path"}}catch(t){return null}}async _fetchHistoryDataAsync(t,e){try{const i=this._tmScrubMs(e),r=null!=i?new Date(i):new Date,a=new Date(r);a.setHours(0,0,0,0);const o=Math.max(1,Math.ceil((r.getTime()-a.getTime())/36e5));let n=24;switch(t.time_period){case"today":n=o;break;case"1h":n=1;break;case"3h":n=3;break;case"6h":n=6;break;case"12h":n=12;break;case"24h":default:n=24;break;case"2d":n=48;break;case"7d":n=168;break;case"30d":n=720;break;case"90d":n=2160;break;case"365d":n=8760}const s="today"===t.time_period?a:new Date(r.getTime()-60*n*60*1e3),l=t.entities.filter(t=>t.entity).map(t=>t.entity);if(0===l.length)return;window.ultraCardGraphDebug={entityIds:l,startTime:s.toISOString(),endTime:r.toISOString(),status:"fetching"},Math.min(100,4*n),l.forEach(t=>{e.states[t]});const d={};try{let t,i;try{i=await e.callWS({type:"history/history_during_period",start_time:s.toISOString(),end_time:r.toISOString(),entity_ids:l,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1});const a=i;t=a&&"object"==typeof a?l.map(t=>a[t]||[]).filter(t=>t.length>0):[]}catch(i){const a=s.toISOString();t=await e.callApi("GET",`history/period/${a}`,{filter_entity_id:l.join(","),end_time:r.toISOString()})}if(window.ultraCardGraphDebug.response=t,window.ultraCardGraphDebug.status="success",i&&"object"==typeof i&&!Array.isArray(i)?Object.entries(i).forEach(([t,e])=>{Array.isArray(e)&&e.length>0&&(d[t]=e)}):Array.isArray(t)&&t.forEach(t=>{if(Array.isArray(t)&&t.length>0){const e=t[0].entity_id;d[e]=t}}),0===Object.keys(d).length)throw new Error("No history data returned from API")}catch(t){window.ultraCardGraphDebug.error=t,window.ultraCardGraphDebug.errorDetails={message:t.message,status:t.status,statusText:t.statusText,body:t.body,stack:t.stack},window.ultraCardGraphDebug.status="error";for(const t of l){const i=e.states[t];i&&(d[t]=[{entity_id:t,state:i.state,last_changed:(new Date).toISOString(),last_updated:(new Date).toISOString(),attributes:i.attributes}])}}const c=this._generateTimePoints(t.time_period,r.getTime()),p=t.entities.map((t,i)=>{var a;if(!t.entity)return null;let o;if(Array.isArray(d))o=d;else{if(!d[t.entity])return null;o=d[t.entity]}const n=e.states[t.entity],l=this._processHistoryData(o,c,t.attribute,s,r);return{name:t.name||(null==n?void 0:n.attributes.friendly_name)||t.entity,color:this._formatColor(t.color)||this._getDefaultColor(i),values:l,lineWidth:null!==(a=t.line_width)&&void 0!==a?a:2,showPoints:!1!==t.show_points,fillArea:!0===t.fill_area,lineStyle:t.line_style||"solid",unit:(null==n?void 0:n.attributes.unit_of_measurement)||"",entityId:t.entity}}).filter(t=>null!==t),h=p.flatMap(t=>t.values),u=Math.min(...h),g=Math.max(...h);this._historyData[t.id]={timePoints:c,datasets:p,min:u,max:g,lastUpdated:Date.now(),source:"history"},this._historyLoading[t.id]=!1,null==i&&this._writeCache(t,this._historyData[t.id]),this.requestUpdate()}catch(e){this._historyError[t.id]="Failed to load history data",this._historyLoading[t.id]=!1,this.requestUpdate()}}_processHistoryData(t,e,i,r,a){if(!t||0===t.length)return new Array(e.length).fill(0);const o=[],n=t=>{if(null==t)return null;if("number"==typeof t&&isFinite(t))return t;const e=String(t).trim().toLowerCase();if("unknown"===e||"unavailable"===e||"none"===e||"null"===e)return null;const i=parseFloat(e);return isNaN(i)?null:i},s=(null==r?void 0:r.getTime())||Date.now()-864e5,l=((null==a?void 0:a.getTime())||Date.now())-s,d=t.map(t=>{let e;if(void 0!==t.s&&void 0!==t.lu)e={state:t.s,attributes:t.a||{},timestamp:1e3*t.lu};else{if(void 0===t.state||void 0===t.last_changed)return null;e={state:t.state,attributes:t.attributes||{},timestamp:new Date(t.last_changed).getTime()}}return"unavailable"===e.state||"unknown"===e.state?null:e}).filter(t=>null!==t).sort((t,e)=>t.timestamp-e.timestamp);return e.forEach((t,r)=>{const a=r/(e.length-1),c=s+l*a;let p=null;for(let t=d.length-1;t>=0;t--){const e=d[t];if(e.timestamp<=c){const t=i?e.attributes[i]:e.state,r=n(t);if(null!==r){p=r;break}}}if(null===p)for(let t=d.length-1;t>=0;t--){const e=d[t],r=i?e.attributes[i]:e.state,a=n(r);if(null!==a){p=a;break}}o.push(null!=p?p:0)}),o}_coerceNumber(t){if(null==t)return null;if("number"==typeof t&&isFinite(t))return t;const e=String(t).trim().toLowerCase();if("unknown"===e||"unavailable"===e||"none"===e||"null"===e)return null;const i=parseFloat(e);return isNaN(i)?null:i}async _fetchForecastData(t,e){var i,r;if(!t.forecast_entity||!e)throw new Error("Forecast entity not configured");try{const a=await e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:t.forecast_type||"hourly"},target:{entity_id:t.forecast_entity},return_response:!0}),o=null===(r=null===(i=null==a?void 0:a.response)||void 0===i?void 0:i[t.forecast_entity])||void 0===r?void 0:r.forecast;if(!o||!Array.isArray(o))throw console.error("Ultra Card: Invalid forecast data received from weather service"),new Error("Invalid forecast data received from weather service");return o}catch(t){throw console.error("Ultra Card: Failed to fetch forecast data:",t),t}}_processForecastData(t,e,i){const r=(e.entities||[]).filter(t=>t.forecast_attribute).map((r,a)=>{var o;const n=r.forecast_attribute,s=t.map(t=>{const e=t[n];return"number"==typeof e?e:parseFloat(e)||0}).slice(0,i.length);return{name:r.name||this._getForecastAttributeLabel(n),color:this._formatColor(r.color)||this._getDefaultColor(a),values:s,lineWidth:null!==(o=r.line_width)&&void 0!==o?o:2,showPoints:!1!==r.show_points,fillArea:!0===r.fill_area,lineStyle:r.line_style||"solid",unit:this._getForecastAttributeUnit(n),entityId:e.forecast_entity}});return{timePoints:this._generateForecastTimePoints(t,e.forecast_type),datasets:r,min:Math.min(...r.flatMap(t=>t.values)),max:Math.max(...r.flatMap(t=>t.values)),lastUpdated:Date.now(),source:"forecast"}}_generateForecastTimePoints(t,e){return t.map(t=>{const i=new Date(t.datetime);return"daily"===e?i.toLocaleDateString([],{month:"short",day:"numeric"}):i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})}_getForecastAttributeLabel(t){return this.FORECAST_ATTRIBUTE_LABELS[t]||t}_getForecastAttributeUnit(t){return this.FORECAST_ATTRIBUTE_UNITS[t]||""}_loadForecastData(t,e){if(t.forecast_entity){if(!this._historyData[t.id]){const e=this._tryReadCache(t);e&&"forecast"===e.source&&(this._historyData[t.id]=e)}this._historyLoading[t.id]||this._deferredHistoryScheduled[t.id]||(this._deferredHistoryScheduled[t.id]=!0,this._historyLoading[t.id]=!0,this._fetchForecastDataAsync(t,e))}}async _fetchForecastDataAsync(t,e){try{let i=await this._fetchForecastData(t,e);i=this._applyForecastDisplayLimits(i,t);const r=this._generateForecastTimePoints(i,t.forecast_type),a=this._processForecastData(i,t,r);this._historyData[t.id]=a,this._historyLoading[t.id]=!1,this._writeCache(t,a),this.requestUpdate(),setTimeout(()=>{this.triggerPreviewUpdate();const t=document.querySelector("ultra-card");t&&t.requestUpdate&&t.requestUpdate()},100)}catch(e){console.error("Ultra Card: Failed to load forecast data:",e),this._historyError[t.id]="Failed to load forecast data",this._historyLoading[t.id]=!1,this.requestUpdate()}}_applyForecastDisplayLimits(t,e){var i,r;const a=null!==(i=e.forecast_display_hours)&&void 0!==i?i:0,o=null!==(r=e.forecast_display_days)&&void 0!==r?r:0;if(a<=0&&o<=0)return t;let n;n=o>0?24*o*60*60*1e3:60*a*60*1e3;const s=Date.now()+n;return t.filter(t=>new Date(t.datetime).getTime()<=s)}_getDefaultColor(t){return this.DEFAULT_COLORS[t%this.DEFAULT_COLORS.length]}_addEntity(t,e){var i;const r={id:this.generateId("entity"),entity:"",name:"",attribute:"",color:this._getDefaultColor((null===(i=t.entities)||void 0===i?void 0:i.length)||0),show_points:!0,fill_area:!0,line_width:2,line_style:"solid"};"forecast"===t.data_source&&(r.forecast_attribute="temperature"),e({entities:[...t.entities||[],r]})}_removeEntity(t,e,i){const r=[...t.entities||[]];r.splice(e,1),i({entities:r})}_updateEntity(t,e,i,r,a){const o=[...t.entities||[]];o[e]=Object.assign(Object.assign({},o[e]),i),delete this._historyData[t.id],delete this._historyError[t.id],delete this._historyLoading[t.id],delete this._deferredHistoryScheduled[t.id];try{const e=this._getCacheStore();delete e[this._makeCacheKey(t)],delete e[t.id],this._persistCacheStore(e)}catch(t){}r({entities:o});const n=Object.assign(Object.assign({},t),{entities:o});a&&this._loadHistoryData(n,a),this.requestUpdate(),setTimeout(()=>{this.triggerPreviewUpdate(),window.dispatchEvent(new CustomEvent("ultra-graph-entity-changed",{detail:{moduleId:t.id},bubbles:!0,composed:!0}))},50)}_toggleEntityOptions(t,e){var i;t.stopPropagation();const r=null===(i=t.target)||void 0===i?void 0:i.closest(".entity-card"),a=null==r?void 0:r.querySelector(".entity-advanced-options"),o=null==r?void 0:r.querySelector(".entity-toggle-btn");a&&o&&(this.expandedEntities.has(e)?(this.expandedEntities.delete(e),a.style.maxHeight="0",a.style.opacity="0",a.style.marginTop="0",a.style.borderTop="none",o.style.transform="rotate(0deg)"):(this.expandedEntities.add(e),a.style.maxHeight=a.scrollHeight+"px",a.style.opacity="1",a.style.marginTop="16px",a.style.borderTop="1px solid var(--divider-color)",o.style.transform="rotate(180deg)"))}_getEntityAttributes(t,e){if(!t||!e.states[t])return[];const i=e.states[t].attributes;return Object.keys(i).filter(t=>!["friendly_name","icon","entity_picture"].includes(t)).map(t=>({value:t,label:t}))}_renderSizeControl(t,e,i,r,a,o,n,s,l,d){return this.renderSliderField(l,d,a,s,o,n,1,a=>{e>=0?this._updateEntity(t,e,{[r]:a},i):i({[r]:a})},"px")}hasActiveLink(t){const e=t.tap_action&&"default"!==t.tap_action.action&&"nothing"!==t.tap_action.action,i=t.hold_action&&"default"!==t.hold_action.action&&"nothing"!==t.hold_action.action,r=t.double_tap_action&&"default"!==t.double_tap_action.action&&"nothing"!==t.double_tap_action.action;return!!(e||i||r)}handleClick(t,e,i,r){t.preventDefault(),this.clickTimeout&&clearTimeout(this.clickTimeout),this.clickTimeout=setTimeout(()=>{this.handleTapAction(t,e,i,r)},300)}handleDoubleClick(t,e,i){t.preventDefault(),this.clickTimeout&&(clearTimeout(this.clickTimeout),this.clickTimeout=null),this.handleDoubleAction(t,e,i)}handleMouseDown(t,e,i){this.isHolding=!1,this.holdTimeout=setTimeout(()=>{this.isHolding=!0,this.handleHoldAction(t,e,i)},500)}handleMouseUp(t,e,i){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=null)}handleMouseLeave(t,e,i){this.holdTimeout&&(clearTimeout(this.holdTimeout),this.holdTimeout=null),this.isHolding=!1}handleTouchStart(t,e,i){this.handleMouseDown(t,e,i)}handleTouchEnd(t,e,i){this.handleMouseUp(t,e,i)}handleTapAction(t,e,i,r){this.isHolding||e.tap_action&&"nothing"===e.tap_action.action||d.K.handleAction(e.tap_action||{action:"default"},i,t.target,r,e.entity,e)}handleHoldAction(t,e,i,r){e.hold_action&&"nothing"===e.hold_action.action||d.K.handleAction(e.hold_action||{action:"default"},i,t.target,r,e.entity,e)}handleDoubleAction(t,e,i,r){e.double_tap_action&&"nothing"===e.double_tap_action.action||d.K.handleAction(e.double_tap_action||{action:"default"},i,t.target,r,e.entity,e)}styleObjectToCss(t){return Object.entries(t).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}_resolveChartWidth(t){const e=t.chart_width_percent;if("number"==typeof e&&isFinite(e))return`${Math.max(10,Math.min(100,Math.round(e)))}%`;const i=t.chart_width;return"string"==typeof i&&""!==i.trim()?i.trim():"100%"}camelToKebab(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}addPixelUnit(t){return t?/^\d+$/.test(t)?`${t}px`:/^[\d\s]+$/.test(t)?t.split(" ").map(t=>t.trim()?`${t}px`:t).join(" "):t:t}getPaddingCSS(t){return t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${this.addPixelUnit(t.padding_top)||"0px"} ${this.addPixelUnit(t.padding_right)||"0px"} ${this.addPixelUnit(t.padding_bottom)||"0px"} ${this.addPixelUnit(t.padding_left)||"0px"}`:"0"}getMarginCSS(t){return t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${this.addPixelUnit(t.margin_top)||"0px"} ${this.addPixelUnit(t.margin_right)||"0px"} ${this.addPixelUnit(t.margin_bottom)||"0px"} ${this.addPixelUnit(t.margin_left)||"0px"}`:"0"}getBackgroundCSS(t){return t.background_color||"transparent"}getBackgroundImageCSS(t,e){var i,r;const a=t.background_image_type,o=t.background_image,n=t.background_image_entity;if(!a||"none"===a)return"none";switch(a){case"upload":if(o)return`url("${(0,g.VG)(e,o)}")`;break;case"url":if(o)return`url("${o}")`;break;case"entity":if(n&&e){const t=e.states[n];if(t){const a=(null===(i=t.attributes)||void 0===i?void 0:i.entity_picture)||(null===(r=t.attributes)||void 0===r?void 0:r.image)||("string"==typeof t.state?t.state:"");if(a&&"unknown"!==a&&"unavailable"!==a)return`url("${(0,g.VG)(e,a)}")`}}}return"none"}getBorderCSS(t){const e=t.border;return e&&"none"!==e.style?`${e.width||1}px ${e.style||"solid"} ${e.color||"#ccc"}`:"none"}renderLogicTab(t,e,i,r){return p.X.render(t,e,t=>r(t))}validate(t){const e=t,i=[...super.validate(t).errors];return"custom"===e.time_period&&(e.custom_time_start&&!e.custom_time_end&&i.push("Custom end time is required when start time is set"),e.custom_time_end&&!e.custom_time_start&&i.push("Custom start time is required when end time is set")),!e.unified_template_mode||e.unified_template&&""!==String(e.unified_template).trim()||i.push("Unified template is required when template mode is enabled"),{valid:0===i.length,errors:i}}getStyles(){return`\n      .uc-graphs-module {\n        width: 100%;\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        position: relative;\n        overflow: hidden;\n        contain: layout style;\n      }\n\n      /* Graph content area containment */\n      .uc-graphs-module .chart-container {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        box-sizing: border-box;\n      }\n\n      /* Legend containment */\n      .uc-graphs-module .graph-legend {\n        max-width: calc(100% - 16px) !important;\n        box-sizing: border-box;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .uc-graphs-module .graph-legend > div {\n        min-width: 0;\n        flex-shrink: 1;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      /* Header info containment */\n      .uc-graphs-module .graph-header-info {\n        max-width: calc(100% - 32px) !important;\n        box-sizing: border-box;\n        overflow: hidden;\n      }\n\n      .uc-graphs-module .graph-title,\n      .uc-graphs-module .graph-value {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 100%;\n      }\n\n      .entity-card {\n        transition: all 0.2s ease;\n      }\n\n      .entity-card:hover {\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n      }\n\n      .entity-advanced-options {\n        transition: max-height 0.3s ease, opacity 0.2s ease;\n        opacity: 0;\n      }\n\n      .entity-advanced-options[data-expanded="true"] {\n        opacity: 1;\n      }\n\n      .entity-toggle-button ha-icon {\n        transition: transform 0.2s ease;\n      }\n\n      .entity-header {\n        cursor: pointer;\n      }\n\n      .entity-header:hover .entity-toggle-button {\n        color: var(--primary-color);\n      }\n\n      .uc-graphs-general-tab,\n      .uc-graphs-actions-tab,\n      .uc-graphs-other-tab {\n        padding: 16px;\n        width: 100%;\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: visible;\n      }\n\n      .entities-repeater {\n        margin: 16px 0;\n      }\n\n      .entity-item {\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        margin-bottom: 12px;\n      }\n\n      .entity-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n      }\n\n      .entity-number {\n        font-weight: 500;\n        color: var(--primary-text-color);\n      }\n\n      .chart-container {\n        position: relative;\n        width: 100%;\n        margin: 0 !important;\n        padding: 0 !important;\n        box-sizing: border-box;\n      }\n\n      .chart-title {\n        font-weight: 500;\n        margin-bottom: 8px;\n      }\n\n      .chart-legend {\n        margin-top: 12px;\n      }\n\n      .chart-legend.legend-top {\n        margin-top: 0;\n        margin-bottom: 12px;\n      }\n\n      .chart-legend.legend-left,\n      .chart-legend.legend-right {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n      }\n\n      .chart-legend.legend-left {\n        left: 0;\n      }\n\n      .chart-legend.legend-right {\n        right: 0;\n      }\n\n      .graphs-module-clickable {\n        cursor: pointer;\n        color: inherit;\n        text-decoration: inherit;\n      }\n\n      .graphs-module-clickable.hover-enabled:hover {\n        transform: scale(1.02);\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      }\n\n      /* Standard field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n    \n        margin-bottom: 4px !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      /* Conditional fields grouping */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Number range control styles */\n      .number-range-control {\n        display: flex;\n        gap: 8px;\n        align-items: center;\n      }\n\n      .range-slider {\n        flex: 0 0 65%;\n        height: 6px;\n        background: var(--divider-color);\n        border-radius: var(--uc-r-3, 3px);\n        outline: none;\n        appearance: none;\n        -webkit-appearance: none;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        min-width: 0;\n      }\n\n      .range-slider::-webkit-slider-thumb {\n        appearance: none;\n        -webkit-appearance: none;\n        width: 18px;\n        height: 18px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n      }\n\n      .range-slider::-moz-range-thumb {\n        width: 18px;\n        height: 18px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        cursor: pointer;\n        border: none;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n      }\n\n      .range-slider:hover {\n        background: var(--primary-color);\n        opacity: 0.7;\n      }\n\n      .range-slider:hover::-webkit-slider-thumb {\n        transform: scale(1.1);\n      }\n\n      .range-slider:hover::-moz-range-thumb {\n        transform: scale(1.1);\n      }\n\n      .range-input {\n        flex: 0 0 20%;\n        padding: 6px 8px !important;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        font-size: 13px;\n        text-align: center;\n        transition: all 0.2s ease;\n        box-sizing: border-box;\n      }\n\n      .range-input:focus {\n        outline: none;\n        border-color: var(--primary-color);\n        box-shadow: 0 0 0 2px rgba(var(--rgb-primary-color), 0.2);\n      }\n\n      .range-reset-btn {\n        width: 32px;\n        height: 32px;\n        padding: 0;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.2s ease;\n        flex-shrink: 0;\n      }\n\n      .range-reset-btn:hover {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-color: var(--primary-color);\n      }\n\n      .range-reset-btn ha-icon {\n        font-size: 14px;\n      }\n\n      /* Responsive styles */\n      @media (max-width: 768px) {\n        .chart-container {\n          min-height: 200px;\n        }\n        \n        .uc-graphs-module .graph-legend {\n          max-width: calc(100% - 8px) !important;\n          gap: 4px !important;\n          font-size: 11px !important;\n        }\n        \n        .uc-graphs-module .graph-header-info {\n          max-width: calc(100% - 16px) !important;\n        }\n        \n        .uc-graphs-module .graph-title {\n          font-size: 14px !important;\n        }\n        \n        .uc-graphs-module .graph-value {\n          font-size: 20px !important;\n        }\n      }\n\n      /* Animation styles */\n      .uc-graphs-module[data-animation="true"] {\n        animation: fadeIn 0.5s ease-in-out;\n      }\n\n      @keyframes fadeIn {\n        from {\n          opacity: 0;\n          transform: translateY(10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0);\n        }\n      }\n\n      /* Hover effects */\n      .uc-graphs-module:hover {\n        transition: box-shadow 0.3s ease;\n      }\n\n      /* Loading state */\n      .chart-loading {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n      }\n\n      .chart-error {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        color: var(--error-color);\n        text-align: center;\n        padding: 20px;\n        overflow: hidden;\n        word-wrap: break-word;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n      \n      /* SVG text containment for pie charts */\n      .uc-graphs-module svg text {\n        pointer-events: none;\n        user-select: none;\n      }\n      \n      /* Ensure tooltips stay within bounds and appear above everything */\n      [id^="graph-tooltip-"] {\n        position: fixed !important;\n        z-index: ${_.Mu.GRAPH_TOOLTIP} !important;\n        max-width: calc(100vw - 32px);\n        word-wrap: break-word;\n        box-sizing: border-box;\n        pointer-events: none !important;\n      }\n\n      /* Gap control styles - Standardized Slider Pattern */\n      ${a.m.getSliderStyles()}\n\n      /* Settings section width containment */\n      .settings-section {\n        max-width: 100%;\n        box-sizing: border-box;\n        width: 100%;\n        overflow: visible;\n      }\n\n      .settings-section > div[style*="display: grid"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        width: 100%;\n        overflow: visible;\n      }\n\n      /* Ensure all grid children stay within bounds */\n      .settings-section div {\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Field sections must respect container width */\n      .settings-section .field-section {\n        width: 100%;\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: visible;\n      }\n\n      /* Ensure ha-form respects container width */\n      .settings-section ha-form {\n        width: 100% !important;\n        max-width: 100% !important;\n        box-sizing: border-box !important;\n      }\n\n      /* Force all ha-form internals to respect width */\n      .settings-section ha-form * {\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Specific fix for ha-select dropdowns z-index and width */\n      .settings-section ha-select,\n      .settings-section ha-textfield,\n      .settings-section input,\n      .settings-section select {\n        width: 100% !important;\n        max-width: 100% !important;\n        box-sizing: border-box !important;\n      }\n\n      /* Fix ha-select dropdown menu z-index to appear above other UI elements */\n      ha-select,\n      .settings-section ha-select,\n      .field-section ha-select {\n        --mdc-menu-z-index: 9999;\n        --mdc-select-z-index: 9999;\n        position: relative;\n      }\n\n      /* Ensure mwc-menu surfaces can overflow containers */\n      mwc-menu,\n      mwc-menu-surface {\n        z-index: 9999 !important;\n      }\n      .settings-section ultra-color-picker {\n        width: 100%;\n        max-width: 100%;\n        display: block;\n      }\n      .settings-section ultra-color-picker .color-input-field {\n        width: 100%;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n      .settings-section ultra-color-picker .color-value {\n        min-width: 0;\n      }\n    `}cleanup(){this.clickTimeout&&clearTimeout(this.clickTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this._updateInterval&&clearInterval(this._updateInterval),Object.keys(this._historyData).forEach(t=>{const e=document.getElementById(`graph-tooltip-${t}`);e&&e.parentNode===document.body&&document.body.removeChild(e)})}requestUpdate(){"undefined"!=typeof window&&(window.dispatchEvent(new CustomEvent("ultra-card-update")),this.triggerPreviewUpdate())}}},8465(t,e,i){i.d(e,{Q:()=>o,w:()=>n});var r=i(2618);let a=!1;class o{static findForm(t){return"undefined"==typeof document?null:document.getElementById(t)}static renderCleanForm(t,e,i,n){const s=`clean-form-${Math.random().toString(36).substr(2,9)}`;return setTimeout(()=>{const t=o.findForm(s);t&&(o.setupFormObserver(t,s),o.aggressiveCleanup(t))},0),setTimeout(()=>{const t=o.findForm(s);t&&o.aggressiveCleanup(t)},100),r.qy`
      <div class="ultra-clean-form" id="${s}">
        <ha-form
          .hass=${t}
          .data=${e}
          .schema=${i}
          .computeLabel=${()=>""}
          .computeDescription=${()=>""}
          @value-changed=${t=>{a||(a=!0,requestAnimationFrame(()=>{a=!1}),n(t),requestAnimationFrame(()=>{const t=document.getElementById(s);t&&o.aggressiveCleanup(t)}))}}
        ></ha-form>
      </div>
    `}static setupFormObserver(t,e){var i;o.activeObservers.has(e)&&(null===(i=o.activeObservers.get(e))||void 0===i||i.disconnect());const r=new MutationObserver(i=>{let r=!1;i.forEach(t=>{"childList"===t.type&&t.addedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(r=!0)})}),r&&!o.cleanupQueue.has(e)&&(o.cleanupQueue.add(e),setTimeout(()=>{o.aggressiveCleanup(t),o.cleanupQueue.delete(e)},10))});r.observe(t,{childList:!0,subtree:!0,characterData:!0}),o.activeObservers.set(e,r),setTimeout(()=>{"undefined"!=typeof document&&document.contains(t)||(r.disconnect(),o.activeObservers.delete(e))},3e4)}static aggressiveCleanup(t){var e;if(!t)return;const i=["action","entity","template_mode","icon","name","value","text","url","path","attribute","state","condition","enabled","disabled","template","unified_template","unified_template_mode","mode","type","size","color","style","width","height","radius","opacity","service","data","latitude","longitude","navigation_path","show_icon","label","button"],r=t.querySelector("ha-form");if(!r)return;const a=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,null),o=[];let n;for(;n=a.nextNode();){const t=null===(e=n.textContent)||void 0===e?void 0:e.trim().toLowerCase();t&&i.includes(t)&&o.push(n)}o.forEach(t=>{var e;const i=t.parentElement;if(i){const r=i.querySelector("input, select, ha-entity-picker, ha-selector, mwc-select, mwc-textfield");t.textContent&&t.textContent.trim().length<30&&(r||(null===(e=i.parentElement)||void 0===e?void 0:e.querySelector("input, select, ha-entity-picker, ha-selector")))&&t.remove()}}),r.querySelectorAll("*").forEach(t=>{var e,r;const a=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();a&&i.includes(a)&&0===t.children.length&&(null===(r=t.parentElement)||void 0===r?void 0:r.querySelector("input, select, ha-entity-picker, ha-selector"))&&(t.style.cssText="display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; margin: 0 !important; padding: 0 !important;")}),['div[role="group"] > div:first-child:not([class])','div[role="group"] > span:first-child:not([class])',".mdc-form-field__label",".mdc-text-field__label",".mdc-select__label","label:not([for])","div:not([class]):not([id])","span:not([class]):not([id])"].forEach(t=>{try{r.querySelectorAll(t).forEach(t=>{var e;const r=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();r&&i.includes(r)&&(t.style.cssText="display: none !important;")})}catch(t){}}),r.querySelectorAll('[class*="mdc-"]').forEach(t=>{var e;const r=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();r&&i.includes(r)&&0===t.children.length&&(t.classList.contains("mdc-floating-label")||t.classList.contains("mdc-form-field__label")||t.classList.contains("mdc-text-field__label"))&&(t.style.cssText="display: none !important;")}),setTimeout(()=>{var t;if("undefined"==typeof document)return;const e=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,null),a=[];let o;for(;o=e.nextNode();){const e=null===(t=o.textContent)||void 0===t?void 0:t.trim().toLowerCase();e&&i.includes(e)&&a.push(o)}a.forEach(t=>{t.parentNode&&(t.textContent="")})},50)}static getCleanFormStyles(){return"\n      /* Ultra-aggressive label hiding */\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form .label,\n      .ultra-clean-form ha-form .mdc-floating-label,\n      .ultra-clean-form ha-form .mdc-text-field__label,\n      .ultra-clean-form ha-form .mdc-select__label,\n      .ultra-clean-form ha-form .mdc-form-field__label,\n      .ultra-clean-form ha-form .ha-form-label,\n      .ultra-clean-form ha-form .mdc-notched-outline__leading,\n      .ultra-clean-form ha-form .mdc-notched-outline__notch,\n      .ultra-clean-form ha-form .mdc-notched-outline__trailing,\n      .ultra-clean-form ha-form .mdc-line-ripple {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n      }\n\n      /* Override any existing label styles completely */\n      .ultra-clean-form label,\n      .ultra-clean-form .ultra-clean-form label *,\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form label * {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: none !important;\n        outline: none !important;\n        background: none !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n        position: absolute !important;\n        left: -9999px !important;\n        top: -9999px !important;\n        z-index: -1 !important;\n        pointer-events: none !important;\n      }\n\n      /* Hide any text that could be a redundant label */\n      .ultra-clean-form ha-form div:not([class]):not([id]),\n      .ultra-clean-form ha-form span:not([class]):not([id]),\n      .ultra-clean-form ha-form p:not([class]):not([id]) {\n        font-size: 0 !important;\n        line-height: 0 !important;\n        color: transparent !important;\n        height: 0 !important;\n        overflow: hidden !important;\n      }\n\n      /* Make sure form inputs still work */\n      .ultra-clean-form ha-form input,\n      .ultra-clean-form ha-form select,\n      .ultra-clean-form ha-form textarea,\n      .ultra-clean-form ha-form ha-entity-picker,\n      .ultra-clean-form ha-form ha-icon-picker,\n      .ultra-clean-form ha-form ha-selector,\n      .ultra-clean-form ha-form .mdc-text-field,\n      .ultra-clean-form ha-form .mdc-select,\n      .ultra-clean-form ha-form .mdc-switch {\n        font-size: 14px !important;\n        line-height: normal !important;\n        color: var(--primary-text-color) !important;\n        height: auto !important;\n        width: auto !important;\n        margin-top: 0 !important;\n        border-radius: 8px !important;\n      }\n\n      /* Ensure dropdowns work */\n      .ultra-clean-form ha-form .mdc-select__selected-text,\n      .ultra-clean-form ha-form .mdc-select__dropdown-icon {\n        font-size: 14px !important;\n        color: var(--primary-text-color) !important;\n        opacity: 1 !important;\n        height: auto !important;\n        width: auto !important;\n      }\n\n      /* Style field titles and descriptions consistently */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n       \n        margin-bottom: 4px !important;\n        display: block !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n    "}static cleanupRedundantLabels(t){o.aggressiveCleanup(t)}static renderField(t,e,i,a,n,s){return r.qy`
      <div class="form-field-container">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${t}
        </div>
        <div
          class="field-description"
          style="font-size: 13px; font-weight: 400; margin-bottom: 12px; color: var(--secondary-text-color);"
        >
          ${e}
        </div>
        ${o.renderCleanForm(i,a,n,s)}
      </div>
    `}static createSchemaItem(t,e){return{name:t,selector:e}}static renderSection(t,e,i){return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
        >
          ${t}
        </div>
        ${e?r.qy`
              <div
                class="field-description"
                style="font-size: 13px; font-weight: 400; margin-bottom: 16px; color: var(--secondary-text-color);"
              >
                ${e}
              </div>
            `:""}
        ${i.map(t=>r.qy`
            <div style="margin-bottom: 16px;">
              ${o.renderField(t.title,t.description,t.hass,t.data,t.schema,t.onChange)}
            </div>
          `)}
      </div>
    `}static injectCleanFormStyles(){return r.qy`
      <style>
        ${o.getCleanFormStyles()}
      </style>
    `}}function n(t){const e=t.detail;if(e&&"string"==typeof e.value)return e.value;const i=t.target;return i&&"string"==typeof i.value?i.value:void 0}o.activeObservers=new Map,o.cleanupQueue=new Set},3361(t,e,i){i.d(e,{I:()=>a});var r=i(1001);function a(t,e=r.Mu.DROPDOWN_MENU){var i;const a=null===(i=null==t?void 0:t.closest)||void 0===i?void 0:i.call(t,".ultra-popup-portal");return a instanceof HTMLElement?{host:a,zIndex:r.Mu.GRAPH_TOOLTIP}:{host:document.body,zIndex:e}}}};