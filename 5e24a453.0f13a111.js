(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(149)),i={id:"Stack",title:"Stack",sidebar_label:"Stack"},o={unversionedId:"Language/Java/List/Stack",id:"Language/Java/List/Stack",isDocsHomePage:!1,title:"Stack",description:"Basics",source:"@site/docs/Language/Java/List/Stack.md",slug:"/Language/Java/List/Stack",permalink:"/docs/Language/Java/List/Stack",version:"current",sidebar_label:"Stack",sidebar:"Language",previous:{title:"LinkedList",permalink:"/docs/Language/Java/List/LinkedList"},next:{title:"Runtime",permalink:"/docs/Language/Java/List/Runtime"}},l=[{value:"Basics",id:"basics",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Applications",id:"applications",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"basics"},"Basics"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Stack Implements ",Object(c.b)("strong",{parentName:"li"},"Vector"),"(sync), ",Object(c.b)("strong",{parentName:"li"},"Vector")," implements ",Object(c.b)("strong",{parentName:"li"},"List")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"Anything you can do with Stack you can do with linkedlist"),", the only reason to use stack will be to utilize synchronous ability of Vector, since Stack implements a Vector"),Object(c.b)("li",{parentName:"ul"},"common menthods: ")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"empty()"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"To test if this stack is empty"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peek()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"looks at the top of the stack without removing it from the stack"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pop()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Removes the object at the top of this stack and returns that object as the value of this function."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"push()"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pushes an item onto the top of this stack."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"search(Object o)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the 1-based position where an object is on this stack."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"int")))),Object(c.b)("h2",{id:"implementation"},"Implementation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"list: push is to add node to the front of list and pop is to remove from front of list"),Object(c.b)("li",{parentName:"ul"},"array: topOfStack is initialized to -1, when push, arr","[topOfStack++]","=element; when pop, return arr","[--topOfStack]","; use topOfStack==-1 to check if emtpy")),Object(c.b)("h2",{id:"applications"},"Applications"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"balance symbols"),Object(c.b)("li",{parentName:"ul"},"postfix expression"),Object(c.b)("li",{parentName:"ul"},"infix to postfix conversion"),Object(c.b)("li",{parentName:"ul"},"method calls")))}p.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,O=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return a?r.a.createElement(O,o(o({ref:t},b),{},{components:a})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);