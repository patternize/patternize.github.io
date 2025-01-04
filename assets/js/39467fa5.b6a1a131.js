"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[7920],{9365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),a=n(53);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(8168),a=n(6540),l=n(53),o=n(3104),i=n(6347),u=n(7485),s=n(1682),c=n(9466);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=p({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=null!=u?u:d;return h({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var g=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},o,{className:(0,l.A)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=f(e);return a.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},a.createElement(v,(0,r.A)({},e,t)),a.createElement(b,(0,r.A)({},e,t)))}function w(e){const t=(0,g.A)();return a.createElement(T,(0,r.A)({key:String(t)},e))}},902:(e,t,n)=>{n.r(t),n.d(t,{AsymmetricTree:()=>g,BinaryTree:()=>f,assets:()=>p,contentTitle:()=>m,default:()=>T,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var r=n(8168),a=n(8587),l=n(6540),o=n(5680),i=n(2268),u=n(1470),s=n(9365);const c=["components"],d={id:"LC101",title:"Symmetric Tree",sidebar_label:"Symmetric Tree",tags:["Patterns/Tree","DataStructures/Tree"]},m=void 0,h={unversionedId:"QuestionBank/Leetcode/LC101",id:"QuestionBank/Leetcode/LC101",title:"Symmetric Tree",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/101. Symmetric Tree.md",sourceDirName:"QuestionBank/Leetcode",slug:"/QuestionBank/Leetcode/LC101",permalink:"/docs/QuestionBank/Leetcode/LC101",draft:!1,tags:[{label:"Patterns/Tree",permalink:"/docs/tags/patterns-tree"},{label:"DataStructures/Tree",permalink:"/docs/tags/data-structures-tree"}],version:"current",sidebarPosition:101,frontMatter:{id:"LC101",title:"Symmetric Tree",sidebar_label:"Symmetric Tree",tags:["Patterns/Tree","DataStructures/Tree"]},sidebar:"Data Structure",previous:{title:"Validate Binary Search Tree",permalink:"/docs/QuestionBank/Leetcode/LC98"},next:{title:"Binary Tree Zigzag Level Order Traversal",permalink:"/docs/QuestionBank/Leetcode/LC103"}},p={},f=()=>(0,o.yg)(l.Fragment,null,"undefined"!=typeof window&&(0,o.yg)(i.PH,{inputData:{name:"1",children:[{name:"2",children:[{name:"3"},{name:"4"}]},{name:"2",children:[{name:"4"},{name:"3"}]}]},maxHeight:250,mdxType:"Tree"})),g=()=>(0,o.yg)(l.Fragment,null,"undefined"!=typeof window&&(0,o.yg)(i.PH,{inputData:{name:"1",children:[{name:"2",children:[{name:"null"},{name:"3"}]},{name:"2",children:[{name:"null"},{name:"3"}]}]},maxHeight:250,mdxType:"Tree"})),y=[{value:"Problem Description",id:"problem-description",level:2},{value:"Solution",id:"solution",level:2},{value:"High level strategy",id:"high-level-strategy",level:3},{value:"Code",id:"code",level:3},{value:"Other Solutions",id:"other-solutions",level:2}],v={BinaryTree:f,AsymmetricTree:g,toc:y},b="wrapper";function T(e){let{components:t}=e,n=(0,a.A)(e,c);return(0,o.yg)(b,(0,r.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"problem-description"},"Problem Description"),(0,o.yg)("p",null,"Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).\nFor example, this binary tree ","[1, 2, 2, 3, 4, 4, 3]"," is symmetric:"),(0,o.yg)(f,{mdxType:"BinaryTree"}),"But the following [1, 2, 2, null, 3, null, 3] is not:",(0,o.yg)(g,{mdxType:"AsymmetricTree"}),(0,o.yg)("h2",{id:"solution"},"Solution"),(0,o.yg)("h3",{id:"high-level-strategy"},"High level strategy"),(0,o.yg)("p",null,"To check whether two nodes are identical, we can check the following conditions:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"If both nodes are null, then they ",(0,o.yg)("strong",{parentName:"li"},"are the same"),"."),(0,o.yg)("li",{parentName:"ol"},"If one of the nodes is null, then they ",(0,o.yg)("strong",{parentName:"li"},"are not the same"),"."),(0,o.yg)("li",{parentName:"ol"},"If the value of one node is not equal to the value of the other, then they ",(0,o.yg)("strong",{parentName:"li"},"are not the same"),".")),(0,o.yg)("p",null,"To check whether a tree is symmetrical, we can simply apply the logics above to the opposite nodes on each side of the tree. That is, we compare the right child of the left child with the left child of the right child, so on and so forth. We recurse down both sides of the root node, and return true if and only if both sides return true. The time complexity of this solution is ",(0,o.yg)("strong",{parentName:"p"},"O(n)"),", where 'n' is equal to the number of nodes. The space complexity of this solution is ",(0,o.yg)("strong",{parentName:"p"},"O(logn)"),", or ",(0,o.yg)("strong",{parentName:"p"},"O(h)"),", where 'h' is equal to the height of the tree."),(0,o.yg)("h3",{id:"code"},"Code"),(0,o.yg)(u.A,{defaultValue:"js",values:[{label:"Javascript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,o.yg)(s.A,{value:"js",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n **/\n\nconst isSymmetric = (root) => {\n  if (root === null) return true;\n  return isSame(root.left, root.right);\n};\n\nconst isSame = (node1, node2) => {\n  if (node1 === null && node2 === null) return true;\n  if (node1 === null || node2 === null) return false;\n  if (node1.val !== node2.val) return false;\n\n  return isSame(node1.left, node2.right) && isSame(node1.right, node2.left);\n};\n"))),(0,o.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public boolean isSymmetric(TreeNode root) {\n    return root==null || isSymmetricHelp(root.left, root.right);\n}\n\nprivate boolean isSymmetricHelp(TreeNode left, TreeNode right){\n    if(left==null || right==null)\n        return left==right;\n    if(left.val!=right.val)\n        return false;\n    return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left);\n}\n")))),(0,o.yg)("h2",{id:"other-solutions"},"Other Solutions"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"BFS Approach"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * We can also explore each level through BFS,\n * then iterate through all nodes in each level to see if they are a mirror\n * (same idea as checking if a string is a palindrome).\n */\n\nclass Solution {\n    public boolean isSymmetric(TreeNode root) {\n        if (root == null) return true;\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.add(root);\n        while(queue.size() > 0) {\n            int size = queue.size();\n            List<Integer> level = new ArrayList<>();\n            while(size > 0) {\n                TreeNode cur = queue.poll();\n                if (cur == null) {\n                    level.add(null);\n                } else {\n                    level.add(cur.val);\n                    queue.add(cur.left);\n                    queue.add(cur.right);\n                }\n                size--;\n            }\n            List<Integer> reverse = new ArrayList<>();\n            for(int i = level.size() - 1; i >= 0; i--) {\n                reverse.add(level.get(i));\n            }\n            if (!level.equals(reverse)) return false;\n        }\n        return true;\n    }\n}\n"))),(0,o.yg)("p",null,"Source: ",(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/symmetric-tree/"},"https://leetcode.com/problems/symmetric-tree/")))}T.isMDXComponent=!0}}]);