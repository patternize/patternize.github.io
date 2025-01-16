"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[8230],{5680:(t,e,n)=>{n.d(e,{xA:()=>y,yg:()=>c});var a=n(6540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},y=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,y=i(t,["components","mdxType","originalType","parentName"]),o=u(n),d=r,c=o["".concat(p,".").concat(d)]||o[d]||m[d]||l;return n?a.createElement(c,g(g({ref:e},y),{},{components:n})):a.createElement(c,g({ref:e},y))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[o]="string"==typeof t?t:r,g[1]=i;for(var u=2;u<l;u++)g[u]=n[u];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7507:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=n(8168),r=n(8587),l=(n(6540),n(5680));const g=["components"],i={id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},p=void 0,u={unversionedId:"Language/Java/Map/Runtime",id:"Language/Java/Map/Runtime",title:"Runtime",description:"Map |put |   get    | containsKey |   next   | Data Structure",source:"@site/docs/Language/Java/Map/runtime.md",sourceDirName:"Language/Java/Map",slug:"/Language/Java/Map/Runtime",permalink:"/docs/Language/Java/Map/Runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},sidebar:"Language",previous:{title:"TreeMap",permalink:"/docs/Language/Java/Map/TreeMap"},next:{title:"Introduction",permalink:"/docs/Language/Java/Overview"}},y={},o=[],m={toc:o},d="wrapper";function c(t){let{components:e}=t,n=(0,r.A)(t,g);return(0,l.yg)(d,(0,a.A)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Map"),(0,l.yg)("th",{parentName:"tr",align:null},"put"),(0,l.yg)("th",{parentName:"tr",align:null},"get"),(0,l.yg)("th",{parentName:"tr",align:null},"containsKey"),(0,l.yg)("th",{parentName:"tr",align:null},"next"),(0,l.yg)("th",{parentName:"tr",align:null},"Data Structure"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"HashMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~ O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(h / n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Hash Table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LinkedHashMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Hash Table + Linked List")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"IdentityHashMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(h / n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"WeakHashMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(h / n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Hash Table")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"EnumMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TreeMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Red-black tree")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ConcurrentHashMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(h / n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Hash Tables")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ConcurrentSkipListMap"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1) ~O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Skip List")))))}c.isMDXComponent=!0}}]);