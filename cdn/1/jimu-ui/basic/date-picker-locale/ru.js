System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={68613:(t,e)=>{e.getDefaultOptions=function(){return n},e.setDefaultOptions=function(t){n=t};let n={}},65027:(t,e,n)=>{e.isSameWeek=function(t,e,n){const a=(0,i.startOfWeek)(t,n),r=(0,i.startOfWeek)(e,n);return+a==+r};var i=n(23480)},97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,n)=>{let i;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;i=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[e]}return i[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,n={})=>{const i=n.width,a=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=e.match(a);if(!r)return null;const u=r[0],o=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(o)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(o,(t=>t.test(u))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(o,(t=>t.test(u)));let s;s=t.valueCallback?t.valueCallback(l):l,s=n.valueCallback?n.valueCallback(s):s;return{value:s,rest:e.slice(u.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const a=i[0],r=e.match(t.parsePattern);if(!r)return null;let u=t.valueCallback?t.valueCallback(r[0]):r[0];u=n.valueCallback?n.valueCallback(u):u;return{value:u,rest:e.slice(a.length)}}}},59273:(t,e)=>{function n(t,e){if(void 0!==t.one&&1===e)return t.one;const n=e%10,i=e%100;return 1===n&&11!==i?t.singularNominative.replace("{{count}}",String(e)):n>=2&&n<=4&&(i<10||i>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}function i(t){return(e,i)=>i?.addSuffix?i.comparison&&i.comparison>0?t.future?n(t.future,e):"\u0447\u0435\u0440\u0435\u0437 "+n(t.regular,e):t.past?n(t.past,e):n(t.regular,e)+" \u043d\u0430\u0437\u0430\u0434":n(t.regular,e)}e.formatDistance=void 0;const a={lessThanXSeconds:i({regular:{one:"\u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u044b",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},future:{one:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),xSeconds:i({regular:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0430",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434"},past:{singularNominative:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430\u0437\u0430\u0434",singularGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b \u043d\u0430\u0437\u0430\u0434",pluralGenitive:"{{count}} \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434"},future:{singularNominative:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u0443",singularGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434\u044b",pluralGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043a\u0443\u043d\u0434"}}),halfAMinute:(t,e)=>e?.addSuffix?e.comparison&&e.comparison>0?"\u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b":"\u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434":"\u043f\u043e\u043b\u043c\u0438\u043d\u0443\u0442\u044b",lessThanXMinutes:i({regular:{one:"\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0443\u0442\u044b",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435 {{count}} \u043c\u0438\u043d\u0443\u0442"},future:{one:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 \u043c\u0438\u043d\u0443\u0442\u0443",singularNominative:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u0443",singularGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"\u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442"}}),xMinutes:i({regular:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0430",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442"},past:{singularNominative:"{{count}} \u043c\u0438\u043d\u0443\u0442\u0443 \u043d\u0430\u0437\u0430\u0434",singularGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0437\u0430\u0434",pluralGenitive:"{{count}} \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"},future:{singularNominative:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u0443",singularGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442\u044b",pluralGenitive:"\u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0438\u043d\u0443\u0442"}}),aboutXHours:i({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u043e\u0432",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0447\u0430\u0441\u043e\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043e\u0432"}}),xHours:i({regular:{singularNominative:"{{count}} \u0447\u0430\u0441",singularGenitive:"{{count}} \u0447\u0430\u0441\u0430",pluralGenitive:"{{count}} \u0447\u0430\u0441\u043e\u0432"}}),xDays:i({regular:{singularNominative:"{{count}} \u0434\u0435\u043d\u044c",singularGenitive:"{{count}} \u0434\u043d\u044f",pluralGenitive:"{{count}} \u0434\u043d\u0435\u0439"}}),aboutXWeeks:i({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043d\u0435\u0434\u0435\u043b\u0438",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043d\u0435\u0434\u0435\u043b\u044c",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043d\u0435\u0434\u0435\u043b\u044c"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043d\u0435\u0434\u0435\u043b\u044e",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043d\u0435\u0434\u0435\u043b\u0438",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043d\u0435\u0434\u0435\u043b\u044c"}}),xWeeks:i({regular:{singularNominative:"{{count}} \u043d\u0435\u0434\u0435\u043b\u044f",singularGenitive:"{{count}} \u043d\u0435\u0434\u0435\u043b\u0438",pluralGenitive:"{{count}} \u043d\u0435\u0434\u0435\u043b\u044c"}}),aboutXMonths:i({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}}),xMonths:i({regular:{singularNominative:"{{count}} \u043c\u0435\u0441\u044f\u0446",singularGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0430",pluralGenitive:"{{count}} \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}}),aboutXYears:i({regular:{singularNominative:"\u043e\u043a\u043e\u043b\u043e {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043b\u0435\u0442",pluralGenitive:"\u043e\u043a\u043e\u043b\u043e {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}}),xYears:i({regular:{singularNominative:"{{count}} \u0433\u043e\u0434",singularGenitive:"{{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"{{count}} \u043b\u0435\u0442"}}),overXYears:i({regular:{singularNominative:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u0433\u043e\u0434\u0430",singularGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u043b\u0435\u0442",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435 {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}}),almostXYears:i({regular:{singularNominative:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u043e\u0447\u0442\u0438 {{count}} \u043b\u0435\u0442"},future:{singularNominative:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434",singularGenitive:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043e\u0434\u0430",pluralGenitive:"\u043f\u043e\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043b\u0435\u0442"}})};e.formatDistance=(t,e,n)=>a[t](e,n)},27740:(t,e,n)=>{e.formatLong=void 0;var i=n(97980);e.formatLong={date:(0,i.buildFormatLongFn)({formats:{full:"EEEE, d MMMM y '\u0433.'",long:"d MMMM y '\u0433.'",medium:"d MMM y '\u0433.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.buildFormatLongFn)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.buildFormatLongFn)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})}},64674:(t,e,n)=>{e.formatRelative=void 0;var i=n(65027);const a=["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0443","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0443","\u0441\u0443\u0431\u0431\u043e\u0442\u0443"];function r(t){const e=a[t];return 2===t?"'\u0432\u043e "+e+" \u0432' p":"'\u0432 "+e+" \u0432' p"}const u={lastWeek:(t,e,n)=>{const u=t.getDay();return(0,i.isSameWeek)(t,e,n)?r(u):function(t){const e=a[t];switch(t){case 0:return"'\u0432 \u043f\u0440\u043e\u0448\u043b\u043e\u0435 "+e+" \u0432' p";case 1:case 2:case 4:return"'\u0432 \u043f\u0440\u043e\u0448\u043b\u044b\u0439 "+e+" \u0432' p";case 3:case 5:case 6:return"'\u0432 \u043f\u0440\u043e\u0448\u043b\u0443\u044e "+e+" \u0432' p"}}(u)},yesterday:"'\u0432\u0447\u0435\u0440\u0430 \u0432' p",today:"'\u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0432' p",tomorrow:"'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",nextWeek:(t,e,n)=>{const u=t.getDay();return(0,i.isSameWeek)(t,e,n)?r(u):function(t){const e=a[t];switch(t){case 0:return"'\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 "+e+" \u0432' p";case 1:case 2:case 4:return"'\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 "+e+" \u0432' p";case 3:case 5:case 6:return"'\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e "+e+" \u0432' p"}}(u)},other:"P"};e.formatRelative=(t,e,n,i)=>{const a=u[t];return"function"==typeof a?a(e,n,i):a}},53162:(t,e,n)=>{e.localize=void 0;var i=n(46746);e.localize={ordinalNumber:(t,e)=>{const n=Number(t),i=e?.unit;let a;return a="date"===i?"-\u0435":"week"===i||"minute"===i||"second"===i?"-\u044f":"-\u0439",n+a},era:(0,i.buildLocalizeFn)({values:{narrow:["\u0434\u043e \u043d.\u044d.","\u043d.\u044d."],abbreviated:["\u0434\u043e \u043d. \u044d.","\u043d. \u044d."],wide:["\u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b","\u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b"]},defaultWidth:"wide"}),quarter:(0,i.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["1-\u0439 \u043a\u0432.","2-\u0439 \u043a\u0432.","3-\u0439 \u043a\u0432.","4-\u0439 \u043a\u0432."],wide:["1-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","2-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","3-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b","4-\u0439 \u043a\u0432\u0430\u0440\u0442\u0430\u043b"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,i.buildLocalizeFn)({values:{narrow:["\u042f","\u0424","\u041c","\u0410","\u041c","\u0418","\u0418","\u0410","\u0421","\u041e","\u041d","\u0414"],abbreviated:["\u044f\u043d\u0432.","\u0444\u0435\u0432.","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440.","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433.","\u0441\u0435\u043d\u0442.","\u043e\u043a\u0442.","\u043d\u043e\u044f\u0431.","\u0434\u0435\u043a."],wide:["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"]},defaultWidth:"wide",formattingValues:{narrow:["\u042f","\u0424","\u041c","\u0410","\u041c","\u0418","\u0418","\u0410","\u0421","\u041e","\u041d","\u0414"],abbreviated:["\u044f\u043d\u0432.","\u0444\u0435\u0432.","\u043c\u0430\u0440.","\u0430\u043f\u0440.","\u043c\u0430\u044f","\u0438\u044e\u043d.","\u0438\u044e\u043b.","\u0430\u0432\u0433.","\u0441\u0435\u043d\u0442.","\u043e\u043a\u0442.","\u043d\u043e\u044f\u0431.","\u0434\u0435\u043a."],wide:["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"]},defaultFormattingWidth:"wide"}),day:(0,i.buildLocalizeFn)({values:{narrow:["\u0412","\u041f","\u0412","\u0421","\u0427","\u041f","\u0421"],short:["\u0432\u0441","\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431"],abbreviated:["\u0432\u0441\u043a","\u043f\u043d\u0434","\u0432\u0442\u0440","\u0441\u0440\u0434","\u0447\u0442\u0432","\u043f\u0442\u043d","\u0441\u0443\u0431"],wide:["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"]},defaultWidth:"wide"}),dayPeriod:(0,i.buildLocalizeFn)({values:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u043e",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044c"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u043e",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u044c"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d\u043e\u0447\u044c",noon:"\u043f\u043e\u043b\u0434\u0435\u043d\u044c",morning:"\u0443\u0442\u0440\u043e",afternoon:"\u0434\u0435\u043d\u044c",evening:"\u0432\u0435\u0447\u0435\u0440",night:"\u043d\u043e\u0447\u044c"}},defaultWidth:"any",formattingValues:{narrow:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u0430",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0438"},abbreviated:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d.",noon:"\u043f\u043e\u043b\u0434.",morning:"\u0443\u0442\u0440\u0430",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447.",night:"\u043d\u043e\u0447\u0438"},wide:{am:"\u0414\u041f",pm:"\u041f\u041f",midnight:"\u043f\u043e\u043b\u043d\u043e\u0447\u044c",noon:"\u043f\u043e\u043b\u0434\u0435\u043d\u044c",morning:"\u0443\u0442\u0440\u0430",afternoon:"\u0434\u043d\u044f",evening:"\u0432\u0435\u0447\u0435\u0440\u0430",night:"\u043d\u043e\u0447\u0438"}},defaultFormattingWidth:"wide"})}},47632:(t,e,n)=>{e.match=void 0;var i=n(20640),a=n(2528);e.match={ordinalNumber:(0,a.buildMatchPatternFn)({matchPattern:/^(\d+)(-?(\u0435|\u044f|\u0439|\u043e\u0435|\u044c\u0435|\u0430\u044f|\u044c\u044f|\u044b\u0439|\u043e\u0439|\u0438\u0439|\u044b\u0439))?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,i.buildMatchFn)({matchPatterns:{narrow:/^((\u0434\u043e )?\u043d\.?\s?\u044d\.?)/i,abbreviated:/^((\u0434\u043e )?\u043d\.?\s?\u044d\.?)/i,wide:/^(\u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430 \u044d\u0440\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0434/i,/^\u043d/i]},defaultParseWidth:"any"}),quarter:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[\u044b\u043e\u0438]?\u0439?)? \u043a\u0432.?/i,wide:/^[1234](-?[\u044b\u043e\u0438]?\u0439?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[\u044f\u0444\u043c\u0430\u0438\u0441\u043e\u043d\u0434]/i,abbreviated:/^(\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440\u0442?|\u0430\u043f\u0440|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]?|\u0438\u044e\u043b[\u044c\u044f]?|\u0430\u0432\u0433|\u0441\u0435\u043d\u0442?|\u043e\u043a\u0442|\u043d\u043e\u044f\u0431?|\u0434\u0435\u043a)\.?/i,wide:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043b[\u044c\u044f]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u044f/i,/^\u0444/i,/^\u043c/i,/^\u0430/i,/^\u043c/i,/^\u0438/i,/^\u0438/i,/^\u0430/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u044f/i],any:[/^\u044f/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430[\u0439\u044f]/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i]},defaultParseWidth:"any"}),day:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[\u0432\u043f\u0441\u0447]/i,short:/^(\u0432\u0441|\u0432\u043e|\u043f\u043d|\u043f\u043e|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u0447\u0435|\u043f\u0442|\u043f\u044f|\u0441\u0431|\u0441\u0443)\.?/i,abbreviated:/^(\u0432\u0441\u043a|\u0432\u043e\u0441|\u043f\u043d\u0434|\u043f\u043e\u043d|\u0432\u0442\u0440|\u0432\u0442\u043e|\u0441\u0440\u0434|\u0441\u0440\u0435|\u0447\u0442\u0432|\u0447\u0435\u0442|\u043f\u0442\u043d|\u043f\u044f\u0442|\u0441\u0443\u0431).?/i,wide:/^(\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c[\u0435\u044f]|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430?|\u0432\u0442\u043e\u0440\u043d\u0438\u043a\u0430?|\u0441\u0440\u0435\u0434[\u0430\u044b]|\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430?|\u043f\u044f\u0442\u043d\u0438\u0446[\u0430\u044b]|\u0441\u0443\u0431\u0431\u043e\u0442[\u0430\u044b])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0432/i,/^\u043f/i,/^\u0432/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0441/i],any:[/^\u0432[\u043e\u0441]/i,/^\u043f[\u043e\u043d]/i,/^\u0432/i,/^\u0441\u0440/i,/^\u0447/i,/^\u043f[\u044f\u0442]/i,/^\u0441[\u0443\u0431]/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.buildMatchFn)({matchPatterns:{narrow:/^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\.?|\u043f\u043e\u043b\u0434\.?|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447[\u044c\u0438])/i,abbreviated:/^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\.?|\u043f\u043e\u043b\u0434\.?|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447[\u044c\u0438])/i,wide:/^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\u043e\u0447\u044c|\u043f\u043e\u043b\u0434\u0435\u043d\u044c|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430?|\u043d\u043e\u0447[\u044c\u0438])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^\u0434\u043f/i,pm:/^\u043f\u043f/i,midnight:/^\u043f\u043e\u043b\u043d/i,noon:/^\u043f\u043e\u043b\u0434/i,morning:/^\u0443/i,afternoon:/^\u0434[\u0435\u043d]/i,evening:/^\u0432/i,night:/^\u043d/i}},defaultParseWidth:"any"})}},23480:(t,e,n)=>{e.startOfWeek=function(t,e){const n=(0,a.getDefaultOptions)(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,u=(0,i.toDate)(t),o=u.getDay(),l=(o<r?7:0)+o-r;return u.setDate(u.getDate()-l),u.setHours(0,0,0,0),u};var i=n(61576),a=n(68613)},61576:(t,e)=>{e.toDate=function(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}var i={};return(()=>{var t=i;t.ru=void 0;var e=n(59273),a=n(27740),r=n(64674),u=n(53162),o=n(47632);t.ru={code:"ru",formatDistance:e.formatDistance,formatLong:a.formatLong,formatRelative:r.formatRelative,localize:u.localize,match:o.match,options:{weekStartsOn:1,firstWeekContainsDate:1}}})(),i})())}}}));