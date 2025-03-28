System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},n={};return{setters:[function(e){a.AbstractMessageAction=e.AbstractMessageAction,a.AppMode=e.AppMode,a.DataSourceManager=e.DataSourceManager,a.DataSourcesChangeType=e.DataSourcesChangeType,a.Immutable=e.Immutable,a.MessageCarryData=e.MessageCarryData,a.MessageType=e.MessageType,a.MutableStoreManager=e.MutableStoreManager,a.RecordSetChangeType=e.RecordSetChangeType,a.getAppStore=e.getAppStore},function(e){n.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={62686:e=>{"use strict";e.exports=n},79244:e=>{"use strict";e.exports=a}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var r={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(r),o.d(r,{default:()=>S});var e=o(79244),t=o(62686);function a(e,t){let a=null;return e.clone?a=e.clone():(a=t.fromJSON(Object.assign({},e)),a.attributes=Object.assign({},e.attributes)),a}function n(t,a,n){if(t&&a){const o=(0,e.getAppStore)().getState().appConfig.messageConfigs;if(o){return s(t,a,o,n,["zoomToFeature"])}}return!1}function s(e,t,a,n,o){if(a){const r=Object.values(a);for(let a=0;a<r.length;a++){const s=r[a];if(s.widgetId===e&&s.messageType===n){const e=s.actions;for(let a=0;a<e.length;a++){const n=e[a];if(n.widgetId===t&&o.includes(n.actionName))return!0}}}}return!1}function i(t,a){var n,o;const r=c(),s=null===(n=null==r?void 0:r.widgets)||void 0===n?void 0:n[t],i=null===(o=null==s?void 0:s.manifest)||void 0===o?void 0:o.publishMessages;let u=e.MessageCarryData.UseDataSource;return null==i||i.forEach((e=>{const t=e;(null==t?void 0:t.messageCarryData)&&(null==t?void 0:t.messageType)===a&&(u=null==t?void 0:t.messageCarryData)})),u}function u(t,a){var n;const o=i(t,a),r=c(),s=null===(n=null==r?void 0:r.widgets)||void 0===n?void 0:n[t],u=(null==s?void 0:s.useDataSources)||(0,e.Immutable)([]),d=function(t){var a;const n=null!==(a=null==t?void 0:t.map((e=>({dataSourceId:e,mainDataSourceId:e,rootDataSourceId:null}))))&&void 0!==a?a:[];return(0,e.Immutable)(n)}(null==s?void 0:s.outputDataSources)||(0,e.Immutable)([]),g=function(t){const a=[],n=l(t),o=null==n?void 0:n.useMapWidgetIds,r={};(null==o?void 0:o.length)>0&&o.forEach((e=>{if(e){const t=l(e),n=null==t?void 0:t.useDataSources;n&&n.forEach((e=>{var t;const n=null===(t=null==e?void 0:e.asMutable)||void 0===t?void 0:t.call(e,{deep:!0});n&&n.dataSourceId&&!r[n.dataSourceId]&&(r[n.dataSourceId]=!0,a.push(n))}))}}));return(0,e.Immutable)(a)}(t),p=d,S=(null==s?void 0:s.useDataSources)?u:g,f=(0,e.Immutable)(S.asMutable({deep:!0}).concat(p.asMutable({deep:!0})));switch(o){case e.MessageCarryData.OutputDataSource:return p;case e.MessageCarryData.UseDataSource:return S;case e.MessageCarryData.BothDataSource:return f}}function l(e){var t;if(!e)return null;const a=c();return null===(t=null==a?void 0:a.widgets)||void 0===t?void 0:t[e]}function c(){var t,a,n;return window.jimuConfig.isBuilder?null===(a=null===(t=(0,e.getAppStore)().getState())||void 0===t?void 0:t.appStateInBuilder)||void 0===a?void 0:a.appConfig:null===(n=(0,e.getAppStore)().getState())||void 0===n?void 0:n.appConfig}function d(){var t;const a=function(){var t;return(null===(t=window.jimuConfig)||void 0===t?void 0:t.isBuilder)?(0,e.getAppStore)().getState().appStateInBuilder:(0,e.getAppStore)().getState()}();return(null===(t=null==a?void 0:a.appRuntimeInfo)||void 0===t?void 0:t.appMode)===e.AppMode.Express}function g(t){const a=(0,e.getAppStore)().getState().appRuntimeInfo.appMode;if(t.messageType===e.MessageType.ExtentChange)return a!==e.AppMode.Express;if(t.messageType===e.MessageType.DataSourcesChange)return!0;if(t.messageType!==e.MessageType.DataRecordSetChange&&t.messageType!==e.MessageType.DataRecordsSelectionChange&&t.messageType!==e.MessageType.DataSourceFilterChange)return!1;{const a=e.DataSourceManager.getInstance(),n=u(t.widgetId,t.messageType);return!(0!==n.length||!function(t){var a;const n=t.widgetId;if((t.messageType===e.MessageType.DataRecordSetChange||t.messageType===e.MessageType.DataRecordsSelectionChange)&&n){const e=l(n);if(e&&"widgets/common/search/"===e.uri&&(null===(a=e.useMapWidgetIds)||void 0===a?void 0:a.length)>0)return!0}return!1}(t))||n.some((e=>{const t=a.getDataSource(e.dataSourceId);return!!t&&("WEB_MAP"===t.type||"WEB_SCENE"===t.type||!!t.getGeometryType())}))}}function p(e){const t=d(),a=null==e?void 0:e.useAnyTriggerData;return t||a}class S extends e.AbstractMessageAction{constructor(){super(...arguments),this.NoLockTriggerLayerWidgets=["Map"]}filterMessageDescription(e){return g(e)}filterMessage(e){return!0}getDefaultMessageActionConfig(t){const a={useDataSource:null,useDataSources:[],goToInitialMapExtentWhenSelectionCleared:!1};return t.type!==e.MessageType.DataRecordsSelectionChange&&t.type!==e.MessageType.DataSourceFilterChange||(a.useAnyTriggerData=!0),a}getSettingComponentUri(t,a){const n=(0,e.getAppStore)().getState().appRuntimeInfo.appMode;return t===e.MessageType.DataRecordsSelectionChange||t===e.MessageType.DataSourceFilterChange?n===e.AppMode.Express?null:"message-actions/pan-to-action-setting":null}onExecute(o,r){return(0,t.loadArcGISJSAPIModules)(["esri/Graphic"]).then((t=>{let s=null;switch([s]=t,o.type){case e.MessageType.DataRecordSetChange:if(n(o.widgetId,this.widgetId,e.MessageType.DataRecordSetChange))break;const t=o;if(t.changeType===e.RecordSetChangeType.CreateUpdate){const n=[];t.dataRecordSets.forEach((e=>{if(e&&e.records)for(let t=0;t<e.records.length;t++){const o=e.records[t].feature;if(o){const e=a(o,s);n.push(e.geometry)}}}));const o={type:"pan-to-geometries",geometries:n};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",o)}break;case e.MessageType.DataRecordsSelectionChange:if(n(o.widgetId,this.widgetId,e.MessageType.DataRecordsSelectionChange))break;const i=o.records,u=[];if(i){if(i[0]){const e=function(e,t){var a,n;if(p(t))return!0;if(0===e.length)return!!(null==t?void 0:t.goToInitialMapExtentWhenSelectionCleared);const o=[],r=e[0],s=null===(a=null==r?void 0:r.dataSource)||void 0===a?void 0:a.getMainDataSource();if(s){o.push(s.id);const e=s.getAssociatedDataSource&&s.getAssociatedDataSource();e&&o.push(e.id)}return 0!==o.length&&(null===(n=null==t?void 0:t.useDataSources)||void 0===n?void 0:n.some((e=>(null==e?void 0:e.mainDataSourceId)&&o.includes(null==e?void 0:e.mainDataSourceId))))}(i,r);if(!e)break}for(let e=0;e<i.length;e++){const t=i[e].feature;if(t){const e=a(t,s);u.push(e.geometry)}}}if(u.length>0){const t={type:"pan-to-geometries",geometries:u};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",t)}else if(null==r?void 0:r.goToInitialMapExtentWhenSelectionCleared){const t={type:"pan-to-map-initial-extent"};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",t)}break;case e.MessageType.ExtentChange:if(n(o.widgetId,this.widgetId,e.MessageType.ExtentChange))break;const l=o,c=l.getRelatedWidgetIds();if(c.includes(this.widgetId))break;const d={value:{type:"pan-to-extent",geometries:[l.extent],stationary:l.stationary,publishTime:l.publishTime,publishWidgetId:l.widgetId},relatedWidgets:c};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue",d);break;case e.MessageType.DataSourceFilterChange:if(n(o.widgetId,this.widgetId,e.MessageType.DataSourceFilterChange))break;const g=o,{validChangedDataSourceIds:S,useDataSourceIds:f}=function(e,t){var a,n;let o=[],r=[];const s=e.dataSourceIds||[];return p(t)?(o=s.slice(),r=s.slice()):((null===(a=null==t?void 0:t.useDataSources)||void 0===a?void 0:a.length)>0&&(null===(n=null==t?void 0:t.useDataSources)||void 0===n||n.forEach((e=>{const t=null==e?void 0:e.dataSourceId;t&&r.push(t)}))),o=s.filter((e=>r.includes(e)))),{validChangedDataSourceIds:o,useDataSourceIds:r}}(g,r);if(0===S.length)break;const v={type:"pan-to-query-params",filterChangedDataSourceIds:S,useDataSourceIds:f};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",v);break;case e.MessageType.DataSourcesChange:if(n(o.widgetId,this.widgetId,e.MessageType.DataSourcesChange))break;const h=o;if(h.changeType===e.DataSourcesChangeType.Create){const t=[];h.dataSources.forEach((e=>{t.push(e.id)}));const a={type:"pan-to-layers",dataSourceIds:t};e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",a)}}return!0}))}}})(),r})())}}}));