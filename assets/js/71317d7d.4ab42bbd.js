"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[3611],{5680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>c});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,c=m["".concat(u,".").concat(d)]||m[d]||y[d]||l;return n?a.createElement(c,g(g({ref:t},o),{},{components:n})):a.createElement(c,g({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var p=2;p<l;p++)g[p]=n[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(8168),r=n(8587),l=(n(6540),n(5680));const g=["components"],i={id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},u=void 0,p={unversionedId:"Language/Java/Set/Runtime",id:"Language/Java/Set/Runtime",title:"Runtime",description:"Set                   |    add   |  remove  | contains |   next   | size | Data Structure",source:"@site/docs/Language/Java/Set/runtime.md",sourceDirName:"Language/Java/Set",slug:"/Language/Java/Set/Runtime",permalink:"/docs/Language/Java/Set/Runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},sidebar:"Language",previous:{title:"Interface",permalink:"/docs/Language/Java/Set/Interface"}},o={},m=[],y={toc:m},d="wrapper";function c(e){let{components:t}=e,n=(0,r.A)(e,g);return(0,l.yg)(d,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Set"),(0,l.yg)("th",{parentName:"tr",align:null},"add"),(0,l.yg)("th",{parentName:"tr",align:null},"remove"),(0,l.yg)("th",{parentName:"tr",align:null},"contains"),(0,l.yg)("th",{parentName:"tr",align:null},"next"),(0,l.yg)("th",{parentName:"tr",align:null},"size"),(0,l.yg)("th",{parentName:"tr",align:null},"Data Structure"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"HashSet"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(h/n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Hash Table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LinkedHashSet"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Hash Table + Linked List")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"EnumSet"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Bit Vector")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TreeSet"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Red-black tree")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CopyOnWriteArraySet"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ConcurrentSkipListSet"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Skip List")))))}c.isMDXComponent=!0}}]);