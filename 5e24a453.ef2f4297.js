(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return p}));var a=n(1),r=(n(0),n(132));const c={id:"Stack",title:"Stack",sidebar_label:"Stack"},i={id:"Language/Java/List/Stack",title:"Stack",description:"## Basics",source:"@site/docs/Language/Java/List/Stack.md",permalink:"/docs/Language/Java/List/Stack",sidebar_label:"Stack",sidebar:"Language",previous:{title:"LinkedList",permalink:"/docs/Language/Java/List/LinkedList"},next:{title:"Runtime",permalink:"/docs/Language/Java/List/Runtime"}},o=[{value:"Basics",id:"basics",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Applications",id:"applications",children:[]}],b={rightToc:o},l="wrapper";function p({components:t,...e}){return Object(r.b)(l,Object(a.a)({},b,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"basics"},"Basics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stack Implements ",Object(r.b)("strong",{parentName:"li"},"Vector"),"(sync), ",Object(r.b)("strong",{parentName:"li"},"Vector")," implements ",Object(r.b)("strong",{parentName:"li"},"List")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Anything you can do with Stack you can do with linkedlist"),", the only reason to use stack will be to utilize synchronous ability of Vector, since Stack implements a Vector"),Object(r.b)("li",{parentName:"ul"},"common menthods: ")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"empty()"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"To test if this stack is empty"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"boolean"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"peek()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"looks at the top of the stack without removing it from the stack"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pop()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Removes the object at the top of this stack and returns that object as the value of this function."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"push()"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(1)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pushes an item onto the top of this stack."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"search(Object o)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"O(n)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns the 1-based position where an object is on this stack."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"int")))),Object(r.b)("h2",{id:"implementation"},"Implementation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"list: push is to add node to the front of list and pop is to remove from front of list"),Object(r.b)("li",{parentName:"ul"},"array: topOfStack is initialized to -1, when push, arr","[topOfStack++]","=element; when pop, return arr","[--topOfStack]","; use topOfStack==-1 to check if emtpy")),Object(r.b)("h2",{id:"applications"},"Applications"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"balance symbols"),Object(r.b)("li",{parentName:"ul"},"postfix expression"),Object(r.b)("li",{parentName:"ul"},"infix to postfix conversion"),Object(r.b)("li",{parentName:"ul"},"method calls")))}p.isMDXComponent=!0},132:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),p=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o({},e,{},t)),n},s=function(t){var e=p(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,i=t.parentName,l=b(t,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return n?r.a.createElement(O,o({ref:e},l,{components:n})):r.a.createElement(O,o({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,i=new Array(c);i[0]=O;var o={};for(var b in e)hasOwnProperty.call(e,b)&&(o[b]=e[b]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);