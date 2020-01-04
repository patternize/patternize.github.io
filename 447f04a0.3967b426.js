(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(1),o=(t(0),t(132));const a={id:"README",title:"Bit Manipulation",sidebar_label:"Introduction"},i={id:"Patterns/BitManipulation/README",title:"Bit Manipulation",description:"## Power of 2",source:"@site/docs/Patterns/BitManipulation/README.md",permalink:"/docs/Patterns/BitManipulation/README",sidebar_label:"Introduction",sidebar:"Patterns",previous:{title:"Expression Puzzle",permalink:"/docs/Patterns/Backtracking/ExpressionPuzzle"}},c=[{value:"Power of 2",id:"power-of-2",children:[]},{value:"Log Base of 2",id:"log-base-of-2",children:[]},{value:"Count Ones",id:"count-ones",children:[]},{value:"References:",id:"references",children:[]}],l={rightToc:c},u="wrapper";function s({components:e,...n}){return Object(o.b)(u,Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"power-of-2"},"Power of 2"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"1 << x === 2^x\n")),Object(o.b)("h2",{id:"log-base-of-2"},"Log Base of 2"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# log(a) base b = log(a)/log(b)\n32 >> 5 === log(32)/log(2) \n")),Object(o.b)("h2",{id:"count-ones"},"Count Ones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"n&(n-1)")," rule: is used when you want to quickly count how many ",Object(o.b)("inlineCode",{parentName:"li"},"1s")," in your binary number, every-time you do ",Object(o.b)("inlineCode",{parentName:"li"},"n&(n-1)"),", a ",Object(o.b)("inlineCode",{parentName:"li"},"1")," in your binary form will be removed:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// first run\nn = 23 // (10111)\nnMinusOne = n - 1 // === 22 (10110)\nn = n & nMinusOne // === 22 (10111 & 10110 = 10110)\n// second run\nnMinusOne = 22 - 1 // == 21 (10101)\nn = n & nMinusOne // == 20 (10110 & 10101 = 10101)\n// third run\nnMinusOne = 20 - 1 // == 19 (10011)\nn = n & nMinusOne // == 16 (10101 & 10011 = 10000)\n// fourth run\nnMinusOne = 16 - 1 // == 15 (01111)\nn = n & nMinusOne // == 0 (10000 & 01111 = 00000)\n// after 4 times, n becomes 0; hence there are 4 1s in your original binary form of int 23\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"in short:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"int count_one(int n) {\n    while(n) {\n        n = n&(n-1);\n        count++;\n    }\n    return count;\n}\n")),Object(o.b)("h2",{id:"references"},"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently"}),"https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently"))))}s.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),p=r,d=b["".concat(i,".").concat(p)]||b[p]||f[p]||a;return t?o.a.createElement(d,c({ref:n},u,{components:t})):o.a.createElement(d,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);