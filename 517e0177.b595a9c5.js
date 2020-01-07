(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),i=(n(0),n(137)),a={id:"InsertionSort",title:"Insertion Sort",sidebar_label:"Insertion Sort"},c={id:"Algorithms/Sorting/InsertionSort",title:"Insertion Sort",description:"## Idea",source:"@site/docs/Algorithms/Sorting/InsertionSort.md",permalink:"/docs/Algorithms/Sorting/InsertionSort",sidebar_label:"Insertion Sort",sidebar:"Algorithms",previous:{title:"Selection Sort",permalink:"/docs/Algorithms/Sorting/SelectionSort"},next:{title:"Merge Sort",permalink:"/docs/Algorithms/Sorting/MergeSort"}},l=[{value:"Idea",id:"idea",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Time and Space Analysis",id:"time-and-space-analysis",children:[]}],p={rightToc:l},s="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"idea"},"Idea"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The idea is to remove one entry at a time and insert it into the correct position in the sorted part.")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"void insertionSort(int arr[]) {  \n    int i, key, j;  \n    for (i = 1; i < arr.length; i++){  \n        key = arr[i];  \n        j = i - 1;\n        // Move elements that are greater than key to the right by one position   \n        while (j >= 0 && arr[j] > key) {  \n            arr[j + 1] = arr[j];  \n            j = j - 1;\n        }\n        // insert the key to the head of the above elements\n        arr[j + 1] = key;  \n    }  \n}  \n")),Object(i.b)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Time O(n^2)"),Object(i.b)("li",{parentName:"ul"},"Space O(1)")))}u.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);