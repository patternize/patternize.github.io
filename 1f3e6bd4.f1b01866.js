(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(156)),l=n(169),i=n(170),c={id:"LC103",title:"LC103. Binary Tree Zigzag Level Order Traversal",sidebar_label:"LC103. Binary Tree Zigzag Level Order Traversal",tags:["Patterns/Tree","DataStructures/Tree"]},u={id:"QuestionBank/Leetcode/LC103",isDocsHomePage:!1,title:"LC103. Binary Tree Zigzag Level Order Traversal",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/103. Binary Tree Zigzag Level Order Traversal.md",permalink:"/docs/QuestionBank/Leetcode/LC103",sidebar_label:"LC103. Binary Tree Zigzag Level Order Traversal",sidebar:"Data Structure",next:{title:"VList",permalink:"/docs/DataStructures/Advanced/VList"}},s=[{value:"Problem Description",id:"problem-description",children:[]},{value:"Solution",id:"solution",children:[]}],d={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"problem-description"},"Problem Description"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"}),"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/")),Object(o.b)("p",null,"Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between)."),Object(o.b)("p",null,"For example:\nGiven binary tree ","[3,9,20,null,null,15,7]",",\n3\n/ \\\n9  20\n/  \\\n15   7\nreturn its zigzag level order traversal as:\n[\n","[3]",",\n","[20,9]",",\n","[15,7]","\n]"),Object(o.b)("h2",{id:"solution"},"Solution"),Object(o.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"\nclass Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n            List<List<Integer>> toRet = new ArrayList<>();\n            if (root == null) return toRet;\n            Queue<TreeNode> queue = new LinkedList<>();\n            queue.add(root);\n            int count;\n            boolean leftToRight = true;\n            while(!queue.isEmpty()){\n                count = queue.size();\n                ArrayList<Integer> level = new ArrayList<>();\n                for (int i = 0; i < count; i ++){\n                    TreeNode node = queue.poll();\n                    if(leftToRight) {\n                        level.add(node.val);\n                    } else {\n                        level.add(0, node.val);\n                    }\n                    if(node.left != null){\n                        queue.add(node.left);\n                    }\n                    if(node.right != null){\n                        queue.add(node.right);\n                    }\n                }\n                leftToRight = !leftToRight;\n                toRet.add(level);\n            }\n            return toRet;\n        }\n}\n"))),Object(o.b)(i.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'class Solution(object):\n    def zigzagLevelOrder(self, root):\n        """\n        :type root: TreeNode\n        :rtype: List[List[int]]\n        """\n        if not root: \n            return []\n\n        leftToRight = True \n\n        dq = collections.deque() \n        dq.append(root)\n        traversal = [] \n        while len(dq) > 0:\n            level = []\n            for i in range(len(dq)):\n                if leftToRight:\n                    cur = dq.popleft()\n                    level.append(cur.val)\n                    if cur.left:\n                        dq.append(cur.left)\n                    if cur.right:\n                        dq.append(cur.right)\n                else:\n                    cur = dq.pop()\n                    level.append(cur.val)\n\n                    if cur.right:\n                        dq.appendleft(cur.right)\n                    if cur.left:\n                        dq.appendleft(cur.left)\n\n            traversal.append(level)\n            leftToRight = not leftToRight\n        return traversal\n')))))}p.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},161:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},162:function(e,t,n){"use strict";var r=n(0),a=n(161);t.a=function(){return Object(r.useContext)(a.a)}},169:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(162),l=n(158),i=n(97),c=n.n(i);const u=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:d,groupId:p}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(o.a)(),[v,g]=Object(r.useState)(i);if(null!=p){const e=f[p];null!=e&&e!==v&&d.some(t=>t.value===e)&&g(e)}const m=e=>{g(e),null!=p&&b(p,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>m(e),onClick:()=>m(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===v)[0]))}},170:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);