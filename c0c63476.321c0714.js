(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{125:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return u}));var t=n(3),a=n(7),i=(n(0),n(149)),o={id:"MergeSort",title:"Merge Sort",sidebar_label:"Merge Sort"},l={unversionedId:"Algorithms/Sorting/MergeSort",id:"Algorithms/Sorting/MergeSort",isDocsHomePage:!1,title:"Merge Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/MergeSort.md",slug:"/Algorithms/Sorting/MergeSort",permalink:"/docs/Algorithms/Sorting/MergeSort",version:"current",sidebar_label:"Merge Sort",sidebar:"Algorithms",previous:{title:"Insertion Sort",permalink:"/docs/Algorithms/Sorting/InsertionSort"}},c=[{value:"Idea",id:"idea",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Procedure",id:"procedure",children:[]},{value:"Time and Space Analysis",id:"time-and-space-analysis",children:[]}],s={toc:c};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"idea"},"Idea"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use divide and conquer paradigm")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"//merge sort\npublic class MergeSort{\n    //sort on the whole list, use p=0 and r=list.length-1\n    public static void mergeSort(int[] arr, int p, int r){\n        if(p < r){\n            int q = (int)Math.floor((p+r)/2);\n            //sort two subarrays\n            mergeSort(arr, p, q);\n            mergeSort(arr, q+1, r);\n            //merge sorted array\n            merge(arr, p, q, r);\n        }\n    }\n    \n    //merge two sorted array\n    public static void merge(int[] arr, int p, int q, int r){\n        int len1 = q-p+1;\n        int len2 = r-q;\n        //create two new arrays to store sorted array\n        int[] arr1 = new int[len1+1];\n        int[] arr2 = new int[len2+1];\n        //fill in the new arrays\n        for(int i=0; i<len1; i++){\n            arr1[i] = arr[p+i];\n        }\n        for(int i=0; i<len2; i++){\n            arr2[i] = arr[q+1+i];\n        }\n        //use MAX_VALUE at the last element\n        arr1[len1] = Integer.MAX_VALUE;\n        arr2[len2] = Integer.MAX_VALUE;\n\n        int i = 0;\n        int j = 0;\n        //merge sorted list\n        for(int k=p; k<=r; k++){\n            if(arr1[i] <= arr2[j]){\n                arr[k] = arr1[i];\n                i++;\n            }else{\n                arr[k] = arr2[j];\n                j++;\n            }\n        }\n    }\n}\n")),Object(i.b)("h2",{id:"procedure"},"Procedure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"divide array into two subarrays"),Object(i.b)("li",{parentName:"ul"},"sort each subarray"),Object(i.b)("li",{parentName:"ul"},"merge sorted subarrays into one")),Object(i.b)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Time O(nlogn)"),Object(i.b)("li",{parentName:"ul"},"Space O(nlogn)")))}u.isMDXComponent=!0},149:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(b,l(l({ref:r},s),{},{components:n})):a.a.createElement(b,l({ref:r},s))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);