"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[1034],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||p;return t?n.createElement(y,o(o({ref:a},c),{},{components:t})):n.createElement(y,o({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=g;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},675:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(8168),r=t(8587),p=(t(6540),t(5680));const o=["components"],i={id:"HashMap",title:"HashMap",sidebar_label:"HashMap"},l=void 0,s={unversionedId:"Applications/Language/Java/Map/HashMap",id:"Applications/Language/Java/Map/HashMap",title:"HashMap",description:"Basics",source:"@site/docs/Applications/Language/Java/Map/HashMap.md",sourceDirName:"Applications/Language/Java/Map",slug:"/Applications/Language/Java/Map/HashMap",permalink:"/docs/Applications/Language/Java/Map/HashMap",draft:!1,tags:[],version:"current",frontMatter:{id:"HashMap",title:"HashMap",sidebar_label:"HashMap"},sidebar:"Applications",previous:{title:"Runtime",permalink:"/docs/Applications/Language/Java/List/Runtime"},next:{title:"HashTable",permalink:"/docs/Applications/Language/Java/Map/HashTable"}},c={},u=[{value:"Basics",id:"basics",level:2},{value:"TreeMap vs HashMap",id:"treemap-vs-hashmap",level:2}],m={toc:u},g="wrapper";function y(e){let{components:a}=e,t=(0,r.A)(e,o);return(0,p.yg)(g,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,p.yg)("h2",{id:"basics"},"Basics"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"Simple hash table, Keys and Values are not ordered"),(0,p.yg)("li",{parentName:"ul"},"get(), remove() are constant time"),(0,p.yg)("li",{parentName:"ul"},"put() costs O(1) on average, O(n) when collision happens"),(0,p.yg)("li",{parentName:"ul"},"iteration order is not predictable, as the keys are not sorted"),(0,p.yg)("li",{parentName:"ul"},"allow both keys and values to be null")),(0,p.yg)("h2",{id:"treemap-vs-hashmap"},"TreeMap vs HashMap"),(0,p.yg)("ul",null,(0,p.yg)("li",{parentName:"ul"},"TreeMap are naturally sorted by order of key, HashMap is not:")),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre"},"TreeMap<Integer, Integer> tm = new TreeMap<>();\ntm.put(3, 1);\ntm.put(2, 2);\ntm.put(1, 10);\ntm.put(-100, 2);\ntm.values(); //[2, 10, 2, 1]\n\nHashMap<Integer, Integer> hm = new HashMap<>();\nhm.put(3, 1);\nhm.put(2, 2);\nhm.put(1, 10);\nhm.put(-100, 2);\nhm.values(); // [10, 2, 1, 2]\n")))}y.isMDXComponent=!0}}]);