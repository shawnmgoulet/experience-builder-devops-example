(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[17041,43860],{17041:(n,t,r)=>{"use strict";r.r(t),r.d(t,{b:()=>i});var e=(0,r(19476).o)((function(n,t){var e,i=(e=(e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||"/index.js",function(n){var t,i=void 0!==(n=n||{})?n:{},o={};for(t in i)i.hasOwnProperty(t)&&(o[t]=i[t]);var a,u,s,c;s="object"==typeof window,c="function"==typeof importScripts,a="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,u=!s&&!a&&!c;var l,f,p,d,y="";a?(y=c?r(82416).dirname(y)+"/":"//",l=function(n,t){return p||(p=r(89539)),d||(d=r(82416)),n=d.normalize(n),p.readFileSync(n,t?null:"utf8")},f=function(n){var t=l(n,!0);return t.buffer||(t=new Uint8Array(t)),C(t.buffer),t},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(n){if(!(n instanceof At))throw n})),process.on("unhandledRejection",tn),i.inspect=function(){return"[Emscripten Module object]"}):u?("undefined"!=typeof read&&(l=function(n){return read(n)}),f=function(n){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(C("object"==typeof(t=read(n,"binary"))),t)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(s||c)&&(c?y=self.location.href:document.currentScript&&(y=document.currentScript.src),e&&(y=e),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",l=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},c&&(f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var h,v,m=i.print||console.log.bind(console),g=i.printErr||console.warn.bind(console);for(t in o)o.hasOwnProperty(t)&&(i[t]=o[t]);o=null,i.wasmBinary&&(h=i.wasmBinary),"object"!=typeof WebAssembly&&g("no native wasm support detected");var w=new WebAssembly.Table({initial:59,maximum:59,element:"anyfunc"}),b=!1;function C(n,t){n||tn("Assertion failed: "+t)}var T="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function $(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.subarray&&T)return T.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function P(n,t){return n?$(W,n,t):""}var _,A,W,E,S,F,k,O,j,R="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function I(n){for(var t=n,r=t>>1;E[r];)++r;if((t=r<<1)-n>32&&R)return R.decode(W.subarray(n,t));for(var e=0,i="";;){var o=E[n+2*e>>1];if(0==o)return i;++e,i+=String.fromCharCode(o)}}function D(n,t,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var e=t,i=(r-=2)<2*n.length?r/2:n.length,o=0;o<i;++o){var a=n.charCodeAt(o);E[t>>1]=a,t+=2}return E[t>>1]=0,t-e}function x(n){return 2*n.length}function U(n){for(var t=0,r="";;){var e=F[n+4*t>>2];if(0==e)return r;if(++t,e>=65536){var i=e-65536;r+=String.fromCharCode(55296|i>>10,56320|1023&i)}else r+=String.fromCharCode(e)}}function M(n,t,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var e=t,i=e+r-4,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),F[t>>2]=a,(t+=4)+4>i)break}return F[t>>2]=0,t-e}function V(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&++r,t+=4}return t}function z(n,t){return n%t>0&&(n+=t-n%t),n}function H(n){_=n,i.HEAP8=A=new Int8Array(n),i.HEAP16=E=new Int16Array(n),i.HEAP32=F=new Int32Array(n),i.HEAPU8=W=new Uint8Array(n),i.HEAPU16=S=new Uint16Array(n),i.HEAPU32=k=new Uint32Array(n),i.HEAPF32=O=new Float32Array(n),i.HEAPF64=j=new Float64Array(n)}var B=i.INITIAL_MEMORY||16777216;function G(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?i.dynCall_v(r):i.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t()}}(v=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:B/65536}))&&(_=v.buffer),B=_.byteLength,H(_),F[79544]=5561216;var L=[],N=[],q=[],X=[];function J(n){L.unshift(n)}function Y(n){X.unshift(n)}var Z=Math.ceil,K=Math.floor,Q=0,nn=null;function tn(n){throw i.onAbort&&i.onAbort(n),m(n+=""),g(n),b=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}i.preloadedImages={},i.preloadedAudios={};var rn="data:application/octet-stream;base64,";function en(n){return String.prototype.startsWith?n.startsWith(rn):0===n.indexOf(rn)}var on="basis_transcoder.wasm";function an(){try{if(h)return new Uint8Array(h);if(f)return f(on);throw"both async and sync fetching of the wasm failed"}catch(n){tn(n)}}function un(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}en(on)||(on=function(n){return i.locateFile?i.locateFile(n,y):y+n}(on)),N.push({func:function(){Tt()}});var sn=void 0;function cn(n){for(var t="",r=n;W[r];)t+=sn[W[r++]];return t}var ln={},fn={},pn={},dn=48,yn=57;function hn(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=dn&&t<=yn?"_"+n:n}function vn(n,t){return n=hn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)}function mn(n,t){var r=vn(t,(function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var gn=void 0;function wn(n){throw new gn(n)}var bn=void 0;function Cn(n){throw new bn(n)}function Tn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&Cn("Mismatched type converter count");for(var i=0;i<n.length;++i)$n(n[i],e[i])}n.forEach((function(n){pn[n]=t}));var i=new Array(t.length),o=[],a=0;t.forEach((function(n,t){fn.hasOwnProperty(n)?i[t]=fn[n]:(o.push(n),ln.hasOwnProperty(n)||(ln[n]=[]),ln[n].push((function(){i[t]=fn[n],++a===o.length&&e(i)})))})),0===o.length&&e(i)}function $n(n,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||wn('type "'+e+'" must have a positive integer typeid pointer'),fn.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;wn("Cannot register type '"+e+"' twice")}if(fn[n]=t,delete pn[n],ln.hasOwnProperty(n)){var i=ln[n];delete ln[n],i.forEach((function(n){n()}))}}function Pn(n){return{count:n.count,deleteScheduled:n.deleteScheduled,preservePointerOnDelete:n.preservePointerOnDelete,ptr:n.ptr,ptrType:n.ptrType,smartPtr:n.smartPtr,smartPtrType:n.smartPtrType}}function _n(n){wn(function(n){return n.$$.ptrType.registeredClass.name}(n)+" instance already deleted")}var An=!1;function Wn(n){}function En(n){n.count.value-=1,0===n.count.value&&function(n){n.smartPtr?n.smartPtrType.rawDestructor(n.smartPtr):n.ptrType.registeredClass.rawDestructor(n.ptr)}(n)}function Sn(n){return"undefined"==typeof FinalizationGroup?(Sn=function(n){return n},n):(An=new FinalizationGroup((function(n){for(var t=n.next();!t.done;t=n.next()){var r=t.value;r.ptr?En(r):console.warn("object already deleted: "+r.ptr)}})),Wn=function(n){An.unregister(n.$$)},(Sn=function(n){return An.register(n,n.$$,n.$$),n})(n))}var Fn=void 0,kn=[];function On(){for(;kn.length;){var n=kn.pop();n.$$.deleteScheduled=!1,n.delete()}}function jn(){}var Rn={};function In(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||wn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}function Dn(n,t,r){i.hasOwnProperty(n)?((void 0===r||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[r])&&wn("Cannot register public name '"+n+"' twice"),In(i,n,n),i.hasOwnProperty(r)&&wn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[n].overloadTable[r]=t):(i[n]=t,void 0!==r&&(i[n].numArguments=r))}function xn(n,t,r,e,i,o,a,u){this.name=n,this.constructor=t,this.instancePrototype=r,this.rawDestructor=e,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Un(n,t,r){for(;t!==r;)t.upcast||wn("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.upcast(n),t=t.baseClass;return n}function Mn(n,t){if(null===t)return this.isReference&&wn("null is not a valid "+this.name),0;t.$$||wn('Cannot pass "'+at(t)+'" as a '+this.name),t.$$.ptr||wn("Cannot pass deleted object as a pointer of type "+this.name);var r=t.$$.ptrType.registeredClass;return Un(t.$$.ptr,r,this.registeredClass)}function Vn(n,t){var r;if(null===t)return this.isReference&&wn("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==n&&n.push(this.rawDestructor,r),r):0;t.$$||wn('Cannot pass "'+at(t)+'" as a '+this.name),t.$$.ptr||wn("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&wn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var e=t.$$.ptrType.registeredClass;if(r=Un(t.$$.ptr,e,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&wn("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:wn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var i=t.clone();r=this.rawShare(r,ot((function(){i.delete()}))),null!==n&&n.push(this.rawDestructor,r)}break;default:wn("Unsupporting sharing policy")}return r}function zn(n,t){if(null===t)return this.isReference&&wn("null is not a valid "+this.name),0;t.$$||wn('Cannot pass "'+at(t)+'" as a '+this.name),t.$$.ptr||wn("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&wn("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass;return Un(t.$$.ptr,r,this.registeredClass)}function Hn(n){return this.fromWireType(k[n>>2])}function Bn(n,t,r){if(t===r)return n;if(void 0===r.baseClass)return null;var e=Bn(n,t,r.baseClass);return null===e?null:r.downcast(e)}var Gn={};function Ln(n,t){return t.ptrType&&t.ptr||Cn("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&Cn("Both smartPtrType and smartPtr must be specified"),t.count={value:1},Sn(Object.create(n,{$$:{value:t}}))}function Nn(n,t,r,e,i,o,a,u,s,c,l){this.name=n,this.registeredClass=t,this.isReference=r,this.isConst=e,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==t.baseClass?this.toWireType=Vn:e?(this.toWireType=Mn,this.destructorFunction=null):(this.toWireType=zn,this.destructorFunction=null)}function qn(n,t,r){i.hasOwnProperty(n)||Cn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==r?i[n].overloadTable[r]=t:(i[n]=t,i[n].argCount=r)}function Xn(n,t){n=cn(n);var r=function(r){for(var e=[],i=1;i<n.length;++i)e.push("a"+i);var o="return function dynCall_"+n+"_"+t+"("+e.join(", ")+") {\n";return o+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n",o+="};\n",new Function("dynCall","rawFunction",o)(r,t)}(i["dynCall_"+n]);return"function"!=typeof r&&wn("unknown function pointer with signature "+n+": "+t),r}var Jn=void 0;function Yn(n){var t=_t(n),r=cn(t);return Pt(t),r}function Zn(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||fn[t]||(pn[t]?pn[t].forEach(n):(r.push(t),e[t]=!0))})),new Jn(n+": "+r.map(Yn).join([", "]))}function Kn(n,t){for(var r=[],e=0;e<n;e++)r.push(F[(t>>2)+e]);return r}function Qn(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function nt(n,t){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var r=vn(n.name||"unknownFunctionName",(function(){}));r.prototype=n.prototype;var e=new r,i=n.apply(e,t);return i instanceof Object?i:e}function tt(n,t,r,e,i){var o=t.length;o<2&&wn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,s=1;s<t.length;++s)if(null!==t[s]&&void 0===t[s].destructorFunction){u=!0;break}var c="void"!==t[0].name,l="",f="";for(s=0;s<o-2;++s)l+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+hn(n)+"("+l+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",y=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[wn,e,i,Qn,t[0],t[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+t[s+2].name+"\n",y.push("argType"+s),h.push(t[s+2]);if(a&&(f="thisWired"+(f.length>0?", ":"")+f),p+=(c?"var rv = ":"")+"invoker(fn"+(f.length>0?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<t.length;++s){var v=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==t[s].destructorFunction&&(p+=v+"_dtor("+v+"); // "+t[s].name+"\n",y.push(v+"_dtor"),h.push(t[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",y.push(p),nt(Function,y).apply(null,h)}var rt=[],et=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function it(n){n>4&&0==--et[n].refcount&&(et[n]=void 0,rt.push(n))}function ot(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=rt.length?rt.pop():et.length;return et[t]={refcount:1,value:n},t}}function at(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function ut(n,t){switch(t){case 2:return function(n){return this.fromWireType(O[n>>2])};case 3:return function(n){return this.fromWireType(j[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function st(n,t,r){switch(t){case 0:return r?function(n){return A[n]}:function(n){return W[n]};case 1:return r?function(n){return E[n>>1]}:function(n){return S[n>>1]};case 2:return r?function(n){return F[n>>2]}:function(n){return k[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function ct(n){return n||wn("Cannot use deleted val. handle = "+n),et[n].value}function lt(n,t){var r=fn[n];return void 0===r&&wn(t+" has unknown type "+Yn(n)),r}var ft={};function pt(n){var t=ft[n];return void 0===t?cn(n):t}var dt=[];function yt(){return"object"==typeof globalThis?globalThis:Function("return this")()}function ht(n){for(var t="",r=0;r<n;++r)t+=(0!==r?", ":"")+"arg"+r;var e="return function emval_allocator_"+n+"(constructor, argTypes, args) {\n";for(r=0;r<n;++r)e+="var argType"+r+" = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + "+r+'], "parameter '+r+'");\nvar arg'+r+" = argType"+r+".readValueFromPointer(args);\nargs += argType"+r+"['argPackAdvance'];\n";return e+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",e)(lt,i,ot)}var vt={};function mt(n){try{return v.grow(n-_.byteLength+65535>>16),H(v.buffer),1}catch(n){}}var gt={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var r=gt.buffers[n];0===t||10===t?((1===n?m:g)($(r,0)),r.length=0):r.push(t)},varargs:void 0,get:function(){return gt.varargs+=4,F[gt.varargs-4>>2]},getStr:function(n){return P(n)},get64:function(n,t){return n}};(function(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);sn=n})(),gn=i.BindingError=mn(Error,"BindingError"),bn=i.InternalError=mn(Error,"InternalError"),jn.prototype.isAliasOf=function(n){if(!(this instanceof jn))return!1;if(!(n instanceof jn))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,e=n.$$.ptrType.registeredClass,i=n.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;e.baseClass;)i=e.upcast(i),e=e.baseClass;return t===e&&r===i},jn.prototype.clone=function(){if(this.$$.ptr||_n(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var n=Sn(Object.create(Object.getPrototypeOf(this),{$$:{value:Pn(this.$$)}}));return n.$$.count.value+=1,n.$$.deleteScheduled=!1,n},jn.prototype.delete=function(){this.$$.ptr||_n(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wn("Object already scheduled for deletion"),Wn(this),En(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},jn.prototype.isDeleted=function(){return!this.$$.ptr},jn.prototype.deleteLater=function(){return this.$$.ptr||_n(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&wn("Object already scheduled for deletion"),kn.push(this),1===kn.length&&Fn&&Fn(On),this.$$.deleteScheduled=!0,this},Nn.prototype.getPointee=function(n){return this.rawGetPointee&&(n=this.rawGetPointee(n)),n},Nn.prototype.destructor=function(n){this.rawDestructor&&this.rawDestructor(n)},Nn.prototype.argPackAdvance=8,Nn.prototype.readValueFromPointer=Hn,Nn.prototype.deleteObject=function(n){null!==n&&n.delete()},Nn.prototype.fromWireType=function(n){var t=this.getPointee(n);if(!t)return this.destructor(n),null;var r=function(n,t){return t=function(n,t){for(void 0===t&&wn("ptr should not be undefined");n.baseClass;)t=n.upcast(t),n=n.baseClass;return t}(n,t),Gn[t]}(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=n,r.clone();var e=r.clone();return this.destructor(n),e}function i(){return this.isSmartPointer?Ln(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:n}):Ln(this.registeredClass.instancePrototype,{ptrType:this,ptr:n})}var o,a=this.registeredClass.getActualType(t),u=Rn[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Bn(t,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?Ln(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:n}):Ln(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})},i.getInheritedInstanceCount=function(){return Object.keys(Gn).length},i.getLiveInheritedInstances=function(){var n=[];for(var t in Gn)Gn.hasOwnProperty(t)&&n.push(Gn[t]);return n},i.flushPendingDeletes=On,i.setDelayFunction=function(n){Fn=n,kn.length&&Fn&&Fn(On)},Jn=i.UnboundTypeError=mn(Error,"UnboundTypeError"),i.count_emval_handles=function(){for(var n=0,t=5;t<et.length;++t)void 0!==et[t]&&++n;return n},i.get_first_emval=function(){for(var n=5;n<et.length;++n)if(void 0!==et[n])return et[n];return null};var wt={G:function(n){return $t(n)},D:function(n,t,r){throw n},A:function(n,t,r,e,i){var o=un(r);$n(n,{name:t=cn(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=A;else if(2===r)e=E;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=F}return this.fromWireType(e[n>>o])},destructorFunction:null})},t:function(n,t,r,e,i,o,a,u,s,c,l,f,p){l=cn(l),o=Xn(i,o),u&&(u=Xn(a,u)),c&&(c=Xn(s,c)),p=Xn(f,p);var d=hn(l);Dn(d,(function(){Zn("Cannot construct "+l+" due to unbound types",[e])})),Tn([n,t,r],e?[e]:[],(function(t){var r,i;t=t[0],i=e?(r=t.registeredClass).instancePrototype:jn.prototype;var a=vn(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new gn("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new gn(l+" has no accessible constructor");var n=f.constructor_body[arguments.length];if(void 0===n)throw new gn("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return n.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new xn(l,a,s,p,r,o,u,c),y=new Nn(l,f,!0,!1,!1),h=new Nn(l+"*",f,!1,!1,!1),v=new Nn(l+" const*",f,!1,!0,!1);return Rn[n]={pointerType:h,constPointerType:v},qn(d,a),[y,h,v]}))},s:function(n,t,r,e,i,o){C(t>0);var a=Kn(t,r);i=Xn(e,i);var u=[o],s=[];Tn([],[n],(function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.registeredClass.constructor_body&&(n.registeredClass.constructor_body=[]),void 0!==n.registeredClass.constructor_body[t-1])throw new gn("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.registeredClass.constructor_body[t-1]=function(){Zn("Cannot construct "+n.name+" due to unbound types",a)},Tn([],a,(function(e){return n.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&wn(r+" called with "+arguments.length+" arguments, expected "+(t-1)),s.length=0,u.length=t;for(var n=1;n<t;++n)u[n]=e[n].toWireType(s,arguments[n-1]);var o=i.apply(null,u);return Qn(s),e[0].fromWireType(o)},[]})),[]}))},c:function(n,t,r,e,i,o,a,u){var s=Kn(r,e);t=cn(t),o=Xn(i,o),Tn([],[n],(function(n){var e=(n=n[0]).name+"."+t;function i(){Zn("Cannot call "+e+" due to unbound types",s)}u&&n.registeredClass.pureVirtualFunctions.push(t);var c=n.registeredClass.instancePrototype,l=c[t];return void 0===l||void 0===l.overloadTable&&l.className!==n.name&&l.argCount===r-2?(i.argCount=r-2,i.className=n.name,c[t]=i):(In(c,t,e),c[t].overloadTable[r-2]=i),Tn([],s,(function(i){var u=tt(e,i,n,o,a);return void 0===c[t].overloadTable?(u.argCount=r-2,c[t]=u):c[t].overloadTable[r-2]=u,[]})),[]}))},z:function(n,t){$n(n,{name:t=cn(t),fromWireType:function(n){var t=et[n].value;return it(n),t},toWireType:function(n,t){return ot(t)},argPackAdvance:8,readValueFromPointer:Hn,destructorFunction:null})},j:function(n,t,r){var e=un(r);$n(n,{name:t=cn(t),fromWireType:function(n){return n},toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+at(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:ut(t,e),destructorFunction:null})},x:function(n,t,r,e,i,o){var a=Kn(t,r);n=cn(n),i=Xn(e,i),Dn(n,(function(){Zn("Cannot call "+n+" due to unbound types",a)}),t-1),Tn([],a,(function(r){var e=[r[0],null].concat(r.slice(1));return qn(n,tt(n,e,null,i,o),t-1),[]}))},d:function(n,t,r,e,i){t=cn(t),-1===i&&(i=4294967295);var o=un(r),a=function(n){return n};if(0===e){var u=32-8*r;a=function(n){return n<<u>>>u}}var s=-1!=t.indexOf("unsigned");$n(n,{name:t,fromWireType:a,toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+at(r)+'" to '+this.name);if(r<e||r>i)throw new TypeError('Passing a number "'+at(r)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+e+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:st(t,o,0!==e),destructorFunction:null})},b:function(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){var t=k,r=t[n>>=2],i=t[n+1];return new e(_,i,r)}$n(n,{name:r=cn(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},k:function(n,t){var r="std::string"===(t=cn(t));$n(n,{name:t,fromWireType:function(n){var t,e=k[n>>2];if(r){var i=W[n+4+e],o=0;0!=i&&(o=i,W[n+4+e]=0);for(var a=n+4,u=0;u<=e;++u){var s=n+4+u;if(0==W[s]){var c=P(a);void 0===t?t=c:(t+=String.fromCharCode(0),t+=c),a=s+1}}0!=o&&(W[n+4+e]=o)}else{var l=new Array(e);for(u=0;u<e;++u)l[u]=String.fromCharCode(W[n+4+u]);t=l.join("")}return Pt(n),t},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e="string"==typeof t;e||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||wn("Cannot pass non-string to std::string");var i=(r&&e?function(){return function(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++r)),e<=127?++t:t+=e<=2047?2:e<=65535?3:4}return t}(t)}:function(){return t.length})(),o=$t(4+i+1);if(k[o>>2]=i,r&&e)!function(n,t,r){!function(n,t,r,e){if(!(e>0))return 0;for(var i=r+e-1,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),a<=127){if(r>=i)break;t[r++]=a}else if(a<=2047){if(r+1>=i)break;t[r++]=192|a>>6,t[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;t[r++]=224|a>>12,t[r++]=128|a>>6&63,t[r++]=128|63&a}else{if(r+3>=i)break;t[r++]=240|a>>18,t[r++]=128|a>>12&63,t[r++]=128|a>>6&63,t[r++]=128|63&a}}t[r]=0}(n,W,t,r)}(t,o+4,i+1);else if(e)for(var a=0;a<i;++a){var u=t.charCodeAt(a);u>255&&(Pt(o),wn("String has UTF-16 code units that do not fit in 8 bits")),W[o+4+a]=u}else for(a=0;a<i;++a)W[o+4+a]=t[a];return null!==n&&n.push(Pt,o),o},argPackAdvance:8,readValueFromPointer:Hn,destructorFunction:function(n){Pt(n)}})},i:function(n,t,r){var e,i,o,a,u;r=cn(r),2===t?(e=I,i=D,a=x,o=function(){return S},u=1):4===t&&(e=U,i=M,a=V,o=function(){return k},u=2),$n(n,{name:r,fromWireType:function(n){var r,i=k[n>>2],a=o(),s=a[n+4+i*t>>u],c=0;0!=s&&(c=s,a[n+4+i*t>>u]=0);for(var l=n+4,f=0;f<=i;++f){var p=n+4+f*t;if(0==a[p>>u]){var d=e(l);void 0===r?r=d:(r+=String.fromCharCode(0),r+=d),l=p+t}}return 0!=c&&(a[n+4+i*t>>u]=c),Pt(n),r},toWireType:function(n,e){"string"!=typeof e&&wn("Cannot pass non-string to C++ string type "+r);var o=a(e),s=$t(4+o+t);return k[s>>2]=o>>u,i(e,s+4,o+t),null!==n&&n.push(Pt,s),s},argPackAdvance:8,readValueFromPointer:Hn,destructorFunction:function(n){Pt(n)}})},B:function(n,t){$n(n,{isVoid:!0,name:t=cn(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})},r:function(n,t,r){n=ct(n),t=lt(t,"emval::as");var e=[],i=ot(e);return F[r>>2]=i,t.toWireType(e,n)},m:function(n,t,r,e){(n=dt[n])(t=ct(t),r=pt(r),null,e)},a:it,F:function(n){return 0===n?ot(yt()):(n=pt(n),ot(yt()[n]))},n:function(n,t){for(var r=function(n,t){for(var r=new Array(n),e=0;e<n;++e)r[e]=lt(F[(t>>2)+e],"parameter "+e);return r}(n,t),e=r[0],i=e.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$",o=["retType"],a=[e],u="",s=0;s<n-1;++s)u+=(0!==s?", ":"")+"arg"+s,o.push("argType"+s),a.push(r[1+s]);var c="return function "+hn("methodCaller_"+i)+"(handle, name, destructors, args) {\n",l=0;for(s=0;s<n-1;++s)c+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=r[s+1].argPackAdvance;for(c+="    var rv = handle[name]("+u+");\n",s=0;s<n-1;++s)r[s+1].deleteObject&&(c+="    argType"+s+".deleteObject(arg"+s+");\n");return e.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",o.push(c),function(n){var t=dt.length;return dt.push(n),t}(nt(Function,o).apply(null,a))},p:function(n){return n=pt(n),ot(i[n])},f:function(n,t){return ot((n=ct(n))[t=ct(t)])},h:function(n){n>4&&(et[n].refcount+=1)},o:function(n,t,r,e){n=ct(n);var i=vt[t];return i||(i=ht(t),vt[t]=i),i(n,r,e)},g:function(n){return ot(pt(n))},q:function(n){Qn(et[n].value),it(n)},E:function(){tn()},w:function(n,t,r){W.copyWithin(n,t,t+r)},y:function(n){var t=W.length,r=2147418112;if(n>r)return!1;for(var e=1;e<=4;e*=2){var i=t*(1+.2/e);if(i=Math.min(i,n+100663296),mt(Math.min(r,z(Math.max(16777216,n,i),65536))))return!0}return!1},C:function(n){return 0},u:function(n,t,r,e,i){},l:function(n,t,r,e){for(var i=0,o=0;o<r;o++){for(var a=F[t+8*o>>2],u=F[t+(8*o+4)>>2],s=0;s<u;s++)gt.printChar(n,W[a+s]);i+=u}return F[e>>2]=i,0},memory:v,e:function(n){return(n=+n)>=0?+K(n+.5):+Z(n-.5)},v:function(n){},table:w},bt=function(){var n={a:wt};function t(n,t){var r=n.exports;i.asm=r,function(n){if(Q--,i.monitorRunDependencies&&i.monitorRunDependencies(Q),0==Q&&nn){var t=nn;nn=null,t()}}()}function r(n){t(n.instance)}function e(t){return(h||!s&&!c||"function"!=typeof fetch?new Promise((function(n,t){n(an())})):fetch(on,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+on+"'";return n.arrayBuffer()})).catch((function(){return an()}))).then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){g("failed to asynchronously prepare wasm: "+n),tn(n)}))}if(Q++,i.monitorRunDependencies&&i.monitorRunDependencies(Q),i.instantiateWasm)try{return i.instantiateWasm(n,t)}catch(n){return g("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(h||"function"!=typeof WebAssembly.instantiateStreaming||en(on)||"function"!=typeof fetch)return e(r);fetch(on,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(r,(function(n){g("wasm streaming compile failed: "+n),g("falling back to ArrayBuffer instantiation"),e(r)}))}))}(),{}}();i.asm=bt;var Ct,Tt=i.___wasm_call_ctors=function(){return(Tt=i.___wasm_call_ctors=i.asm.H).apply(null,arguments)},$t=i._malloc=function(){return($t=i._malloc=i.asm.I).apply(null,arguments)},Pt=i._free=function(){return(Pt=i._free=i.asm.J).apply(null,arguments)},_t=i.___getTypeName=function(){return(_t=i.___getTypeName=i.asm.K).apply(null,arguments)};function At(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Wt(n){function t(){Ct||(Ct=!0,i.calledRun=!0,b||(G(N),G(q),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)Y(i.postRun.shift());G(X)}()))}Q>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)J(i.preRun.shift());G(L)}(),Q>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.L).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.M).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.N).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.O).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.P).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.Q).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.R).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.S).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.T).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.U).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm.V).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.W).apply(null,arguments)},i.dynCall_iidiiii=function(){return(i.dynCall_iidiiii=i.asm.X).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.Y).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm._).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.$).apply(null,arguments)},i.asm=bt,i.then=function(n){if(Ct)n(i);else{var t=i.onRuntimeInitialized;i.onRuntimeInitialized=function(){t&&t(),n(i)}}return i},nn=function n(){Ct||Wt(),Ct||(nn=n)},i.run=Wt,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Wt(),n});n.exports=i})),i=Object.freeze(Object.assign(Object.create(null),e,{default:e}))},89539:()=>{},82416:()=>{}}]);