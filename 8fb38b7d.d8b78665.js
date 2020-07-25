(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{115:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),p=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},u=function(t){var e=p(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},o=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,i=O(t,["components","mdxType","originalType","parentName"]),u=p(a),o=n,m=u["".concat(l,".").concat(o)]||u[o]||j[o]||b;return a?r.a.createElement(m,c(c({ref:e},i),{},{components:a})):r.a.createElement(m,c({ref:e},i))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=o;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},87:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return p}));var n=a(1),r=a(6),b=(a(0),a(115)),l={id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},c={unversionedId:"Language/Java/Map/Runtime",id:"Language/Java/Map/Runtime",isDocsHomePage:!1,title:"Runtime",description:"Map |put |   get    | containsKey |   next   | Data Structure",source:"@site/docs/Language/Java/Map/Runtime.md",permalink:"/docs/Language/Java/Map/Runtime",sidebar_label:"Runtime",sidebar:"Language",previous:{title:"LinkedHashMap",permalink:"/docs/Language/Java/Map/LinkedHashMap"}},O=[],i={rightToc:O};function p(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Map"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"put"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"get"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"containsKey"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"next"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Structure"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HashMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~ O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(h / n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hash Table")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LinkedHashMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hash Table + Linked List")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IdentityHashMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(h / n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WeakHashMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(h / n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hash Table")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EnumMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TreeMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Red-black tree")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConcurrentHashMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(h / n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hash Tables")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ConcurrentSkipListMap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1) ~O(n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip List")))))}p.isMDXComponent=!0}}]);