System.register(["jimu-core","jimu-core/react","jimu-theme","jimu-ui"],(function(e,t){var o={},r={},n={},a={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){o.React=e.React,o.classNames=e.classNames,o.css=e.css,o.hooks=e.hooks,o.jsx=e.jsx},function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){n.registerStyles=e.registerStyles,n.withTheme=e.withTheme},function(e){a.Button=e.Button,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={17965:(e,t,o)=>{"use strict";var r=o(16426),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,c,s,i,l,u=!1;t||(t={}),o=t.debug||!1;try{if(c=r(),s=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),i.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){o&&console.error("unable to copy using execCommand: ",r),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){o&&console.error("unable to copy using clipboardData: ",r),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(s):i.removeAllRanges()),l&&document.body.removeChild(l),c()}return u}},25264:(e,t,o)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=s(o(68972)),a=s(o(17965)),c=["text","onCopy","options","children"];function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){m(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function p(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=b(e);if(t){var a=b(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,o)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(i,e);var t,o,r,s=y(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return m(d(e=s.call.apply(s,[this].concat(o))),"onClick",(function(t){var o=e.props,r=o.text,c=o.onCopy,s=o.children,i=o.options,l=n.default.Children.only(s),u=(0,a.default)(r,i);c&&c(r,u),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)})),e}return t=i,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=u(e,c),r=n.default.Children.only(t);return n.default.cloneElement(r,l(l({},o),{},{onClick:this.onClick}))}}])&&p(t.prototype,o),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default.PureComponent);t.CopyToClipboard=v,m(v,"defaultProps",{onCopy:void 0,options:void 0})},59399:(e,t,o)=>{"use strict";var r=o(25264).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},56499:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},98657:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11 2v10H3V4.414L5.414 2zM2 4.414a1 1 0 0 1 .293-.707l2.414-2.414A1 1 0 0 1 5.414 1H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zM13.048 3v10.56c0 .265-.214.48-.477.48H4V15h8.571c.79 0 1.429-.645 1.429-1.44V3z" clip-rule="evenodd"></path></svg>'},16426:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],r=0;r<e.rangeCount;r++)o.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},79244:e=>{"use strict";e.exports=o},68972:e=>{"use strict";e.exports=r},1888:e=>{"use strict";e.exports=n},14321:e=>{"use strict";e.exports=a}},t={};function c(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";c.r(s),c.d(s,{CopyButton:()=>v});var e={};c.r(e),c.d(e,{getStyles:()=>r});var t=c(1888),o=c(79244);function r(){return o.css`
    border: none;
    max-height: 32px;
    max-width: 32px;
  `}var n=c(14321),a=c(59399);var i=c(98657),l=c.n(i),u=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const p=e=>{const t=window.SVG,{className:r}=e,n=u(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",r);return t?o.React.createElement(t,Object.assign({className:a,src:l()},n)):o.React.createElement("svg",Object.assign({className:a},n))};var f=c(56499),y=c.n(f),d=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o};const b=e=>{const t=window.SVG,{className:r}=e,n=d(e,["className"]),a=(0,o.classNames)("jimu-icon jimu-icon-component",r);return t?o.React.createElement(t,Object.assign({className:a,src:y()},n)):o.React.createElement("svg",Object.assign({className:a},n))},m=o.React.memo((e=>{const{text:t,disabled:c,className:s}=e,[i,l]=o.React.useState(null),[u,f]=((e,t)=>{const r=o.React.useRef(null),n=o.React.useCallback((e=>{t(e)}),[t]),a=o.React.useCallback((()=>{r.current&&(clearTimeout(r.current),r.current=null),n(!1)}),[n]),c=o.React.useCallback((()=>{a(),n(!0),r.current=setTimeout((()=>{a()}),e)}),[e,n,a]);return o.React.useEffect((()=>()=>{a()}),[]),[c,a]})(3e3,l);o.React.useEffect((()=>{f()}),[t,f]);const y=o.React.useCallback(((t,o)=>{(null==e?void 0:e.onCopy)&&e.onCopy(t,o),u()}),[e,u]),d=o.hooks.useTranslation(n.defaultMessages),m=d("copy"),v=d("copiedToClipboard"),g=i?v:m,O=(0,o.jsx)(n.Button,{className:"copy-btn jimu-outline-inside d-flex",icon:!0,size:"sm",type:"tertiary",disabled:c},!i&&(0,o.jsx)(p,{size:"m",autoFlip:!1,className:"ready-to-copy"}),i&&(0,o.jsx)(b,{size:"m",autoFlip:!1,className:"copy-succeeded"}));return(0,o.jsx)("div",{css:r(),className:s},(0,o.jsx)(a.CopyToClipboard,{onCopy:y,text:t,options:{format:"text/plain"},"data-testid":"copy-btn"},c?O:(0,o.jsx)(n.Tooltip,{title:g,placement:"auto-end"},O)))})),v=(0,t.withTheme)(m);(0,t.registerStyles)("jimu-ui/basic/copy-button",e)})(),s})())}}}));