(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(1),r=a(6),c=(a(0),a(156)),b={id:"HashSet",title:"HashSet",sidebar_label:"HashSet"},l={id:"Language/Java/Set/HashSet",isDocsHomePage:!1,title:"HashSet",description:"Basics",source:"@site/docs/Language/Java/Set/HashSet.md",permalink:"/docs/Language/Java/Set/HashSet",sidebar_label:"HashSet",sidebar:"Language",previous:{title:"Set Interface",permalink:"/docs/Language/Java/Set/Interface"},next:{title:"Runtime",permalink:"/docs/Language/Java/Set/Runtime"}},i=[{value:"Basics",id:"basics",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Methods",id:"methods",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"basics"},"Basics"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Implements Set")),Object(c.b)("h2",{id:"construction"},"Construction"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"with predefined value (might contain duplicates)")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Set<Integer> set = new HashSet<>(Arrays.asList(1,1,1,2,2,3));\n")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Runtime"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Return Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"add(E e)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(log n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Appends the specified element to the end of this list."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clear()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removes all element"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"void")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains(Object o)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n) worst time"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iterator()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"creates a iterator"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Iterator")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offer(E e)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(log n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"insert element (like add)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peek()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retreves the head"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"poll()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieves and remove the head"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remove(Object o)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"o(n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removes a single instance of the specified value"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return the size"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"toArray()/toArray(T[] a)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return the array"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"[]/ T[]")))))}O.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=O(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=O(a),d=n,u=p["".concat(b,".").concat(d)]||p[d]||j[d]||c;return a?r.a.createElement(u,l(l({ref:t},o),{},{components:a})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);