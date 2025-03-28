System.register(["jimu-core","jimu-ui"],(function(e,t){var r={},i={};return{setters:[function(e){r.Immutable=e.Immutable,r.dataSourceUtils=e.dataSourceUtils,r.expressionUtils=e.expressionUtils},function(e){i.richTextUtils=e.richTextUtils,i.utils=e.utils}],execute:function(){e((()=>{var e={79244:e=>{"use strict";e.exports=r},14321:e=>{"use strict";e.exports=i}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var n={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(n),s.d(n,{default:()=>i,getExpressionsUseDataSources:()=>a,getReplacedDataSource:()=>u,mapExpressionForText:()=>g,mapExpressionForTooltip:()=>U,mapHtmlDataDsId:()=>f,mapLinks:()=>x,replaceExpressionDataSources:()=>d,replaceLinkExpressionDataSources:()=>p});var e=s(79244),t=s(14321);const r=(0,e.Immutable)([]);class i{constructor(){this.id="text-app-config-operation"}afterWidgetCopied(e,t,i,s,n){var o,c;if(!n)return s;const l=!!(null!==(o=t.widgets[e].useDataSources)&&void 0!==o?o:r).find((e=>n[e.mainDataSourceId])),a=t.widgets[e],u=null==a?void 0:a.config;let d=null!==(c=u.text)&&void 0!==c?c:"";d=l?g(d,n):d,d=x(d,n,l);let p=s.setIn(["widgets",i,"config","text"],d),f=u.tooltip;return f=l?U(f,n):f,f&&(p=p.setIn(["widgets",i,"config","tooltip"],f)),p}widgetWillRemove(e){return e}useDataSourceWillChange(e,t,r){var i,s;let n=e;const l=e.widgets[this.widgetId],a=l.config;if(t||r){const e=null!==(s=null===(i=l.useDataSources)||void 0===i?void 0:i.map((e=>e.dataSourceId)).asMutable())&&void 0!==s?s:[];let u=e.filter((e=>e!==t));r&&(u=u.concat(r));const d=c(a.text,u,e);d&&(n=n.setIn(["widgets",this.widgetId,"config","text"],d));const p=o(a.tooltip,u,e);p&&(n=n.setIn(["widgets",this.widgetId,"config","tooltip"],p))}return n}}const o=(t,r,i)=>{if(!(null==r?void 0:r.length)||!t)return;const s=l(t,r,i);if(!s)return;return e.expressionUtils.replaceDataSourceId(t,s[0],s[1])},c=(e,r,i)=>{if(!(null==r?void 0:r.length))return;const s=t.richTextUtils.getAllExpressions(e),n=a(s,r,i);return n?(e=d(e,n),e=p(e,n)):void 0},l=(t,r,i)=>{var s;const n=(null!==(s=e.expressionUtils.getUseDataSourcesByExpressionParts(t.parts))&&void 0!==s?s:(0,e.Immutable)([])).map((e=>e.dataSourceId)).asMutable();return u(n,r,i)},a=(e,t,r)=>{const i={};return Object.entries(e).forEach((([e,s])=>{const n=l(s,t,r);e&&n&&(i[e]=n)})),Object.keys(i).length?i:null},u=(t,r,i)=>{const s=[];return null==t||t.some((t=>{if(!r.includes(t)){const n=e.dataSourceUtils.isSelectionView(t),o=e.dataSourceUtils.getSortedDataViewIds(t).find((e=>r.includes(e)));if(o)if(n){i.find((t=>e.dataSourceUtils.isSelectionView(t)))&&s.push(t,o)}else s.push(t,o)}return!!s.length})),s.length?s:null},d=(r,i)=>r.replace(t.richTextUtils.EXP_TAG_REGEXP,(r=>{const s=t.richTextUtils.getUniqueId(r),n=i[s];return s&&n?(r=f(r,{[n[0]]:n[1]})).replace(t.richTextUtils.DATA_EXPRESSION_REGEXP,((r,i)=>{const s=t.richTextUtils.convertEncodeObject(i),o=e.expressionUtils.replaceDataSourceId((0,e.Immutable)(s),n[0],n[1]);return`data-expression="${t.richTextUtils.convertEncodedString(o)}"`})):r})),p=(r,i)=>r.replace(t.richTextUtils.LINK_TAG_REGEXP,(r=>{const s=t.richTextUtils.getUniqueId(r);if(!s)return r;const n=i[s];return s&&n?(r=f(r,{[n[0]]:n[1]})).replace(t.richTextUtils.DATA_LINK_REGEXP,((r,i)=>{const s=t.richTextUtils.convertEncodeObject(i);if(!s.expression)return r;let o=(0,e.Immutable)(s);const c=e.expressionUtils.replaceDataSourceId(o.expression,n[0],n[1]);o=o.set("expression",c);return`data-link="${t.richTextUtils.convertEncodedString(o)}"`})):r})),x=(r,i,s)=>r.replace(t.richTextUtils.LINK_TAG_REGEXP,(r=>t.richTextUtils.getUniqueId(r)?(r=s?f(r,i):r).replace(t.richTextUtils.DATA_LINK_REGEXP,((r,s)=>{const n=t.richTextUtils.convertEncodeObject(s),{isChanged:o,linkParam:c}=t.utils.mapLinkParam(i,(0,e.Immutable)(n));if(o){return`data-link="${t.richTextUtils.convertEncodedString(c)}"`}return r})):r)),g=(r,i)=>r.replace(t.richTextUtils.EXP_TAG_REGEXP,(r=>t.richTextUtils.getUniqueId(r)?(r=f(r,i)).replace(t.richTextUtils.DATA_EXPRESSION_REGEXP,((r,s)=>{const n=t.richTextUtils.convertEncodeObject(s),{isChanged:o,expression:c}=e.expressionUtils.mapExpression(i,(0,e.Immutable)(n));if(o){return`data-expression="${t.richTextUtils.convertEncodedString(c)}"`}return r})):r)),U=(t,r)=>{if(!t)return t;const{isChanged:i,expression:s}=e.expressionUtils.mapExpression(r,t);return i?(0,e.Immutable)(s):t};function f(r,i){return r.replace(t.richTextUtils.DATA_DS_ID_REGEXP,((t,r)=>{if(!r)return t;const s=r.split(",");let n="";return s.forEach((t=>{const r=Object.keys(i).find((r=>e.dataSourceUtils.areDerivedFromSameMain(t,r))),s=i[r],o=r&&s&&s!==r?t.replace(r,s):t;n+=`${n?",":""}${o}`})),n?`data-dsid="${n}"`:t}))}})(),n})())}}}));