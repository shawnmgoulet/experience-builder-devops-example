System.register([],(function(t){return{execute:function(){t(function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=996)}({3:function(t,e,n){"use strict";function a(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,d=r.width?String(r.width):t.defaultWidth;a=t.values[d]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}n.d(e,"a",(function(){return a}))},4:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=a.match(o);if(!u)return null;var d,c=u[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(c)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(c.length)}}}n.d(e,"a",(function(){return a}))},5:function(t,e,n){"use strict";function a(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}n.d(e,"a",(function(){return a}))},8:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),r=n||{},i=a.match(t.matchPattern);if(!i)return null;var o=i[0],u=a.match(t.parsePattern);if(!u)return null;var d=t.valueCallback?t.valueCallback(u[0]):u[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(o.length)}}}n.d(e,"a",(function(){return a}))},996:function(t,e,n){"use strict";n.r(e);var a={lessThanXSeconds:{one:"أقل من ثانية واحدة",two:"أقل من ثانتين",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية واحدة",two:"ثانتين",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نصف دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقائق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة واحدة",two:"دقيقتين",threeToTen:"{{count}} دقائق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة واحدة تقريباً",two:"ساعتين تقريباً",threeToTen:"{{count}} ساعات تقريباً",other:"{{count}} ساعة تقريباً"},xHours:{one:"ساعة واحدة",two:"ساعتين",threeToTen:"{{count}} ساعات",other:"{{count}} ساعة"},xDays:{one:"يوم واحد",two:"يومين",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"أسبوع واحد تقريباً",two:"أسبوعين تقريباً",threeToTen:"{{count}} أسابيع تقريباً",other:"{{count}} أسبوع تقريباً"},xWeeks:{one:"أسبوع واحد",two:"أسبوعين",threeToTen:"{{count}} أسابيع",other:"{{count}} أسبوع"},aboutXMonths:{one:"شهر واحد تقريباً",two:"شهرين تقريباً",threeToTen:"{{count}} أشهر تقريباً",other:"{{count}} شهر تقريباً"},xMonths:{one:"شهر واحد",two:"شهرين",threeToTen:"{{count}} أشهر",other:"{{count}} شهر"},aboutXYears:{one:"عام واحد تقريباً",two:"عامين تقريباً",threeToTen:"{{count}} أعوام تقريباً",other:"{{count}} عام تقريباً"},xYears:{one:"عام واحد",two:"عامين",threeToTen:"{{count}} أعوام",other:"{{count}} عام"},overXYears:{one:"أكثر من عام",two:"أكثر من عامين",threeToTen:"أكثر من {{count}} أعوام",other:"أكثر من {{count}} عام"},almostXYears:{one:"عام واحد تقريباً",two:"عامين تقريباً",threeToTen:"{{count}} أعوام تقريباً",other:"{{count}} عام تقريباً"}};var r=n(5),i={date:Object(r.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'عند' {{time}}",long:"{{date}} 'عند' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'أخر' eeee 'عند' p",yesterday:"'أمس عند' p",today:"'اليوم عند' p",tomorrow:"'غداً عند' p",nextWeek:"eeee 'عند' p",other:"P"};var u=n(3);var d={ordinalNumber:function(t){return String(t)},era:Object(u.a)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Object(u.a)({values:{narrow:["ي","ف","م","أ","م","ي","ي","أ","س","أ","ن","د"],abbreviated:["ينا","فبر","مارس","أبريل","مايو","يونـ","يولـ","أغسـ","سبتـ","أكتـ","نوفـ","ديسـ"],wide:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنـ","ثلا","أربـ","خميـ","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"في الصباح",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"في الصباح",evening:"في المساء",night:"في الليل"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"}},defaultFormattingWidth:"wide"})},c=n(8),l=n(4),h={code:"ar-SA",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:2===e?a[t].two:e<=10?a[t].threeToTen.replace("{{count}}",e):a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"في خلال "+r:"منذ "+r:r},formatLong:i,formatRelative:function(t,e,n,a){return o[t]},localize:d,match:{ordinalNumber:Object(c.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:Object(l.a)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:Object(l.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Object(l.a)({matchPatterns:{narrow:/^[يفمأمسند]/i,abbreviated:/^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,wide:/^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^ين/i,/^ف/i,/^مار/i,/^أب/i,/^ماي/i,/^يون/i,/^يول/i,/^أغ/i,/^س/i,/^أك/i,/^ن/i,/^د/i]},defaultParseWidth:"any"}),day:Object(l.a)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:Object(l.a)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=h}}))}}}));