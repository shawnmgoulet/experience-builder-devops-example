"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[91504],{91504:(e,t,a)=>{a.r(t),a.d(t,{addOrUpdateResource:()=>o,contentToBlob:()=>i,fetchResources:()=>s,getSiblingOfSameType:()=>p,getSiblingOfSameTypeI:()=>d,removeAllResources:()=>c,removeResource:()=>n,splitPrefixFileNameAndExtension:()=>u});var r=a(47817);async function s(e,t={},a){await e.load(a);const s=(0,r.b3)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:c="asc",sortField:l="created"}=t,u={query:{start:o,num:n,sortOrder:c,sortField:l},signal:(0,r.a3)(a,"signal")},i=await e.portal._request(s,u);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:a,resource:r})=>({created:new Date(t),size:a,resource:e.resourceFromPath(r)})))}}async function o(e,t,a,s){if(!e.hasPath())throw new r.s(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(s);const o=(0,r.b3)(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[n,c]=l(e.path),u=await i(a),p=new FormData;return n&&"."!==n&&p.append("resourcesPrefix",n),p.append("fileName",c),p.append("file",u,c),p.append("f","json"),(0,r.H)(s)&&s.access&&p.append("access",s.access),await e.portalItem.portal._request(o,{method:"post",body:p,signal:(0,r.a3)(s,"signal")}),e}async function n(e,t,a){if(!t.hasPath())throw new r.s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const s=(0,r.b3)(e.userItemUrl,"removeResources");await e.portal._request(s,{method:"post",query:{resource:t.path},signal:(0,r.a3)(a,"signal")}),t.portalItem=null}async function c(e,t){await e.load(t);const a=(0,r.b3)(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:(0,r.a3)(t,"signal")})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,a]=function(e){const t=(0,r.ch)(e);return(0,r.t)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,o]=l(t);return[s,o,a]}async function i(e){return e instanceof Blob?e:(await(0,r.U)(e.url,{responseType:"blob"})).data}function p(e,t){if(!e.hasPath())return null;const[a,,s]=u(e.path);return e.portalItem.resourceFromPath((0,r.b3)(a,t+s))}function d(e,t){if(!e.hasPath())return null;const[a,,s]=u(e.path);return e.portalItem.resourceFromPath((0,r.b3)(a,t+s))}a(58574),a(68700)}}]);