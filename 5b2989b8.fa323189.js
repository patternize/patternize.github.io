(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{115:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),u=function(e){var n=i.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=t,m=p["".concat(o,".").concat(b)]||p[b]||s[b]||a;return r?i.a.createElement(m,l(l({ref:n},d),{},{components:r})):i.a.createElement(m,l({ref:n},d))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},81:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(1),i=r(6),a=(r(0),r(115)),o={id:"OddEvenSort",title:"Odd-Even Sort",sidebar_label:"Odd-Even Sort"},l={unversionedId:"Algorithms/Sorting/OddEvenSort",id:"Algorithms/Sorting/OddEvenSort",isDocsHomePage:!1,title:"Odd-Even Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/OddEvenSort.md",permalink:"/docs/Algorithms/Sorting/OddEvenSort",sidebar_label:"Odd-Even Sort",sidebar:"Algorithms",previous:{title:"Bubble Sort",permalink:"/docs/Algorithms/Sorting/BubbleSort"},next:{title:"Selection Sort",permalink:"/docs/Algorithms/Sorting/SelectionSort"}},c=[{value:"Idea",id:"idea",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Runtime",id:"runtime",children:[]},{value:"Reference",id:"reference",children:[]}],d={rightToc:c};function u(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"idea"},"Idea"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"compare all (odd,even) indexed pairs of adjacent elements"),Object(a.b)("li",{parentName:"ul"},"if a pair is in the wrong order, switch elements"),Object(a.b)("li",{parentName:"ul"},"then alternate between (odd,even) and (even,odd) pairs")),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public class OddEvenSort{\n    public static void sort(int[] arr){\n        if(arr==null || arr.length<=1){\n            return;\n        }\n        boolean sorted = false;\n        int len = arr.length;\n        while(!sorted){\n            sorted = true;\n            //(odd,even) pairs\n            for(int i=1; i<len-1; i+=2){\n                if(arr[i] > arr[i+1]){\n                    swap(arr,i,i+1);\n                    sorted = false;\n                } \n            }\n            //(even,odd) pairs\n            for(int i=0; i<len-1; i+=2){\n                if(arr[i] > arr[i+1]){\n                    swap(arr,i,i+1);\n                    sorted = false;\n                }\n            }\n        }\n    }\n\n    public static void swap(int[] arr, int i, int j){\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}\n")),Object(a.b)("h2",{id:"runtime"},"Runtime"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Time O(n^2)"),Object(a.b)("li",{parentName:"ul"},"Space O(1)")),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/odd-even-sort-brick-sort/"}),"Odd Even Sort / Brick Sort"))))}u.isMDXComponent=!0}}]);