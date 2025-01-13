"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[1514],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(n),y=a,d=s["".concat(c,".").concat(y)]||s[y]||f[y]||i;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(8168),a=n(8587),i=(n(6540),n(5680));const u=["components"],o={id:"Interface",title:"Queue Interface",sidebar_label:"Interface"},c=void 0,l={unversionedId:"Applications/Language/Java/Queue/Interface",id:"Applications/Language/Java/Queue/Interface",title:"Queue Interface",description:"Basics",source:"@site/docs/Applications/Language/Java/Queue/Interface.md",sourceDirName:"Applications/Language/Java/Queue",slug:"/Applications/Language/Java/Queue/Interface",permalink:"/docs/Applications/Language/Java/Queue/Interface",draft:!1,tags:[],version:"current",frontMatter:{id:"Interface",title:"Queue Interface",sidebar_label:"Interface"},sidebar:"Applications",previous:{title:"Introduction",permalink:"/docs/Applications/Language/Java/Overview"},next:{title:"PriorityQueue",permalink:"/docs/Applications/Language/Java/Queue/PriorityQueue"}},p={},s=[{value:"Basics",id:"basics",level:2},{value:"Sub-Interface: Deque",id:"sub-interface-deque",level:2}],f={toc:s},y="wrapper";function d(e){let{components:t}=e,n=(0,a.A)(e,u);return(0,i.yg)(y,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"basics"},"Basics"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Always insert or delete from one end or another"),(0,i.yg)("li",{parentName:"ul"},"operation is always O(1), for both enqueue and dequeue")),(0,i.yg)("h2",{id:"sub-interface-deque"},"Sub-Interface: Deque"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Deque implements Queue"),(0,i.yg)("li",{parentName:"ul"},"Difference:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Queue is one side in, one side out"),(0,i.yg)("li",{parentName:"ul"},"Deque can enqueue/dequeue at both sides")))))}d.isMDXComponent=!0}}]);