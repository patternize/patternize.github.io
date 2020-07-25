(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(158)),o={id:"intro",title:"Coordinate-based Dynamic Programming",sidebar_label:"Introduction"},c={id:"Patterns/DynamicProgramming/Coordinate/intro",isDocsHomePage:!1,title:"Coordinate-based Dynamic Programming",description:"Introduction",source:"@site/docs/Patterns/DynamicProgramming/Coordinate/Introduction.md",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/intro",sidebar_label:"Introduction",sidebar:"Patterns",previous:{title:"Expression Puzzle",permalink:"/docs/Patterns/Backtracking/ExpressionPuzzle"},next:{title:"Coordinate-based Examples",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/Examples"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Traits",id:"traits",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Coordinate-based Dynamic Programming are associated with the coordinates on a array or matrix. You are usually given an array/sequence or a matrix/grid as the input, and the question asks you to find either a subarray, subsequence, vector or path that satisfies a set of conditions. This is one of easier type of Dynamic Programming because it is intuitive to understand."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/Patterns/DynamicProgramming/Coordinate/bomberman.jpg",alt:null}))),Object(i.b)("h2",{id:"traits"},"Traits"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Usually given an array/sequence or grid/matrix as your input"),Object(i.b)("li",{parentName:"ul"},"Need to find a subsequence/vector/path for",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"maximizing/minimizing a certain property"),Object(i.b)("li",{parentName:"ul"},"counting"),Object(i.b)("li",{parentName:"ul"},"true/false"))),Object(i.b)("li",{parentName:"ul"},"State Representation:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"State is usually represented by index (i) or (i, j)"),Object(i.b)("li",{parentName:"ul"},"is represented by dp","[i]"," and dp","[i][j]",", which are the most optimal solutions for a","[i]"," or a","[i][j]"))),Object(i.b)("li",{parentName:"ul"},"Transition:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"- Initalization is usually just `dp[0]` with `a[0]` or `a[dp.length-1]` with `a[a.length-1]`\n- At each index i, the most optimal solutions of the surrounding neighbors should be found already\n- Update `dp[i]` or `dp[i,j]` with an aggregate function with the values of its neighbors\n")),Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"/img/Patterns/DynamicProgramming/Coordinate/Matrix.jpg",alt:null})))))}s.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);