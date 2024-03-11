"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[19098],{1186:(e,t,s)=>{s.d(t,{a:()=>i,e:()=>n,t:()=>r});class r{constructor(e=null,t={},s,r){this.displayId=0,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),s&&(this.centroid=s),null!=r&&(this.objectId=r)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new r(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}class n{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new n;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}class i{constructor(e=[],t=[],s=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=s}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const r=this.lengths[s];for(let s=0;s<r;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=r}}clone(){return new i(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}},19098:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s(84780),n=(s(58574),s(47817)),i=s(41083),o=s(54100);s(69764),s(21205),s(68700);class a{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}class c{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function l(e,t){return t}function u(e,t,s,r){switch(s){case 0:return g(e,t+r,0);case 1:return"lowerLeft"===e.originPosition?g(e,t+r,1):function({translate:e,scale:t},s,r){return e[r]-s*t[r]}(e,t+r,1)}}function h(e,t,s,r){return 2===s?g(e,t,2):u(e,t,s,r)}function d(e,t,s,r){return 2===s?g(e,t,3):u(e,t,s,r)}function f(e,t,s,r){return 3===s?g(e,t,3):h(e,t,s,r)}function g({translate:e,scale:t},s,r){return e[r]+s*t[r]}class p{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=l,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new c}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,o.t)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const s of e.features)t(s.geometry)}createSpatialReference(){return new n.O}addField(e,t){e.fields.push(n.E.fromJSON(t));const s=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of s)this[e]=null}}addFeature(e,t){const s=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(s>0)for(const e in t.attributes){const r=t.attributes[e];"string"==typeof r&&r.length>s&&(t.attributes[e]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:s,queryGeometryType:r}=t,n=(0,i.a)(s.clone(),s,!1,!1,this.transform),o=(0,i.e)(n,r,!1,!1);let a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,e.queryGeometryType=r,e.queryGeometry=o}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,s)=>this.addCoordinatePoint(e,t,s),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,s)=>this.addCoordinatePolygon(e,t,s),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,s)=>this.addCoordinatePolyline(e,t,s),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,s)=>this.addCoordinateMultipoint(e,t,s),this.createGeometry=e=>this.createMultipointGeometry(e)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new a((0,n.cP)(),null,new this.AttributesConstructor)}allocateCoordinates(){const e=this.lengths.reduce(((e,t)=>e+t),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}addLength(e,t,s){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,s){switch(t=this.applyTransform(this.transform,t,s,0),s){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let s=0;return t<=1&&(s=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,s)}addCoordinatePolyline(e,t,s){this.dehydratedAddPointsCoordinate(e.paths,t,s)}addCoordinatePolygon(e,t,s){this.dehydratedAddPointsCoordinate(e.rings,t,s)}addCoordinateMultipoint(e,t,s){0===s&&e.points.push([]);const r=this.transformPathLikeValue(t,s);e.points[e.points.length-1].push(r)}createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,s){0===s&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const r=this.transformPathLikeValue(t,s),n=e[e.length-1];0===s&&n.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}deriveApplyTransform(e){const{hasZ:t,hasM:s}=e;return t&&s?f:t?h:s?d:u}}class y{_parseFeatureQuery(e){const t=(0,r.t)(e.buffer,new p(e.options)),s={...t,spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((e=>e.toJSON())):void 0};return Promise.resolve(s)}}const m=function(){return new y}},41083:(e,t,s)=>{s.d(t,{$:()=>R,A:()=>U,C:()=>x,I:()=>g,J:()=>N,K:()=>A,V:()=>S,W:()=>V,X:()=>v,a:()=>$,b:()=>ee,c:()=>j,e:()=>L,f:()=>z,g:()=>J,l:()=>Y,n:()=>Z,o:()=>D,p:()=>f,r:()=>O,s:()=>W,w:()=>m,y:()=>K});var r=s(47817),n=s(1186);function i(e,t){return e?t?4:3:t?3:2}const o=r.S.getLogger("esri.tasks.support.optimizedFeatureSet"),a={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},c=(e,t,s,r,n,i)=>{e[s]=n,e[s+1]=i},l=(e,t,s,r,n,i)=>{e[s]=n,e[s+1]=i,e[s+2]=t[r+2]},u=(e,t,s,r,n,i)=>{e[s]=n,e[s+1]=i,e[s+2]=t[r+3]},h=(e,t,s,r,n,i)=>{e[s]=n,e[s+1]=i,e[s+2]=t[r+2],e[s+3]=t[r+3]};function d(e,t,s,r){if(e){if(s)return t&&r?h:l;if(t&&r)return u}else if(t&&r)return l;return c}function f({scale:e,translate:t},s){return Math.round((s-t[0])/e[0])}function g({scale:e,translate:t},s){return Math.round((t[1]-s)/e[1])}function p({scale:e,translate:t},s){return s*e[0]+t[0]}function y({scale:e,translate:t},s){return t[1]-s*e[1]}function m(e,t,s){return e?t?s?G(e):_(e):s?I(e):b(e):null}function b(e){const t=e.coords;return{x:t[0],y:t[1]}}function k(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function _(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function I(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function w(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function G(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function q(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function M(e,t){return e&&t?q:e?T:t?w:k}function S(e,t,s){if(!e)return null;const r=i(t,s),n=[];for(let t=0;t<e.coords.length;t+=r){const s=[];for(let n=0;n<r;n++)s.push(e.coords[t+n]);n.push(s)}return t?s?{points:n,hasZ:t,hasM:s}:{points:n,hasZ:t}:s?{points:n,hasM:s}:{points:n}}function F(e,t,s=i(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const r=e.coords;let n=0;for(const e of t.points)for(let t=0;t<s;t++)r[n++]=e[t];return e}function U(e,t,s){if(!e)return null;const r=i(t,s),{coords:n,lengths:o}=e,a=[];let c=0;for(const e of o){const t=[];for(let s=0;s<e;s++){const e=[];for(let t=0;t<r;t++)e.push(n[c++]);t.push(e)}a.push(t)}return t?s?{paths:a,hasZ:t,hasM:s}:{paths:a,hasZ:t}:s?{paths:a,hasM:s}:{paths:a}}function P(e,t,s=i(t.hasZ,t.hasM)){const{lengths:r,coords:n}=e;let o=0;for(const e of t.paths){for(const t of e)for(let e=0;e<s;e++)n[o++]=t[e];r.push(e.length)}return e}function R(e,t,s){if(!e)return null;const r=i(t,s),{coords:n,lengths:o}=e,a=[];let c=0;for(const e of o){const t=[];for(let s=0;s<e;s++){const e=[];for(let t=0;t<r;t++)e.push(n[c++]);t.push(e)}a.push(t)}return t?s?{rings:a,hasZ:t,hasM:s}:{rings:a,hasZ:t}:s?{rings:a,hasM:s}:{rings:a}}function x(e,t,s=t.hasZ,r=t.hasM){return function(e,t,s,r){const n=i(s,r),{lengths:o,coords:a}=e;let c=0;o.length=a.length=0;for(const e of t){for(const t of e)for(let e=0;e<n;e++)a[c++]=t[e];o.push(e.length)}}(e,t.rings,s,r),e}const B=[],C=[];function N(e,t,s,r,n){B[0]=e;const[i]=A(C,B,t,s,r,n);return B.length=C.length=0,i}function A(e,t,s,a,c,l){if(e.length=0,!s){for(const s of t){const t=s.attributes[l];e.push(new n.t(null,s.attributes,null,t))}return e}switch(s){case"esriGeometryPoint":return function(e,t,s,r,i){const o=M(s,r);for(const s of t){const{geometry:t,attributes:r}=s;let a;t&&(a=o(new n.a,t)),e.push(new n.t(a,r,null,r[i]))}return e}(e,t,a,c,l);case"esriGeometryMultipoint":return function(e,t,s,r,o){const a=i(s,r);for(const s of t){const t=s.geometry,r=s.attributes;let i;t&&(i=F(new n.a,t,a)),e.push(new n.t(i,r,null,r[o]))}return e}(e,t,a,c,l);case"esriGeometryPolyline":return function(e,t,s,r,o){const a=i(s,r);for(const s of t){const t=s.geometry,r=s.attributes;let i;t&&(i=P(new n.a,t,a)),e.push(new n.t(i,r,null,r[o]))}return e}(e,t,a,c,l);case"esriGeometryPolygon":return function(e,t,s,r,i){for(const o of t){const t=o.geometry,a=o.centroid,c=o.attributes;let l;t&&(l=x(new n.a,t,s,r)),a?e.push(new n.t(l,c,k(new n.a,a),c[i])):e.push(new n.t(l,c,null,c[i]))}return e}(e,t,a,c,l);default:o.error("convertToFeatureSet:unknown-geometry",new r.s(`Unable to parse unknown geometry type '${s}'`)),e.length=0}return e}function V(e,t,s,r){C[0]=e,E(B,C,t,s,r);const n=B[0];return B.length=C.length=0,n}function v(e,t,s){if(!e)return null;const a=new n.a;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==s&&(s=e.hasM),(0,r.T)(e)?M(null!=t?t:null!=e.z,null!=s?s:null!=e.m)(a,e):(0,r.V)(e)?x(a,e,t,s):(0,r.W)(e)?P(a,e,i(t,s)):(0,r.X)(e)?F(a,e,i(t,s)):void o.error("convertFromGeometry:unknown-geometry",new r.s(`Unable to parse unknown geometry type '${e}'`))}function L(e,t,s,n){const i=e&&("coords"in e?e:e.geometry);if(!i)return null;switch(t){case"esriGeometryPoint":{let e=b;return s&&n?e=G:s?e=_:n&&(e=I),e(i)}case"esriGeometryMultipoint":return S(i,s,n);case"esriGeometryPolyline":return U(i,s,n);case"esriGeometryPolygon":return R(i,s,n);default:return void o.error("convertToGeometry:unknown-geometry",new r.s(`Unable to parse unknown geometry type '${t}'`))}}function E(e,t,s,n,i){switch(e.length=0,s){case"esriGeometryPoint":return function(e,t,s,r){let n=b;s&&r?n=G:s?n=_:r&&(n=I);for(const s of t){const{geometry:t,attributes:r}=s,i=t?n(t):null;e.push({attributes:r,geometry:i})}return e}(e,t,n,i);case"esriGeometryMultipoint":return function(e,t,s,r){for(const n of t){const{geometry:t,attributes:i}=n;let o;t&&(o=S(t,s,r)),e.push({attributes:i,geometry:o})}return e}(e,t,n,i);case"esriGeometryPolyline":return function(e,t,s,r){for(const n of t){const{geometry:t,attributes:i}=n;let o;t&&(o=U(t,s,r)),e.push({attributes:i,geometry:o})}return e}(e,t,n,i);case"esriGeometryPolygon":return function(e,t,s,r){for(const n of t){const{geometry:t,attributes:i,centroid:o}=n;let a;if(t&&(a=R(t,s,r)),o){const t=b(o);e.push({attributes:i,centroid:t,geometry:a})}else e.push({attributes:i,geometry:a})}return e}(e,t,n,i);default:o.error("convertToFeatureSet:unknown-geometry",new r.s(`Unable to parse unknown geometry type '${s}'`))}return e}function Z(e){const{objectIdFieldName:t,spatialReference:s,transform:r,fields:n,hasM:i,hasZ:o,features:a,geometryType:c,exceededTransferLimit:l,uniqueIdField:u,queryGeometry:h,queryGeometryType:d}=e,f={features:E([],a,c,o,i),fields:n,geometryType:c,objectIdFieldName:t,spatialReference:s,uniqueIdField:u,queryGeometry:L(h,d,!1,!1)};return r&&(f.transform=r),l&&(f.exceededTransferLimit=l),i&&(f.hasM=i),o&&(f.hasZ=o),f}function D(e,t){const s=new n.e,{hasM:i,hasZ:a,features:c,objectIdFieldName:l,spatialReference:u,geometryType:h,exceededTransferLimit:d,transform:f,fields:g}=e;return g&&(s.fields=g),s.geometryType=h,s.objectIdFieldName=l||t,s.spatialReference=u,s.objectIdFieldName?(c&&A(s.features,c,h,a,i,s.objectIdFieldName),d&&(s.exceededTransferLimit=d),i&&(s.hasM=i),a&&(s.hasZ=a),f&&(s.transform=f),s):(o.error(new r.s("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),s)}function O(e){const{transform:t,features:s,hasM:r,hasZ:n}=e;if(!t)return e;for(const e of s)e.geometry&&$(e.geometry,e.geometry,r,n,t),e.centroid&&$(e.centroid,e.centroid,r,n,t);return e.transform=null,e}function W(e,t){const{geometryType:s,features:r,hasM:i,hasZ:o}=t;if(!e)return t;for(let t=0;t<r.length;t++){const a=r[t],c=a.weakClone();c.geometry=new n.a,j(c.geometry,a.geometry,i,o,s,e),a.centroid&&(c.centroid=new n.a,j(c.centroid,a.centroid,i,o,"esriGeometryPoint",e)),r[t]=c}return t.transform=e,t}function j(e,t,s,r,n,o,c=s,l=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=a[n],{coords:h,lengths:p}=t,y=i(s,r),m=i(s&&c,r&&l),b=d(s,r,c,l);if(!p.length)return b(e.coords,h,0,0,f(o,h[0]),g(o,h[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=y,e;let k,_,T,I,w=0,G=0,q=G;for(const t of p){if(t<u)continue;let s=0;G=q,T=k=f(o,h[w]),I=_=g(o,h[w+1]),b(e.coords,h,G,w,T,I),s++,w+=y,G+=m;for(let r=1;r<t;r++,w+=y)T=f(o,h[w]),I=g(o,h[w+1]),T===k&&I===_||(b(e.coords,h,G,w,T-k,I-_),G+=m,s++,k=T,_=I);s>=u&&(e.lengths.push(s),q=G)}return e.coords.length=q,e.coords.length?e:null}function Y(e,t,s,r,n,o,c=s,l=r){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const u=a[n],{coords:h,lengths:f}=t,g=i(s,r),p=i(s&&c,r&&l),y=d(s,r,c,l);if(!f.length)return y(e.coords,h,0,0,h[0],h[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;let m=0;const b=o*o;for(const t of f){if(t<u){m+=t*g;continue}const s=e.coords.length/p,r=m,n=m+(t-1)*g;y(e.coords,h,e.coords.length,r,h[r],h[r+1]),H(e.coords,h,g,b,y,r,n),y(e.coords,h,e.coords.length,n,h[n],h[n+1]);const i=e.coords.length/p-s;i>=u?e.lengths.push(i):e.coords.length=s*p,m+=t*g}return e.coords.length?e:null}function X(e,t,s,r){const n=e[t],i=e[t+1],o=e[s],a=e[s+1],c=e[r],l=e[r+1];let u=o,h=a,d=c-u,f=l-h;if(0!==d||0!==f){const e=((n-u)*d+(i-h)*f)/(d*d+f*f);e>1?(u=c,h=l):e>0&&(u+=d*e,h+=f*e)}return d=n-u,f=i-h,d*d+f*f}function H(e,t,s,r,n,i,o){let a,c=r,l=0;for(let e=i+s;e<o;e+=s)a=X(t,e,i,o),a>c&&(l=e,c=a);c>r&&(l-i>s&&H(e,t,s,r,n,i,l),n(e,t,e.length,l,t[l],t[l+1]),o-l>s&&H(e,t,s,r,n,l,o))}function z(e,t,s,r){if(!t||!t.coords||!t.coords.length)return null;const n=i(s,r);let o=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=n){const s=e[t],r=e[t+1];o=Math.min(o,s),c=Math.max(c,s),a=Math.min(a,r),l=Math.max(l,r)}}return e[0]=o,e[1]=a,e[2]=c,e[3]=l,e}function $(e,t,s,r,n){const{coords:o,lengths:a}=t,u=s?r?h:l:r?l:c,d=i(s,r);if(!o.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!a.length)return u(e.coords,o,0,0,p(n,o[0]),y(n,o[1])),e!==t&&(e.lengths.length=0,e.coords.length=d),e;const[f,g]=n.scale;let m=0;for(let t=0;t<a.length;t++){const s=a[t];e.lengths[t]=s;let r=p(n,o[m]),i=y(n,o[m+1]);u(e.coords,o,m,m,r,i),m+=d;for(let t=1;t<s;t++,m+=d)r+=o[m]*f,i-=o[m+1]*g,u(e.coords,o,m,m,r,i)}return e!==t&&(e.lengths.length=a.length,e.coords.length=o.length),e}function J(e,t,s,r,n,o){const a=i(s,r),c=d(s,r,n,o),l=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<l.length;t+=a)c(e.coords,l,e.coords.length,t,l[t],l[t+1]);return e}function Q(e,t,s,r){let n=0,i=e[r*t],o=e[r*(t+1)];for(let a=1;a<s;a++){const s=i+e[r*(t+a)],c=o+e[r*(t+a)+1],l=(s-i)*(c+o);i=s,o=c,n+=l}return.5*n}function K(e,t){const{coords:s,lengths:r}=e;let n=0,i=0;for(let e=0;e<r.length;e++)i+=Q(s,n,r[e],t),n+=e;return Math.abs(i)}function ee(e,t){const s=e.clone(),r=e.coords,n=e.lengths;let i=0;for(let e=0;e<n.length;e++){const o=n[e];let a=r[t*i],c=r[t*i+1];for(let e=1;e<o;e++){const n=a+r[t*(i+e)],o=c+r[t*(i+e)+1];s.coords[t*(i+e)]=n,s.coords[t*(i+e)+1]=o,a=n,c=o}i+=o}return s}},21205:(e,t,s)=>{s.d(t,{n:()=>c});var r=s(58574),n=s(47817);const i=4294967296,o=(0,r.t)("esri-text-decoder")?new TextDecoder("utf-8"):null,a=(0,r.t)("safari")||(0,r.t)("ios")?6:(0,r.t)("ff")?12:32;class c{constructor(e,t,s=0,r=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,s,r)}init(e,t,s,r){this._data=e,this._dataView=t,this._pos=s,this._end=r}clone(){return new c(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getUint32(t+4,!0)*i;return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getInt32(t+4,!0)*i;return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,r){const n=this.getMessage(),i=e(n,t,s,r);return n.release(),i}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=c.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){c.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,s=this._pos,r=0;if(this._end-s>=10)do{if(t=e[s++],r|=127&t,0==(128&t))break;if(t=e[s++],r|=(127&t)<<7,0==(128&t))break;if(t=e[s++],r|=(127&t)<<14,0==(128&t))break;if(t=e[s++],r|=(127&t)<<21,0==(128&t))break;if(t=e[s++],r+=268435456*(127&t),0==(128&t))break;if(t=e[s++],r+=34359738368*(127&t),0==(128&t))break;if(t=e[s++],r+=4398046511104*(127&t),0==(128&t))break;if(t=e[s++],r+=562949953421312*(127&t),0==(128&t))break;if(t=e[s++],r+=72057594037927940*(127&t),0==(128&t))break;if(t=e[s++],r+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;s!==this._end&&(t=e[s],0!=(128&t));)++s,r+=(127&t)*n,n*=128;if(s===this._end)throw new Error("Varint overrun!");++s,r+=t*n}return this._pos=s,r}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>a&&o){const r=e.subarray(t,s);return o.decode(r)}let r="",n="";for(let i=t;i<s;++i){const t=e[i];128&t?n+="%"+t.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(r+=decodeURIComponent(n)),r}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}c.pool=new n.cg(c,null,(e=>{e._data=null,e._dataView=null}))},84780:(e,t,s)=>{s.d(t,{I:()=>M,g:()=>f,n:()=>c,t:()=>R});var r=s(47817),n=s(1186),i=s(69764),o=s(21205);const a=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class c{constructor(e){this.options=e,this.geometryTypes=a,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new n.e}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,r.bf)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,i.T)(this.options.sourceSpatialReference)/(0,i.T)(e.spatialReference);if(1!==t)for(const s of e.features){if(!s.geometry||!s.geometry.coords)continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new n.t}createSpatialReference(){return{wkid:0}}createGeometry(){return new n.a}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new n.a}}const l=r.S.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],h=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],d=["upperLeft","lowerLeft"];function f(e){return e>=u.length?null:u[e]}function g(e){return e>=h.length?null:h[e]}function p(e){return e>=d.length?null:d[e]}function y(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function m(e,t,s){const r=t.createPointGeometry(s);for(;e.next();)switch(e.tag()){case 3:{const s=e.getUInt32(),n=e.pos()+s;let i=0;for(;e.pos()<n;)t.addCoordinatePoint(r,e.getSInt64(),i++);break}default:e.skip()}return r}function b(e,t,s){const r=t.createGeometry(s),n=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const s=e.getUInt32(),n=e.pos()+s;let i=0;for(;e.pos()<n;)t.addLength(r,e.getUInt32(),i++);break}case 3:{const s=e.getUInt32(),i=e.pos()+s;let o=0;for(t.allocateCoordinates(r);e.pos()<i;)t.addCoordinate(r,e.getSInt64(),o),o++,o===n&&(o=0);break}default:e.skip()}return r}function k(e){const t=new n.a;let s="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const s=e.getUInt32(),r=e.pos()+s;for(;e.pos()<r;)t.lengths.push(e.getUInt32());break}case 3:{const s=e.getUInt32(),r=e.pos()+s;for(;e.pos()<r;)t.coords.push(e.getSInt64());break}case 1:s=a[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:s}}function _(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function T(e){const t={type:f(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=f(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=g(e.getEnum());break;case 5:try{t.domain=JSON.parse(e.getString())}catch(e){l.error(new r.s("query:parsing-pbf","Failed to parse domain",{error:e})),t.domain=null}break;case 6:t.defaultValue=e.getString();break;default:e.skip()}return t}function I(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function w(e,t,s,r){const n=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=r[i++].name;n.attributes[t]=e.processMessage(_);break}case 2:n.geometry=e.processMessageWithArgs(b,t,s);break;case 4:n.centroid=e.processMessageWithArgs(m,t,s);break;default:e.skip()}return n}function G(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function q(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function M(e){const t={originPosition:p(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=p(e.getEnum());break;case 2:t.scale=e.processMessage(G);break;case 3:t.translate=e.processMessage(q);break;default:e.skip()}return t}function S(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function F(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function U(e,t){const s=t.createFeatureResult();s.geometryType=y(t,0);let r=!1;for(;e.next();)switch(e.tag()){case 1:s.objectIdFieldName=e.getString();break;case 3:s.globalIdFieldName=e.getString();break;case 4:s.geohashFieldName=e.getString();break;case 5:s.geometryProperties=e.processMessage(S);break;case 7:s.geometryType=y(t,e.getEnum());break;case 8:s.spatialReference=e.processMessageWithArgs(F,t);break;case 10:s.hasZ=e.getBool();break;case 11:s.hasM=e.getBool();break;case 12:s.transform=e.processMessage(M);break;case 9:{const t=e.getBool();s.exceededTransferLimit=t;break}case 13:t.addField(s,e.processMessage(T));break;case 15:r||(t.prepareFeatures(s),r=!0),t.addFeature(s,e.processMessageWithArgs(w,t,s,s.fields));break;case 2:s.uniqueIdField=e.processMessage(I);break;default:e.skip()}return t.finishFeatureResult(s),s}function P(e,t){const s={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(k);break;case 1:s.featureResult=e.processMessageWithArgs(U,t);break;default:e.skip()}return(0,r.H)(n)&&s.featureResult&&t.addQueryGeometry(s,n),s}function R(e,t){const s=function(e,t){try{const s=2,r=new o.n(new Uint8Array(e),new DataView(e)),n={};for(;r.next();)r.tag()===s?n.queryResult=r.processMessageWithArgs(P,t):r.skip();return n}catch(e){throw new r.s("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}(e,t),n=s.queryResult.featureResult,i=s.queryResult.queryGeometry,a=s.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=a),n}},69764:(e,t,s)=>{s.d(t,{E:()=>a,G:()=>F,I:()=>w,K:()=>q,L:()=>U,Q:()=>x,R:()=>G,T:()=>M,V:()=>B,Y:()=>S,a:()=>i,b:()=>c,c:()=>o,l:()=>u,u:()=>l}),s(58574);var r=s(47817);function n(e){return new r.O({wkt:`GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`})}const i=n(r.aW),o=n(r.aU),a=n(r.aV),c=new r.O({wkt:`GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${r.aW.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`});function l(e){return(0,r.aZ)(e)?r.aU:(0,r.a_)(e)?r.aV:r.aW}const u=39.37,h=r.aW.radius*Math.PI/200,d=/UNIT\[([^\]]+)\]\]$/i,f=r.a$,g=/UNIT\[([^\]]+)\]/i,p=new Set([4261,4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104139,104140]),y=(0,r.aL)()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"}),m=e=>e*e,b=e=>e*e*e,k={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1e3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:m(.001)},"square-centimeters":{inBaseUnits:m(.01)},"square-decimeters":{inBaseUnits:m(.1)},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:m(1e3)},"square-inches":{inBaseUnits:m(.0254)},"square-feet":{inBaseUnits:m(.3048)},"square-yards":{inBaseUnits:m(.9144)},"square-miles":{inBaseUnits:m(1609.344)},"square-us-feet":{inBaseUnits:m(1200/3937)},acres:{inBaseUnits:.0015625*m(1609.344)},ares:{inBaseUnits:100},hectares:{inBaseUnits:1e4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1e3*b(.001)},"cubic-centimeters":{inBaseUnits:1e3*b(.01)},"cubic-decimeters":{inBaseUnits:1e3*b(.1)},"cubic-meters":{inBaseUnits:1e3},"cubic-kilometers":{inBaseUnits:1e3*b(1e3)},"cubic-inches":{inBaseUnits:1e3*b(.0254)},"cubic-feet":{inBaseUnits:1e3*b(.3048)},"cubic-yards":{inBaseUnits:1e3*b(.9144)},"cubic-miles":{inBaseUnits:1e3*b(1609.344)}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},_=function(){const e={};for(const t in k)for(const s in k[t].units)e[s]=t;return e}();function T(e){const t=_[e];if(t)return t;throw new Error("unknown measure")}function I(e,t=null){return t=t||T(e),k[t].baseUnit===e}function w(e,t,s){if(t===s)return e;const r=T(t);if(r!==T(s))throw new Error("incompatible units");const n=I(t,r)?e:function(e,t,s){return e*k[s].units[t].inBaseUnits}(e,t,r);return I(s,r)?n:function(e,t,s){return e/k[s].units[t].inBaseUnits}(n,s,r)}function G(e,t,s){return w(e,t,"meters")/(s*Math.PI/180)}function q(e){return y.fromJSON(e.toLowerCase())||null}function M(e){if(e&&"object"==typeof e&&!(0,r.b0)(e))return 1;const t=F(e);return t>1e5?1:t}function S(e){return F(e)>=(e instanceof r.O?(t=e,t&&((0,r.aX)(t)||t===o)?r.aU:t&&((0,r.aY)(t)||t===a)?r.aV:r.aW).metersPerDegree:1e5)?"meters":U(e);var t}function F(e,t=r.aW.metersPerDegree){return function(e,t=!1){let s,n,i=null;if(null!=e&&("object"==typeof e?(s=e.wkid,n=e.wkt):"number"==typeof e?s=e:"string"==typeof e&&(n=e)),s){if((0,r.aZ)(s))return r.aU.metersPerDegree;if((0,r.a_)(s))return r.aV.metersPerDegree;i=f.values[f[s]],!i&&t&&p.has(s)&&(i=h)}else if(n)if(-1!==n.search(/^PROJCS/i)){const e=d.exec(n);e&&e[1]&&(i=parseFloat(e[1].split(",")[1]))}else if(-1!==n.search(/^GEOCCS/i)){const e=g.exec(n);e&&e[1]&&(i=parseFloat(e[1].split(",")[1]))}return i}(e,!0)||t}function U(e){let t,s,r=null;if(null!=e&&("object"==typeof e?(t=e.wkid,s=e.wkt):"number"==typeof e?t=e:"string"==typeof e&&(s=e)),t)r=f.units[f[t]];else if(s&&-1!==s.search(/^PROJCS/i)){let e=d.exec(s);e&&e[1]&&(e=/[\\"\\']{1}([^\\"\\']+)/.exec(e[1]),r=e&&e[1])}return r?q(r):null}const P={esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"},R={esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"},x=(0,r.aL)()(P),B=(0,r.aL)()(R);(0,r.aL)()({...P,...R})},54100:(e,t,s)=>{s.d(t,{l:()=>a,t:()=>i});var r=s(47817),n=s(69764);function i(e,t,s){if((0,r.t)(t)||(0,r.t)(s)||s.vcsWkid||(0,r.bf)(t,s))return null;const i=(0,n.T)(t)/(0,n.T)(s);if(1===i)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,i);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const s of e.paths)for(const e of s)e.length>2&&(e[2]*=t)}(e,i);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const s of e.rings)for(const e of s)e.length>2&&(e[2]*=t)}(e,i);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const s of e.points)s.length>2&&(s[2]*=t)}(e,i);default:return null}}function o(e,t,s){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=s)}function a(e,t,s){if(!e&&!t||!s)return;const r=(0,n.T)(s);c(e,s,r),c(t,s,r)}function c(e,t,s){if(e)for(const r of e)l(r.geometry,t,s)}function l(e,t,s){if(!e||!e.spatialReference||(0,r.bf)(e.spatialReference,t))return;const i=(0,n.T)(e.spatialReference)/s;if(1!==i)if("x"in e)null!=e.z&&(e.z*=i);else if("rings"in e)o(e,e.rings,i);else if("paths"in e)o(e,e.paths,i);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=i)}}}]);