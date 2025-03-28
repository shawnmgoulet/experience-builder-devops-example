System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-arcgis","jimu-core/react"],(function(e,t){var s={},i={},o={},a={},n={},r={};return{setters:[function(e){s.AllDataSourceTypes=e.AllDataSourceTypes,s.FormattedMessage=e.FormattedMessage,s.Immutable=e.Immutable,s.React=e.React,s.SessionManager=e.SessionManager,s.css=e.css,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.getAppStore=e.getAppStore,s.hooks=e.hooks,s.jsx=e.jsx,s.polished=e.polished},function(e){i.Alert=e.Alert,i.Checkbox=e.Checkbox,i.ImageWithParam=e.ImageWithParam,i.Label=e.Label,i.Radio=e.Radio,i.Switch=e.Switch,i.defaultMessages=e.defaultMessages},function(e){o.JimuLayerViewSelector=e.JimuLayerViewSelector,o.MapWidgetSelector=e.MapWidgetSelector,o.MultipleJimuMapConfig=e.MultipleJimuMapConfig,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){a.DataSourceSelector=e.DataSourceSelector},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent,n.MapViewManager=e.MapViewManager},function(e){r.createRef=e.createRef}],execute:function(){e((()=>{var e={62686:e=>{"use strict";e.exports=n},79244:e=>{"use strict";e.exports=s},68972:e=>{"use strict";e.exports=r},14321:e=>{"use strict";e.exports=i},13089:e=>{"use strict";e.exports=a},79298:e=>{"use strict";e.exports=o}},t={};function l(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,l),o.exports}l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var p={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(p),l.d(p,{__set_webpack_public_path__:()=>w,default:()=>m});var e=l(79244),t=l(14321),s=l(79298),i=l(13089);const o={sourceLabel:"Source",sourceDescript:"A web map or web scene, or any combination of the two.",goto:"Zoom to",layerTransparency:"Adjust layer transparency",information:"View layer details",setVisibility:"Toggle layer visibility",showOrHideLabels:"Show or hide labels",showLayerForMap:"Show layers for map data only",customizeLayerDesc:"Select the layers to display for users.",customizeLayerWarnings:"The selected Map widget does not contain a web map or web scene.",enableLegend:"Show legend",showAllLegend:"Show legend for all visible layers by default",useTickBoxes:"Use tick boxes to control layer visibility",reorderLayers:"Reorder layers",searchLayers:"Search layers",showTables:"Show tables",popup:"Enable or disable pop-up",customizeDescription:"Specify which layers will be displayed for each map",expandAllLayersByDefault:"Expand all layers by default",visibilityRange:"Visibility range",showRuntimeAddedLayers:"Display layers generated at runtime",layerBatchOptions:"Enable layer batch options"};class a extends e.React.PureComponent{constructor(t){super(t),this.unmount=!1,this.setMapThumbUrl=t=>{if(t||this.setState({mapThumbUrl:null}),this.props.portUrl&&this.props.portUrl!==(0,e.getAppStore)().getState().portalUrl)e.esri.restPortal.searchItems({q:`id:${t}`,portal:this.props.portUrl+"/sharing/rest"}).then((e=>{if(!this.unmount)if(e.results[0]){const t=`${this.props.portUrl}/sharing/rest/content/items/${e.results[0].id}/info/${e.results[0].thumbnail}`;this.setState({mapThumbUrl:t})}else this.setState({mapThumbUrl:null})}));else{const s=(0,e.getAppStore)().getState().portalUrl,i=e.SessionManager.getInstance().getSessionByUrl(s);e.esri.restPortal.searchItems({q:`id:${t}`,authentication:e.SessionManager.getInstance().getSessionByUrl(s),portal:s+"/sharing/rest"}).then((e=>{if(!this.unmount)if(e.results[0]){const t=`${s}/sharing/rest/content/items/${e.results[0].id}/info/${e.results[0].thumbnail}?token=${null==i?void 0:i.token}`;this.setState({mapThumbUrl:t})}else this.setState({mapThumbUrl:null})}))}},this.state={mapThumbUrl:null}}componentDidMount(){this.unmount=!1,this.setMapThumbUrl(this.props.mapItemId)}componentDidUpdate(e,t){e.mapItemId!==this.props.mapItemId&&this.setMapThumbUrl(this.props.mapItemId)}componentWillUnmount(){this.unmount=!0}render(){return this.state.mapThumbUrl?e.React.createElement(t.ImageWithParam,{imageParam:{url:this.state.mapThumbUrl}}):e.React.createElement(t.ImageWithParam,{imageParam:{}})}}var n=l(62686),r=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};function d(i){var a,l;const{mapViewId:p,isCustomizeEnabled:d,settingProps:u}=i,c=e.hooks.useTranslation(o,e.defaultMessages),h=n.MapViewManager.getInstance().getJimuMapViewById(p),g=e.React.useCallback((()=>{let e=Object.keys((null==h?void 0:h.jimuLayerViews)||{});return e=e.concat(...Object.keys(null==h?void 0:h.jimuTables)),e}),[null==h?void 0:h.jimuLayerViews,null==h?void 0:h.jimuTables]),m=e.React.useMemo((()=>{var e,t,s,i,o,a,n,r,l;if(null===(s=null===(t=null===(e=u.config)||void 0===e?void 0:e.customizeLayerOptions)||void 0===t?void 0:t[p])||void 0===s?void 0:s.showJimuLayerViewIds)return null===(a=null===(o=null===(i=u.config)||void 0===i?void 0:i.customizeLayerOptions)||void 0===o?void 0:o[p])||void 0===a?void 0:a.showJimuLayerViewIds.asMutable();const d=g(),c=new Set(null===(l=null===(r=null===(n=u.config)||void 0===n?void 0:n.customizeLayerOptions)||void 0===r?void 0:r[p])||void 0===l?void 0:l.hiddenJimuLayerViewIds);return d.filter((e=>!c.has(e)))}),[g,p,null===(a=u.config)||void 0===a?void 0:a.customizeLayerOptions]),w=(e,t)=>r(this,void 0,void 0,(function*(){const s=g();if(!t){const e=new Set(m),t=s.filter((t=>!e.has(t)));for(const e of t){let t=null;if(h.jimuTables[e])t=h.jimuTables[e];else{t=(yield h.whenJimuLayerViewLoaded(e)).layer}t.listMode="show"}}u.onSettingChange({id:u.id,config:u.config.setIn(["customizeLayerOptions",e],{isEnabled:t,hiddenJimuLayerViewIds:[],showJimuLayerViewIds:t?[...s]:[]})})}));return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("div",{className:"w-100 h-100",css:(S=u.theme,e.css`
    .layer-item-panel {
      .setting-header {
        padding: ${e.polished.rem(10)} ${e.polished.rem(16)} ${e.polished.rem(0)} ${e.polished.rem(16)}
      }
      .setting-title {
        font-size: ${e.polished.rem(16)};
        .layer-item-label{
          color: ${S.ref.palette.neutral[1e3]};
        }
      }
      .setting-container {
        height: calc(100% - ${e.polished.rem(50)});
        overflow: auto;

        .title-desc {
          color: ${S.ref.palette.neutral[800]};
        }

        .ep-divider-bottom {
          border-bottom: 1px solid var(--ref-palette-neutral-700)
        }

        .ep-divider-hide {
          border-bottom: none !important
        }

        .ep-section-title {
          max-width: 80%;
          color: var(--ref-palette-neutral-1100);
        }
      }
    }
  `)},(0,e.jsx)("div",{className:"w-100 h-100 layer-item-panel"},(0,e.jsx)(s.SettingSection,null,(0,e.jsx)(s.SettingRow,{tag:"label",label:c("customizeLayers")},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:d,"data-key":"customizeLayers",onChange:e=>{w(p,e.target.checked)}})),d&&(0,e.jsx)(s.SettingRow,{tag:"label",label:c("showRuntimeAddedLayers")},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:null===(l=u.config.customizeLayerOptions[p].showRuntimeAddedLayers)||void 0===l||l,"data-key":"showRuntimeAddedLayers",onChange:e=>{const t=u.config.setIn(["customizeLayerOptions",p,"showRuntimeAddedLayers"],e.target.checked);u.onSettingChange({id:u.id,config:t})}}))),d&&(0,e.jsx)(s.SettingSection,null,(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(s.JimuLayerViewSelector,{key:p,jimuMapViewId:p,onChange:e=>{const t=u.config.setIn(["customizeLayerOptions",p,"showJimuLayerViewIds"],e);u.onSettingChange({id:u.id,config:t})},isMultiSelection:!0,selectedValues:m,isShowTables:!0}))))));var S}var u=l(68972),c=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function n(e){try{l(i.next(e))}catch(e){a(e)}}function r(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((i=i.apply(e,t||[])).next())}))};const h=Object.assign({},o,t.defaultMessages);class g extends e.React.PureComponent{constructor(i){super(i),this.supportedDsTypes=(0,e.Immutable)([e.AllDataSourceTypes.WebMap,e.AllDataSourceTypes.WebScene]),this.customizeLayersTrigger=(0,u.createRef)(),this.getPortUrl=()=>(0,e.getAppStore)().getState().portalUrl,this.shouldShowCustomizeLayerOptions=()=>{var e;return(null===(e=this.props.useMapWidgetIds)||void 0===e?void 0:e.length)>0},this.shouldShowLayerList=()=>!this.isDataSourceEmpty(),this.isCustomizeOptionEmpty=()=>this.isDataSourceEmpty()&&!this.shouldShowCustomizeWarning(),this.onRadioChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("useMapWidget",e)}),this.setState({useMapWidget:e})},this.onOptionsChanged=(e,t)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set(t,e)})},this.onToggleUseDataEnabled=e=>{this.props.onSettingChange({id:this.props.id,useDataSourcesEnabled:e})},this.onDataSourceChange=e=>{e&&this.props.onSettingChange({id:this.props.id,useDataSources:e})},this.onMapWidgetSelected=e=>c(this,void 0,void 0,(function*(){var t,s,i,o,a,r,l;const p=(null===(t=n.MapViewManager.getInstance().getJimuMapViewGroup(e[0]))||void 0===t?void 0:t.jimuMapViews)||{};this.setState({mapViews:p}),this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e});const d=(null===(i=n.MapViewManager.getInstance().getJimuMapViewGroup(null===(s=this.props.useMapWidgetIds)||void 0===s?void 0:s[0]))||void 0===i?void 0:i.jimuMapViews)||{};if((null===(o=this.props.useMapWidgetIds)||void 0===o?void 0:o.length)>0&&d){const e=null===(a=Object.values(d))||void 0===a?void 0:a[0],t=null===(l=null===(r=this.props.config)||void 0===r?void 0:r.customizeLayerOptions)||void 0===l?void 0:l[null==e?void 0:e.id];if(null==t?void 0:t.isEnabled){const s=new Set(null==t?void 0:t.hiddenJimuLayerViewIds);for(const t of Object.keys(null==e?void 0:e.jimuLayerViews)){const i=yield e.whenJimuLayerViewLoaded(t),o=null==i?void 0:i.layer;s.has(t)&&(o.listMode="show")}}}})),this.onViewsCreate=e=>{const t=Object.keys(e);this.setState({mapViews:e,viewIdsFromMapWidget:t})},this.onListItemBodyClick=e=>{var t;const s=`${null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t[0]}-${e}`;this.setState({activeCustomizeJmvId:s})},this.getActiveCustomizeStatus=()=>{var e,t,s;return(null===(s=null===(t=null===(e=this.props.config)||void 0===e?void 0:e.customizeLayerOptions)||void 0===t?void 0:t[this.state.activeCustomizeJmvId])||void 0===s?void 0:s.isEnabled)||!1},this.getCustomizeLayerList=()=>{var t;return(0,e.jsx)("div",{ref:this.customizeLayersTrigger,className:"w-100"},(0,e.jsx)(s.MultipleJimuMapConfig,{mapWidgetId:null===(t=this.props.useMapWidgetIds)||void 0===t?void 0:t[0],forwardRef:e=>{this.customizeLayersRef=e},"aria-describedby":"multiple-jimu-map-desc",onClick:this.onListItemBodyClick,sidePopperContent:(0,e.jsx)(d,{mapViewId:this.state.activeCustomizeJmvId,isCustomizeEnabled:this.getActiveCustomizeStatus(),settingProps:this.props})}))},this.getCustomizeSettingContent=()=>{const i=(0,e.jsx)(t.Label,{id:"multiple-jimu-map-desc"},this.getTranslatedString("customizeDescription"));return this.shouldShowCustomizeLayerOptions()&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingRow,{label:i,flow:"wrap","aria-label":this.getTranslatedString("customizeDescription"),className:this.isCustomizeOptionEmpty()?"empty-customize-layer-list":"customize-layer-list"},this.shouldShowCustomizeWarning()&&(0,e.jsx)(t.Alert,{tabIndex:0,className:"warningMsg",open:!0,text:this.getTranslatedString("customizeLayerWarnings"),type:"warning"}),this.shouldShowLayerList()&&this.getCustomizeLayerList()))},this.shouldShowCustomizeWarning=()=>!this.state.useMapWidget||this.isDataSourceEmpty(),this.isDataSourceEmpty=()=>{var e,t,s;const i=(null===(e=n.MapViewManager.getInstance().getJimuMapViewGroup(this.props.useMapWidgetIds[0]))||void 0===e?void 0:e.jimuMapViews)||{};return 1===Object.keys(i).length&&!(null===(s=null===(t=Object.values(i))||void 0===t?void 0:t[0])||void 0===s?void 0:s.dataSourceId)},this.state={mapViews:null,useMapWidget:this.props.config.useMapWidget||!1,viewIdsFromMapWidget:null,activeCustomizeJmvId:""}}setDefaultConfig(){var e;void 0===(null===(e=this.props.config)||void 0===e?void 0:e.showTables)&&this.props.onSettingChange({id:this.props.id,config:this.props.config.set("showTables",!0)})}getTranslatedString(e){return this.props.intl.formatMessage({id:e,defaultMessage:h[e]})}getFormattedMessage(t){return(0,e.jsx)(e.FormattedMessage,{id:t,defaultMessage:h[t]})}getSwitchOption(i,o){return(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingRow,{tag:"label",label:this.getFormattedMessage(o||i)},(0,e.jsx)(t.Switch,{className:"can-x-switch",checked:this.props.config&&this.props.config[i]||!1,"data-key":i,onChange:e=>{this.onOptionsChanged(e.target.checked,i)}})))}render(){var o,r;const l=this.getPortUrl();let p=null,d=null,u=null,c=null,h=null;return d=(0,e.jsx)("div",{className:"data-selector-section"},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(i.DataSourceSelector,{types:this.supportedDsTypes,useDataSources:this.props.useDataSources,useDataSourcesEnabled:!0,mustUseDataSource:!0,onChange:this.onDataSourceChange,widgetId:this.props.id})),l&&this.props.dsJsons&&this.props.useDataSources&&1===this.props.useDataSources.length&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"w-100"},(0,e.jsx)("div",{className:"webmap-thumbnail",title:null===(o=this.props.dsJsons[this.props.useDataSources[0].dataSourceId])||void 0===o?void 0:o.label},(0,e.jsx)(a,{mapItemId:this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?this.props.dsJsons[this.props.useDataSources[0].dataSourceId].itemId:null,portUrl:this.props.dsJsons[this.props.useDataSources[0].dataSourceId]?this.props.dsJsons[this.props.useDataSources[0].dataSourceId].portalUrl:null}))))),u=(0,e.jsx)("div",{className:"map-selector-section"},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds})),(0,e.jsx)(n.JimuMapViewComponent,{useMapWidgetId:null===(r=this.props.useMapWidgetIds)||void 0===r?void 0:r[0],onViewsCreate:this.onViewsCreate}),this.getCustomizeSettingContent()),this.state.useMapWidget?(p=u,c=(0,e.jsx)(e.React.Fragment,null,this.getSwitchOption("goto"),this.getSwitchOption("label","showOrHideLabels"),this.getSwitchOption("popup"),this.getSwitchOption("opacity","transparency"),this.getSwitchOption("visibilityRange"),this.getSwitchOption("information")),h=(0,e.jsx)(e.React.Fragment,null,this.getSwitchOption("useTickBoxes"),this.getSwitchOption("enableLegend"),this.props.config&&this.props.config.enableLegend&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(t.Label,{"aria-label":this.getTranslatedString("showAllLegend"),className:"cursor-pointer"},(0,e.jsx)(t.Checkbox,{className:"mr-2",checked:this.props.config&&this.props.config.showAllLegend,onChange:e=>{this.onOptionsChanged(e.target.checked,"showAllLegend")}}),(0,e.jsx)("span",{className:"check-box-label"},` ${this.getTranslatedString("showAllLegend")}`))),this.getSwitchOption("reorderLayers"),this.getSwitchOption("searchLayers"),this.getSwitchOption("expandAllLayers","expandAllLayersByDefault"),this.getSwitchOption("layerBatchOptions"),this.getSwitchOption("showTables"))):(p=d,c=(0,e.jsx)(e.React.Fragment,null,this.getSwitchOption("information")),h=(0,e.jsx)(e.React.Fragment,null,this.getSwitchOption("expandAllLayers","expandAllLayersByDefault"),this.getSwitchOption("layerBatchOptions"),this.getSwitchOption("showTables"))),(0,e.jsx)("div",{css:(g=this.props.theme,e.css`
    .widget-setting-layerlist{
      .source-descript {
        color: ${g.ref.palette.neutral[1e3]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${e.polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .warning-tooltip{
        .jimu-icon-component {
          color: ${g.sys.color.warning.main}
        }
      }

      .layerlist-tools{
        .layerlist-tools-item{
          display: flex;
          /* justify-content: space-between; */
          margin-bottom: 8px;
          align-items: center;
        }
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .data-selector-section, .map-selector-section{
        padding-top: 10px;
      }

      .check-box-label {
        color: ${g.ref.palette.neutral[1e3]};
        font-weight: 400;
        line-height: ${e.polished.rem(18)};
      }

      .cursor-pointer {
        cursor: pointer;
      }

    }
  `)},(0,e.jsx)("div",{className:"widget-setting-layerlist"},(0,e.jsx)(s.SettingSection,{title:this.getTranslatedString("sourceLabel"),role:"group","aria-label":this.getTranslatedString("sourceLabel")},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)("div",{className:"layerlist-tools w-100"},(0,e.jsx)("div",{className:"w-100"},(0,e.jsx)("div",{className:"layerlist-tools-item radio"},(0,e.jsx)(t.Radio,{id:"map-data",style:{cursor:"pointer"},name:"source-option",onChange:e=>{this.onRadioChange(!1)},checked:!this.state.useMapWidget}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"map-data",className:"ml-1"},this.getTranslatedString("showLayerForMap")))),(0,e.jsx)("div",{className:"w-100"},(0,e.jsx)("div",{className:"layerlist-tools-item radio"},(0,e.jsx)(t.Radio,{id:"map-view",style:{cursor:"pointer"},name:"source-option",onChange:e=>{this.onRadioChange(!0)},checked:this.state.useMapWidget}),(0,e.jsx)(t.Label,{style:{cursor:"pointer"},for:"map-view",className:"ml-1"},this.getTranslatedString("interactWithMap")))))),p),(0,e.jsx)(s.SettingSection,{title:this.getTranslatedString("options"),role:"group","aria-label":this.getTranslatedString("options")},c,h)));var g}}g.mapExtraStateProps=e=>({dsJsons:e.appStateInBuilder.appConfig.dataSources});const m=g;function w(e){l.p=e}})(),p})())}}}));