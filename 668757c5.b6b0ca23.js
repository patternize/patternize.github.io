(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),i=t(6),a=(t(0),t(138)),o={id:"SelectionSort",title:"Selection Sort",sidebar_label:"Selection Sort"},c={id:"Algorithms/Sorting/SelectionSort",title:"Selection Sort",description:"## Idea",source:"@site/docs/Algorithms/Sorting/SelectionSort.md",permalink:"/docs/Algorithms/Sorting/SelectionSort",sidebar_label:"Selection Sort",sidebar:"Algorithms",previous:{title:"Odd-Even Sort",permalink:"/docs/Algorithms/Sorting/OddEvenSort"},next:{title:"Insertion Sort",permalink:"/docs/Algorithms/Sorting/InsertionSort"}},l=[{value:"Idea",id:"idea",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Time and Space Analysis",id:"time-and-space-analysis",children:[]}],m={rightToc:l},p="wrapper";function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"idea"},"Idea"),Object(a.b)("p",null,"The idea is to select the smallest element of remaining array and then swap it to the front."),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"scan array, find the minimum element's index min_idx"),Object(a.b)("li",{parentName:"ul"},"swap the element to the index i, then incrememnt i")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class SelectionSort{\n    void selectionSort(int arr[]) {\n        int n = arr.length; \n    \n        // One by one move boundary of unsorted subarray \n        for (int i = 0; i < n-1; i++) { \n            // Find the minimum element in the input array \n            int min_idx = i; \n            for (int j = i+1; j < n; j++) \n                if (arr[j] < arr[min_idx]) \n                    min_idx = j; \n    \n            // Swap the found minimum element with the ith element\n            int temp = arr[min_idx]; \n            arr[min_idx] = arr[i]; \n            arr[i] = temp; \n        }\n    }\n}\n")),Object(a.b)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Time O(n^2)"),Object(a.b)("li",{parentName:"ul"},"Space O(1)")))}u.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),p=function(e){var n=i.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return i.a.createElement(m.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,b=u["".concat(o,".").concat(s)]||u[s]||d[s]||a;return t?i.a.createElement(b,c({ref:n},m,{components:t})):i.a.createElement(b,c({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var m=2;m<a;m++)o[m]=t[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);