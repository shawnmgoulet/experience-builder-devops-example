/*! For license information please see 403f9e7f638130e7a69deb2ee39ba4fe.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[86548],{99094:(e,t,i)=>{function n(e,t){return(e+t)%t}i.d(t,{g:()=>n})},58435:(e,t,i)=>{i.d(t,{S:()=>r,a:()=>b,b:()=>v,c:()=>p,d:()=>k,f:()=>n,i:()=>S,r:()=>l});var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,s="object"==typeof self&&self&&self.Object===Object&&self,l=n||s||Function("return this")(),r=l.Symbol,a=Object.prototype,c=a.hasOwnProperty,o=a.toString,u=r?r.toStringTag:void 0,d=Object.prototype.toString,f="[object Null]",h="[object Undefined]",m=r?r.toStringTag:void 0;function v(e){return null==e?void 0===e?h:f:m&&m in Object(e)?function(e){var t=c.call(e,u),i=e[u];try{e[u]=void 0;var n=!0}catch(e){}var s=o.call(e);return n&&(t?e[u]=i:delete e[u]),s}(e):function(e){return d.call(e)}(e)}function p(e){return null!=e&&"object"==typeof e}var g="[object Symbol]";function b(e){return"symbol"==typeof e||p(e)&&v(e)==g}var y=/\s/,E=/^\s+/;function S(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var F=NaN,I=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,C=parseInt;function T(e){if("number"==typeof e)return e;if(b(e))return F;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(i)+1).replace(E,""):i;var n=w.test(e);return n||x.test(e)?C(e.slice(2),n?2:8):I.test(e)?F:+e}var O=function(){return l.Date.now()},j="Expected a function",A=Math.max,V=Math.min;function k(e,t,i){var n,s,l,r,a,c,o=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(j);function h(t){var i=n,l=s;return n=s=void 0,o=t,r=e.apply(l,i)}function m(e){var i=e-c;return void 0===c||i>=t||i<0||d&&e-o>=l}function v(){var e=O();if(m(e))return p(e);a=setTimeout(v,function(e){var i=t-(e-c);return d?V(i,l-(e-o)):i}(e))}function p(e){return a=void 0,f&&n?h(e):(n=s=void 0,r)}function g(){var e=O(),i=m(e);if(n=arguments,s=this,c=e,i){if(void 0===a)return function(e){return o=e,a=setTimeout(v,t),u?h(e):r}(c);if(d)return clearTimeout(a),a=setTimeout(v,t),h(c)}return void 0===a&&(a=setTimeout(v,t)),r}return t=T(t)||0,S(i)&&(u=!!i.leading,l=(d="maxWait"in i)?A(T(i.maxWait)||0,t):l,f="trailing"in i?!!i.trailing:f),g.cancel=function(){void 0!==a&&clearTimeout(a),o=0,n=c=s=a=void 0},g.flush=function(){return void 0===a?r:p(O())},g}},29340:(e,t,i)=>{i.d(t,{a:()=>l,c:()=>a,s:()=>r});const n=new WeakMap,s=new WeakMap;function l(e){s.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function a(e){return s.get(e)}},52551:(e,t,i)=>{i.d(t,{C:()=>n,S:()=>s});const n={heading:"heading",container:"container",indented:"container--indented"},s={parentItem:"parent-item"}},23002:(e,t,i)=>{i.d(t,{C:()=>n,I:()=>s,S:()=>l});const n={sticky:"sticky-pos"};var s;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(s||(s={}));const l={menuActions:"menu-actions"}},11737:(e,t,i)=>{i.d(t,{L:()=>U,a:()=>O,b:()=>L,c:()=>f,d:()=>T,e:()=>h,f:()=>k,g:()=>P,h:()=>V,i:()=>d,j:()=>m,k:()=>g,l:()=>v,m:()=>o,n:()=>p,o:()=>C,p:()=>x,q:()=>y,r:()=>I,s:()=>j,t:()=>b});var n=i(99094),s=i(9615),l=i(52551),r=i(58435),a=i(30396),c=i(23002);function o(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const u=["ArrowUp","ArrowDown"];function d(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=(0,r.d)(F.bind(this),0),this.emitCalciteListFilter=(0,r.d)(S.bind(this),0)}function f(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}function h(){this.mutationObserver?.disconnect()}function m(e){const{selectedValues:t}=this,{item:i,value:n,selected:l,shiftPressed:r}=e.detail;l?(this.multiple&&r&&this.selectSiblings(i),this.multiple||this.deselectSiblingItems(i),t.set(n,i)):(t.delete(n),this.multiple&&r&&this.selectSiblings(i,!0)),this.multiple||(w(i,l),l&&(0,s.h)(i)),this.lastSelectedItem=i,this.emitCalciteListChange()}function v(e){const t=e.detail.oldValue,i=this.selectedValues;if(i.has(t)){const n=i.get(t);i.delete(t),i.set(e.detail.newValue,n)}e.stopPropagation()}function p(e){const{el:t,items:i,multiple:n,selectedValues:s}=this;n||t.contains(e.relatedTarget)||E(i).forEach((t=>{w(t,0===s.size?t.contains(e.target)||e.target===t:t.selected)}))}function g(e){const{key:t,target:i}=e;if(!function(e){return!!u.find((t=>t===e))}(t))return;const{items:n,multiple:l,selectionFollowsFocus:r}=this,{length:a}=n,c=n.indexOf(i);if(!a||-1===c)return;e.preventDefault();const o=n[b(this,i,"ArrowUp"===t?"up":"down")];n.forEach((e=>w(e,e===o))),!l&&r&&(o.selected=!0),(0,s.h)(o)}function b(e,t,i){const{items:s}=e,{length:l}=s,r=s.indexOf(t),a="up"===i?-1:1;let c=1,o=(0,n.g)(r+a*c++,l);const u=o;for(;s[o].disabled&&(o=(0,n.g)(r+a*c++,l),o!==u););return o}function y(e,t){const{items:i}=e;return i.indexOf(t)}function E(e){return e.filter((e=>!e.disabled))}function S(){this.calciteListFilter.emit()}function F(){this.calciteListChange.emit(this.selectedValues)}function I(e){if(e.defaultPrevented)return;const t=e.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName&&t.slot===l.S.parentItem?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((e=>i.delete(e.value)))):(t.remove(),i.delete(t.value)),this.emitCalciteListChange()}function w(e,t){e.disabled||(t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1"))}async function x(e){if(this.filterEnabled&&"filter"===e)return void await(0,s.h)(this.filterEl);const{items:t,multiple:i,selectionFollowsFocus:n}=this;if(0===t.length)return;if(i)return E(t)[0]?.setFocus();const l=E(t),r=l.find((e=>e.selected))||l[0];return n&&r&&(r.selected=!0),r.setFocus()}function C(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:i}=this;i.forEach((e=>{e.icon=this.getIconType(),this.multiple||(e.deselectDisabled=!0,w(e,!1)),e.selected&&(t=!0,w(e,!0),this.selectedValues.set(e.value,e))}));const[n]=i;t||!n||n.disabled||w(n,!0)}function T(){const e=this.selectedValues,t=this.items.map((({value:e})=>e));e.forEach((e=>{t.includes(e.value)||this.selectedValues.delete(e.value)}))}function O(e){this.items.forEach((t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))}))}function j(e,t=!1){if(!this.lastSelectedItem)return;const{items:i}=this,n=i.findIndex((e=>e.value===this.lastSelectedItem.value)),s=i.findIndex((t=>t.value===e.value));i.slice(Math.min(n,s),Math.max(n,s)).forEach((e=>{e.toggleSelected(!t),t?this.selectedValues.delete(e.value):this.selectedValues.set(e.value,e)}))}let A;function V(e=!1){const{filteredData:t,filterText:i}=this,n=t.map((e=>e.value));let l=!1;A||(A=new Set);const r=this.items?.filter((e=>{const t=e.parentElement;t.matches("calcite-pick-list-group")&&A.add(t);const s=!i||n.includes(e.value);return e.hidden=!s,l||(l=s&&e.selected),s}))||[];A.forEach((e=>{const t=r.some((t=>e.contains(t)));if(e.hidden=!t,!t)return;const i=(0,s.g)(e,"parent-item");i&&(i.hidden=!1,r.includes(i)&&Array.from(e.children).forEach((e=>e.hidden=!1)))})),A.clear(),r.length>0&&!l&&!this.multiple&&w(r[0],!0),this.setFilteredItems(r),e&&this.emitCalciteListFilter()}function k(){const e=this.filterEl?.filteredItems;e&&(this.filteredData=e),this.handleFilter()}function L(e){e.stopPropagation();const{filteredItems:t,value:i}=e.currentTarget;this.filterText=i,this.filteredData=t,this.handleFilter(!0)}function P(){return this.items.map((e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})))}const U=({props:{disabled:e,loading:t,filterEnabled:i,dataForFilter:n,handleFilterEvent:l,filterPlaceholder:r,filterText:o,setFilterEl:u,dragEnabled:d,storeAssistiveEl:f},...h})=>{const m=(0,a.h)("slot",null);return(0,a.h)(a.H,{"aria-busy":(0,s.t)(t),role:"menu",...h},(0,a.h)("section",null,d?(0,a.h)("span",{"aria-live":"assertive",class:"assistive-text",ref:f}):null,(0,a.h)("header",{class:{[c.C.sticky]:!0}},i?(0,a.h)("calcite-filter",{"aria-label":r,disabled:t||e,items:n,onCalciteFilterChange:l,placeholder:r,ref:u,value:o}):null,(0,a.h)("slot",{name:c.S.menuActions})),t?(0,a.h)("calcite-scrim",{loading:t}):null,m))}}}]);