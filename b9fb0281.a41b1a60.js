(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(149)),i=r(151),l=r(152),c={id:"LC108",title:"LC108. Convert Sorted Array to Binary Search Tree",sidebar_label:"LC108. Convert Sorted Array to Binary Search Tree",tags:["Patterns/Tree","DataStructures/Tree"]},s={unversionedId:"QuestionBank/Leetcode/LC108",id:"QuestionBank/Leetcode/LC108",isDocsHomePage:!1,title:"LC108. Convert Sorted Array to Binary Search Tree",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/108. Convert Sorted Array to Binary Search Tree.md",slug:"/QuestionBank/Leetcode/LC108",permalink:"/docs/QuestionBank/Leetcode/LC108",version:"current",sidebar_label:"LC108. Convert Sorted Array to Binary Search Tree",sidebar:"Data Structure",previous:{title:"LC103. Binary Tree Zigzag Level Order Traversal",permalink:"/docs/QuestionBank/Leetcode/LC103"},next:{title:"LC199. Binary Tree Right Side View",permalink:"/docs/QuestionBank/Leetcode/LC199"}},u=[{value:"Problem Description",id:"problem-description",children:[]},{value:"Solution",id:"solution",children:[{value:"High level strategy",id:"high-level-strategy",children:[]},{value:"Code",id:"code",children:[]}]}],d={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"problem-description"},"Problem Description"),Object(o.b)("p",null,"Source: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"}),"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/")),Object(o.b)("p",null,"Given an array where elements are sorted in ascending order, convert it to a height balanced BST. A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1."),Object(o.b)("p",null,"For example:\nGiven the sorted array: ","[-10, -3, 0, 5, 9]",", return the following tree:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"        0\n       / \\\n     -3   9\n     /   /\n   -10  5\n")),Object(o.b)("h2",{id:"solution"},"Solution"),Object(o.b)("h3",{id:"high-level-strategy"},"High level strategy"),Object(o.b)("p",null,"To ensure that both sides of the tree has an equal amount of nodes, and to maintain the binary search tree invariant, we must always choose the middle element of the input array as our root node. After setting the root node of the tree, we split the input array in two sub-arrays to repeat the aforementioned logic. The left sub-array will start from the beginning of the array up to the index of the middle node. The right sub-arry will start from the index after the middle node, up to the end of the array. The middle element of every sub-array will always be the root node of every subtree. "),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Input: [1, 2, 3, 4, 5, 6, 7, 8, 9];\nOutput:             [5] ---\x3e root: [5], left: [1, 2, 3, 4], right: [6, 7, 8, 9];\n                  /     \\\n               [3]       [7] ---\x3e root: [3], left: [1, 2], right: [4]; \n              /   \\     /   \\     root: [7], left: [6], right: [8, 9];\n            [1]   [4] [6]   [8] ---\x3e root: [1], left: null, right[2];\n              \\               \\      root: [8], left: null, right[9];\n              [2]             [9]\n")),Object(o.b)("p",null,"The time and space complexity of this solution are both ",Object(o.b)("strong",{parentName:"p"},"O(n)"),"."),Object(o.b)("h3",{id:"code"},"Code"),Object(o.b)(i.a,{defaultValue:"js",values:[{label:"Javascript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n **/\n\nconst sortedArrayToBST = (nums) => {\n\n    let helper = (left, right) => {\n        if (left > right) return null;\n\n        let index = Math.floor((left + right) / 2);\n        let root = new TreeNode(nums[index]);\n        root.left = helper(left, index - 1);\n        root.right = helpter(index + 1, right);\n\n        return root;\n    };\n\n    return helper(0, nums.length - 1);\n};\n"))),Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\npublic TreeNode sortedArrayToBST(int[] nums) {\n  int len = nums.length;\n  if (len == 0) return null;\n  if (len == 1) {\n      TreeNode root = new TreeNode(nums[0]);\n      return root;\n  }\n  int medianIdx = len % 2 == 0 ? len / 2 - 1 : len / 2;\n  TreeNode root = new TreeNode(nums[medianIdx]);\n  root.left = sortedArrayToBST(Arrays.copyOfRange(nums, 0, medianIdx));\n  root.right = sortedArrayToBST(Arrays.copyOfRange(nums, medianIdx + 1, len));\n  return root;\n}\n")))))}b.isMDXComponent=!0},149:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,p=d["".concat(i,".").concat(f)]||d[f]||b[f]||o;return r?a.a.createElement(p,l(l({ref:t},s),{},{components:r})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},150:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},151:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(153),i=r(150),l=r(55),c=r.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:b,className:f}=e,{tabGroupChoices:p,setTabGroupChoices:h}=Object(o.a)(),[m,y]=Object(n.useState)(l),v=n.Children.toArray(e.children);if(null!=b){const e=p[b];null!=e&&e!==m&&d.some((t=>t.value===e))&&y(e)}const g=e=>{y(e),null!=b&&h(b,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},f)},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,r)=>{switch(r.keyCode){case u:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===m))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==m})))))}},152:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a);t.a=function({children:e,hidden:t,className:r}){return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),e)}},153:function(e,t,r){"use strict";var n=r(0),a=r(154);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a}}]);