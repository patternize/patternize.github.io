(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),i=(r(0),r(137)),o={id:"BubbleSort",title:"Bubble Sort",sidebar_label:"Bubble Sort"},l={id:"Algorithms/Sorting/BubbleSort",title:"Bubble Sort",description:"## Idea ",source:"@site/docs/Algorithms/Sorting/BubbleSort.md",permalink:"/docs/Algorithms/Sorting/BubbleSort",sidebar_label:"Bubble Sort",sidebar:"Algorithms",previous:{title:"Preface",permalink:"/docs/Algorithms/README"},next:{title:"Selection Sort",permalink:"/docs/Algorithms/Sorting/SelectionSort"}},c=[{value:"Idea",id:"idea",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Time and Space Analysis",id:"time-and-space-analysis",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Variants",id:"variants",children:[]}],b={rightToc:c},p="wrapper";function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"idea"},"Idea"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"compare each item wth the item next to it, and swap positions if required"),Object(i.b)("li",{parentName:"ul"},"the largest element will be bubbled to the end of the array"),Object(i.b)("li",{parentName:"ul"},"algorithm repeats until we have a pass without swapping any elements")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"for every step, move largest element in left unsorted array to the end; in this caes, avoid inner loop to iterate through right sorted subarray"),Object(i.b)("li",{parentName:"ul"},"for every step, swap unordered adjacent pair until no swap is needed "),Object(i.b)("li",{parentName:"ul"},"note that in one pass, more than one element can be placed into their final positions, so the position after last swap is sorted and do not need to traverse again")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"void bubbleSort(int arr[]) { \n    int n = arr.length; \n    for (int i = 0; i < n-1; i++) \n        for (int j = 0; j < n-i-1; j++) \n            if (arr[j] > arr[j+1]) { \n                // swap arr[j+1] and arr[i] \n                int temp = arr[j]; \n                arr[j] = arr[j+1]; \n                arr[j+1] = temp; \n            } \n} \n")),Object(i.b)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Time O(n^2)"),Object(i.b)("li",{parentName:"ul"},"Space O(1)")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the algorithm garantees that the list is sorted"),Object(i.b)("li",{parentName:"ul"},"Turtle and Hare Problem:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"larger elements at the beginning get swapped to the end quickly, but small elements at the end get swapped very slowly to the beginning"),Object(i.b)("li",{parentName:"ul"},"this property is good to find k largest elements - use outer loop of bubble sort for k times")))),Object(i.b)("h2",{id:"variants"},"Variants"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/odd-even-sort-brick-sort/"}),"Odd Even Sort / Brick Sort"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"compare all (odd,even) indexed pairs of adjacent elements"),Object(i.b)("li",{parentName:"ul"},"if a pair is in the wrong order, switch elements"),Object(i.b)("li",{parentName:"ul"},"then alternate between (odd,even) and (even,odd) pairs"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/cocktail-sort/"}),"Cocktail Sort"))))}s.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return r?a.a.createElement(m,l({ref:t},b,{components:r})):a.a.createElement(m,l({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);