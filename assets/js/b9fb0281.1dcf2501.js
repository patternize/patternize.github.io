"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[8583],{9365:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(6540),a=r(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:r},t)}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(8168),a=r(6540),o=r(53),l=r(3104),i=r(6347),u=r(7485),s=r(1682),d=r(9466);function c(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:c(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace(Object.assign({},n.location,{search:t.toString()}))}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=h(e),[l,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const a=null!=(t=n.find((e=>e.default)))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=p({queryString:r,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,d.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),y=(()=>{const e=null!=u?u:c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var y=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=s[r].value;n!==i&&(c(t),u(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{var n;const t=d.indexOf(e.currentTarget)+1;r=null!=(n=d[t])?n:d[0];break}case"ArrowLeft":{var a;const t=d.indexOf(e.currentTarget)-1;r=null!=(a=d[t])?a:d[d.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:h},l,{className:(0,o.A)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},a.createElement(b,(0,n.A)({},e,t)),a.createElement(v,(0,n.A)({},e,t)))}function w(e){const t=(0,y.A)();return a.createElement(T,(0,n.A)({key:String(t)},e))}},5123:(e,t,r)=>{r.r(t),r.d(t,{BinaryTree:()=>f,assets:()=>p,contentTitle:()=>h,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>y});var n=r(8168),a=r(8587),o=r(6540),l=r(5680),i=r(543),u=r(1470),s=r(9365);const d=["components"],c={id:"LC108",title:"Convert Sorted Array to Binary Search Tree",sidebar_label:"Convert Sorted Array to Binary Search Tree",tags:["Patterns/Tree","DataStructures/Tree"]},h=void 0,m={unversionedId:"QuestionBank/Leetcode/LC108",id:"QuestionBank/Leetcode/LC108",title:"Convert Sorted Array to Binary Search Tree",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/108. Convert Sorted Array to Binary Search Tree.md",sourceDirName:"QuestionBank/Leetcode",slug:"/QuestionBank/Leetcode/LC108",permalink:"/docs/QuestionBank/Leetcode/LC108",draft:!1,tags:[{label:"Patterns/Tree",permalink:"/docs/tags/patterns-tree"},{label:"DataStructures/Tree",permalink:"/docs/tags/data-structures-tree"}],version:"current",sidebarPosition:108,frontMatter:{id:"LC108",title:"Convert Sorted Array to Binary Search Tree",sidebar_label:"Convert Sorted Array to Binary Search Tree",tags:["Patterns/Tree","DataStructures/Tree"]},sidebar:"Data Structure",previous:{title:"Binary Tree Zigzag Level Order Traversal",permalink:"/docs/QuestionBank/Leetcode/LC103"},next:{title:"Binary Tree Right Side View",permalink:"/docs/QuestionBank/Leetcode/LC199"}},p={},f=()=>(0,l.yg)(o.Fragment,null,"undefined"!=typeof window&&(0,l.yg)(i.PH,{inputData:{name:"0",children:[{name:"-3",children:[{name:"-10"}]},{name:"9",children:[{name:"5"}]}]},maxHeight:250,mdxType:"Tree"})),y=[{value:"Problem Description",id:"problem-description",level:2},{value:"Solution",id:"solution",level:2},{value:"High level strategy",id:"high-level-strategy",level:3},{value:"Code",id:"code",level:3}],g={BinaryTree:f,toc:y},b="wrapper";function v(e){let{components:t}=e,r=(0,a.A)(e,d);return(0,l.yg)(b,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"problem-description"},"Problem Description"),(0,l.yg)("p",null,"Given an array where elements are sorted in ascending order, convert it to a height balanced BST. A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1."),(0,l.yg)("p",null,"For example:\nGiven the sorted array: ","[-10, -3, 0, 5, 9]",", return the following tree:"),(0,l.yg)(f,{mdxType:"BinaryTree"}),(0,l.yg)("h2",{id:"solution"},"Solution"),(0,l.yg)("h3",{id:"high-level-strategy"},"High level strategy"),(0,l.yg)("p",null,"To ensure that both sides of the tree has an equal amount of nodes, and to maintain the binary search tree invariant, we must always choose the middle element of the input array as our root node. After setting the root node of the tree, we split the input array in two sub-arrays to repeat the aforementioned logic. The left sub-array will start from the beginning of the array up to the index of the middle node. The right sub-arry will start from the index after the middle node, up to the end of the array. The middle element of every sub-array will always be the root node of every subtree."),(0,l.yg)("p",null,"For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"Input: [1, 2, 3, 4, 5, 6, 7, 8, 9];\nOutput:             [5] ---\x3e root: [5], left: [1, 2, 3, 4], right: [6, 7, 8, 9];\n                  /     \\\n               [3]       [7] ---\x3e root: [3], left: [1, 2], right: [4];\n              /   \\     /   \\     root: [7], left: [6], right: [8, 9];\n            [1]   [4] [6]   [8] ---\x3e root: [1], left: null, right[2];\n              \\               \\      root: [8], left: null, right[9];\n              [2]             [9]\n")),(0,l.yg)("p",null,"The time and space complexity of this solution are both ",(0,l.yg)("strong",{parentName:"p"},"O(n)"),", where 'n' is equal to the number of nodes."),(0,l.yg)("h3",{id:"code"},"Code"),(0,l.yg)(u.A,{defaultValue:"js",values:[{label:"Javascript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"js",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n **/\n\nconst sortedArrayToBST = (nums) => {\n  let helper = (left, right) => {\n    if (left > right) return null;\n\n    let index = Math.floor((left + right) / 2);\n    let root = new TreeNode(nums[index]);\n    root.left = helper(left, index - 1);\n    root.right = helpter(index + 1, right);\n\n    return root;\n  };\n\n  return helper(0, nums.length - 1);\n};\n"))),(0,l.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\npublic TreeNode sortedArrayToBST(int[] nums) {\n  int len = nums.length;\n  if (len == 0) return null;\n  if (len == 1) {\n      TreeNode root = new TreeNode(nums[0]);\n      return root;\n  }\n  int medianIdx = len % 2 == 0 ? len / 2 - 1 : len / 2;\n  TreeNode root = new TreeNode(nums[medianIdx]);\n  root.left = sortedArrayToBST(Arrays.copyOfRange(nums, 0, medianIdx));\n  root.right = sortedArrayToBST(Arrays.copyOfRange(nums, medianIdx + 1, len));\n  return root;\n}\n")))),(0,l.yg)("p",null,"Source: ",(0,l.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"},"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/")))}v.isMDXComponent=!0}}]);