System.register(["jimu-core","jimu-arcgis"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=206)}({0:function(e,n){e.exports=t},206:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),i=n(4),o=n(35),u=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function l(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,l)}a((r=r.apply(e,t||[])).next())}))};class l extends r.AbstractDataAction{isSupported(e,t){return u(this,void 0,void 0,(function*(){return t.length>0&&t.some(e=>{var t;return null===(t=e.feature)||void 0===t?void 0:t.geometry})}))}onExecute(e,t){return u(this,void 0,void 0,(function*(){return Object(i.loadArcGISJSAPIModules)(["esri/Graphic"]).then(e=>{let n=null;[n]=e;const i={features:t.map(e=>{var t;return null===(t=Object(o.f)(e.feature,n))||void 0===t?void 0:t.geometry})};return r.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"panToActionValue.value",i),!0})}))}}},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"k",(function(){return c})),n.d(t,"g",(function(){return f})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return S})),n.d(t,"i",(function(){return j})),n.d(t,"h",(function(){return M})),n.d(t,"a",(function(){return V})),n.d(t,"e",(function(){return I})),n.d(t,"j",(function(){return P}));var r=n(0),i=n(4),o=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function l(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,l)}a((r=r.apply(e,t||[])).next())}))};function u(e,t){return o(this,void 0,void 0,(function*(){const n=[];return t&&Object.keys(t).forEach(r=>{e.map.layers.find(e=>e.id===r)?console.warn("the feature layer is already created"):n.push(a(e,t[r],r))}),0===n.length?null:Promise.all(n)}))}function l(e,t){return o(this,void 0,void 0,(function*(){const n=[];return t&&Object.keys(t).forEach(r=>{const i=e.map.layers.find(e=>e.id===r);i&&(e.map.remove(i),n.push(a(e,t[r],r)))}),0===n.length?null:Promise.all(n)}))}function a(e,t,n){return o(this,void 0,void 0,(function*(){return yield new Promise((r,o)=>Object(i.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]).then(i=>{if(t.features.length<1)return r(null);{let o;[o]=i;const u=t.features[0].layer,l=[],a={};for(let e=0;e<u.fields.length;e++){const t=s(u.fields[e]);a[u.fields[e].name]=t.name,l.push(t)}const c=[];for(const e in t.features[0].attributes)if(a[e]){const t={fieldName:a[e],label:e};c.push(t)}const f=[];t.features.forEach((e,t)=>{const n=e;if(n.attributes){for(const e in n.attributes)n.attributes[a[e]]=n.attributes[e];n.attributes.exbfid=t}else n.attributes={exbfid:t};f.push(n)});const d=new o({id:n,title:u.title,source:f,fields:l,outFields:["*"],objectIdField:"exbfid",renderer:u.renderer,popupEnabled:!0,popupTemplate:{title:"information",content:[{type:"fields",fieldInfos:c}]}});e.map.add(d),d.on("layerview-create",e=>r(null))}}))}))}function s(e){return{name:e.name.replace(/\./g,"_").replace(/\(/g,"_").replace(/\)/g,"_"),alias:e.alias,type:e.type}}function c(e,t,n){let r=n,i=null,o=null;if(r||(o=t instanceof Array?t[0]:t,o&&(r=o.layer&&o.layer.id)),r){const n=e.allLayerViews;for(let e=0;e<n.length;e++)n.getItemAt(e).layer.id===r&&(i=n.getItemAt(e));return i?{layerId:r,handle:i.highlight(t)}:null}}function f(e,t){return o(this,void 0,void 0,(function*(){const n=t,r=e;if(n instanceof Array){if(0===n.length)return yield Promise.resolve();if(n[0].geometry){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].geometry);return yield d(e).then(e=>r.goTo(e.center))}return d(n).then(e=>r.goTo(e.center))}if(n.geometry){const e=n.geometry;return r.goTo(x(e))}return r.goTo(x(n))}))}function d(e){return o(this,void 0,void 0,(function*(){return yield Object(i.loadArcGISJSAPIModules)(["esri/geometry/Extent"]).then(t=>o(this,void 0,void 0,(function*(){let n;if([n]=t,!e||!e.length)return yield Promise.resolve(null);let r,i=null;const o=e.length;for(r=0;r<o;r++){const t=e[r];if(!t)continue;let o=t.extent;if(!o&&"point"===t.type){const e=t;e.x&&e.y&&(o=new n({xmax:e.x,xmin:e.x,ymax:e.y,ymin:e.y,zmax:e.z,zmin:e.z,spatialReference:e.spatialReference}))}o&&(i=i?i.union(o):o)}return i.width<0&&i.height<0?yield Promise.resolve(null):yield Promise.resolve(i)})))}))}function y(e,t,n){if(t){const r=e.jimuLayerViews,o=Object.keys(r);for(let e=0;e<o.length;e++){let u=r[o[e]];u&&u.layer&&u.layerDataSourceId===t&&(u.type===i.LayerTypes.FeatureLayer||u.type===i.LayerTypes.SceneLayer)&&u.setLocalDefinitionExpression(n)}}}function p(e,t){return Object(i.loadArcGISJSAPIModules)(["esri/tasks/support/Query"]).then(n=>{let r;[r]=n;const i=new r;return i.where=t,i.outFields=["*"],i.returnGeometry=!0,e.queryFeatures(i).then(e=>e)})}function h(e,t,n){if(n.view){let r=n.view;if(!r)return null;p(r.layer,t).then(t=>{if(t&&t.features&&t.features.length>0){const n=b(r.layer.geometryType);w(e.view,t.features,n)}})}else Object(i.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]).then(i=>{let o;[o]=i;let u=new o({url:r.dataSourceUtils.getUrlByLayer(n.layer)});u.load().then(()=>{p(u,t).then(t=>{if(t&&t.features&&t.features.length>0){const n=b(t.features[0].geometry.type);w(e.view,t.features,n)}})})})}let m=null;function g(e,t,n){var r;if(n.view){let i=n.view;p(null===(r=null==i?void 0:i.layer)||void 0===r?void 0:r.associatedLayer,t).then(t=>{if(t&&t.features&&t.features.length>0){const n=i.layer.objectIdField,r=t.features.map(e=>e.attributes[n]);let o=0;const u=6;let l=[255,255,0,.8];const a=e.view.highlightOptions,s=function(){o<u?(o++,l?(l=null,e.view.highlightOptions={color:[0,0,0,0]},m&&m.remove(),m=i.highlight(r)):(l=[255,255,0,.8],e.view.highlightOptions={color:l},m&&m.remove(),m=i.highlight(r)),setTimeout(s,500)):(e.view.highlightOptions=a,m&&m.remove())};setTimeout(s,500)}})}}function v(e,t,n){if(t){const r=e.jimuLayerViews,o=Object.keys(r);for(let u=0;u<o.length;u++){let l=r[o[u]];l&&l.layer&&l.layerDataSourceId===t&&(l.type===i.LayerTypes.FeatureLayer?h(e,n,l):l.type===i.LayerTypes.SceneLayer&&g(e,n,l))}}}function w(e,t,n){Object(i.loadArcGISJSAPIModules)(["esri/Graphic"]).then(r=>{let i;[i]=r;!function(t,r){const o=[];let u=0;for(let e=0;e<t.length;e++){const r=new i({geometry:t[e].geometry,symbol:n,attributes:t[e].attributes});o.push(r)}const l=function(){e.graphics.addMany(o),setTimeout(()=>{e.graphics.removeMany(o),u+=1,u<r&&setTimeout(()=>{l()},500)},500)};l()}(t,3)})}function b(e){return["point","multipoint"].includes(e)?{type:"simple-marker",style:"circle",color:[255,255,0,.8],size:"16px",outline:{color:[255,255,0,.8],width:3}}:["polyline"].includes(e)?{type:"simple-line",color:[255,255,0,.8],width:3,style:"solid"}:["polygon","extent"].includes(e)?{type:"simple-fill",color:[255,255,0,.5],style:"solid",outline:{color:[255,255,0,.8],width:3}}:["mesh"].includes(e)?{type:"mesh-3d",symbolLayers:[{type:"fill",material:{color:[255,255,0,.8]}}]}:null}function x(e){switch(e.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"polyline":return e.extent.center;default:return e&&e.extent?e.extent.center:void 0}}function S(e,t){let n=null;return e.clone?n=e.clone():(n=t.fromJSON(Object.assign({},e)),n.attributes=Object.assign({},e.attributes)),n}function j(e,t){return o(this,void 0,void 0,(function*(){return e&&0!==e.length&&e[0]&&t.wkid!==e[0].spatialReference.wkid&&!t.equals(e[0].spatialReference)?t.isWebMercator&&e[0].spatialReference.isWGS84||t.isWGS84&&e[0].spatialReference.isWebMercator?yield Promise.resolve(e):yield i.geometryUtils.projectToSpatialReference(e,t):yield Promise.resolve(e)}))}function M(e,t,n){return o(this,void 0,void 0,(function*(){return e&&"3d"===e.type&&t&&t.queryFeatures&&n?yield Object(i.loadArcGISJSAPIModules)(["esri/tasks/support/Query"]).then(e=>{const[r]=e,i=new r;return i.returnGeometry=!0,i.outFields=["*"],i.objectIds=n.map(e=>e.attributes[t.objectIdField]),t.queryFeatures(i).then(e=>o(this,void 0,void 0,(function*(){return e&&e.features&&e.features.length===n.length?yield Promise.resolve(e.features):yield Promise.resolve(n)})),()=>o(this,void 0,void 0,(function*(){return yield Promise.resolve(n)})))}):yield Promise.resolve(n)}))}function V(e){return!window.jimuConfig.isInBuilder||e!==r.AppMode.Design}function I(e){return{mapContainer:e.mapContainer,state:e.state,MapView:e.MapView,SceneView:e.SceneView,Extent:e.Extent,Viewpoint:e.Viewpoint,mapView:e.mapView,sceneView:e.sceneView,extentWatch:e.extentWatch,fatalErrorWatch:e.fatalErrorWatch,dsManager:e.dsManager,highLightHandles:e.highLightHandles,mapBaseViewEventHandles:e.mapBaseViewEventHandles,Color:e.Color,isRequestingMap:e.isRequestingMap}}function P(e,t){e.mapContainer=t.mapContainer,e.state=t.state,e.MapView=t.MapView,e.SceneView=t.SceneView,e.Extent=t.Extent,e.Viewpoint=t.Viewpoint,e.mapView=t.mapView,e.sceneView=t.sceneView,e.extentWatch=t.extentWatch,e.fatalErrorWatch=t.fatalErrorWatch,e.dsManager=t.dsManager,e.highLightHandles=t.highLightHandles,e.mapBaseViewEventHandles=t.mapBaseViewEventHandles,e.Color=t.Color,e.isRequestingMap=t.isRequestingMap}},4:function(e,t){e.exports=n}}))}}}));