/*! For license information please see b4235bf6fe91ef57bf7a68edb4850a4f.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[61326],{61326:(t,n,i)=>{i.r(n),i.d(n,{calcite_link:()=>l});var e=i(30396),a=i(9615),o=i(32544),r=i(29340),c=i(90770);const l=class{constructor(t){(0,e.r)(this,t),this.childElClickHandler=t=>{t.isTrusted||t.stopPropagation()},this.storeTagRef=t=>{this.childEl=t},this.disabled=!1,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.rel=void 0,this.target=void 0}componentWillLoad(){(0,r.a)(this)}componentDidLoad(){(0,r.s)(this)}componentDidRender(){(0,o.u)(this)}render(){const{download:t,el:n}=this,i=(0,a.b)(n),o=this.href?"a":"span",r=(0,e.h)("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),l=(0,e.h)("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"}),s=o,u="span"===o?"link":null,d="span"===o?0:null;return(0,e.h)(e.H,{role:"presentation"},(0,e.h)(s,{class:{[c.C.rtl]:"rtl"===i},download:"a"!==s||""!==t&&!t?null:t,href:"a"===s&&this.href,onClick:this.childElClickHandler,ref:this.storeTagRef,rel:"a"===s&&this.rel,role:u,tabIndex:d,target:"a"===s&&this.target},this.iconStart?r:null,(0,e.h)("slot",null),this.iconEnd?l:null))}clickHandler(t){t.isTrusted||this.childEl.click()}async setFocus(){await(0,r.c)(this),(0,a.h)(this.childEl)}get el(){return(0,e.g)(this)}};l.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-ui-text-link);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"},9615:(t,n,i)=>{i.d(n,{a:()=>y,b:()=>u,c:()=>p,d:()=>S,e:()=>s,f:()=>d,g:()=>A,h:()=>k,i:()=>D,j:()=>v,k:()=>c,l:()=>r,m:()=>z,n:()=>l,o:()=>R,p:()=>F,q:()=>m,r:()=>E,s:()=>_,t:()=>C,u:()=>h});var e=i(96440),a=i(31964),o=i(90770);const r={getShadowRoot:!0};function c(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,a.g)()}`:""}function l(t){return Array.isArray(t)?t:Array.from(t)}function s(t){const n=p(t,`.${o.C.darkMode}, .${o.C.lightMode}`);return n?.classList.contains("calcite-mode-dark")?"dark":"light"}function u(t){const n=p(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function d(t,n,i){const e=`[${n}]`,a=t.closest(e);return a?a.getAttribute(n):i}function h(t){return t.getRootNode()}function f(t){return t.host||null}function m(t,{selector:n,id:i}){return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const a=h(e),o=i?"getElementById"in a?a.getElementById(i):null:n?a.querySelector(n):null,r=f(a);return o||(r?t(r):null)}(t)}function p(t,n){return function t(i){return i?i.closest(n)||t(f(h(i))):null}(t)}function g(t,n){return b(t,n)}function b(t,n){if(!t)return;const i=n(t);if(void 0!==i)return i;const{parentNode:e}=t;return b(e instanceof ShadowRoot?e.host:e,n)}function y(t,n){return!!g(n,(n=>n===t||void 0))}async function k(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function v(t){((0,e.t)(t,r)[0]||t).focus()}const x=":not([slot])";function A(t,n,i){n&&!Array.isArray(n)&&"string"!=typeof n&&(i=n,n=null);const e=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:x;return i?.all?function(t,n,i){let e=n===x?w(t,x):Array.from(t.querySelectorAll(n));e=i&&!1===i.direct?e:e.filter((n=>n.parentElement===t)),e=i?.matches?e.filter((t=>t?.matches(i.matches))):e;const a=i?.selector;return a?e.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):e}(t,e,i):function(t,n,i){let e=n===x?w(t,x)[0]||null:t.querySelector(n);e=i&&!1===i.direct||e?.parentElement===t?e:null,e=i?.matches?e?.matches(i.matches)?e:null:e;const a=i?.selector;return a?e?.querySelector(a):e}(t,e,i)}function w(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function E(t,n){return Array.from(t.children).filter((t=>t.matches(n)))}function S(t,n,i){return"string"==typeof n&&""!==n?n:""===n?t[i]:void 0}function R(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function C(t){return Boolean(t).toString()}function _(t){return!!z(t).length}function z(t){return t.target.assignedElements({flatten:!0})}function D(t){return!(!t.isPrimary||0!==t.button)}const F=(t,n,i)=>{const e=t.indexOf(n),a=0===e,o=e===t.length-1;let r;switch(i="previous"===i&&a?"last":"next"===i&&o?"first":i){case"first":r=t[0];break;case"last":r=t[t.length-1];break;case"next":r=t[e+1]||t[0];break;case"previous":r=t[e-1]||t[t.length-1]}return k(r),r}},31964:(t,n,i)=>{i.d(n,{g:()=>e});const e=()=>[2,1,1,1,3].map((t=>{let n="";for(let i=0;i<t;i++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")},32544:(t,n,i)=>{function e(){}function a(t,n=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=e);t.el.click=HTMLElement.prototype.click,"function"==typeof n?t.el.setAttribute("tabindex",n.call(t)?"0":"-1"):!0===n?t.el.setAttribute("tabindex","0"):!1===n&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}i.d(n,{u:()=>a})},29340:(t,n,i)=>{i.d(n,{a:()=>o,c:()=>c,s:()=>r});const e=new WeakMap,a=new WeakMap;function o(t){a.set(t,new Promise((n=>e.set(t,n))))}function r(t){e.get(t)()}function c(t){return a.get(t)}}}]);