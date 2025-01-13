"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[6743],{5680:(t,e,a)=>{a.d(e,{xA:()=>s,yg:()=>y});var n=a(6540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},g="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=c(a),u=r,y=g["".concat(p,".").concat(u)]||g[u]||m[u]||i;return a?n.createElement(y,o(o({ref:e},s),{},{components:a})):n.createElement(y,o({ref:e},s))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[g]="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},425:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=a(8168),r=a(8587),i=(a(6540),a(5680));const o=["components"],l={id:"Stack",title:"Stack",sidebar_label:"Stack"},p=void 0,c={unversionedId:"Applications/Language/Java/List/Stack",id:"Applications/Language/Java/List/Stack",title:"Stack",description:"Basics",source:"@site/docs/Applications/Language/Java/List/Stack.md",sourceDirName:"Applications/Language/Java/List",slug:"/Applications/Language/Java/List/Stack",permalink:"/docs/Applications/Language/Java/List/Stack",draft:!1,tags:[],version:"current",frontMatter:{id:"Stack",title:"Stack",sidebar_label:"Stack"},sidebar:"Applications",previous:{title:"LinkedList",permalink:"/docs/Applications/Language/Java/List/LinkedList"},next:{title:"Runtime",permalink:"/docs/Applications/Language/Java/List/Runtime"}},s={},g=[{value:"Basics",id:"basics",level:2},{value:"Methods",id:"methods",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Applications",id:"applications",level:2}],m={toc:g},u="wrapper";function y(t){let{components:e}=t,a=(0,r.A)(t,o);return(0,i.yg)(u,(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"basics"},"Basics"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Stack Implements ",(0,i.yg)("strong",{parentName:"li"},"Vector"),"(sync), ",(0,i.yg)("strong",{parentName:"li"},"Vector")," implements ",(0,i.yg)("strong",{parentName:"li"},"List")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Anything you can do with Stack you can do with linkedlist"),", the only reason to use stack will be to utilize synchronous ability of Vector, since Stack implements a Vector"),(0,i.yg)("li",{parentName:"ul"},"common menthods: ")),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"empty()"),(0,i.yg)("th",{parentName:"tr",align:"center"},"O(1)"),(0,i.yg)("th",{parentName:"tr",align:null},"To test if this stack is empty"),(0,i.yg)("th",{parentName:"tr",align:"center"},"boolean"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"peek()"),(0,i.yg)("td",{parentName:"tr",align:"center"},"O(1)"),(0,i.yg)("td",{parentName:"tr",align:null},"looks at the top of the stack without removing it from the stack"),(0,i.yg)("td",{parentName:"tr",align:"center"},"E")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"pop()"),(0,i.yg)("td",{parentName:"tr",align:"center"},"O(1)"),(0,i.yg)("td",{parentName:"tr",align:null},"Removes the object at the top of this stack and returns that object as the value of this function."),(0,i.yg)("td",{parentName:"tr",align:"center"},"E")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"push()"),(0,i.yg)("td",{parentName:"tr",align:"center"},"O(1)"),(0,i.yg)("td",{parentName:"tr",align:null},"Pushes an item onto the top of this stack."),(0,i.yg)("td",{parentName:"tr",align:"center"},"E")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"search(Object o)"),(0,i.yg)("td",{parentName:"tr",align:"center"},"O(n)"),(0,i.yg)("td",{parentName:"tr",align:null},"Returns the 1-based position where an object is on this stack."),(0,i.yg)("td",{parentName:"tr",align:"center"},"int")))),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"list: push is to add node to the front of list and pop is to remove from front of list"),(0,i.yg)("li",{parentName:"ul"},"array: topOfStack is initialized to -1, when push, arr","[topOfStack++]","=element; when pop, return arr","[--topOfStack]","; use topOfStack==-1 to check if emtpy")),(0,i.yg)("h2",{id:"applications"},"Applications"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"balance symbols"),(0,i.yg)("li",{parentName:"ul"},"postfix expression"),(0,i.yg)("li",{parentName:"ul"},"infix to postfix conversion"),(0,i.yg)("li",{parentName:"ul"},"method calls")))}y.isMDXComponent=!0}}]);