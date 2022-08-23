/*! For license information please see qr-code.js.LICENSE.txt */
System.register(["jimu-core","jimu-core/react","jimu-theme","jimu-ui"],(function(e,t){var n={},s={},r={},o={};return{setters:[function(e){n.React=e.React,n.classNames=e.classNames,n.css=e.css,n.injectIntl=e.injectIntl,n.jsx=e.jsx},function(e){s.default=e.default,s.useEffect=e.useEffect,s.useRef=e.useRef},function(e){r.registerStyles=e.registerStyles,r.withStyles=e.withStyles},function(e){o.Button=e.Button,o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{"use strict";var e={48891:e=>{e.exports=n},51315:e=>{e.exports=s},34796:e=>{e.exports=r},30726:e=>{e.exports=o}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{i.r(l),i.d(l,{QRCode:()=>A});var e,t=i(34796),n=i(48891),s=i(51315),r=Object.defineProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>{var n={};for(var s in e)a.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&o)for(var s of o(e))t.indexOf(s)<0&&u.call(e,s)&&(n[s]=e[s]);return n};(e=>{const t=class{constructor(e,n,s,r){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw"Version value out of range";if(r<-1||r>7)throw"Mask value out of range";this.size=4*e+17;let i=[];for(let e=0;e<this.size;e++)i.push(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();const l=this.addEccAndInterleave(s);if(this.drawCodewords(l),-1==r){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}o(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(n,s){const r=e.QrSegment.makeSegments(n);return t.encodeSegments(r,s)}static encodeBinary(n,s){const r=e.QrSegment.makeBytes(n);return t.encodeSegments([r],s)}static encodeSegments(e,n,r=1,i=40,a=-1,u=!0){if(!(t.MIN_VERSION<=r&&r<=i&&i<=t.MAX_VERSION)||a<-1||a>7)throw"Invalid value";let c,h;for(c=r;;c++){const s=8*t.getNumDataCodewords(c,n),r=l.getTotalBits(e,c);if(r<=s){h=r;break}if(c>=i)throw"Data too long"}for(const e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])u&&h<=8*t.getNumDataCodewords(c,e)&&(n=e);let d=[];for(const t of e){s(t.mode.modeBits,4,d),s(t.numChars,t.mode.numCharCountBits(c),d);for(const e of t.getData())d.push(e)}o(d.length==h);const f=8*t.getNumDataCodewords(c,n);o(d.length<=f),s(0,Math.min(4,f-d.length),d),s(0,(8-d.length%8)%8,d),o(d.length%8==0);for(let e=236;d.length<f;e^=253)s(e,8,d);let m=[];for(;8*m.length<d.length;)m.push(0);return d.forEach(((e,t)=>m[t>>>3]|=e<<7-(7&t))),new t(c,n,m,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let s=0;s<t;s++)0==n&&0==s||0==n&&s==t-1||n==t-1&&0==s||this.drawAlignmentPattern(e[n],e[s]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let e=0;e<10;e++)n=n<<1^1335*(n>>>9);const s=21522^(t<<10|n);o(s>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,r(s,e));this.setFunctionModule(8,7,r(s,6)),this.setFunctionModule(8,8,r(s,7)),this.setFunctionModule(7,8,r(s,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,r(s,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,r(s,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,r(s,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;o(t>>>18==0);for(let e=0;e<18;e++){const n=r(t,e),s=this.size-11+e%3,o=Math.floor(e/3);this.setFunctionModule(s,o,n),this.setFunctionModule(o,s,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let s=-4;s<=4;s++){const r=Math.max(Math.abs(s),Math.abs(n)),o=e+s,i=t+n;0<=o&&o<this.size&&0<=i&&i<this.size&&this.setFunctionModule(o,i,2!=r&&4!=r)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let s=-2;s<=2;s++)this.setFunctionModule(e+s,t+n,1!=Math.max(Math.abs(s),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,s=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,s))throw"Invalid argument";const r=t.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][n],i=t.ECC_CODEWORDS_PER_BLOCK[s.ordinal][n],l=Math.floor(t.getNumRawDataModules(n)/8),a=r-l%r,u=Math.floor(l/r);let c=[];const h=t.reedSolomonComputeDivisor(i);for(let n=0,s=0;n<r;n++){let r=e.slice(s,s+u-i+(n<a?0:1));s+=r.length;const o=t.reedSolomonComputeRemainder(r,h);n<a&&r.push(0),c.push(r.concat(o))}let d=[];for(let e=0;e<c[0].length;e++)c.forEach(((t,n)=>{(e!=u-i||n>=a)&&d.push(t[e])}));return o(d.length==l),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw"Invalid argument";let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let s=0;s<this.size;s++)for(let o=0;o<2;o++){const i=t-o,l=0==(t+1&2)?this.size-1-s:s;!this.isFunction[l][i]&&n<8*e.length&&(this.modules[l][i]=r(e[n>>>3],7-(7&n)),n++)}}o(n==8*e.length)}applyMask(e){if(e<0||e>7)throw"Mask value out of range";for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let s;switch(e){case 0:s=(n+t)%2==0;break;case 1:s=t%2==0;break;case 2:s=n%3==0;break;case 3:s=(n+t)%3==0;break;case 4:s=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:s=n*t%2+n*t%3==0;break;case 6:s=(n*t%2+n*t%3)%2==0;break;case 7:s=((n+t)%2+n*t%3)%2==0;break;default:throw"Unreachable"}!this.isFunction[t][n]&&s&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let s=!1,r=0,o=[0,0,0,0,0,0,0];for(let i=0;i<this.size;i++)this.modules[n][i]==s?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,o),s||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),s=this.modules[n][i],r=1);e+=this.finderPenaltyTerminateAndCount(s,r,o)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let s=!1,r=0,o=[0,0,0,0,0,0,0];for(let i=0;i<this.size;i++)this.modules[i][n]==s?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,o),s||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),s=this.modules[i][n],r=1);e+=this.finderPenaltyTerminateAndCount(s,r,o)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let s=0;s<this.size-1;s++){const r=this.modules[n][s];r==this.modules[n][s+1]&&r==this.modules[n+1][s]&&r==this.modules[n+1][s+1]&&(e+=t.PENALTY_N2)}let n=0;for(const e of this.modules)n=e.reduce(((e,t)=>e+(t?1:0)),n);const s=this.size*this.size,r=Math.ceil(Math.abs(20*n-10*s)/s)-1;return o(0<=r&&r<=9),e+=r*t.PENALTY_N4,o(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let s=this.size-7;n.length<e;s-=t)n.splice(1,0,s);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw"Version number out of range";let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return o(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw"Degree out of range";let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let s=1;for(let r=0;r<e;r++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],s),e+1<n.length&&(n[e]^=n[e+1]);s=t.reedSolomonMultiply(s,2)}return n}static reedSolomonComputeRemainder(e,n){let s=n.map((e=>0));for(const r of e){const e=r^s.shift();s.push(0),n.forEach(((n,r)=>s[r]^=t.reedSolomonMultiply(n,e)))}return s}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw"Byte out of range";let n=0;for(let s=7;s>=0;s--)n=n<<1^285*(n>>>7),n^=(t>>>s&1)*e;return o(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];o(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};let n=t;function s(e,t,n){if(t<0||t>31||e>>>t!=0)throw"Value out of range";for(let s=t-1;s>=0;s--)n.push(e>>>s&1)}function r(e,t){return 0!=(e>>>t&1)}function o(e){if(!e)throw"Assertion error"}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;const i=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw"Invalid argument";this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)s(n,8,t);return new i(i.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!i.isNumeric(e))throw"String contains non-numeric characters";let t=[];for(let n=0;n<e.length;){const r=Math.min(e.length-n,3);s(parseInt(e.substr(n,r),10),3*r+1,t),n+=r}return new i(i.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!i.isAlphanumeric(e))throw"String contains unencodable characters in alphanumeric mode";let t,n=[];for(t=0;t+2<=e.length;t+=2){let r=45*i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));r+=i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),s(r,11,n)}return t<e.length&&s(i.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new i(i.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:i.isNumeric(e)?[i.makeNumeric(e)]:i.isAlphanumeric(e)?[i.makeAlphanumeric(e)]:[i.makeBytes(i.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw"ECI assignment value out of range";if(e<128)s(e,8,t);else if(e<16384)s(2,2,t),s(e,14,t);else{if(!(e<1e6))throw"ECI assignment value out of range";s(6,3,t),s(e,21,t)}return new i(i.Mode.ECI,0,t)}static isNumeric(e){return i.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return i.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const s of e){const e=s.mode.numCharCountBits(t);if(s.numChars>=1<<e)return 1/0;n+=4+e+s.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let l=i;l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=l})(e||(e={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};let n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n})(t=e.QrCode||(e.QrCode={}))})(e||(e={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};let n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n})(t=e.QrSegment||(e.QrSegment={}))})(e||(e={}));var f=e,m={L:f.QrCode.Ecc.LOW,M:f.QrCode.Ecc.MEDIUM,Q:f.QrCode.Ecc.QUARTILE,H:f.QrCode.Ecc.HIGH},g={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function p(e,t=0){const n=[];return e.forEach((function(e,s){let r=null;e.forEach((function(o,i){if(!o&&null!==r)return n.push(`M${r+t} ${s+t}h${i-r}v1H${r+t}z`),void(r=null);if(i!==e.length-1)o&&null===r&&(r=i);else{if(!o)return;null===r?n.push(`M${i+t},${s+t} h1v1H${i+t}z`):n.push(`M${r+t},${s+t} h${i+1-r}v1H${r+t}z`)}}))})),n.join("")}function M(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function E(e,t){const{imageSettings:n,size:s,includeMargin:r}=e;if(null==n)return null;const o=r?4:0,i=t.length+2*o,l=Math.floor(.1*s),a=i/s,u=(n.width||l)*a,c=(n.height||l)*a,h=null==n.x?t.length/2-u/2:n.x*a,d=null==n.y?t.length/2-c/2:n.y*a;let f=null;if(n.excavate){let e=Math.floor(h),t=Math.floor(d);f={x:e,y:t,w:Math.ceil(u+h-e),h:Math.ceil(c+d-t)}}return{x:h,y:d,h:c,w:u,excavation:f}}var C=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function w(e){const t=(0,s.useRef)(null),n=(0,s.useRef)(null);function r(){const{value:s,size:r,level:o,bgColor:i,fgColor:l,includeMargin:a}=e;if(null!=t.current){const u=t.current,c=u.getContext("2d");if(!c)return;let h=f.QrCode.encodeText(s,m[o]).getModules();const d=a?4:0,g=h.length+2*d,w=E(e,h),v=n.current,R=null!=w&&null!==v&&v.complete&&0!==v.naturalHeight&&0!==v.naturalWidth;R&&null!=w.excavation&&(h=M(h,w.excavation));const N=window.devicePixelRatio||1;u.height=u.width=r*N;const y=r/g*N;c.scale(y,y),c.fillStyle=i,c.fillRect(0,0,g,g),c.fillStyle=l,C?c.fill(new Path2D(p(h,d))):h.forEach((function(e,t){e.forEach((function(e,n){e&&c.fillRect(n+d,t+d,1,1)}))})),R&&c.drawImage(v,w.x+d,w.y+d,w.w,w.h)}}(0,s.useEffect)((()=>{r()}));const o=e,{value:i,size:l,level:a,bgColor:u,fgColor:c,style:g,includeMargin:w,imageSettings:v}=o,R=d(o,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),N=h({height:l,width:l},g);let y=null,A=null==v?void 0:v.src;return null!=A&&(y=s.default.createElement("img",{src:A,key:A,style:{display:"none"},onLoad:()=>{r()},ref:n})),s.default.createElement(s.default.Fragment,null,s.default.createElement("canvas",h({style:N,height:l,width:l,ref:t},R)),y)}function v(e){const t=e,{value:n,size:r,level:o,bgColor:i,fgColor:l,includeMargin:a,imageSettings:u}=t,c=d(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let g=f.QrCode.encodeText(n,m[o]).getModules();const C=a?4:0,w=g.length+2*C,v=E(e,g);let R=null;null!=u&&null!=v&&(null!=v.excavation&&(g=M(g,v.excavation)),R=s.default.createElement("image",{xlinkHref:u.src,height:v.h,width:v.w,x:v.x+C,y:v.y+C,preserveAspectRatio:"none"}));const N=p(g,C);return s.default.createElement("svg",h({shapeRendering:"crispEdges",height:r,width:r,viewBox:`0 0 ${w} ${w}`},c),s.default.createElement("path",{fill:i,d:`M0,0 h${w}v${w}H0z`}),s.default.createElement("path",{fill:l,d:N}),R)}w.defaultProps=g,v.defaultProps=g;var R=e=>{const t=e,{renderAs:n}=t,r=d(t,["renderAs"]),o="svg"===n?v:w;return s.default.createElement(o,h({},r))};R.defaultProps=h({renderAs:"canvas"},g);var N=i(30726);class y extends n.React.PureComponent{constructor(e){super(e),this.RENDER_TYPE="canvas",this.DOWNLOAD_FILE_NAME="exb-qr-code-img",this.DOWNLOAD_BTN_LABEL="Save as image",this._onBtnClick=()=>{this.downloadImg()},this._getSaveBtnLabel=()=>this.props.intl?this.props.intl.formatMessage({id:"qrCodeSaveBtnLabel",defaultMessage:N.defaultMessages.qrCodeSaveBtnLabel}):this.DOWNLOAD_BTN_LABEL,this.wapperRef=n.React.createRef(),this.hiddenLinkRef=n.React.createRef()}downloadImg(){try{const e=this.wapperRef.current,t=this.hiddenLinkRef.current,n=e.querySelector("canvas");t.href=n.toDataURL(),t.download=this.props.downloadFileName?this.props.downloadFileName:this.DOWNLOAD_FILE_NAME,t.click()}catch(e){console.warn("jimuQRCode download error: "+e)}}render(){const e=(0,n.classNames)(this.props.className,"jimu-qrcode");let t="btn";return this.props.hideDownloadBtn&&(t="hide-btn"),(0,n.jsx)("div",{className:e},(0,n.jsx)("div",{ref:this.wapperRef,className:"qrcode-wapper"},(0,n.jsx)(R,{value:this.props.value,size:this.props.size,bgColor:this.props.bgColor,fgColor:this.props.fgColor,level:this.props.level,includeMargin:this.props.includeMargin,renderAs:this.RENDER_TYPE}),(0,n.jsx)("a",{href:"",ref:this.hiddenLinkRef,tabIndex:-1})),(0,n.jsx)("div",{className:t},(0,n.jsx)(N.Button,{onClick:this._onBtnClick,size:"sm",type:"secondary",className:"mt-3"},this._getSaveBtnLabel())))}}const A=(0,t.withStyles)((0,n.injectIntl)(y),"QRCode");(0,t.registerStyles)("jimu-ui/basic/qr-code",{QRCode:function(e){return n.css`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    .qrcode-wapper{
      display: flex;
    }
    .btn{
      display: flex;
    }
    .hide-btn{
      display: none;
    }
  `}})})(),l})())}}}));