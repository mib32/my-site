(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8ypT":function(e,t,n){},L6Je:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),c=n("YjI2"),r=function(e){var t=l.a.useState("undefined"!=typeof window&&window.localStorage.getItem("mib32.locale")||"ru"),n=t[0],a=t[1],c=function(e){window.localStorage.setItem("mib32.locale",e),window.onLocaleChange&&window.onLocaleChange(e),a(e)};return console.log(n),l.a.createElement("div",{className:"iswitch"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"18px",height:"18px"},l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})),l.a.createElement("span",{onClick:function(){return c("ru")},className:"ru"==n?"iswitch-sel":"iswitch-unsel"},"Ru"),l.a.createElement("span",{onClick:function(){return c("en")},className:"en"==n?"iswitch-sel":"iswitch-unsel"},"Eng"))};n("8ypT"),t.a=function(e){var t=l.a.useState(0),n=t[0],a=t[1];return l.a.useEffect((function(){window.onLocaleChange=function(){a((function(e){return e+1}))}}),[]),l.a.createElement("div",{className:"main",key:n},l.a.createElement("div",{className:"layout-panel"},l.a.createElement("span",null,l.a.createElement(c.a,{ru:"Антон Мурыгин",en:"Anton Murygin"})),l.a.createElement(r,null)),e.children)}},YjI2:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a);t.a=function(e){var t,n="undefined"!=typeof window&&window.localStorage.getItem("mib32.locale")||"ru";return t=e[n]?e[n]:e.ru,l.a.createElement("span",null,t)}},bzvV:function(e,t,n){"use strict";n.r(t);var a=n("Wbzz"),l=(n("dEtu"),n("q1tI")),c=n("YjI2"),r=n("L6Je");t.default=function(){return l.createElement("main",null,l.createElement(r.a,null,l.createElement("div",null,l.createElement(a.a,{to:"/"},l.createElement(c.a,{ru:"Назад",en:"Back"}))),l.createElement("div",null,l.createElement("p",null,l.createElement("a",{href:"mailto:mibus32@gmail.com"},"mibus32@gmail.com")),l.createElement("p",null,l.createElement("a",{href:"tg://resolve?domain=mib32"},l.createElement(c.a,{en:"Telegram",ru:"Телеграм"})," @mib32")),l.createElement("p",null,l.createElement("a",{href:"https://facebook.com/mib32"},"facebook.com/mib32")),l.createElement("p",null,l.createElement("a",{href:"https://github.com/mib32"},"github.com/mib32")))))}},dEtu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=void 0;var l=a(n("pVnL")),c=a(n("8OQS")),r=a(n("q1tI")),o=a(n("17x9")),i=r.default.forwardRef((function(e,t){var n=e.children,a=(0,c.default)(e,["children"]);return r.default.createElement("a",(0,l.default)({ref:t},a,{onClick:function(e){"function"==typeof a.onClick&&a.onClick(e);var t=!0;return(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)&&(t=!1),a.target&&"_self"!==a.target.toLowerCase()&&(t=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:a.href,transport_type:t?"beacon":"",event_callback:function(){t&&(document.location=a.href)}}):t&&(document.location=a.href),!1}}),n)}));t.OutboundLink=i,i.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func}}}]);
//# sourceMappingURL=component---src-pages-cont-js-8fc2bf2d3cf66a849a0b.js.map