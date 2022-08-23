System.register(["arcgis-charts","jimu-core","jimu-theme","jimu-ui"],(function(e,t){var r={},s={},a={},i={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){s.React=e.React,s.classNames=e.classNames,s.lodash=e.lodash,s.polished=e.polished},function(e){a.getThemeColorValue=e.getThemeColorValue,a.styled=e.styled,a.useTheme=e.useTheme},function(e){i.utils=e.utils}],execute:function(){e((()=>{"use strict";var e={8847:(e,t,r)=>{r.d(t,{k:()=>o});var s=r(48891),a=r(22051),i=r(12653),n=r(34796);const o=s.React.memo(s.React.forwardRef(((e,t)=>{const{className:r,dataSource:o,webMapWebChart:c,inlineData:l,options:h,selectionData:d,selectionTheme:g,chartLimits:p,placeholder:u,tooltipFormatter:C,dataLabelFormatter:v,setTimeBinningInfoWhenNotProvided:f,actionMode:m,filterBySelection:S,disableInteractions:b}=e,y=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]])}return r}(e,["className","dataSource","webMapWebChart","inlineData","options","selectionData","selectionTheme","chartLimits","placeholder","tooltipFormatter","dataLabelFormatter","setTimeBinningInfoWhenNotProvided","actionMode","filterBySelection","disableInteractions"]),O=(0,n.useTheme)(),J=s.React.useMemo((()=>{const e=c;return null!=e.asMutable?e.asMutable({deep:!0}):c}),[c]),R=s.React.useMemo((()=>{const e=s.lodash.cloneDeep(J);return(0,i.If)(e,O)}),[O,J]),E=s.React.useMemo((()=>Object.assign(Object.assign({},R),{dataSource:o})),[R,o]),j=s.React.useMemo((()=>Object.assign(Object.assign({},h),{inlineData:l,selectionData:d,selectionTheme:g,chartLimits:p,createMessage:u,tooltipFormatter:C,dataLabelFormatter:v,setTimeBinningInfoWhenNotProvided:f,actionMode:m,filterBySelection:S,disableInteractions:b})),[h,l,d,g,p,u,C,v,f,m,S,b]);return s.React.createElement(a.P,Object.assign({ref:t,options:j,className:(0,s.classNames)("chart",r),config:E},y))})));o.displayName="Chart"},22051:(e,t,r)=>{r.d(t,{A:()=>c,P:()=>d});var s=r(48891),a=r(90622),i=r(30726),n=r(34796),o=function(e,t,r,s){return new(r||(r=Promise))((function(a,i){function n(e){try{c(s.next(e))}catch(e){i(e)}}function o(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,o)}c((s=s.apply(e,t||[])).next())}))};function c(e,t){const r=null==t?void 0:t.inlineData,s=null==e?void 0:e.type;return s===a.WebChartDataSourceTypes.FeatureLayer&&!!e.featureLayer||s===a.WebChartDataSourceTypes.Inline&&void 0!==(null==e?void 0:e.data)&&void 0!==(null==e?void 0:e.processed)||s===a.WebChartDataSourceTypes.Inline&&void 0!==(null==r?void 0:r.inputData)&&void 0!==(null==r?void 0:r.processed)||!e&&!!t.featureLayer||!e&&void 0!==(null==r?void 0:r.inputData)&&void 0!==(null==r?void 0:r.processed)}const l=n.styled.div`
  pointer-events: auto;
`;class h extends s.React.PureComponent{constructor(e){super(e),this.events={},this.unmounted=!1,this.nodeRef=s.React.createRef(),this.createChart=this.createChart.bind(this),this.updateChart=this.updateChart.bind(this),this.registerEvent=this.registerEvent.bind(this),this.registerEvents=this.registerEvents.bind(this)}registerEvent(e,t){const r=this.nodeRef.current;null!=r&&(this.events[e]&&(this.events[e](),delete this.events[e]),t&&(r.addEventListener(e,t),this.events[e]=()=>{r.removeEventListener(e,t)}))}registerEvents(e,t){const{arcgisChartsJSDataProcessComplete:r,arcgisChartsJSLegendItemVisibilityChange:s,arcgisChartsJSUpdateComplete:a,arcgisChartsJSRenderingComplete:i,arcgisChartsJSSelectionChange:n,arcgisChartsJSSeriesColorChange:o,arcgisChartsJSAxesMinMaxChange:c,arcgisChartsJSSelectionComplete:l,arcgisChartsJSBadDataWarningRaise:h,arcgisChartsJSTooManySelectedElements:d}=e;(null==t?void 0:t.arcgisChartsJSDataProcessComplete)!==r&&this.registerEvent("arcgisChartsJSDataProcessComplete",r),(null==t?void 0:t.arcgisChartsJSLegendItemVisibilityChange)!==s&&this.registerEvent("arcgisChartsJSLegendItemVisibilityChange",s),(null==t?void 0:t.arcgisChartsJSUpdateComplete)!==a&&this.registerEvent("arcgisChartsJSUpdateComplete",a),(null==t?void 0:t.arcgisChartsJSRenderingComplete)!==i&&this.registerEvent("arcgisChartsJSRenderingComplete",i),(null==t?void 0:t.arcgisChartsJSSelectionChange)!==n&&this.registerEvent("arcgisChartsJSSelectionChange",n),(null==t?void 0:t.arcgisChartsJSSeriesColorChange)!==o&&this.registerEvent("arcgisChartsJSSeriesColorChange",o),(null==t?void 0:t.arcgisChartsJSAxesMinMaxChange)!==c&&this.registerEvent("arcgisChartsJSAxesMinMaxChange",c),(null==t?void 0:t.arcgisChartsJSSelectionComplete)!==l&&this.registerEvent("arcgisChartsJSSelectionComplete",l),(null==t?void 0:t.arcgisChartsJSBadDataWarningRaise)!==h&&this.registerEvent("arcgisChartsJSBadDataWarningRaise",h),(null==t?void 0:t.arcgisChartsJSTooManySelectedElements)!==d&&this.registerEvent("arcgisChartsJSTooManySelectedElements",d)}removeRegisteredEvents(){const e=Object.values(this.events);e.length&&(e.forEach((e=>e())),this.events={})}componentDidMount(){return o(this,void 0,void 0,(function*(){this.registerEvents(this.props),void 0!==this.nodeRef&&(yield this.createChart())}))}componentDidUpdate(e){const{config:t,options:r,globalOptions:s}=this.props;if(e.config!==t||e.options!==r||e.globalOptions!==s){if(this.processing)return void(this.pending=!0);null!=this.chart?this.updateChart():this.createChart()}this.registerEvents(this.props,e)}createChart(){var e;return o(this,void 0,void 0,(function*(){const{config:t,options:r,globalOptions:s,chartRef:n,dataVersion:o}=this.props;c(t.dataSource,r)&&(this.processing=(0,a.createChart)({chartContainer:this.nodeRef.current,chartConfig:t,options:Object.assign(Object.assign({},r),{dataUpdated:!0}),globalOptions:s}),null===(e=this.processing)||void 0===e||e.then((e=>{this.unmounted||(this.chart=e,i.utils.setRef(n,e),this.processing=void 0,this.pending&&(this.pending=!1,setTimeout((()=>{this.updateChart()}))),this.prevDataVersion=o)}),(e=>{var t;null===(t=this.chart)||void 0===t||t.dispose(),this.chart=null,i.utils.setRef(n,null),this.processing=void 0,this.pending=!1,console.error(e)})))}))}updateChart(){var e;return o(this,void 0,void 0,(function*(){const{config:t,options:r,globalOptions:s,dataVersion:a}=this.props,i=a!==this.prevDataVersion;c(t.dataSource,r)&&(this.processing=this.chart.update({newChartConfig:t,updateOptions:Object.assign(Object.assign({},r),{dataUpdated:i}),updateGlobalOptions:s}),null===(e=this.processing)||void 0===e||e.then((()=>{this.unmounted||(this.processing=void 0,this.pending&&(this.pending=!1,setTimeout((()=>{this.updateChart()}))),this.prevDataVersion=a)}),(e=>{this.processing=void 0,this.pending=!1,console.error(e)})))}))}componentWillUnmount(){this.unmounted=!0,this.removeRegisteredEvents(),void 0!==this.chart&&this.chart.dispose()}render(){const e=this.props,{className:t,config:r,dataVersion:a,options:i,globalOptions:n,chartRef:o,arcgisChartsJSDataProcessComplete:c,arcgisChartsJSLegendItemVisibilityChange:h,arcgisChartsJSUpdateComplete:d,arcgisChartsJSRenderingComplete:g,arcgisChartsJSSelectionChange:p,arcgisChartsJSSeriesColorChange:u,arcgisChartsJSAxesMinMaxChange:C,arcgisChartsJSSelectionComplete:v,arcgisChartsJSBadDataWarningRaise:f,arcgisChartsJSTooManySelectedElements:m}=e,S=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]])}return r}(e,["className","config","dataVersion","options","globalOptions","chartRef","arcgisChartsJSDataProcessComplete","arcgisChartsJSLegendItemVisibilityChange","arcgisChartsJSUpdateComplete","arcgisChartsJSRenderingComplete","arcgisChartsJSSelectionChange","arcgisChartsJSSeriesColorChange","arcgisChartsJSAxesMinMaxChange","arcgisChartsJSSelectionComplete","arcgisChartsJSBadDataWarningRaise","arcgisChartsJSTooManySelectedElements"]);return s.React.createElement(l,Object.assign({className:(0,s.classNames)("chart-core w-100 h-100",t)},S,{ref:this.nodeRef}))}}h.defaultProps={globalOptions:{queueChartCreation:!0,hideLicenceWatermark:!0,enableResponsiveFeatures:!1,useAnimatedCharts:!1,autoDisposeChart:!0}};const d=s.React.forwardRef(((e,t)=>s.React.createElement(h,Object.assign({},e,{chartRef:t}))));d.displayName="ChartCore"},99772:(e,t,r)=>{r.r(t),r.d(t,{Chart:()=>s.k,ChartCore:()=>a.P,isDataDefined:()=>a.A,traverse:()=>i.fw,traverseConvertColor:()=>i.T5,traverseConvertWebChartColor:()=>i.If}),r(55515);var s=r(8847),a=r(22051),i=r(12653),n=r(90622),o={};for(const e in n)["default","Chart","ChartCore","isDataDefined","traverse","traverseConvertColor","traverseConvertWebChartColor"].indexOf(e)<0&&(o[e]=()=>n[e]);r.d(t,o)},55515:()=>{},12653:(e,t,r)=>{r.d(t,{fw:()=>c,T5:()=>n,If:()=>o});var s=r(48891),a=r(34796);const i=/^var\(--(.+?)\)$/,n=(e,t,r="color")=>{if(!t)return e;const n=c(e,((e,t,n)=>{if((e=>"string"==typeof r?e===r:"function"==typeof r?r(e):void 0)(t)){const t=((e,t)=>{var r;if("string"!=typeof e||""===e||null==e)return e;const n=((e,t)=>(e=>!!i.test(e))(e)?(0,a.getThemeColorValue)(e,t):e)(e,t),o=s.polished.parseToRgb(n);if(null==o)return;const{red:c,green:l,blue:h}=o;return[c,l,h,255*(null!==(r=o.alpha)&&void 0!==r?r:1)]})(n,e);return t}return n}).bind(null,t),null);return n},o=(e,t)=>n(e,t,(e=>"color"===e||"background"===e)),c=(e,t,r)=>("[object Object]"===Object.prototype.toString.call(e)?Object.entries(e).forEach((([r,s])=>{s=c(s,t,r),e.asMutable?e=e.set(r,s):e[r]=s})):"[object Array]"===Object.prototype.toString.call(e)?e.forEach(((r,s)=>{r=c(r,t,s),e.asMutable?e=e.set(s,r):e[s]=r})):e=t(r,e),e)},90622:e=>{e.exports=r},48891:e=>{e.exports=s},34796:e=>{e.exports=a},30726:e=>{e.exports=i}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var e=n(99772),t={};for(const r in e)"default"!==r&&(t[r]=()=>e[r]);n.d(o,t)})(),o})())}}}));