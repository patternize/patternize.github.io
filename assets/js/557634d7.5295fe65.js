"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[2252],{5680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>N});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,y=u(e,["components","mdxType","originalType","parentName"]),m=p(n),o=r,N=m["".concat(i,".").concat(o)]||m[o]||d[o]||l;return n?a.createElement(N,g(g({ref:t},y),{},{components:n})):a.createElement(N,g({ref:t},y))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=o;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:r,g[1]=u;for(var p=2;p<l;p++)g[p]=n[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},2774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>i,default:()=>N,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var a=n(8168),r=n(8587),l=(n(6540),n(5680));const g=["components"],u={id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},i=void 0,p={unversionedId:"Language/Java/Queue/Runtime",id:"Language/Java/Queue/Runtime",title:"Runtime",description:"Queue Interface",source:"@site/docs/Language/Java/Queue/runtime.md",sourceDirName:"Language/Java/Queue",slug:"/Language/Java/Queue/Runtime",permalink:"/Language/Java/Queue/Runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"Runtime",title:"Runtime",sidebar_label:"Runtime"},sidebar:"Language",previous:{title:"PriorityQueue",permalink:"/Language/Java/Queue/PriorityQueue"},next:{title:"HashSet",permalink:"/Language/Java/Set/HashSet"}},y={},m=[{value:"Queue Interface",id:"queue-interface",level:2},{value:"Deque/Dequeue Interface",id:"dequedequeue-interface",level:2}],d={toc:m},o="wrapper";function N(e){let{components:t}=e,n=(0,r.A)(e,g);return(0,l.yg)(o,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"queue-interface"},"Queue Interface"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Queue"),(0,l.yg)("th",{parentName:"tr",align:null},"offer"),(0,l.yg)("th",{parentName:"tr",align:null},"peek"),(0,l.yg)("th",{parentName:"tr",align:null},"poll"),(0,l.yg)("th",{parentName:"tr",align:null},"remove"),(0,l.yg)("th",{parentName:"tr",align:null},"size"),(0,l.yg)("th",{parentName:"tr",align:null},"Data Structure"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"PriorityQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Priority Heap")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LinkedList"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ArrayDequeue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Linked List")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ConcurrentLinkedQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"Linked List")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ArrayBlockingQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"PriorirityBlockingQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Priority Heap")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SynchronousQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"None!")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DelayQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(log n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Priority Heap")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LinkedBlockingQueue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Linked List")))),(0,l.yg)("h2",{id:"dequedequeue-interface"},"Deque/Dequeue Interface"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Deque"),(0,l.yg)("th",{parentName:"tr",align:null},"offer/offerLast"),(0,l.yg)("th",{parentName:"tr",align:null},"peek"),(0,l.yg)("th",{parentName:"tr",align:null},"poll/pollLast"),(0,l.yg)("th",{parentName:"tr",align:null},"remove/removeLast"),(0,l.yg)("th",{parentName:"tr",align:null},"Size"),(0,l.yg)("th",{parentName:"tr",align:null},"Data Structure"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LinkedList"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ArrayDequeue"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"O(1)"),(0,l.yg)("td",{parentName:"tr",align:null},"Linked List")))))}N.isMDXComponent=!0}}]);