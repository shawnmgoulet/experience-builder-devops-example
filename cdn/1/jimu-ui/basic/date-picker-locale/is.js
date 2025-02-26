System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,i=n?.width?String(n.width):e;a=t.formattingValues[i]||t.formattingValues[e]}else{const e=t.defaultWidth,i=n?.width?String(n.width):t.defaultWidth;a=t.values[i]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,n={})=>{const a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;const u=r[0],o=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(o)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(o,(t=>t.test(u))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(o,(t=>t.test(u)));let l;l=t.valueCallback?t.valueCallback(d):d,l=n.valueCallback?n.valueCallback(l):l;return{value:l,rest:e.slice(u.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const i=a[0],r=e.match(t.parsePattern);if(!r)return null;let u=t.valueCallback?t.valueCallback(r[0]):r[0];u=n.valueCallback?n.valueCallback(u):u;return{value:u,rest:e.slice(i.length)}}}},10516:(t,e)=>{e.formatDistance=void 0;const n={lessThanXSeconds:{one:"minna en 1 sek\xfanda",other:"minna en {{count}} sek\xfandur"},xSeconds:{one:"1 sek\xfanda",other:"{{count}} sek\xfandur"},halfAMinute:"h\xe1lf m\xedn\xfata",lessThanXMinutes:{one:"minna en 1 m\xedn\xfata",other:"minna en {{count}} m\xedn\xfatur"},xMinutes:{one:"1 m\xedn\xfata",other:"{{count}} m\xedn\xfatur"},aboutXHours:{one:"u.\xfe.b. 1 klukkustund",other:"u.\xfe.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.\xfe.b. 1 m\xe1nu\xf0ur",other:"u.\xfe.b. {{count}} m\xe1nu\xf0ir"},xMonths:{one:"1 m\xe1nu\xf0ur",other:"{{count}} m\xe1nu\xf0ir"},aboutXYears:{one:"u.\xfe.b. 1 \xe1r",other:"u.\xfe.b. {{count}} \xe1r"},xYears:{one:"1 \xe1r",other:"{{count}} \xe1r"},overXYears:{one:"meira en 1 \xe1r",other:"meira en {{count}} \xe1r"},almostXYears:{one:"n\xe6stum 1 \xe1r",other:"n\xe6stum {{count}} \xe1r"}};e.formatDistance=(t,e,a)=>{let i;const r=n[t];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"\xed "+i:i+" s\xed\xf0an":i}},70877:(t,e,n)=>{e.formatLong=void 0;var a=n(97980);e.formatLong={date:(0,a.buildFormatLongFn)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},defaultWidth:"full"}),time:(0,a.buildFormatLongFn)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.buildFormatLongFn)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})}},74235:(t,e)=>{e.formatRelative=void 0;const n={lastWeek:"'s\xed\xf0asta' dddd 'kl.' p",yesterday:"'\xed g\xe6r kl.' p",today:"'\xed dag kl.' p",tomorrow:"'\xe1 morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"};e.formatRelative=(t,e,a,i)=>n[t]},17491:(t,e,n)=>{e.localize=void 0;var a=n(46746);e.localize={ordinalNumber:(t,e)=>Number(t)+".",era:(0,a.buildLocalizeFn)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},defaultWidth:"wide"}),quarter:(0,a.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fj\xf3r\xf0ungur","2. fj\xf3r\xf0ungur","3. fj\xf3r\xf0ungur","4. fj\xf3r\xf0ungur"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,a.buildLocalizeFn)({values:{narrow:["J","F","M","A","M","J","J","\xc1","S","\xd3","N","D"],abbreviated:["jan.","feb.","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","sept.","okt.","n\xf3v.","des."],wide:["jan\xfaar","febr\xfaar","mars","apr\xedl","ma\xed","j\xfan\xed","j\xfal\xed","\xe1g\xfast","september","okt\xf3ber","n\xf3vember","desember"]},defaultWidth:"wide"}),day:(0,a.buildLocalizeFn)({values:{narrow:["S","M","\xde","M","F","F","L"],short:["Su","M\xe1","\xder","Mi","Fi","F\xf6","La"],abbreviated:["sun.","m\xe1n.","\xferi.","mi\xf0.","fim.","f\xf6s.","lau."],wide:["sunnudagur","m\xe1nudagur","\xferi\xf0judagur","mi\xf0vikudagur","fimmtudagur","f\xf6studagur","laugardagur"]},defaultWidth:"wide"}),dayPeriod:(0,a.buildLocalizeFn)({values:{narrow:{am:"f",pm:"e",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"},wide:{am:"fyrir h\xe1degi",pm:"eftir h\xe1degi",midnight:"mi\xf0n\xe6tti",noon:"h\xe1degi",morning:"morgunn",afternoon:"s\xed\xf0degi",evening:"kv\xf6ld",night:"n\xf3tt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"f",pm:"e",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"},wide:{am:"fyrir h\xe1degi",pm:"eftir h\xe1degi",midnight:"\xe1 mi\xf0n\xe6tti",noon:"\xe1 h\xe1degi",morning:"a\xf0 morgni",afternoon:"s\xed\xf0degis",evening:"um kv\xf6ld",night:"um n\xf3tt"}},defaultFormattingWidth:"wide"})}},90611:(t,e,n)=>{e.match=void 0;var a=n(20640),i=n(2528);e.match={ordinalNumber:(0,i.buildMatchPatternFn)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+(\.)?/i,valueCallback:t=>parseInt(t,10)}),era:(0,a.buildMatchFn)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:(0,a.buildMatchFn)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fj\xf3r\xf0ungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,a.buildMatchFn)({matchPatterns:{narrow:/^[jfm\xe1s\xf3nd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apr\xedl\.|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febr\xfaar|mars|apr\xedl|ma\xed|j\xfan\xed|j\xfal\xed|\xe1gust|september|okt\xf3ber|n\xf3vember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^\xe1/i,/^s/i,/^\xf3/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^ma\xed/i,/^j\xfan/i,/^j\xfal/i,/^\xe1u/i,/^s/i,/^\xf3/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,a.buildMatchFn)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|m\xe1|\xfer|mi|fi|f\xf6|la)/i,abbreviated:/^(sun|m\xe1n|\xferi|mi\xf0|fim|f\xf6s|lau)\.?/i,wide:/^(sunnudagur|m\xe1nudagur|\xferi\xf0judagur|mi\xf0vikudagur|fimmtudagur|f\xf6studagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^\xfe/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^m\xe1/i,/^\xfer/i,/^mi/i,/^fi/i,/^f\xf6/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.buildMatchFn)({matchPatterns:{narrow:/^(f|e|s\xed\xf0degis|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i,any:/^(fyrir h\xe1degi|eftir h\xe1degi|[ef]\.?h\.?|s\xed\xf0degis|morgunn|(\xe1|a\xf0|um) (morgni|kv\xf6ld|n\xf3tt|mi\xf0n\xe6tti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^h\xe1/i,morning:/morgunn/i,afternoon:/s\xed\xf0degi/i,evening:/kv\xf6ld/i,night:/n\xf3tt/i}},defaultParseWidth:"any"})}}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}var a={};return(()=>{var t=a;t.is=void 0;var e=n(10516),i=n(70877),r=n(74235),u=n(17491),o=n(90611);t.is={code:"is",formatDistance:e.formatDistance,formatLong:i.formatLong,formatRelative:r.formatRelative,localize:u.localize,match:o.match,options:{weekStartsOn:1,firstWeekContainsDate:4}}})(),a})())}}}));