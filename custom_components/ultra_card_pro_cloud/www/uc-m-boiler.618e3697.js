export const __webpack_esm_ids__=[362];export const __webpack_esm_modules__={1515(e,t,r){r.d(t,{UltraBoilerModule:()=>b});var o=r(2618),i=r(7475),n=r(6478),a=r(5147),l=r(8938),s=r(3488);function c(e,t){var r;if(!t)return null;const o=null===(r=null==e?void 0:e.states)||void 0===r?void 0:r[t];if(!o)return null;const i=parseFloat(o.state);return Number.isNaN(i)?null:i}function d(e,t){var r;if(!t)return null;const o=null===(r=null==e?void 0:e.states)||void 0===r?void 0:r[t];return o&&"unavailable"!==o.state&&"unknown"!==o.state?"on"===o.state:null}function p(e,t,r){var o,i,n;if(!t)return r;const a=null===(n=null===(i=null===(o=null==e?void 0:e.states)||void 0===o?void 0:o[t])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.unit_of_measurement;return"string"==typeof a&&a?a:r}r(7921);const u="#3b82f6",h="#f59e0b",m="#ef4444",_=new Set(["off","unavailable","unknown"]),g={eco:"mdi:leaf",electric:"mdi:lightning-bolt",performance:"mdi:rocket-launch",high_demand:"mdi:fire",heat_pump:"mdi:heat-pump",gas:"mdi:fire-circle",heat:"mdi:fire",auto:"mdi:refresh-auto",off:"mdi:power"};class b extends i.m{constructor(){super(...arguments),this.metadata={type:"boiler",title:"Boiler",description:"Animated boiler card with temperature-driven colors, flame and pipe animations, pressure, and target control",author:"WJD Designs",version:"1.0.0",icon:"mdi:water-boiler",category:"interactive",tags:["boiler","heating","water-heater","temperature","pressure","flame","animated","pro","premium"]},this._pendingTargets=new Map}createDefault(e){return{id:e||this.generateId("boiler"),type:"boiler",entity:"",name:"",icon:"",layout:"standard",water_temp_entity:"",return_temp_entity:"",target_temp_entity:"",pressure_entity:"",modulation_entity:"",flame_entity:"",heating_entity:"",dhw_entity:"",power_switch_entity:"",show_name:!0,show_status:!0,show_boiler_graphic:!0,show_water_temp:!0,show_return_temp:!0,show_pressure:!0,show_modulation:!0,show_target_control:!0,show_modes:!0,show_power_button:!0,enable_animations:!0,cold_temp:30,hot_temp:60,cold_color:"",warm_color:"",hot_color:"",min_pressure:1,max_pressure:2.5,text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,r,o){return a.A.render(e,t,e=>o(e))}renderOtherTab(e,t,r,o){return l.X.render(e,t,e=>o(e))}renderGeneralTab(e,t,r,i){var a,l,c,d,p;const _=e,g=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!(0,s.gf)(t))return(0,s.b5)(g,(0,n.kg)("editor.boiler.pro_description",g,"The Boiler module shows your boiler with temperature-driven colors, live flame, fan and pipe animations, pressure and modulation readouts, and target temperature control."));const b=(e,n,a,l)=>o.qy`
      <div style="margin-bottom: 12px;">
        ${this.renderEntityPickerWithVariables(t,r,e,_[e]||"",t=>{i({[e]:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},l,n)}
        <div
          style="font-size:0.78rem; color:var(--secondary-text-color); margin-top:3px; padding-left:2px;"
        >
          ${a}
        </div>
      </div>
    `,f=(e,r,o="")=>({title:r,description:o,hass:t,data:{[e]:!1!==_[e]},schema:[this.booleanField(e)],onChange:t=>{var r,o;i({[e]:null===(o=null===(r=t.detail.value)||void 0===r?void 0:r[e])||void 0===o||o}),this.triggerPreviewUpdate()}});return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.boiler.entity_section",g,"Boiler"),(0,n.kg)("editor.boiler.entity_section_desc",g,"Pick the main boiler entity. A water_heater or climate entity provides temperature, target, and modes automatically; a plain temperature sensor works too."),[{title:(0,n.kg)("editor.boiler.entity",g,"Entity"),description:(0,n.kg)("editor.boiler.entity_desc",g,"water_heater, climate, or temperature sensor"),hass:t,data:{entity:_.entity||""},schema:[{name:"entity",selector:{entity:{domain:["water_heater","climate","sensor"]}}}],onChange:e=>{var t,r;i({entity:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.entity)&&void 0!==r?r:""}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.boiler.name",g,"Name override"),description:(0,n.kg)("editor.boiler.name_desc",g,"Leave blank to use the entity friendly name."),hass:t,data:{name:_.name||""},schema:[this.textField("name")],onChange:e=>{var t,r;i({name:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.name)&&void 0!==r?r:""}),this.triggerPreviewUpdate()}}])}
        ${this.renderIconField((0,n.kg)("editor.boiler.icon",g,"Icon override"),(0,n.kg)("editor.boiler.icon_desc",g,"Shown in the header. Leave blank for the boiler icon."),t,_.icon||"",e=>{i({icon:e}),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,n.kg)("editor.boiler.layout",g,"Layout"),(0,n.kg)("editor.boiler.layout_desc",g,"Standard shows the animated boiler graphic; compact is a single row."),_.layout||"standard",[{value:"standard",label:(0,n.kg)("editor.boiler.layout_standard",g,"Standard"),icon:"mdi:view-agenda-outline"},{value:"compact",label:(0,n.kg)("editor.boiler.layout_compact",g,"Compact"),icon:"mdi:view-stream-outline"}],e=>{i({layout:e}),this.triggerPreviewUpdate()})}

        ${this.renderSettingsSection((0,n.kg)("editor.boiler.sensors_section",g,"Boiler Sensors"),(0,n.kg)("editor.boiler.sensors_section_desc",g,"All optional. Link the individual boiler sensors your integration exposes (EMS-ESP, OpenTherm Gateway, SmartThings, ...)."),[])}
        ${b("water_temp_entity",(0,n.kg)("editor.boiler.water_temp",g,"Water / flow temperature"),(0,n.kg)("editor.boiler.water_temp_desc",g,"Supply water temperature. Falls back to the main entity current temperature."),["sensor"])}
        ${b("return_temp_entity",(0,n.kg)("editor.boiler.return_temp",g,"Return temperature"),(0,n.kg)("editor.boiler.return_temp_desc",g,"Water temperature returning to the boiler"),["sensor"])}
        ${b("pressure_entity",(0,n.kg)("editor.boiler.pressure",g,"Water pressure"),(0,n.kg)("editor.boiler.pressure_desc",g,"System pressure in bar or psi"),["sensor"])}
        ${b("modulation_entity",(0,n.kg)("editor.boiler.modulation",g,"Burner modulation (%)"),(0,n.kg)("editor.boiler.modulation_desc",g,"Drives the flame size in the graphic"),["sensor"])}
        ${b("flame_entity",(0,n.kg)("editor.boiler.flame",g,"Flame / burner active"),(0,n.kg)("editor.boiler.flame_desc",g,"Binary sensor that is on while the burner fires"),["binary_sensor","sensor"])}
        ${b("heating_entity",(0,n.kg)("editor.boiler.heating",g,"Central heating active"),(0,n.kg)("editor.boiler.heating_desc",g,"Binary sensor that is on while heating circulates"),["binary_sensor","sensor"])}
        ${b("dhw_entity",(0,n.kg)("editor.boiler.dhw",g,"Hot water (DHW) active"),(0,n.kg)("editor.boiler.dhw_desc",g,"Binary sensor that is on while heating tap water"),["binary_sensor","sensor"])}
        ${b("target_temp_entity",(0,n.kg)("editor.boiler.target",g,"Target temperature"),(0,n.kg)("editor.boiler.target_desc",g,"Number helper for the setpoint. Falls back to the main entity target."),["number","input_number"])}
        ${b("power_switch_entity",(0,n.kg)("editor.boiler.power_switch",g,"Power switch"),(0,n.kg)("editor.boiler.power_switch_desc",g,"Switch for the power button. Falls back to turning the main entity on/off."),["switch","input_boolean"])}

        ${this.renderSettingsSection((0,n.kg)("editor.boiler.display_section",g,"Display"),(0,n.kg)("editor.boiler.display_section_desc",g,"Choose which readouts and controls to show."),[f("show_name",(0,n.kg)("editor.boiler.show_name",g,"Show name")),f("show_status",(0,n.kg)("editor.boiler.show_status",g,"Show status label")),f("show_boiler_graphic",(0,n.kg)("editor.boiler.show_graphic",g,"Show boiler graphic"),(0,n.kg)("editor.boiler.show_graphic_desc",g,"Animated boiler drawing (standard layout)")),f("show_water_temp",(0,n.kg)("editor.boiler.show_water_temp",g,"Show water temperature")),f("show_return_temp",(0,n.kg)("editor.boiler.show_return_temp",g,"Show return temperature")),f("show_pressure",(0,n.kg)("editor.boiler.show_pressure",g,"Show pressure")),f("show_modulation",(0,n.kg)("editor.boiler.show_modulation",g,"Show modulation")),f("show_target_control",(0,n.kg)("editor.boiler.show_target",g,"Show target control"),(0,n.kg)("editor.boiler.show_target_desc",g,"Plus/minus stepper for the setpoint")),f("show_modes",(0,n.kg)("editor.boiler.show_modes",g,"Show modes"),(0,n.kg)("editor.boiler.show_modes_desc",g,"Operation mode chips when the entity supports them")),f("show_power_button",(0,n.kg)("editor.boiler.show_power",g,"Show power button")),f("enable_animations",(0,n.kg)("editor.boiler.animations",g,"Enable animations"),(0,n.kg)("editor.boiler.animations_desc",g,"Flame flicker, fan spin, and pipe flow"))])}

        ${this.renderSettingsSection((0,n.kg)("editor.boiler.temp_colors_section",g,"Temperature Colors"),(0,n.kg)("editor.boiler.temp_colors_section_desc",g,"The water temperature reading and boiler glow blend from cold to hot between these thresholds."),[{title:(0,n.kg)("editor.boiler.cold_temp",g,"Cold below"),description:(0,n.kg)("editor.boiler.cold_temp_desc",g,"At or below this temperature the cold color is used"),hass:t,data:{cold_temp:null!==(l=_.cold_temp)&&void 0!==l?l:30},schema:[this.numberField("cold_temp",-20,100,1)],onChange:e=>{var t,r;i({cold_temp:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.cold_temp)&&void 0!==r?r:30}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.boiler.hot_temp",g,"Hot above"),description:(0,n.kg)("editor.boiler.hot_temp_desc",g,"At or above this temperature the hot color is used"),hass:t,data:{hot_temp:null!==(c=_.hot_temp)&&void 0!==c?c:60},schema:[this.numberField("hot_temp",0,150,1)],onChange:e=>{var t,r;i({hot_temp:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.hot_temp)&&void 0!==r?r:60}),this.triggerPreviewUpdate()}}])}
        ${this.renderColorField((0,n.kg)("editor.boiler.cold_color",g,"Cold color"),"",t,_.cold_color||"",u,e=>{i({cold_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.boiler.warm_color",g,"Warm color"),"",t,_.warm_color||"",h,e=>{i({warm_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.boiler.hot_color",g,"Hot color"),"",t,_.hot_color||"",m,e=>{i({hot_color:e}),this.triggerPreviewUpdate()})}

        ${this.renderSettingsSection((0,n.kg)("editor.boiler.pressure_section",g,"Pressure Range"),(0,n.kg)("editor.boiler.pressure_section_desc",g,"Outside this healthy range the pressure readout turns to the warning color."),[{title:(0,n.kg)("editor.boiler.min_pressure",g,"Minimum healthy pressure"),description:"",hass:t,data:{min_pressure:null!==(d=_.min_pressure)&&void 0!==d?d:1},schema:[this.numberField("min_pressure",0,10,.1)],onChange:e=>{var t,r;i({min_pressure:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.min_pressure)&&void 0!==r?r:1}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.boiler.max_pressure",g,"Maximum healthy pressure"),description:"",hass:t,data:{max_pressure:null!==(p=_.max_pressure)&&void 0!==p?p:2.5},schema:[this.numberField("max_pressure",0,10,.1)],onChange:e=>{var t,r;i({max_pressure:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.max_pressure)&&void 0!==r?r:2.5}),this.triggerPreviewUpdate()}}])}

        ${this.renderColorField((0,n.kg)("editor.boiler.text_color",g,"Text color"),"",t,_.text_color||"","var(--primary-text-color)",e=>{i({text_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.boiler.card_bg",g,"Card background"),"",t,_.card_background_color||"","var(--card-background-color)",e=>{i({card_background_color:e}),this.triggerPreviewUpdate()})}
      </div>
    `}renderPreview(e,t,r,i){var a,l,s,h,m,b,f,y,v,w,x,k,$;const S=e,C=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",P=this.resolveEntity(S.entity,r)||S.entity;if(!P||!(null===(l=null==t?void 0:t.states)||void 0===l?void 0:l[P]))return o.qy`
        <style>${this.getStyles()}</style>
        ${this.renderGradientErrorState((0,n.kg)("editor.boiler.config_needed",C,"Select a boiler"),(0,n.kg)("editor.boiler.config_needed_desc",C,"Choose an entity in the General tab"),"mdi:water-boiler")}
      `;const F=t.states[P],M=F.attributes||{},z=P.split(".")[0],q="water_heater"===z||"climate"===z,U=e=>e?this.resolveEntity(e,r)||e:void 0,W=U(S.water_temp_entity),A=U(S.return_temp_entity),G=U(S.target_temp_entity),T=U(S.pressure_entity),D=U(S.modulation_entity),J=U(S.flame_entity),j=U(S.heating_entity),B=U(S.dhw_entity),E=U(S.power_switch_entity),H=null!==(h=null!==(s=c(t,W))&&void 0!==s?s:"number"==typeof M.current_temperature?M.current_temperature:null)&&void 0!==h?h:q?null:c(t,P),L=c(t,A),O=c(t,T),Z=c(t,D),I=p(t,W,"")||("string"==typeof M.unit_of_measurement?M.unit_of_measurement:"")||(null===(b=null===(m=t.config)||void 0===m?void 0:m.unit_system)||void 0===b?void 0:b.temperature)||"°C",N=p(t,T,"bar"),R="unavailable"===F.state||"unknown"===F.state,X=d(t,E),Y=null!==(f=d(t,J))&&void 0!==f?f:"heating"===M.hvac_action||null!==Z&&Z>0||null,V=null!==(y=d(t,j))&&void 0!==y?y:"heating"===M.hvac_action||null,K=d(t,B),Q=q&&_.has(F.state),ee=!1===X||null===X&&Q,te=R?"unavailable":ee?"off":K?"dhw":Y||V?"heating":"idle",re="heating"===te||"dhw"===te,oe=!1!==S.enable_animations&&re,ie=S.text_color||"var(--primary-text-color)",ne=S.secondary_text_color||"var(--secondary-text-color)",ae=S.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",le=this._tempColor(S,H),se="unavailable"===te||"off"===te||"idle"===te?ne:le,ce=null===O||O>=(null!==(v=S.min_pressure)&&void 0!==v?v:1)&&O<=(null!==(w=S.max_pressure)&&void 0!==w?w:2.5),de=G?t.states[G]:void 0,pe=null!==(x=de?c(t,G):null)&&void 0!==x?x:"number"==typeof M.temperature?M.temperature:null,ue=G||P,he=this._pendingTargets.get(ue);let me=pe;he&&(Date.now()-he.ts>=6e3||he.value===pe?this._pendingTargets.delete(ue):me=he.value);const _e=de?"number"==typeof de.attributes.min?de.attributes.min:0:"number"==typeof M.min_temp?M.min_temp:0,ge=de?"number"==typeof de.attributes.max?de.attributes.max:90:"number"==typeof M.max_temp?M.max_temp:90,be=de?"number"==typeof de.attributes.step&&de.attributes.step>0?de.attributes.step:1:"number"==typeof M.target_temp_step&&M.target_temp_step>0?M.target_temp_step:1,fe=null!==me&&(void 0!==de||q),ye=e=>{if(null===me)return;const r=Math.min(ge,Math.max(_e,me+e*be));if(this._pendingTargets.set(ue,{value:r,ts:Date.now()}),de){const e=de.entity_id.split(".")[0];t.callService("input_number"===e?"input_number":"number","set_value",{entity_id:de.entity_id,value:r})}else"water_heater"===z?t.callService("water_heater","set_temperature",{entity_id:P,temperature:r}):t.callService("climate","set_temperature",{entity_id:P,temperature:r});this.triggerPreviewUpdate(!0)},ve=()=>{if(E){const e=E.split(".")[0];t.callService("input_boolean"===e?"input_boolean":"switch","toggle",{entity_id:E})}else"water_heater"===z?t.callService("water_heater",ee?"turn_on":"turn_off",{entity_id:P}):"climate"===z&&t.callService("climate",ee?"turn_on":"turn_off",{entity_id:P});this.triggerPreviewUpdate(!0)},we=!!E||q,xe="water_heater"===z&&Array.isArray(M.operation_list)?M.operation_list:"climate"===z&&Array.isArray(M.hvac_modes)?M.hvac_modes:[],ke="water_heater"===z||"climate"===z?F.state:void 0,$e=e=>{"water_heater"===z?t.callService("water_heater","set_operation_mode",{entity_id:P,operation_mode:e}):t.callService("climate","set_hvac_mode",{entity_id:P,hvac_mode:e}),this.triggerPreviewUpdate(!0)},Se=(null===(k=S.name)||void 0===k?void 0:k.trim())||M.friendly_name||P,Ce=S.icon||"mdi:water-boiler",Pe=(()=>{switch(te){case"unavailable":return(0,n.kg)("editor.boiler.state_unavailable",C,"Unavailable");case"off":return(0,n.kg)("editor.boiler.state_off",C,"Off");case"dhw":return(0,n.kg)("editor.boiler.state_dhw",C,"Hot water");case"heating":return(0,n.kg)("editor.boiler.state_heating",C,"Heating");default:return(0,n.kg)("editor.boiler.state_idle",C,"Standby")}})(),Fe=e=>null===e?"—":""+Math.round(10*e)/10,Me=this.buildStyleString(this.buildDesignStyles(e,t)),ze=this.getHoverEffectClass(e),qe=this.createGestureHandlers(S.id,{tap_action:(null===($=S.tap_action)||void 0===$?void 0:$.action)?Object.assign(Object.assign({},S.tap_action),{entity:P}):{action:"more-info",entity:P},hold_action:S.hold_action,double_tap_action:S.double_tap_action,entity:P,module:S},t,r,[".uc-boiler-ctl"]),Ue=!1!==S.show_power_button&&we?o.qy`
            <button
              type="button"
              class="uc-boiler-ctl uc-boiler__power ${ee||R?"":"is-on"}"
              style="${ee||R?"":`background:${le};`}"
              ?disabled=${R}
              title=${(0,n.kg)("editor.boiler.toggle_power",C,"Toggle power")}
              @click=${e=>{e.stopPropagation(),ve()}}
            >
              <ha-icon icon="mdi:power" style="--mdc-icon-size:20px;"></ha-icon>
            </button>
          `:o.s6,We=!1!==S.show_target_control&&fe?o.qy`
            <div class="uc-boiler__target uc-boiler-ctl ${"compact"===(S.layout||"standard")?"":"uc-boiler__target--fill"}">
              <button
                type="button"
                class="uc-boiler__step"
                ?disabled=${R||ee}
                aria-label=${(0,n.kg)("editor.boiler.decrease",C,"Decrease target")}
                @click=${e=>{e.stopPropagation(),ye(-1)}}
              >
                <ha-icon icon="mdi:minus" style="--mdc-icon-size:16px;"></ha-icon>
              </button>
              <div class="uc-boiler__target-val">
                <span style="color:${ne};font-size:10px;text-transform:uppercase;letter-spacing:0.04em;">
                  ${(0,n.kg)("editor.boiler.target_label",C,"Target")}
                </span>
                <span style="color:${ie};font-weight:700;">${Fe(me)}${I}</span>
              </div>
              <button
                type="button"
                class="uc-boiler__step"
                ?disabled=${R||ee}
                aria-label=${(0,n.kg)("editor.boiler.increase",C,"Increase target")}
                @click=${e=>{e.stopPropagation(),ye(1)}}
              >
                <ha-icon icon="mdi:plus" style="--mdc-icon-size:16px;"></ha-icon>
              </button>
            </div>
          `:o.s6,Ae="compact"===(S.layout||"standard"),Ge=(e,t,r,i,n=!1)=>o.qy`
      <div
        class="uc-boiler__metric ${Ae?"uc-boiler__metric--inline":""} ${n?"uc-boiler__metric--warn":""}"
      >
        <span class="uc-boiler__metric-head" style="color:${ne};">
          <ha-icon icon="${t}" style="--mdc-icon-size:14px;color:${n?"var(--warning-color, #FF9800)":i};"></ha-icon>
          <span class="uc-boiler__metric-label">${e}</span>
        </span>
        <span class="uc-boiler__metric-val" style="color:${n?"var(--warning-color, #FF9800)":ie};">${r}</span>
      </div>
    `,Te=[];!1!==S.show_return_temp&&null!==L&&Te.push(Ge((0,n.kg)("editor.boiler.return_label",C,"Return"),"mdi:arrow-u-left-bottom",`${Fe(L)}${I}`,this._tempColor(S,L))),!1!==S.show_pressure&&null!==O&&Te.push(Ge((0,n.kg)("editor.boiler.pressure_label",C,"Pressure"),"mdi:gauge",`${Math.round(100*O)/100} ${N}`,ne,!ce)),!1!==S.show_modulation&&null!==Z&&Te.push(Ge((0,n.kg)("editor.boiler.modulation_label",C,"Modulation"),"mdi:fire",`${Math.round(Z)}%`,Z>0?le:ne));const De=xe.length<=4?xe.length:Math.ceil(xe.length/Math.ceil(xe.length/4)),Je=!1!==S.show_modes&&xe.length>0?o.qy`
            <div class="uc-boiler__modes uc-boiler-ctl" style="--uc-boiler-mode-cols:${De};">
              ${xe.map(e=>{const t=e===ke;return o.qy`
                  <button
                    type="button"
                    class="uc-boiler__mode ${t?"is-active":""}"
                    style="${t?`border-color:${le};color:${le};background:${this._alpha(le)};`:`color:${ne};`}"
                    ?disabled=${R}
                    @click=${t=>{t.stopPropagation(),$e(e)}}
                  >
                    ${g[e.toLowerCase()]?o.qy`<ha-icon icon=${g[e.toLowerCase()]} style="--mdc-icon-size:14px;"></ha-icon>`:o.s6}
                    ${e.replace(/_/g," ")}
                  </button>
                `})}
            </div>
          `:o.s6,je=o.qy`
      <div class="uc-boiler__header">
        <ha-icon
          icon="${Ce}"
          class="${oe&&"compact"===S.layout?"uc-boiler--pulse":""}"
          style="color:${se};--mdc-icon-size:26px;flex-shrink:0;"
        ></ha-icon>
        <div style="flex:1;min-width:0;">
          ${!1!==S.show_name?o.qy`<div class="uc-boiler__name" style="color:${ie};">${Se}</div>`:o.s6}
          ${!1!==S.show_status?o.qy`<div class="uc-boiler__status" style="color:${se};">
                ${Pe}${"heating"===te&&null!==Z?` · ${Math.round(Z)}%`:""}
              </div>`:o.s6}
        </div>
        ${!1!==S.show_water_temp&&null!==H?o.qy`
              <div class="uc-boiler__big-temp" style="flex-shrink:0;">
                <span style="color:${le};font-size:26px;font-weight:800;">${Fe(H)}</span>
                <span style="color:${ne};font-size:13px;font-weight:600;">${I}</span>
              </div>
            `:o.s6}
        ${Ue}
      </div>
    `;return"compact"===(S.layout||"standard")?o.qy`
        <style>${this.getStyles()}</style>
        <div
          class="uc-boiler-wrapper ${ze}"
          data-uc-role="pane"
          style="padding:12px 16px;border-radius:var(--uc-r-12, 12px);background:${ae};${Me}"
          @pointerdown=${qe.onPointerDown}
          @pointermove=${qe.onPointerMove}
          @pointerup=${qe.onPointerUp}
          @pointerleave=${qe.onPointerLeave}
          @pointercancel=${qe.onPointerCancel}
        >
          ${this.wrapWithAnimation(o.qy`
              ${je}
              ${Te.length||We!==o.s6?o.qy`
                    <div class="uc-boiler__compact-row">
                      ${Te}
                      ${We}
                    </div>
                  `:o.s6}
            `,e,t)}
        </div>
      `:o.qy`
      <style>${this.getStyles()}</style>
      <div
        class="uc-boiler-wrapper ${ze}"
        data-uc-role="pane"
        style="padding:16px;border-radius:var(--uc-r-12, 12px);background:${ae};${Me}"
        @pointerdown=${qe.onPointerDown}
        @pointermove=${qe.onPointerMove}
        @pointerup=${qe.onPointerUp}
        @pointerleave=${qe.onPointerLeave}
        @pointercancel=${qe.onPointerCancel}
      >
        ${this.wrapWithAnimation(o.qy`
            ${je}
            ${(()=>{const e=!1!==S.show_boiler_graphic,t=Te.length>0||We!==o.s6;if(!e&&!t)return o.s6;const r=e?o.qy`
                    <div class="uc-boiler__graphic">
                      ${this._boilerSvg(S.id,le,S.cold_color||u,!!Y&&!ee&&!R,("heating"===te||"dhw"===te)&&!R,ee||R,Z,!1!==S.enable_animations,null!==H?`${Fe(H)}°`:"—")}
                    </div>
                  `:o.s6;return o.qy`
                <div class="uc-boiler__body ${t?"":"uc-boiler__body--graphic-only"}">
                  ${r}
                  ${t?o.qy`
                        <div class="uc-boiler__side">
                          ${Te.length?o.qy`<div class="uc-boiler__metrics uc-boiler__metrics--grid">${Te}</div>`:o.s6}
                          ${We}
                        </div>
                      `:o.s6}
                </div>
              `})()}
            ${Je}
          `,e,t)}
      </div>
    `}_boilerSvg(e,t,r,i,n,a,l,s,c){const d=s,p=i?.6+(null!=l?l:100)/100*.4:0,u=`ucb-${String(e).replace(/[^a-zA-Z0-9_-]/g,"")}`,h="color-mix(in srgb, var(--divider-color) 75%, transparent)",m="color-mix(in srgb, var(--divider-color) 40%, transparent)",_="color-mix(in srgb, #000 78%, var(--card-background-color))",g="color-mix(in srgb, var(--primary-text-color) 22%, var(--card-background-color))",b="color-mix(in srgb, var(--primary-text-color) 10%, var(--card-background-color))",f="color-mix(in srgb, var(--primary-text-color) 30%, transparent)",y=n?t:f,v=a?f:i?t:"#4ade80",w=o.JW`
      <g class="${n&&d?"uc-boiler-fan--spin":""}">
        <circle r="9" fill="none" stroke="none" />
        ${[0,90,180,270].map(e=>o.JW`<path
            d="M 0 -1.4 C 1.8 -7.6, 6.4 -7.4, 6.6 -2.6 C 6.7 0.2, 3.2 1.8, 0 -1.4 Z"
            fill="${y}" opacity="0.95" transform="rotate(${e})" />`)}
        <circle r="2.1" fill="${_}" stroke="${y}" stroke-width="1" />
      </g>
    `,x=(e,t,r,i)=>o.JW`
      <g transform="translate(${r} 92) scale(${e})">
        <g class="${d?t:""}">
          ${i?o.JW`
                <path d="M 0 0 C -7.5 -5.5, -6 -14, 0 -20 C 6 -14, 7.5 -5.5, 0 0 Z" fill="url(#${u}-flame)" />
                <path d="M 0 0 C -4 -3.5, -3.2 -9, 0 -13 C 3.2 -9, 4 -3.5, 0 0 Z" fill="url(#${u}-flame-in)" />
                <path d="M 0 0 C -1.8 -2, -1.4 -4.8, 0 -6.5 C 1.4 -4.8, 1.8 -2, 0 0 Z" fill="#fff6d5" opacity="0.95" />
              `:o.JW`
                <path d="M 0 0 C -4.5 -3.5, -3.5 -9, 0 -12.5 C 3.5 -9, 4.5 -3.5, 0 0 Z" fill="url(#${u}-flame)" opacity="0.9" />
                <path d="M 0 0 C -2 -2, -1.6 -5, 0 -7 C 1.6 -5, 2 -2, 0 0 Z" fill="url(#${u}-flame-in)" />
              `}
        </g>
      </g>
    `;return o.JW`
      <svg viewBox="0 0 100 134" width="104" height="139" aria-hidden="true" class="uc-boiler-svg">
        <defs>
          <linearGradient id="${u}-case" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="color-mix(in srgb, var(--primary-text-color) 16%, var(--card-background-color))" />
            <stop offset="1" stop-color="color-mix(in srgb, var(--primary-text-color) 6%, var(--card-background-color))" />
          </linearGradient>
          <linearGradient id="${u}-panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="color-mix(in srgb, var(--primary-text-color) 4%, var(--card-background-color))" />
            <stop offset="1" stop-color="color-mix(in srgb, #000 22%, var(--card-background-color))" />
          </linearGradient>
          <linearGradient id="${u}-sheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#fff" stop-opacity="0" />
            <stop offset="0.5" stop-color="#fff" stop-opacity="0.16" />
            <stop offset="1" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
          <radialGradient id="${u}-glow" cx="0.5" cy="0.7" r="0.6">
            <stop offset="0" stop-color="#ff9a3c" stop-opacity="0.85" />
            <stop offset="0.55" stop-color="#ff6a00" stop-opacity="0.3" />
            <stop offset="1" stop-color="#ff6a00" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="${u}-flame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#ff5a1f" />
            <stop offset="0.6" stop-color="#ff8f1f" />
            <stop offset="1" stop-color="#ffc94a" />
          </linearGradient>
          <linearGradient id="${u}-flame-in" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#ffb347" />
            <stop offset="1" stop-color="#ffe9a8" />
          </linearGradient>
          <linearGradient id="${u}-pipe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${b}" />
            <stop offset="0.45" stop-color="${g}" />
            <stop offset="1" stop-color="${b}" />
          </linearGradient>
        </defs>

        <!-- Pipes (behind the casing so the fittings sit on top) -->
        <g>
          <rect x="33" y="104" width="7" height="30" rx="3.5" fill="url(#${u}-pipe)" />
          <rect x="60" y="104" width="7" height="30" rx="3.5" fill="url(#${u}-pipe)" />
          <!-- Colored cores: supply hot, return cool -->
          <line x1="36.5" y1="112" x2="36.5" y2="130" stroke="${t}" stroke-width="2.6" stroke-linecap="round" opacity="${n?.55:.28}" />
          <line x1="63.5" y1="112" x2="63.5" y2="130" stroke="${r}" stroke-width="2.6" stroke-linecap="round" opacity="${n?.55:.28}" />
          ${n&&d?o.JW`
                <line x1="36.5" y1="112" x2="36.5" y2="130" stroke="${t}" stroke-width="2.6"
                  stroke-linecap="round" stroke-dasharray="3 5" class="uc-boiler-flow--down" />
                <line x1="63.5" y1="130" x2="63.5" y2="112" stroke="${r}" stroke-width="2.6"
                  stroke-linecap="round" stroke-dasharray="3 5" class="uc-boiler-flow--up" />
              `:o.s6}
          <!-- Union nuts -->
          <rect x="31.5" y="106" width="10" height="4.5" rx="1.2" fill="${g}" stroke="${h}" stroke-width="0.6" />
          <rect x="58.5" y="106" width="10" height="4.5" rx="1.2" fill="${g}" stroke="${h}" stroke-width="0.6" />
          <rect x="32" y="121" width="9" height="3.6" rx="1" fill="${g}" stroke="${h}" stroke-width="0.5" />
          <rect x="59" y="121" width="9" height="3.6" rx="1" fill="${g}" stroke="${h}" stroke-width="0.5" />
        </g>

        <!-- Casing shadow + body -->
        <rect x="22" y="9.5" width="56" height="98" rx="10" fill="#000" opacity="0.22" />
        <rect x="22" y="7" width="56" height="98" rx="10" fill="url(#${u}-case)" stroke="${h}" stroke-width="1" />
        <rect x="22" y="7" width="56" height="98" rx="10" fill="url(#${u}-sheen)" opacity="0.6" />
        ${i?o.JW`<rect x="22" y="7" width="56" height="98" rx="10" fill="${t}" opacity="0.06" />`:o.s6}
        <!-- Top vent slots -->
        ${[13,16.5].map(e=>o.JW`<rect x="36" y="${e}" width="28" height="1.5" rx="0.75" fill="${h}" />`)}

        <!-- Front panel -->
        <rect x="28" y="23" width="44" height="78" rx="7" fill="url(#${u}-panel)" stroke="${m}" stroke-width="0.8" />

        <!-- Display -->
        <rect x="34" y="29" width="32" height="12.5" rx="3" fill="${_}" stroke="${m}" stroke-width="0.6" />
        <text
          x="48.5" y="38.3"
          text-anchor="middle"
          font-size="7.6"
          font-weight="700"
          font-family="inherit"
          letter-spacing="0.2"
          fill="${a?f:t}"
        >${c}</text>
        <circle cx="62.5" cy="32" r="1.1" fill="${v}" class="${i&&d?"uc-boiler-led--blink":""}" />

        <!-- Fan -->
        <g transform="translate(50 56.5)">
          <circle r="10.5" fill="${_}" stroke="${h}" stroke-width="0.9" />
          <circle r="8" fill="none" stroke="${m}" stroke-width="0.6" />
          ${w}
        </g>

        <!-- Burner viewport -->
        <g>
          ${i?o.JW`<circle cx="50" cy="84" r="17" fill="url(#${u}-glow)" />`:o.s6}
          <circle cx="50" cy="84" r="12.5" fill="${_}" stroke="${h}" stroke-width="1" />
          <circle cx="50" cy="84" r="11" fill="none" stroke="${i?t:m}" stroke-width="0.7" opacity="${i?.5:1}" />
          ${i?o.JW`
                ${x(.5*p,"uc-boiler-flame--flicker2",43.5,!1)}
                ${x(.5*p,"uc-boiler-flame--flicker3",56.5,!1)}
                ${x(p,"uc-boiler-flame--flicker",50,!0)}
              `:o.JW`
                <g opacity="0.6">
                  <rect x="43" y="89.5" width="14" height="1.8" rx="0.9" fill="${f}" />
                  ${[45,48.5,52,55.5].map(e=>o.JW`<rect x="${e-.5}" y="87.5" width="1" height="2" rx="0.5" fill="${f}" />`)}
                </g>
              `}
        </g>
      </svg>
    `}_tempColor(e,t){var r,o;const i=e.cold_color||u,n=e.warm_color||h,a=e.hot_color||m;if(null===t)return"var(--secondary-text-color)";const l=null!==(r=e.cold_temp)&&void 0!==r?r:30,s=null!==(o=e.hot_temp)&&void 0!==o?o:60;if(t<=l)return i;if(t>=s)return a;const c=(l+s)/2;return t<=c?`color-mix(in srgb, ${n} ${Math.round((t-l)/Math.max(1e-6,c-l)*100)}%, ${i})`:`color-mix(in srgb, ${a} ${Math.round((t-c)/Math.max(1e-6,s-c)*100)}%, ${n})`}_alpha(e){return`color-mix(in srgb, ${e} 14%, transparent)`}validate(e){const t=[],r=e;return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),r.entity||t.push("Select a boiler entity"),{valid:0===t.length,errors:t}}getStyles(){return"\n      .uc-boiler-wrapper { box-sizing: border-box; }\n\n      .uc-boiler__header {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n      }\n      .uc-boiler__name {\n        font-weight: 600;\n        font-size: 15px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-boiler__status {\n        font-size: 12px;\n        font-weight: 500;\n      }\n      .uc-boiler__big-temp {\n        display: flex;\n        align-items: baseline;\n        gap: 2px;\n      }\n\n      .uc-boiler__power {\n        flex-shrink: 0;\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        border: none;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(127, 127, 127, 0.15);\n        color: var(--secondary-text-color);\n        transition: background 0.2s ease;\n      }\n      .uc-boiler__power.is-on { color: var(--text-primary-color, #fff); }\n      .uc-boiler__power:disabled { opacity: 0.5; cursor: not-allowed; }\n\n      .uc-boiler__body {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n        margin-top: 12px;\n      }\n      .uc-boiler__body--graphic-only { justify-content: center; }\n      .uc-boiler__graphic {\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .uc-boiler-svg { display: block; overflow: visible; }\n      .uc-boiler__side {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: 8px;\n      }\n\n      .uc-boiler__compact-row {\n        display: flex;\n        align-items: stretch;\n        gap: 6px;\n        margin-top: 10px;\n        flex-wrap: wrap;\n      }\n      /* Compact: tiles and the target share one wrapping row and grow to fill it */\n      .uc-boiler__compact-row .uc-boiler__metric { flex: 1 1 auto; }\n      .uc-boiler__compact-row .uc-boiler__target {\n        flex: 1 1 160px;\n        width: auto;\n        justify-content: space-between;\n      }\n      .uc-boiler__compact-row .uc-boiler__target .uc-boiler__target-val { flex: 1; }\n\n      /* Standard: tiles fill whatever width they are given. 1 tile spans, 2 sit\n         side by side, 3 wrap to 2 + 1 (the last one spanning) so no gaps are left. */\n      .uc-boiler__metrics--grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));\n        gap: 8px;\n      }\n      .uc-boiler__metrics--grid > .uc-boiler__metric:last-child:nth-child(odd) { grid-column: 1 / -1; }\n      /* A lone tile next to the graphic gets more presence so it doesn't look lost */\n      .uc-boiler__metrics--grid > .uc-boiler__metric:only-child { padding: 12px 10px; gap: 5px; }\n      .uc-boiler__metrics--grid > .uc-boiler__metric:only-child .uc-boiler__metric-val { font-size: 20px; }\n      .uc-boiler__metric {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 3px;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-10, 10px);\n        background: color-mix(in srgb, var(--divider-color) 8%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 30%, transparent);\n        min-width: 0;\n      }\n      .uc-boiler__metric--inline {\n        flex-direction: row;\n        gap: 8px;\n        padding: 6px 10px;\n      }\n      .uc-boiler__metric--warn {\n        border-color: color-mix(in srgb, var(--warning-color, #FF9800) 45%, transparent);\n        background: color-mix(in srgb, var(--warning-color, #FF9800) 8%, transparent);\n      }\n      .uc-boiler__metric-head {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        min-width: 0;\n      }\n      .uc-boiler__metric-val {\n        font-size: 15px;\n        font-weight: 700;\n        white-space: nowrap;\n        line-height: 1.1;\n      }\n      .uc-boiler__metric--inline .uc-boiler__metric-val { font-size: 13px; }\n      .uc-boiler__metric-label {\n        font-size: 10px;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.05em;\n        white-space: nowrap;\n      }\n\n      .uc-boiler__target {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 4px;\n        border-radius: var(--uc-r-10, 10px);\n        background: color-mix(in srgb, var(--divider-color) 8%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 30%, transparent);\n        width: fit-content;\n      }\n      .uc-boiler__target--fill {\n        width: auto;\n        justify-content: space-between;\n      }\n      .uc-boiler__target--fill .uc-boiler__target-val { flex: 1; }\n      .uc-boiler__target-val {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        line-height: 1.15;\n        min-width: 52px;\n      }\n      .uc-boiler__step {\n        width: 30px;\n        height: 30px;\n        border-radius: var(--uc-r-8, 8px);\n        border: none;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: color-mix(in srgb, var(--divider-color) 18%, transparent);\n        color: var(--primary-text-color);\n      }\n      .uc-boiler__step:hover { background: color-mix(in srgb, var(--divider-color) 30%, transparent); }\n      .uc-boiler__step:disabled { opacity: 0.4; cursor: not-allowed; }\n\n      /* Mode chips share each row evenly instead of leaving a gap at the end */\n      .uc-boiler__modes {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 6px;\n        margin-top: 12px;\n      }\n      .uc-boiler__mode {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 5px;\n        flex: 1 1 calc(100% / var(--uc-boiler-mode-cols, 4) - 6px);\n        min-width: 72px;\n        white-space: nowrap;\n        padding: 6px 12px;\n        border-radius: var(--uc-r-16, 16px);\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        font-size: 12px;\n        font-weight: 600;\n        cursor: pointer;\n        text-transform: capitalize;\n      }\n      .uc-boiler__mode:disabled { opacity: 0.5; cursor: not-allowed; }\n\n      /* ── Animations ── */\n      .uc-boiler--pulse { animation: uc-boiler-pulse 2s ease-in-out infinite; }\n      @keyframes uc-boiler-pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.55; }\n      }\n\n      .uc-boiler-fan--spin {\n        animation: uc-boiler-spin 1.4s linear infinite;\n        transform-box: fill-box;\n        transform-origin: center;\n      }\n      @keyframes uc-boiler-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n\n      /* Flames stretch from their base (bottom of their own box) and shimmer */\n      .uc-boiler-flame--flicker,\n      .uc-boiler-flame--flicker2,\n      .uc-boiler-flame--flicker3 {\n        transform-box: fill-box;\n        transform-origin: 50% 100%;\n      }\n      .uc-boiler-flame--flicker { animation: uc-boiler-flicker 0.55s ease-in-out infinite alternate; }\n      .uc-boiler-flame--flicker2 { animation: uc-boiler-flicker 0.42s ease-in-out infinite alternate-reverse; }\n      .uc-boiler-flame--flicker3 { animation: uc-boiler-flicker 0.63s ease-in-out infinite alternate; }\n      @keyframes uc-boiler-flicker {\n        from { opacity: 0.85; transform: scaleY(0.9) scaleX(1.04); }\n        to { opacity: 1; transform: scaleY(1.08) scaleX(0.96); }\n      }\n\n      .uc-boiler-led--blink { animation: uc-boiler-led 1.6s ease-in-out infinite; }\n      @keyframes uc-boiler-led {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.35; }\n      }\n\n      .uc-boiler-flow--down { animation: uc-boiler-flow-down 1s linear infinite; }\n      .uc-boiler-flow--up { animation: uc-boiler-flow-up 1s linear infinite; }\n      @keyframes uc-boiler-flow-down {\n        from { stroke-dashoffset: 0; }\n        to { stroke-dashoffset: -9; }\n      }\n      @keyframes uc-boiler-flow-up {\n        from { stroke-dashoffset: 0; }\n        to { stroke-dashoffset: -9; }\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-boiler-fan--spin,\n        .uc-boiler-flame--flicker,\n        .uc-boiler-flame--flicker2,\n        .uc-boiler-flame--flicker3,\n        .uc-boiler-flow--down,\n        .uc-boiler-flow--up,\n        .uc-boiler-led--blink,\n        .uc-boiler--pulse { animation: none; }\n      }\n    "}}},3488(e,t,r){r.d(t,{SB:()=>s,b5:()=>l,gf:()=>a});var o=r(2618),i=r(378),n=r(6478);function a(e){var t,r,o,n;if(!e)return!1;try{const a=i.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==a?void 0:a.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(r=null==a?void 0:a.subscription)||void 0===r?void 0:r.status))return!0;if(i.xd.isAuthenticated()){const e=i.xd.getCurrentUser();if("pro"===(null===(o=null==e?void 0:e.subscription)||void 0===o?void 0:o.tier)&&"active"===(null===(n=null==e?void 0:e.subscription)||void 0===n?void 0:n.status))return!0}}catch(e){return!1}return!1}function l(e,t){return o.qy`
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
        ${(0,n.kg)("editor.pro.feature_locked",e,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${t}
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
        ${(0,n.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function s(e,t){return o.qy`
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
        <div style="font-weight: 700; color: var(--primary-text-color);">${t}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,n.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};