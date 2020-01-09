(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),o=(a(0),a(138)),p={id:"HashMap",title:"HashMap",sidebar_label:"HashMap"},c={id:"Language/Java/Map/HashMap",title:"HashMap",description:"## Basics",source:"@site/docs/Language/Java/Map/HashMap.md",permalink:"/docs/Language/Java/Map/HashMap",sidebar_label:"HashMap",sidebar:"Language",previous:{title:"Map Interface",permalink:"/docs/Language/Java/Map/Interface"},next:{title:"HashTable",permalink:"/docs/Language/Java/Map/HashTable"}},i=[{value:"Basics",id:"basics",children:[]},{value:"TreeMap vs HashMap",id:"treemap-vs-hashmap",children:[]}],l={rightToc:i},u="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"basics"},"Basics"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simple hash table, Keys and Values are not ordered"),Object(o.b)("li",{parentName:"ul"},"get(), remove() are constant time"),Object(o.b)("li",{parentName:"ul"},"put() costs O(1) on average, O(n) when collision happens"),Object(o.b)("li",{parentName:"ul"},"iteration order is not predictable, as the keys are not sorted"),Object(o.b)("li",{parentName:"ul"},"allow both keys and values to be null")),Object(o.b)("h2",{id:"treemap-vs-hashmap"},"TreeMap vs HashMap"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"TreeMap are naturally sorted by order of key, HashMap is not:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"TreeMap<Integer, Integer> tm = new TreeMap<>();\ntm.put(3, 1);\ntm.put(2, 2);\ntm.put(1, 10);\ntm.put(-100, 2);\ntm.values(); //[2, 10, 2, 1]\n\nHashMap<Integer, Integer> hm = new HashMap<>();\nhm.put(3, 1);\nhm.put(2, 2);\nhm.put(1, 10);\nhm.put(-100, 2);\nhm.values(); // [10, 2, 1, 2]\n")))}s.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},s=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(a),b=n,d=s["".concat(p,".").concat(b)]||s[b]||m[b]||o;return a?r.a.createElement(d,c({ref:t},l,{components:a})):r.a.createElement(d,c({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=a[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);