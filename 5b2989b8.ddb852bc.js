(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return d}));var t=r(147),i=r(149),o=(r(0),r(148)),a={id:"OddEvenSort",title:"Odd-Even Sort",sidebar_label:"Odd-Even Sort"},c={unversionedId:"Algorithms/Sorting/OddEvenSort",id:"Algorithms/Sorting/OddEvenSort",isDocsHomePage:!1,title:"Odd-Even Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/OddEvenSort.md",slug:"/Algorithms/Sorting/OddEvenSort",permalink:"/docs/Algorithms/Sorting/OddEvenSort",version:"current",sidebar_label:"Odd-Even Sort",sidebar:"Algorithms",previous:{title:"Bubble Sort",permalink:"/docs/Algorithms/Sorting/BubbleSort"},next:{title:"Selection Sort",permalink:"/docs/Algorithms/Sorting/SelectionSort"}},l=[{value:"Idea",id:"idea",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Reference",id:"reference",children:[]}],u={toc:l};function d(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"idea"},"Idea"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"compare all (odd,even) indexed pairs of adjacent elements"),Object(o.b)("li",{parentName:"ul"},"if a pair is in the wrong order, switch elements"),Object(o.b)("li",{parentName:"ul"},"then alternate between (odd,even) and (even,odd) pairs")),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public class OddEvenSort{\n    public static void sort(int[] arr){\n        if(arr==null || arr.length<=1){\n            return;\n        }\n        boolean sorted = false;\n        int len = arr.length;\n        while(!sorted){\n            sorted = true;\n            //(odd,even) pairs\n            for(int i=1; i<len-1; i+=2){\n                if(arr[i] > arr[i+1]){\n                    swap(arr,i,i+1);\n                    sorted = false;\n                } \n            }\n            //(even,odd) pairs\n            for(int i=0; i<len-1; i+=2){\n                if(arr[i] > arr[i+1]){\n                    swap(arr,i,i+1);\n                    sorted = false;\n                }\n            }\n        }\n    }\n\n    public static void swap(int[] arr, int i, int j){\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}\n")),Object(o.b)("h2",{id:"runtime"},"Runtime"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Time O(n^2)"),Object(o.b)("li",{parentName:"ul"},"Space O(1)")),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/odd-even-sort-brick-sort/"}),"Odd Even Sort / Brick Sort"))))}d.isMDXComponent=!0},147:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}r.d(n,"a",(function(){return t}))},148:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),d=function(e){var n=i.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=d(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),b=t,f=s["".concat(a,".").concat(b)]||s[b]||p[b]||o;return r?i.a.createElement(f,c(c({ref:n},u),{},{components:r})):i.a.createElement(f,c({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},149:function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(n,"a",(function(){return t}))}}]);