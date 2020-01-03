(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),c=(n(0),n(132)),i={id:"Stack",title:"Stack",sidebar_label:"Stack"},o={id:"Language/Java/List/Stack",title:"Stack",description:"## Basics",source:"@site/docs/Language/Java/List/Stack.md",permalink:"/docs/Language/Java/List/Stack",sidebar_label:"Stack",sidebar:"Language",previous:{title:"LinkedList",permalink:"/docs/Language/Java/List/LinkedList"},next:{title:"Runtime",permalink:"/docs/Language/Java/List/Runtime"}},b=[{value:"Basics",id:"basics",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Applications",id:"applications",children:[]}],l={rightToc:b},p="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(p,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"basics"},"Basics"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Stack Implements ",Object(c.b)("strong",{parentName:"li"},"Vector"),"(sync), ",Object(c.b)("strong",{parentName:"li"},"Vector")," implements ",Object(c.b)("strong",{parentName:"li"},"List")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"Anything you can do with Stack you can do with linkedlist"),", the only reason to use stack will be to utilize synchronous ability of Vector, since Stack implements a Vector"),Object(c.b)("li",{parentName:"ul"},"common menthods: ")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"empty()"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"To test if this stack is empty"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"peek()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"looks at the top of the stack without removing it from the stack"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pop()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Removes the object at the top of this stack and returns that object as the value of this function."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"push()"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pushes an item onto the top of this stack."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"E")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"search(Object o)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns the 1-based position where an object is on this stack."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int")))),Object(c.b)("h2",{id:"implementation"},"Implementation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"list: push is to add node to the front of list and pop is to remove from front of list"),Object(c.b)("li",{parentName:"ul"},"array: topOfStack is initialized to -1, when push, arr","[topOfStack++]","=element; when pop, return arr","[--topOfStack]","; use topOfStack==-1 to check if emtpy")),Object(c.b)("h2",{id:"applications"},"Applications"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"balance symbols"),Object(c.b)("li",{parentName:"ul"},"postfix expression"),Object(c.b)("li",{parentName:"ul"},"infix to postfix conversion"),Object(c.b)("li",{parentName:"ul"},"method calls")))}s.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return n?r.a.createElement(O,o({ref:t},l,{components:n})):r.a.createElement(O,o({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);