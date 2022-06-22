System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-ui","jimu-theme","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,a){var t={},i={},l={},o={},n={},r={},s={},c={};return{setters:[function(e){t.Immutable=e.Immutable,t.React=e.React,t.ReactRedux=e.ReactRedux,t.classNames=e.classNames,t.css=e.css,t.jsx=e.jsx,t.polished=e.polished},function(e){i.getAppConfigAction=e.getAppConfigAction},function(e){l.DirectionSelector=e.DirectionSelector,l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection},function(e){o.defaultMessages=e.defaultMessages,o.searchUtils=e.searchUtils},function(e){n.Button=e.Button,n.DistanceUnits=e.DistanceUnits,n.Icon=e.Icon,n.Label=e.Label,n.MultiSelect=e.MultiSelect,n.Radio=e.Radio,n.Select=e.Select,n.Switch=e.Switch,n.Tab=e.Tab,n.Tabs=e.Tabs,n.Tooltip=e.Tooltip,n.defaultMessages=e.defaultMessages,n.hooks=e.hooks},function(e){r.useTheme=e.useTheme,r.useTheme2=e.useTheme2},function(e){s.FontStyle=e.FontStyle,s.InputUnit=e.InputUnit},function(e){c.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={88866:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=t},23137:e=>{"use strict";e.exports=i},74758:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=n},77756:e=>{"use strict";e.exports=l},55505:e=>{"use strict";e.exports=s},41362:e=>{"use strict";e.exports=c}},a={};function d(t){var i=a[t];if(void 0!==i)return i.exports;var l=a[t]={exports:{}};return e[t](l,l.exports,d),l.exports}d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a}),a},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var p={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(p),d.d(p,{default:()=>C});var e,a=d(48891),t=d(23137),i=d(77756),l=d(74758);!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(e||(e={}));var o=d(30726);const n={_widgetLabel:"Widget Controller",behavior:"Behavior",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",textFormatOverride:"Text",iconBackgroundOverride:"Icon",openStart:"Open widgets on loading",widgetsSelected:"{widgetNumber} widgets selected",appearanceTip:"Select the widgets inside the Widget Controller, and customize their icons, labels, or styles to change their appearances."};var r,s=d(34796);!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(r||(r={}));const c=e=>{const{className:t,title:i,type:l,active:n,onClick:c}=e,d=(()=>{const e=(0,s.useTheme)(),t=null==e?void 0:e.colors.white,i=null==e?void 0:e.colors.palette.primary[700],l=null==e?void 0:e.colors.palette.dark[900];return a.React.useMemo((()=>a.css`
    background-color: ${t} !important;
    padding: 0px !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${a.polished.rem(28)};
    height: ${a.polished.rem(28)};
    margin: 2px;
    border-radius: 0px; 
    &.active{
      border: 2px ${i} solid !important;
    }
    .inner {
      width: 66%;
      height: 66%;
      border: 1px ${l} solid;
      border-radius: 2px;
      &.circle {
        border-radius: 50%;
    }
    }
  `),[t,i,l])})(),p=(0,a.classNames)("shapes",{active:n},t);return(0,a.jsx)(o.Button,{css:d,onClick:c,title:i,"aria-label":i,"aria-pressed":n,className:p},(0,a.jsx)("div",{className:(0,a.classNames)("inner",{rectangle:l===r.Rectangle},{circle:l===r.Circle})}))};var u=d(55505),v=d(41362);const g=e=>{const{bold:t,italic:i,underline:l,strike:o,color:n,onChange:r}=e,c=(0,s.useTheme2)();return a.React.createElement("div",{className:"font-setting d-flex align-items-center",role:"group","aria-label":e["aria-label"]},a.React.createElement(u.FontStyle,{bold:t,italic:i,underline:l,strike:o,onChange:r}),a.React.createElement(v.ThemeColorPicker,{specificTheme:c,value:n,onChange:e=>r("color",e)}))},m=["default","active","hover"],h=e=>{const{variant:t,onChange:l}=e,r=o.hooks.useTranslate(n,o.defaultMessages),c=(0,s.useTheme2)();return(0,a.jsx)(i.SettingRow,{className:"sw-controller__advanced-setting",flow:"wrap"},(0,a.jsx)(o.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,defaultValue:m[0]},m.map(((e,n)=>{const s=null==t?void 0:t[e];return(0,a.jsx)(o.Tab,{key:n,id:e,className:"tab-title-item",title:r(e)},(0,a.jsx)(i.SettingRow,{className:"mt-3",label:r("textFormatOverride"),flow:"no-wrap"},(0,a.jsx)(g,{"aria-label":r("textFormatOverride"),bold:null==s?void 0:s.bold,italic:null==s?void 0:s.italic,underline:null==s?void 0:s.underline,strike:null==s?void 0:s.strike,color:null==s?void 0:s.color,onChange:(a,t)=>l(e,a,t)})),(0,a.jsx)(i.SettingRow,{className:"mt-2",label:r("iconBackgroundOverride"),flow:"no-wrap"},(0,a.jsx)(v.ThemeColorPicker,{"aria-label":r("iconBackgroundOverride"),specificTheme:c,value:null==s?void 0:s.bg,onChange:a=>l(e,"bg",a)})))}))))};var b=d(88866),x=d.n(b);const w=e=>{const t=(()=>{const e=(0,s.useTheme)(),t=null==e?void 0:e.colors.palette.dark[600],i=null==e?void 0:e.colors.black;return a.css`
    .jimu-icon {
      color: ${t};
      &:hover {
        color: ${i};
      }
    }
  `})(),{className:i,tooltip:l="",icon:n=x()}=e;return(0,a.jsx)(o.Tooltip,{title:l},(0,a.jsx)(o.Button,{icon:!0,size:"sm",type:"tertiary",css:t,className:(0,a.classNames)("icon-tooltip d-flex align-items-center",i)},(0,a.jsx)(o.Icon,{icon:n})))},y=e=>{const{className:t,label:i,tooltip:l="",icon:o}=e;return(0,a.jsx)("div",{className:(0,a.classNames)("label-tooltip d-flex align-items-center",t)},(0,a.jsx)("div",{className:"text-truncate",title:i},i),(0,a.jsx)(w,{icon:o,tooltip:l}))},S="#080808",f="none",j=a.css`
    font-size: 13px;
    font-weight: lighter;
    .setting-row-item {
      width: 100%;
      display: flex;
      margin-top: 0.5rem;
      > span.jimu-radio {
        flex-shrink: 0;
        margin-top: 0.1rem;
      }
      > label {
        margin-bottom: 0;
      }
    }
    .jimu-multi-select {
      width: 100%;
      > .jimu-dropdown {
        width: 100%;
      }
      > .jimu-menu-item {
        width: 100%;
        height: ${a.polished.rem(26)};
      }
    }
  `,k=(e,a)=>{var t,i,l,o,n;const r=(null===(i=null===(t=null==a?void 0:a.appearance)||void 0===t?void 0:t.card.avatar)||void 0===i?void 0:i.type)||"primary";let s=null===(n=null===(o=null===(l=null==e?void 0:e.components)||void 0===l?void 0:l.button)||void 0===o?void 0:o.variants)||void 0===n?void 0:n[r];return s=s.setIn(["default","color"],S),s=s.setIn(["active","color"],S),s},C=d=>{var p,v,g,m,b,x,w,S,C,I,T,R,N,O,M,B,z;const{id:L,config:A,onSettingChange:P}=d,U=null===(p=null==A?void 0:A.behavior)||void 0===p?void 0:p.onlyOpenOne,D=null===(v=null==A?void 0:A.behavior)||void 0===v?void 0:v.displayType,$=null===(g=null==A?void 0:A.behavior)||void 0===g?void 0:g.vertical,_=null===(m=null==A?void 0:A.behavior)||void 0===m?void 0:m.openStarts,E=null===(b=null==A?void 0:A.appearance)||void 0===b?void 0:b.space,F=null===(x=null==A?void 0:A.appearance)||void 0===x?void 0:x.advanced,W=null===(w=null==A?void 0:A.appearance.card)||void 0===w?void 0:w.showLabel,G=null===(C=null===(S=null==A?void 0:A.appearance.card)||void 0===S?void 0:S.showTooltip)||void 0===C||C,Z=null!==(T=null===(I=null==A?void 0:A.appearance.card)||void 0===I?void 0:I.labelGrowth)&&void 0!==T?T:0,H=null===(N=null===(R=null==A?void 0:A.appearance.card)||void 0===R?void 0:R.avatar)||void 0===N?void 0:N.size,V=null===(M=null===(O=null==A?void 0:A.appearance.card)||void 0===O?void 0:O.avatar)||void 0===M?void 0:M.shape,K=null!==(B=null==_?void 0:_[0])&&void 0!==B?B:f,X=$?E:Z,Y=(0,s.useTheme2)(),q=((e,t)=>{const i=(e=>{var a,t,i;let l=(null!==(i=null===(t=null===(a=null==e?void 0:e.order)||void 0===a?void 0:a.asMutable)||void 0===t?void 0:t.call(a))&&void 0!==i?i:[]).map((a=>{var t;return null===(t=e.content)||void 0===t?void 0:t[a]}));return l=l.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),l.map((e=>e.id)).map((a=>{var t,i;return null===(i=null===(t=e.content)||void 0===t?void 0:t[a])||void 0===i?void 0:i.widgetId}))})(a.ReactRedux.useSelector((a=>{var t,i,o,n;const r=null===(o=null===(i=null===(t=(a=a.appStateInBuilder).appConfig.widgets)||void 0===t?void 0:t[e])||void 0===i?void 0:i.layouts)||void 0===o?void 0:o.controller,s=a.browserSizeMode,c=a.appConfig.mainSizeMode,d=l.searchUtils.findLayoutId(r,s,c);return null===(n=a.appConfig.layouts)||void 0===n?void 0:n[d]}))),o=a.ReactRedux.useSelector((e=>e.appStateInBuilder.appConfig.widgets));return(0,a.Immutable)(i||[]).map((e=>{var a;return{label:null===(a=o[e])||void 0===a?void 0:a.label,value:e}}))})(L),J=o.hooks.useTranslate(o.defaultMessages,l.defaultMessages,n),Q=F?null===(z=null==A?void 0:A.appearance)||void 0===z?void 0:z.card.variant:k(Y,A),ee=(e,a)=>{let t=null;t=Array.isArray(e)?A.setIn(e,a):A.set(e,a),P({id:L,config:t})},ae=(t,i,l)=>{if(!t.currentTarget.checked)return;let o=null;"onlyOpenOne"===i?o=A.setIn(["behavior","openStarts"],(0,a.Immutable)([])).setIn(["behavior",i],l):"displayType"===i&&(l=l?e.Stack:e.SideBySide,o=A.setIn(["behavior",i],l)),P({id:L,config:o})};return(0,a.jsx)("div",{className:"widget-setting-controller jimu-widget-setting",css:j},(0,a.jsx)(i.SettingSection,null,(0,a.jsx)(i.SettingRow,{flow:"no-wrap",label:J("direction")},(0,a.jsx)(i.DirectionSelector,{"aria-label":J("direction"),size:"sm",vertical:$,onChange:e=>{const a=A.setIn(["behavior","vertical"],e).setIn(["appearance","card","labelGrowth"],0).setIn(["appearance","space"],0);P({id:L,config:a}),(0,t.getAppConfigAction)().exchangeWidthAndHeight().exec()}}))),(0,a.jsx)(i.SettingSection,{title:J("behavior"),role:"group","aria-label":J("behavior")},(0,a.jsx)(i.SettingRow,{flow:"wrap",label:J("openWidget")},(0,a.jsx)("div",{role:"radiogroup",className:"setting-row-item","aria-label":J("openWidget")},(0,a.jsx)(o.Radio,{id:"only-open-one",style:{cursor:"pointer"},name:"only-open-one",onChange:e=>ae(e,"onlyOpenOne",!0),checked:U}),(0,a.jsx)(o.Label,{style:{cursor:"pointer"},for:"only-open-one",className:"ml-2"},J("single"))),(0,a.jsx)("div",{className:"setting-row-item"},(0,a.jsx)(o.Radio,{id:"open-multiple",style:{cursor:"pointer"},name:"only-open-one",onChange:e=>ae(e,"onlyOpenOne",!1),checked:!U}),(0,a.jsx)(o.Label,{style:{cursor:"pointer"},for:"open-multiple",className:"ml-2"},J("multiple")))),(0,a.jsx)(i.SettingRow,{flow:"wrap",label:J("openStart")},!U&&(0,a.jsx)(o.MultiSelect,{size:"sm","a11y-description":J("openStart"),values:_,items:q,onClickItem:(e,a,t)=>{const i=U?t.length?[a]:[]:t;ee(["behavior","openStarts"],i)},displayByValues:e=>{if(U&&e.length){const a=q.find((a=>a.value===e[0]));return null==a?void 0:a.label}{const a=(null==e?void 0:e.length)||0;return J("widgetsSelected",{widgetNumber:a})}}}),U&&(0,a.jsx)(o.Select,{"a11y-description":J("openStart"),value:K,size:"sm",onChange:e=>{const a=e.target.value;let t=[];a!==f&&(t=[a]),ee(["behavior","openStarts"],t)},className:"w-100"},(0,a.jsx)("option",{value:f},J("none")),null==q?void 0:q.map((e=>(0,a.jsx)("option",{key:e.value,value:e.value},e.label))))),!U&&(0,a.jsx)(i.SettingRow,{flow:"wrap",label:J("displayType")},(0,a.jsx)("div",{role:"radiogroup",className:"setting-row-item","aria-label":J("displayType")},(0,a.jsx)(o.Radio,{id:"display-stack",style:{cursor:"pointer"},name:"display-type",onChange:e=>ae(e,"displayType",!0),checked:D===e.Stack}),(0,a.jsx)(o.Label,{style:{cursor:"pointer"},for:"display-stack",className:"ml-2"},J("stack"))),(0,a.jsx)("div",{className:"setting-row-item"},(0,a.jsx)(o.Radio,{id:"display-side-by-side",style:{cursor:"pointer"},name:"display-type",onChange:e=>ae(e,"displayType",!1),checked:D===e.SideBySide}),(0,a.jsx)(o.Label,{style:{cursor:"pointer"},for:"display-side-by-side",className:"ml-2"},J("sideBySide"))))),(0,a.jsx)(i.SettingSection,{role:"group","aria-label":J("appearance"),title:(0,a.jsx)(y,{label:J("appearance"),tooltip:J("appearanceTip")})},(0,a.jsx)(i.SettingRow,{flow:"wrap",label:J("iconStyle")},(0,a.jsx)("div",{role:"group",className:"d-flex","aria-label":J("iconStyle")},(0,a.jsx)(c,{type:r.Circle,title:J("circle",!0),className:"mr-2",active:"circle"===V,onClick:()=>ee(["appearance","card","avatar","shape"],"circle")}),(0,a.jsx)(c,{type:r.Rectangle,title:J("rectangle"),active:"rectangle"===V,onClick:()=>ee(["appearance","card","avatar","shape"],"rectangle")}))),(0,a.jsx)(i.SettingRow,{label:J("showIconLabel")},(0,a.jsx)(o.Switch,{checked:W,"aria-label":J("showIconLabel"),onChange:e=>ee(["appearance","card","showLabel"],e.target.checked)})),(0,a.jsx)(i.SettingRow,{label:J("tooltip")},(0,a.jsx)(o.Switch,{checked:G,"aria-label":J("tooltip"),onChange:e=>ee(["appearance","card","showTooltip"],e.target.checked)})),(0,a.jsx)(i.SettingRow,{flow:"no-wrap",label:J("iconSizeOverride")},(0,a.jsx)(o.Select,{size:"sm","aria-label":J("iconSizeOverride"),value:H,onChange:e=>ee(["appearance","card","avatar","size"],e.target.value),className:"w-50"},(0,a.jsx)("option",{value:"sm"},J("small")),(0,a.jsx)("option",{value:"default"},J("medium")),(0,a.jsx)("option",{value:"lg"},J("large")))),(0,a.jsx)(i.SettingRow,{flow:"no-wrap",label:J("iconInterval")},(0,a.jsx)(u.InputUnit,{className:"w-50",min:0,max:999,description:J("iconInterval"),value:{distance:X,unit:o.DistanceUnits.PIXEL},onChange:({distance:e})=>(e=>{e=+e,isNaN(e)&&(e=0);let a=A;a=a.behavior.vertical?a.setIn(["appearance","space"],e).setIn(["appearance","card","labelGrowth"],0):a.setIn(["appearance","card","labelGrowth"],e).setIn(["appearance","space"],0),P({id:L,config:a})})(e)}))),(0,a.jsx)(i.SettingSection,null,(0,a.jsx)(i.SettingRow,{flow:"no-wrap",label:J("advance")},(0,a.jsx)(o.Switch,{"aria-label":J("advance"),checked:F,onChange:()=>{var e;const a=!(null===(e=null==A?void 0:A.appearance)||void 0===e?void 0:e.advanced);let t=A.setIn(["appearance","advanced"],a);if(a){const e=k(Y,A);t=t.setIn(["appearance","card","variant"],e)}else t=t.setIn(["appearance","card","variant"],void 0);P({id:L,config:t})}})),F&&(0,a.jsx)(h,{variant:Q,onChange:(e,a,t)=>{ee(["appearance","card","variant",e,a],t)}})))}})(),p})())}}}));