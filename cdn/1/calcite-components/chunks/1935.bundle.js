/*! For license information please see 1935.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1935,1993,9731,842,7166,5283],{1993:t=>{function e(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=1993,t.exports=e},4242:(t,e,i)=>{"use strict";i.r(e),i.d(e,{CalciteAccordionItem:()=>m,defineCustomElement:()=>u});var n=i(7210),c=i(4974),o=i(9145),a=i(4586);const s="actions-start",r="actions-end",l="section",d="section-toggle",h=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=(0,n.yM)(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=(0,n.yM)(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){(0,c.c)(this)}disconnectedCallback(){(0,c.d)(this)}renderActionsStart(){const{el:t}=this;return(0,o.g)(t,s)?(0,n.h)("div",{class:"actions-start"},(0,n.h)("slot",{name:s})):null}renderActionsEnd(){const{el:t}=this;return(0,o.g)(t,r)?(0,n.h)("div",{class:"actions-end"},(0,n.h)("slot",{name:r})):null}render(){const{iconFlipRtl:t}=this,e=(0,o.b)(this.el),i=this.iconStart?(0,n.h)("calcite-icon",{class:"icon--start",flipRtl:"both"===t||"start"===t,icon:this.iconStart,key:"icon-start",scale:"l"===this.scale?"m":"s"}):null,c=this.iconEnd?(0,n.h)("calcite-icon",{class:"icon--end",flipRtl:"both"===t||"end"===t,icon:this.iconEnd,key:"icon-end",scale:"l"===this.scale?"m":"s"}):null,{description:a}=this;return(0,n.h)(n.AA,null,(0,n.h)("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},(0,n.h)("div",{class:{header:!0,[o.C.rtl]:"rtl"===e}},this.renderActionsStart(),(0,n.h)("div",{"aria-controls":l,"aria-expanded":(0,o.t)(this.expanded),class:"header-content",id:d,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},(0,n.h)("div",{class:"header-container"},i,(0,n.h)("div",{class:"header-text"},(0,n.h)("span",{class:"heading"},this.heading),a?(0,n.h)("span",{class:"description"},a):null),c),(0,n.h)("calcite-icon",{class:"expand-icon",icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:"l"===this.scale?"m":"s"})),this.renderActionsEnd()),(0,n.h)("section",{"aria-labelledby":d,class:"content",id:l},(0,n.h)("slot",null))))}keyDownHandler(t){if(t.target===this.el)switch(t.key){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault()}}updateActiveItemOnChange(t){const[e]=t.composedPath(),i=(0,o.c)(this.el,"calcite-accordion");e===i&&(this.determineActiveItem(i.selectionMode,t.detail.requestedAccordionItem),t.stopPropagation())}accordionItemSyncHandler(t){const[e]=t.composedPath(),i=this.el;if(i.parentElement===e)return;const n=(0,o.c)(i,"calcite-accordion");e===n&&(i.iconPosition=n.iconPosition,i.iconType=n.iconType,i.scale=n.scale,t.stopPropagation())}determineActiveItem(t,e){switch(t){case"multiple":this.el===e&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===e&&!this.expanded;break;case"single-persist":this.expanded=this.el===e}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return".icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:active) .expand-icon,:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function p(){"undefined"!=typeof customElements&&["calcite-accordion-item","calcite-icon"].forEach((t=>{switch(t){case"calcite-accordion-item":customElements.get(t)||customElements.define(t,h);break;case"calcite-icon":customElements.get(t)||(0,a.d)()}}))}p();const m=h,u=p},4974:(t,e,i)=>{"use strict";i.d(e,{c:()=>r,d:()=>l});var n=i(7210),c=i(5545);const o=new Set;let a;const s={childList:!0};function r(t){a||(a=(0,c.c)("mutation",d)),a.observe(t.el,s)}function l(t){o.delete(t.el),d(a.takeRecords()),a.disconnect();for(const[t]of o.entries())a.observe(t,s)}function d(t){t.forEach((({target:t})=>{(0,n.xE)(t)}))}},4586:(t,e,i)=>{"use strict";i.d(e,{I:()=>l,d:()=>d});var n=i(7210),c=i(9145),o=i(5545);const a={},s={},r={s:16,m:24,l:32};const l=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:i,scale:o,textLabel:a}=this,s=(0,c.b)(t),l=r[o],d=!!a,h=[].concat(i||"");return(0,n.h)(n.AA,{"aria-hidden":(0,c.t)(!d),"aria-label":d?a:null,role:d?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===s&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${l} ${l}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((t=>"string"==typeof t?(0,n.h)("path",{d:t}):(0,n.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:i}=this;n.Z5.isBrowser&&t&&i&&(this.pathData=await async function({icon:t,scale:e}){const i=r[e],c=function(t){const e=!isNaN(Number(t.charAt(0))),i=t.split("-");if(i.length>0){const e=/[a-z]/i;t=i.map(((t,i)=>t.replace(e,(function(t,e){return 0===i&&0===e?t:t.toUpperCase()})))).join("")}return e?`i${t}`:t}(t),o="F"===c.charAt(c.length-1),l=`${o?c.substring(0,c.length-1):c}${i}${o?"F":""}`;if(a[l])return a[l];s[l]||(s[l]=fetch((0,n.K3)(`./assets/icon/${l}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${l}" is not a valid calcite-ui-icon name`),""))));const d=await s[l];return a[l]=d,d}({icon:t,scale:e}))}waitUntilVisible(t){this.intersectionObserver=(0,o.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function d(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((t=>{"calcite-icon"===t&&(customElements.get(t)||customElements.define(t,l))}))}d()},5545:(t,e,i)=>{"use strict";i.d(e,{c:()=>c});var n=i(7210);function c(t,e,i){if(!n.Z5.isBrowser)return;const c=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new c(e,i)}}}]);