System.register([],(function(e,a){return{execute:function(){e((()=>{"use strict";var e={97980:(e,a)=>{a.buildFormatLongFn=function(e){return(a={})=>{const t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}},46746:(e,a)=>{a.buildLocalizeFn=function(e){return(a,t)=>{let n;if("formatting"===(t?.context?String(t.context):"standalone")&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,i=t?.width?String(t.width):a;n=e.formattingValues[i]||e.formattingValues[a]}else{const a=e.defaultWidth,i=t?.width?String(t.width):e.defaultWidth;n=e.values[i]||e.values[a]}return n[e.argumentCallback?e.argumentCallback(a):a]}}},20640:(e,a)=>{a.buildMatchFn=function(e){return(a,t={})=>{const n=t.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=a.match(i);if(!o)return null;const r=o[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?function(e,a){for(let t=0;t<e.length;t++)if(a(e[t]))return t;return}(d,(e=>e.test(r))):function(e,a){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&a(e[t]))return t;return}(d,(e=>e.test(r)));let m;m=e.valueCallback?e.valueCallback(s):s,m=t.valueCallback?t.valueCallback(m):m;return{value:m,rest:a.slice(r.length)}}}},2528:(e,a)=>{a.buildMatchPatternFn=function(e){return(a,t={})=>{const n=a.match(e.matchPattern);if(!n)return null;const i=n[0],o=a.match(e.parsePattern);if(!o)return null;let r=e.valueCallback?e.valueCallback(o[0]):o[0];r=t.valueCallback?t.valueCallback(r):r;return{value:r,rest:a.slice(i.length)}}}},34569:(e,a)=>{a.formatDistance=void 0;const t={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};a.formatDistance=(e,a,n)=>{let i;const o=t[e];return i="string"==typeof o?o:1===a?o.one:o.other.replace("{{count}}",String(a)),n?.addSuffix?n.comparison&&n.comparison>0?"em "+i:"h\xe1 "+i:i}},50492:(e,a,t)=>{a.formatLong=void 0;var n=t(97980);a.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}},74626:(e,a)=>{a.formatRelative=void 0;const t={lastWeek:e=>{const a=e.getDay();return"'"+(0===a||6===a?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};a.formatRelative=(e,a,n,i)=>{const o=t[e];return"function"==typeof o?o(a):o}},98826:(e,a,t)=>{a.localize=void 0;var n=t(46746);a.localize={ordinalNumber:(e,a)=>{const t=Number(e);return"week"===a?.unit?t+"\xaa":t+"\xba"},era:(0,n.buildLocalizeFn)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})}},44144:(e,a,t)=>{a.match=void 0;var n=t(20640),i=t(2528);a.match={ordinalNumber:(0,i.buildMatchPatternFn)({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})}}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var o=a[n]={exports:{}};return e[n](o,o.exports,t),o.exports}var n={};return(()=>{var e=n;e.ptBR=void 0;var a=t(34569),i=t(50492),o=t(74626),r=t(98826),d=t(44144);e.ptBR={code:"pt-BR",formatDistance:a.formatDistance,formatLong:i.formatLong,formatRelative:o.formatRelative,localize:r.localize,match:d.match,options:{weekStartsOn:0,firstWeekContainsDate:1}}})(),n})())}}}));