(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return O}));var n=a(1),r=(a(0),a(132));const c={id:"HashSet",title:"HashSet",sidebar_label:"HashSet"},b={id:"Language/Java/Set/HashSet",title:"HashSet",description:"## Basics",source:"@site/docs/Language/Java/Set/HashSet.md",permalink:"/docs/Language/Java/Set/HashSet",sidebar_label:"HashSet",sidebar:"Language",previous:{title:"Set Interface",permalink:"/docs/Language/Java/Set/Interface"},next:{title:"Runtime",permalink:"/docs/Language/Java/Set/Runtime"}},l=[{value:"Basics",id:"basics",children:[]},{value:"Construction",id:"construction",children:[]},{value:"Methods",id:"methods",children:[]}],i={rightToc:l},o="wrapper";function O({components:e,...t}){return Object(r.b)(o,Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"basics"},"Basics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Implements Set")),Object(r.b)("h2",{id:"construction"},"Construction"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"with predefined value (might contain duplicates)")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Set<Integer> set = new HashSet<>(Arrays.asList(1,1,1,2,2,3));\n")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Runtime"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Return Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"add(E e)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Appends the specified element to the end of this list."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clear()"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removes all element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"void")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains(Object o)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n) worst time"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iterator()"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"creates a iterator"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Iterator")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offer(E e)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(log n)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"insert element (like add)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peek()"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retreves the head"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"poll()"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"retrieves and remove the head"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remove(Object o)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"o(n)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"removes a single instance of the specified value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size()"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return the size"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"toArray()/toArray(T[] a)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return the array"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"[]/ T[]")))))}O.isMDXComponent=!0},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=O(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=O(a),j=n,u=p["".concat(b,".").concat(j)]||p[j]||d[j]||c;return a?r.a.createElement(u,l({ref:t},o,{components:a})):r.a.createElement(u,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[j]="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);