"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[3021],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),p=i,d=c["".concat(s,".").concat(p)]||c[p]||g[p]||a;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(8168),i=r(8587),a=(r(6540),r(5680));const o=["components"],l={id:"intro",title:"Coordinate-based Dynamic Programming",sidebar_label:"Introduction"},s=void 0,u={unversionedId:"Algorithms/DynamicProgramming/Coordinate/intro",id:"Algorithms/DynamicProgramming/Coordinate/intro",title:"Coordinate-based Dynamic Programming",description:"Introduction",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/Introduction.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate",slug:"/Algorithms/DynamicProgramming/Coordinate/intro",permalink:"/Algorithms/DynamicProgramming/Coordinate/intro",draft:!1,tags:[],version:"current",frontMatter:{id:"intro",title:"Coordinate-based Dynamic Programming",sidebar_label:"Introduction"},sidebar:"Algorithms",previous:{title:"Leetcode 674. Longest Continuous Increasing Subsequence",permalink:"/Algorithms/DynamicProgramming/Coordinate/Array/longest-continuous-increasing-subsequence"},next:{title:"Matrix",permalink:"/Algorithms/DynamicProgramming/Coordinate/Matrix/"}},m={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Traits",id:"traits",level:2}],g={toc:c},p="wrapper";function d(e){let{components:t}=e,l=(0,i.A)(e,o);return(0,a.yg)(p,(0,n.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(139).A,width:"714",height:"619"})),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Coordinate-based Dynamic Programming are associated with the coordinates on a array or matrix. You are usually given an array/sequence or a matrix/grid as the input, and the question asks you to find either a subarray, subsequence, vector or path that satisfies a set of conditions. This is one of easier type of Dynamic Programming because it is intuitive to understand."),(0,a.yg)("h2",{id:"traits"},"Traits"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Usually given an array/sequence or grid/matrix as your input"),(0,a.yg)("li",{parentName:"ul"},"Need to find a subsequence/vector/path for",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"maximizing/minimizing a certain property"),(0,a.yg)("li",{parentName:"ul"},"counting"),(0,a.yg)("li",{parentName:"ul"},"true/false"))),(0,a.yg)("li",{parentName:"ul"},"State Representation:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"State is usually represented by index (i) or (i, j)"),(0,a.yg)("li",{parentName:"ul"},"is represented by dp","[i]"," and dp","[i][j]",", which are the most optimal solutions for a","[i]"," or a","[i][j]"))),(0,a.yg)("li",{parentName:"ul"},"Transition:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Initalization is usually just ",(0,a.yg)("inlineCode",{parentName:"li"},"dp[0]")," with ",(0,a.yg)("inlineCode",{parentName:"li"},"a[0]")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"a[dp.length-1]")," with ",(0,a.yg)("inlineCode",{parentName:"li"},"a[a.length-1]")),(0,a.yg)("li",{parentName:"ul"},"At each index i, the most optimal solutions of the surrounding neighbors should be found already"),(0,a.yg)("li",{parentName:"ul"},"Update ",(0,a.yg)("inlineCode",{parentName:"li"},"dp[i]")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"dp[i,j]")," with an aggregate function with the values of its neighbors")))))}d.isMDXComponent=!0},139:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Matrix-71cbbbb576683542d39030e54d03f200.jpg"}}]);