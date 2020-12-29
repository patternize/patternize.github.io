(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(149)),i=n(151),l=n(152),s={id:"LC199",title:"LC199. Binary Tree Right Side View",sidebar_label:"LC199. Binary Tree Right Side View",tags:["Patterns/Tree","DataStructures/Tree"]},c={unversionedId:"QuestionBank/Leetcode/LC199",id:"QuestionBank/Leetcode/LC199",isDocsHomePage:!1,title:"LC199. Binary Tree Right Side View",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/199. Binary Tree Right Side View.md",slug:"/QuestionBank/Leetcode/LC199",permalink:"/docs/QuestionBank/Leetcode/LC199",version:"current",sidebar_label:"LC199. Binary Tree Right Side View",sidebar:"Data Structure",previous:{title:"LC108. Convert Sorted Array to Binary Search Tree",permalink:"/docs/QuestionBank/Leetcode/LC108"},next:{title:"LC236. Lowest Common Ancestor of a Binary Tree",permalink:"/docs/QuestionBank/Leetcode/LC236"}},u=[{value:"Problem Description",id:"problem-description",children:[]},{value:"BFS Solution",id:"bfs-solution",children:[{value:"High level strategy",id:"high-level-strategy",children:[]},{value:"Code",id:"code",children:[]}]},{value:"DFS Solutions",id:"dfs-solutions",children:[{value:"High level strategy",id:"high-level-strategy-1",children:[]},{value:"Code",id:"code-1",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"problem-description"},"Problem Description"),Object(o.b)("p",null,"Source: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/binary-tree-right-side-view/"}),"https://leetcode.com/problems/binary-tree-right-side-view/")),Object(o.b)("p",null,"Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom."),Object(o.b)("p",null,"For example:\nGiven binary tree ","[1, 2, 3, null, 6, null, 4, null, null, 5]",","),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"    1   <----- 1\n   / \\\n  2   3     <----- 3\n   \\   \\\n    6   4     <----- 4\n   /\n  5     <----- 5\n")),Object(o.b)("p",null,"return ","[1, 3, 4, 5]","."),Object(o.b)("h2",{id:"bfs-solution"},"BFS Solution"),Object(o.b)("h3",{id:"high-level-strategy"},"High level strategy"),Object(o.b)("p",null,"Our strategy to solve this problem is to conduct a breadth-first search. On each level, we traverse from the left to right, but only keeping the value of the right-most node. To implement this solution, we will make use of the index property of arrays. The index of every element in the resulting array is the level of the corresponding right-most node on the tree. To see this, one can simply flip the tree on its side. The time complexity of this solution is ",Object(o.b)("strong",{parentName:"p"},"O(n)"),", where 'n' is equal to the number of nodes. The space complexity of this solution is ",Object(o.b)("strong",{parentName:"p"},"O(logn)"),", or ",Object(o.b)("strong",{parentName:"p"},"O(h)"),", where 'h' is equal to the height of the tree."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"result: [1, 3, 4, 5];\n\n    1   <----- the right-most element is 1, which is equal to result[0];\n   / \\\n  2   3     <----- the right-most element is 3, which is equal to result[1];\n   \\   \\\n    6   4     <----- the right-most element is 4, which is equal to result[2];\n   /\n  5     <----- the right-most element is 5, which is equal to result[3];\n")),Object(o.b)("h3",{id:"code"},"Code"),Object(o.b)(i.a,{defaultValue:"js",values:[{label:"Javascript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n **/\n\nconst rightSideView = (root) => {\n    let result = [];\n\n    let recurse = (node, level) => {\n        if (node === null) return;\n        result[level] = node.val; // as we traverse from the left to right, the element on that level in the result array will be replaced with the right most node in the tree. \n        recurse(node.left, level + 1);\n        recurse(node.right, level + 1);\n    };\n\n    recurse(root, 0);\n    return result;\n};\n"))),Object(o.b)(l.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Trick: Just store the lest element on each level\ndef rightSideView(self, root: TreeNode) -> List[int]:\n    if not root: \n        return [] \n\n    trav, q = [], collections.deque([root])\n\n    while q:\n        cur = None \n        for i in range(len(q)): \n            cur = q.popleft() \n            if cur.left: \n                q.append(cur.left)\n            if cur.right: \n                q.append(cur.right)            \n        trav.append(cur.val)\n\n    return trav\n")))),Object(o.b)("h2",{id:"dfs-solutions"},"DFS Solutions"),Object(o.b)("h3",{id:"high-level-strategy-1"},"High level strategy"),Object(o.b)("p",null,"We can modify the code and covert it into a DFS solution, the same concept applies."),Object(o.b)("h3",{id:"code-1"},"Code"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"},{label:"C++",value:"cp"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        List<Integer> ans = new LinkedList<>();\n        dfs(root, 1, ans);\n        return ans;\n    }\n    \n    private void dfs(TreeNode node, int level, List<Integer> ans){\n        if(node == null){\n            return;\n        }\n        if(level > ans.size()){ // push current node to it\n            ans.add(node.val);\n        }\n        dfs(node.right, level+1, ans);\n        dfs(node.left, level+1, ans);\n    }\n}\n"))),Object(o.b)(l.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Trick: Keep track of depth and update it via the traversal length. Make sure you stack left first then right to ensure properly visiting right first.\ndef rightSideView(self, root: TreeNode) -> List[int]:\n    if not root: \n        return [] \n\n    s, maxdepth = [(root, 1)], -1\n    trav = [] \n\n    while s: \n        cur, depth = s.pop() \n\n        if cur: \n            maxdepth = max(maxdepth, depth)\n\n        if len(trav) < depth: \n            trav.append(cur.val)\n\n        if cur.left:\n            s.append((cur.left, depth+1))\n        if cur.right:\n            s.append((cur.right, depth+1))\n    return trav\n"))),Object(o.b)(l.a,{value:"cp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"//C++\nclass Solution {\npublic:\n    vector<int> rightSideView(TreeNode* root) {\n        ans = {};\n        dfs(root, 1);\n        return ans;\n    }\n    void dfs(TreeNode* root, int h) {\n        if (root == nullptr) return;\n        if (ans.size() < h) {\n            ans.push_back(root->val);\n        }\n        dfs(root->right, h + 1);\n        dfs(root->left, h + 1);\n    }\nprivate:\n    vector<int> ans;\n};\n")))))}p.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},151:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(153),i=n(150),l=n(55),s=n.n(l);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:p,className:b}=e,{tabGroupChoices:h,setTabGroupChoices:f}=Object(o.a)(),[m,v]=Object(r.useState)(l),g=r.Children.toArray(e.children);if(null!=p){const e=h[p];null!=e&&e!==m&&d.some((t=>t.value===e))&&v(e)}const y=e=>{v(e),null!=p&&f(p,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(r.cloneElement)(g.filter((e=>e.props.value===m))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==m})))))}},152:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},153:function(e,t,n){"use strict";var r=n(0),a=n(154);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a}}]);