(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(1),i=n(6),a=(n(0),n(129)),o={id:"Permutation",title:"Permutation of Elements",sidebar_label:"Permutation of Elements"},u={unversionedId:"Patterns/Backtracking/Permutation/Permutation",id:"Patterns/Backtracking/Permutation/Permutation",isDocsHomePage:!1,title:"Permutation of Elements",description:"This is a classic set of problems that can be solved using Backtracking.",source:"@site/docs/Patterns/Backtracking/Permutation/Permutation.md",permalink:"/docs/Patterns/Backtracking/Permutation/Permutation",sidebar_label:"Permutation of Elements",sidebar:"Patterns",previous:{title:"Introduction to Backtracking",permalink:"/docs/Patterns/Backtracking/Introduction"},next:{title:"Expression Puzzle",permalink:"/docs/Patterns/Backtracking/ExpressionPuzzle"}},s=[{value:"Type 1 Problem: Permutation of Distinct Elements",id:"type-1-problem-permutation-of-distinct-elements",children:[{value:"Problem Description",id:"problem-description",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Type 2 Problem: Permutation of Elements (duplicates possible)",id:"type-2-problem-permutation-of-elements-duplicates-possible",children:[{value:"Problem Description",id:"problem-description-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"References",id:"references",children:[]}],l={rightToc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a classic set of problems that can be solved using Backtracking."),Object(a.b)("h2",{id:"type-1-problem-permutation-of-distinct-elements"},"Type 1 Problem: Permutation of Distinct Elements"),Object(a.b)("h3",{id:"problem-description"},"Problem Description"),Object(a.b)("p",null,"Given a collection of distinct integers, return all possible permutations."),Object(a.b)("h4",{id:"input"},"Input"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[1,3,5]")),Object(a.b)("h4",{id:"output"},"Output"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[\n   [1,3,5],\n   [1,5,3],\n   [3,1,5],\n   [3,5,1],\n   [5,1,3],\n   [5,3,1]\n ]")),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    List<List<Integer>> results;\n\n    public List<List<Integer>> permute(int[] nums) {\n        this.results = new ArrayList<>();\n\n        // use a count array nad uniquenums array\n        int[] count = new int[nums.length];\n        Arrays.fill(count, 1);\n        \n        // create a dummy result so we know the length of the ArrayList and we can use set() instead\n        // would be nice if java supports new ArrayList<>(Arrays.asList(nums)), but its a no-no due to boxing issue\n        List<Integer> result = new ArrayList<>();\n        for(int num: nums) result.add(num);\n\n        // call backtrack\n        backtrack(result, nums, count, 0);\n        return this.results;\n    }\n\n    private void backtrack(List<Integer> result, int[] nums, int[] count, int level){\n        if(level == nums.length){\n            results.add(new ArrayList(result));\n            return;\n        }\n\n        for(int i = 0; i< nums.length; i++){\n            if(count[i] == 0) continue; // the digit has been used before\n            result.set(level, nums[i]);\n            count[i]--;\n            backtrack(result, nums, count, level+1);\n            count[i]++;\n        }\n    }\n}\n")),Object(a.b)("h2",{id:"type-2-problem-permutation-of-elements-duplicates-possible"},"Type 2 Problem: Permutation of Elements (duplicates possible)"),Object(a.b)("h3",{id:"problem-description-1"},"Problem Description"),Object(a.b)("p",null,"Given a collection of integers that might contain duplicates, return all possible permutations."),Object(a.b)("h4",{id:"input-1"},"Input"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[1,1,5]")),Object(a.b)("h4",{id:"output-1"},"Output"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[\n   [1,1,5],\n   [1,5,1],\n   [5,1,1]\n ]")),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    List<List<Integer>> results;\n\n    public List<List<Integer>> permuteUnique(int[] nums) {\n        this.results = new ArrayList<>();\n\n        // handle duplicates\n        HashMap<Integer, Integer> hm = new HashMap<>();\n        for(int num : nums){\n            hm.put(num, hm.getOrDefault(num, 0)+1);\n        }\n\n        // use a count array nad uniquenums array\n        int[] uniqueNums = new int[hm.size()];\n        int[] count = new int[hm.size()];\n        int i = 0;\n        for(Map.Entry<Integer,Integer> entry : hm.entrySet()){\n            uniqueNums[i] = entry.getKey();\n            count[i] = entry.getValue();\n            i++;\n        }\n\n        // create a dummy result\n        List<Integer> result = new ArrayList<>();\n        for(int num: nums) result.add(num);\n\n        // call backtrack\n        backtrack(result, uniqueNums, count, 0);\n        return this.results;\n    }\n\n    private void backtrack(List<Integer> result, int[] nums, int[] count, int level){\n        if(level == result.size()){\n            results.add(new ArrayList(result));\n            return;\n        }\n\n        for(int i = 0; i< nums.length; i++){\n            if(count[i] == 0) continue; // the digit has been used before\n            result.set(level, nums[i]);\n            count[i]--;\n            backtrack(result, nums, count, level+1);\n            count[i]++;\n        }\n    }\n}\n")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/permutations/"}),"Leetcode 46. Permutations [Medium]")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/permutations-ii/"}),"Leetcode 47. Permutations II [Medium]"))))}c.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||a;return n?i.a.createElement(d,u(u({ref:t},l),{},{components:n})):i.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);