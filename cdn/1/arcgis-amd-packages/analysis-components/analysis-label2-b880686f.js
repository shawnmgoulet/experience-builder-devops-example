define(["exports","./index-86304dcd","./index2-600fb1b2","./utils-2b3d82c1"],(function(e,t,i,s){"use strict";const a=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisLabelHelpActionClick=t.createEvent(this,"analysisLabelHelpActionClick",7),this.mouseOver=e=>{const t=e.target;void 0===this.requiredTooltip&&(this.requiredTooltip=document.createElement("calcite-tooltip"),this.requiredTooltip.placement="bottom",this.requiredTooltip.innerText=this.strings.requiredLabel),this.requiredTooltip.referenceElement=t,s.addOpenableDomElement(document,this.requiredTooltip)},this.removeTooltip=()=>{s.removeOpenableDomElement(this.requiredTooltip)},this.mouseOut=()=>{this.removeTooltip()},this.label=void 0,this.required=!1,this.hideHelp=!1}async componentWillLoad(){({strings:this.strings,dir:this.dir}=await i.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath(".")))}disconnectedCallback(){this.removeTooltip()}render(){return t.h(t.Host,null,t.h("div",{class:"label-container",dir:this.dir},t.h("div",{class:"text-wrapper"},this.label,!0===this.required?t.h("calcite-icon",{icon:"bullet-point",scale:s.UIDefaults.Scale,onMouseOver:this.mouseOver,onMouseOut:this.mouseOut}):null),!1===this.hideHelp?t.h("calcite-action",{class:"help-action",text:"help",icon:"information",scale:s.UIDefaults.Scale,onClick:e=>{this.analysisLabelHelpActionClick.emit(),e.stopPropagation()}}):null))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;width:100%}.label-container{display:flex;width:100%;margin-bottom:var(--analysis-quarter-spacing);gap:var(--analysis-quarter-spacing)}.text-wrapper{display:flex;align-items:center;--calcite-ui-icon-color:var(--calcite-ui-danger);font-size:var(--calcite-font-size--2)}.text-wrapper calcite-action{margin-inline:8px}.help-action{margin-inline-start:auto}"}},[1,"analysis-label",{label:[513],required:[516],hideHelp:[516,"hide-help"]}]);function l(){"undefined"!=typeof customElements&&["analysis-label"].forEach((e=>{"analysis-label"===e&&(customElements.get(e)||customElements.define(e,a))}))}l(),e.AnalysisLabel=a,e.defineCustomElement=l}));