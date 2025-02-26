System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={68613:(t,e)=>{e.getDefaultOptions=function(){return n},e.setDefaultOptions=function(t){n=t};let n={}},65027:(t,e,n)=>{e.isSameWeek=function(t,e,n){const o=(0,a.startOfWeek)(t,n),r=(0,a.startOfWeek)(e,n);return+o==+r};var a=n(23480)},97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;a=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;a=t.values[o]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,n={})=>{const a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;const i=r[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(u,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(u,(t=>t.test(i)));let d;d=t.valueCallback?t.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d;return{value:d,rest:e.slice(i.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const o=a[0],r=e.match(t.parsePattern);if(!r)return null;let i=t.valueCallback?t.valueCallback(r[0]):r[0];i=n.valueCallback?n.valueCallback(i):i;return{value:i,rest:e.slice(o.length)}}}},25718:(t,e)=>{function n(t,e,n){const a=function(t,e){return 1===e&&t.one?t.one:e>=2&&e<=4&&t.twoFour?t.twoFour:t.other}(t,e);return a[n].replace("{{count}}",String(e))}function a(t){let e="";return"almost"===t&&(e="takmer"),"about"===t&&(e="pribli\u017ene"),e.length>0?e+" ":""}function o(t){let e="";return"lessThan"===t&&(e="menej ne\u017e"),"over"===t&&(e="viac ne\u017e"),e.length>0?e+" ":""}e.formatDistance=void 0;const r={xSeconds:{one:{present:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{present:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{present:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{present:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{present:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{present:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{present:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{present:"hodina",past:"hodinou",future:"hodinu"},twoFour:{present:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{present:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{present:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{present:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{present:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xWeeks:{one:{present:"t\xfd\u017ede\u0148",past:"t\xfd\u017ed\u0148om",future:"t\xfd\u017ede\u0148"},twoFour:{present:"{{count}} t\xfd\u017edne",past:"{{count}} t\xfd\u017ed\u0148ami",future:"{{count}} t\xfd\u017edne"},other:{present:"{{count}} t\xfd\u017ed\u0148ov",past:"{{count}} t\xfd\u017ed\u0148ami",future:"{{count}} t\xfd\u017ed\u0148ov"}},xMonths:{one:{present:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{present:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{present:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{present:"rok",past:"rokom",future:"rok"},twoFour:{present:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{present:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};e.formatDistance=(t,e,i)=>{const u=function(t){return["lessThan","about","over","almost"].filter((function(e){return!!t.match(new RegExp("^"+e))}))[0]}(t)||"",s=(d=t.substring(u.length)).charAt(0).toLowerCase()+d.slice(1);var d;const l=r[s];return i?.addSuffix?i.comparison&&i.comparison>0?a(u)+"o "+o(u)+n(l,e,"future"):a(u)+"pred "+o(u)+n(l,e,"past"):a(u)+o(u)+n(l,e,"present")}},83031:(t,e,n)=>{e.formatLong=void 0;var a=n(97980);e.formatLong={date:(0,a.buildFormatLongFn)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. M. y",short:"d. M. y"},defaultWidth:"full"}),time:(0,a.buildFormatLongFn)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.buildFormatLongFn)({formats:{full:"{{date}}, {{time}}",long:"{{date}}, {{time}}",medium:"{{date}}, {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})}},11753:(t,e,n)=>{e.formatRelative=void 0;var a=n(65027);const o=["nede\u013eu","pondelok","utorok","stredu","\u0161tvrtok","piatok","sobotu"];function r(t){return 4===t?"'vo' eeee 'o' p":"'v "+o[t]+" o' p"}const i={lastWeek:(t,e,n)=>{const i=t.getDay();return(0,a.isSameWeek)(t,e,n)?r(i):function(t){const e=o[t];switch(t){case 0:case 3:case 6:return"'minul\xfa "+e+" o' p";default:return"'minul\xfd' eeee 'o' p"}}(i)},yesterday:"'v\u010dera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:(t,e,n)=>{const i=t.getDay();return(0,a.isSameWeek)(t,e,n)?r(i):function(t){const e=o[t];switch(t){case 0:case 4:case 6:return"'bud\xfacu "+e+" o' p";default:return"'bud\xfaci' eeee 'o' p"}}(i)},other:"P"};e.formatRelative=(t,e,n,a)=>{const o=i[t];return"function"==typeof o?o(e,n,a):o}},92641:(t,e,n)=>{e.localize=void 0;var a=n(46746);e.localize={ordinalNumber:(t,e)=>Number(t)+".",era:(0,a.buildLocalizeFn)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},defaultWidth:"wide"}),quarter:(0,a.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. \u0161tvr\u0165rok","2. \u0161tvr\u0165rok","3. \u0161tvr\u0165rok","4. \u0161tvr\u0165rok"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,a.buildLocalizeFn)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1r","febru\xe1r","marec","apr\xedl","m\xe1j","j\xfan","j\xfal","august","september","okt\xf3ber","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","m\xe1j","j\xfan","j\xfal","aug","sep","okt","nov","dec"],wide:["janu\xe1ra","febru\xe1ra","marca","apr\xedla","m\xe1ja","j\xfana","j\xfala","augusta","septembra","okt\xf3bra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,a.buildLocalizeFn)({values:{narrow:["n","p","u","s","\u0161","p","s"],short:["ne","po","ut","st","\u0161t","pi","so"],abbreviated:["ne","po","ut","st","\u0161t","pi","so"],wide:["nede\u013ea","pondelok","utorok","streda","\u0161tvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,a.buildLocalizeFn)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"r\xe1no",afternoon:"popoludnie",evening:"ve\u010der",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"r\xe1no",afternoon:"pop.",evening:"ve\u010d.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"r\xe1no",afternoon:"popol.",evening:"ve\u010der",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"r\xe1no",afternoon:"popoludn\xed",evening:"ve\u010der",night:"v noci"}},defaultFormattingWidth:"wide"})}},66805:(t,e,n)=>{e.match=void 0;var a=n(20640),o=n(2528);e.match={ordinalNumber:(0,o.buildMatchPatternFn)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,a.buildMatchFn)({matchPatterns:{narrow:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(pred Kristom|pred na[\u0161s][\xedi]m letopo[\u010dc]tom|po Kristovi|n[\xe1a][\u0161s]ho letopo[\u010dc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,a.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\. [\u0161s]tvr[\u0165t]rok/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,a.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|m[\xe1a]j|j[\xfau]n|j[\xfau]l|aug|sep|okt|nov|dec)/i,wide:/^(janu[\xe1a]ra?|febru[\xe1a]ra?|(marec|marca)|apr[\xedi]la?|m[\xe1a]ja?|j[\xfau]na?|j[\xfau]la?|augusta?|(september|septembra)|(okt[\xf3o]ber|okt[\xf3o]bra)|(november|novembra)|(december|decembra))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^m[\xe1a]j/i,/^j[\xfau]n/i,/^j[\xfau]l/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,a.buildMatchFn)({matchPatterns:{narrow:/^[npus\u0161p]/i,short:/^(ne|po|ut|st|\u0161t|pi|so)/i,abbreviated:/^(ne|po|ut|st|\u0161t|pi|so)/i,wide:/^(nede[\u013el]a|pondelok|utorok|streda|[\u0161s]tvrtok|piatok|sobota])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^u/i,/^s/i,/^\u0161/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^u/i,/^st/i,/^(\u0161t|stv)/i,/^pi/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.buildMatchFn)({matchPatterns:{narrow:/^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]\.?|(v n\.?|noc))/i,abbreviated:/^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[\xe1a]no|pop\.?|ve[\u010dc]er|(v )?noci?)/i,any:/^(am|pm|(o )?polnoci?|(na)?poludnie|r[\xe1a]no|popoludn(ie|\xed|i)|ve[\u010dc]er|(v )?noci?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/poln/i,noon:/^(nap|(na)?pol(\.|u))/i,morning:/^r[\xe1a]no/i,afternoon:/^pop/i,evening:/^ve[\u010dc]/i,night:/^(noc|v n\.)/i}},defaultParseWidth:"any"})}},23480:(t,e,n)=>{e.startOfWeek=function(t,e){const n=(0,o.getDefaultOptions)(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=(0,a.toDate)(t),u=i.getDay(),s=(u<r?7:0)+u-r;return i.setDate(i.getDate()-s),i.setHours(0,0,0,0),i};var a=n(61576),o=n(68613)},61576:(t,e)=>{e.toDate=function(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}var a={};return(()=>{var t=a;t.sk=void 0;var e=n(25718),o=n(83031),r=n(11753),i=n(92641),u=n(66805);t.sk={code:"sk",formatDistance:e.formatDistance,formatLong:o.formatLong,formatRelative:r.formatRelative,localize:i.localize,match:u.match,options:{weekStartsOn:1,firstWeekContainsDate:4}}})(),a})())}}}));