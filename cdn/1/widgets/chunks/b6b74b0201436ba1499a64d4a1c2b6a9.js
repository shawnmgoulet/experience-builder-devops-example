/*! For license information please see b6b74b0201436ba1499a64d4a1c2b6a9.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[42414],{42414:(e,t,s)=>{s.r(t),s.d(t,{arcgis_new_item_feature_layer_browser:()=>i});var r=s(28384),o=s(76134);s(27010);const i=class{constructor(e){(0,r.r)(this,e),this.itemSelected=(0,r.c)(this,"itemSelected",7),this.itemBrowserBucket=void 0,this.query='type:"Feature Service"',this.sortDropdownOptions=["modified","title","relevance"],this.filterSlot=void 0,this.hideBucketSelect=!1,this.items=void 0,this.showOwner=!0,this.showDateUpdated=!0,this.showItemType=!0,this.showSummary=!1,this.showThumbnail=!0,this.pagination=void 0}render(){const{pagination:e,showThumbnail:t,itemBrowserBucket:s,query:i,sortDropdownOptions:n,filterSlot:a,hideBucketSelect:c}=this,{portal:h,user:l,api:u,config:p}=o.c;return(0,r.h)(r.H,null,(0,r.h)("arcgis-item-browser",{onArcgisItemBrowserUpdate:e=>{const{results:t,num:s,start:r,total:o}=e.detail;this.items=t,this.pagination={start:r,num:s,total:o}},onArcgisItemBrowserSelect:e=>{this.itemSelected.emit(e.detail[0])},onArcgisItemBrowserLoading:()=>this.items=[],filter:i,portal:h,user:l,api:u,config:p,hidePreviewFooters:!0,selection:"single"},(0,r.h)("arcgis-item-browser-top-bar",{slot:"top-bar"},!c&&(0,r.h)("arcgis-item-browser-bucket-select",{slot:"bucket",options:s}),(0,r.h)("arcgis-item-browser-search",{slot:"search",term:""})),(0,r.h)("arcgis-item-browser-sort",{options:n,slot:"sort"}),a,(0,r.h)("arcgis-item-browser-content",{slot:"content"},(this.items||[]).map((e=>(0,r.h)("arcgis-item-browser-card",{item:e,portal:h,baseUrl:p.baseUrl,preview:"action",user:o.c.user,showOwner:this.showOwner,showDateUpdated:this.showDateUpdated,showItemType:this.showItemType,showSummary:this.showSummary,showThumbnail:t,key:e.id})))),(0,r.h)("arcgis-item-browser-pagination",{total:null==e?void 0:e.total,start:null==e?void 0:e.start,num:null==e?void 0:e.num,slot:"pagination"})))}}},76134:(e,t,s)=>{s.d(t,{c:()=>o,o:()=>i});const r=(0,s(27010).c)({portal:null,user:null,api:4,scale:"m"}),o=r.state,i=r.onChange},27010:(e,t,s)=>{s.d(t,{c:()=>a});var r=s(28384);const o=e=>!("isConnected"in e)||e.isConnected,i=((e,t)=>{let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))})(...e)}),2e3)}})(),n=e=>"function"==typeof e?e():e,a=(e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=n(e);let r=new Map(Object.entries(null!=s?s:{}));const o={dispose:[],get:[],set:[],reset:[]},i=()=>{var t;r=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},a=e=>(o.get.forEach((t=>t(e))),r.get(e)),c=(e,s)=>{const i=r.get(e);t(s,i,e)&&(r.set(e,s),o.set.forEach((t=>t(e,s,i))))},h="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>a(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(c(t,s),!0)}),l=(e,t)=>(o[e].push(t),()=>{((e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)})(o[e],t)});return{state:h,get:a,set:c,on:l,onChange:(t,s)=>{const r=l("set",((e,r)=>{e===t&&s(r)})),o=l("reset",(()=>s(n(e)[t])));return()=>{r(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),i()},reset:i,forceUpdate:e=>{const t=r.get(e);o.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.g)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),i(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),i(e)}}})()),s}}}]);