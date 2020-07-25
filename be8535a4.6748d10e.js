(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||u;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<u;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),u=(n(0),n(115)),i={id:"Interface",title:"Queue Interface",sidebar_label:"Interface"},c={unversionedId:"Language/Java/Queue/Interface",id:"Language/Java/Queue/Interface",isDocsHomePage:!1,title:"Queue Interface",description:"Basics",source:"@site/docs/Language/Java/Queue/Interface.md",permalink:"/docs/Language/Java/Queue/Interface",sidebar_label:"Interface",sidebar:"Language",previous:{title:"Runtime",permalink:"/docs/Language/Java/Set/Runtime"},next:{title:"LinkedList",permalink:"/docs/Language/Java/List/LinkedList"}},o=[{value:"Basics",id:"basics",children:[]},{value:"Sub-Interface: Deque",id:"sub-interface-deque",children:[]}],l={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"basics"},"Basics"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Always insert or delete from one end or another"),Object(u.b)("li",{parentName:"ul"},"operation is always O(1), for both enqueue and dequeue")),Object(u.b)("h2",{id:"sub-interface-deque"},"Sub-Interface: Deque"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"Deque implements Queue"),Object(u.b)("li",{parentName:"ul"},"Difference:",Object(u.b)("ul",{parentName:"li"},Object(u.b)("li",{parentName:"ul"},"Queue is one side in, one side out"),Object(u.b)("li",{parentName:"ul"},"Deque can enqueue/dequeue at both sides")))))}s.isMDXComponent=!0}}]);