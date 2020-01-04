(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),a=(n(0),n(132));const i={id:"README",title:"Backtracking",sidebar_label:"Introduction"},c={id:"Patterns/Backtracking/README",title:"Backtracking",description:"## Backtracking",source:"@site/docs/Patterns/Backtracking/README.md",permalink:"/docs/Patterns/Backtracking/README",sidebar_label:"Introduction",sidebar:"Patterns",previous:{title:"Patterns",permalink:"/docs/Patterns/README"},next:{title:"Permutation",permalink:"/docs/Patterns/Backtracking/Permutation"}},o=[{value:"Backtracking",id:"backtracking",children:[]},{value:"Intuitions of A Backtracking Problem",id:"intuitions-of-a-backtracking-problem",children:[]},{value:"Backtracking Template",id:"backtracking-template",children:[]},{value:"References",id:"references",children:[]}],l={rightToc:o},s="wrapper";function u({components:e,...t}){return Object(a.b)(s,Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"backtracking"},"Backtracking"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"Backtracking can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem."')),Object(a.b)("h2",{id:"intuitions-of-a-backtracking-problem"},"Intuitions of A Backtracking Problem"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'The problem is about combinations, combinatorics, and permutation. Usually the problem has multiple possible solutions and it asks you to "list" or "enumerate" all the possible solutions.'),Object(a.b)("li",{parentName:"ol"},"When you try to come up with an combination of both iteration and recursion. For example, you need to have a loop inside of a recursive function, and the loop's range depends on the function parameters:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"void recursiveFunction(int x, int y, int z){\n    for(int i = 0; i < y; i++){\n        recursiveFunction(x, i, z+1);\n    }\n}\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"When you can prove that the solution needs a runtime of ",Object(a.b)("img",{src:"https://render.githubusercontent.com/render/math?math=O(n!)"}))),Object(a.b)("h2",{id:"backtracking-template"},"Backtracking Template"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    // Declare private data structures:\n    private ArrayList<Integer> solutions;\n    public List<List<Integer>> permute(int[] nums) {\n        // declare private data structures\n        solutions = new ArrayList<>();\n        // call backtrack\n        backtrack(param1, param2);\n        // return results\n        return this.results;\n    }\n\n    private void backtrack(int param1, int param2){\n        // handle base case!\n        if(BaseCase qualified){\n            // Add current result to the solution collection\n            solutions.add(param2)\n            return;\n        }\n\n        for(int i = 0; i< param1; i++){\n            // 1. Handle edge case\n            if(count[i] == 0) continue;\n            // 2. Prepare a possible solution using some variable\n            result.set(level, nums[i]);\n            // 3. Remove used variable in step 2\n            count[i]--;\n            // 4. Call backtrack recursively\n            backtrack(param1, param2+1);\n            // 5. Add used variable in step 2 and 4 back to the set\n            count[i]++;\n        }\n    }\n}\n")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/backtracking-introduction/"}),"Geeksforgeeks: Intro to Backtracking"))))}u.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(m,o({ref:t},s,{components:n})):a.a.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);