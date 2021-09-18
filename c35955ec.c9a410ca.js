(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(147),a=t(149),o=(t(0),t(148)),i=t(151),l=t(152),c={id:"LC310",title:"LC310. Minimum Height Trees",sidebar_label:"LC310. Minimum Height Trees",tags:["Patterns/Graph"]},s={unversionedId:"QuestionBank/Leetcode/LC310",id:"QuestionBank/Leetcode/LC310",isDocsHomePage:!1,title:"LC310. Minimum Height Trees",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/310. Minimum Height Trees.md",slug:"/QuestionBank/Leetcode/LC310",permalink:"/docs/QuestionBank/Leetcode/LC310",version:"current",sidebar_label:"LC310. Minimum Height Trees",sidebar:"Patterns",previous:{title:"Bit Manipulation",permalink:"/docs/Patterns/BitManipulation/Introduction"}},u=[{value:"Problem Description",id:"problem-description",children:[]},{value:"Solution",id:"solution",children:[]}],p={toc:u};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"problem-description"},"Problem Description"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/minimum-height-trees/"}),"https://leetcode.com/problems/minimum-height-trees/")),Object(o.b)("p",null,"For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels."),Object(o.b)("p",null,"Format\nThe graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels)."),Object(o.b)("p",null,"You can assume that no duplicate edges will appear in edges. Since all edges are undirected, ","[0, 1]"," is the same as ","[1, 0]"," and thus will not appear together in edges."),Object(o.b)("p",null,"Example 1 :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]\n\n        0\n        |\n        1\n       / \\\n      2   3 \n\nOutput: [1]\n")),Object(o.b)("p",null,"Example 2 :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]\n\n     0  1  2\n      \\ | /\n        3\n        |\n        4\n        |\n        5 \n\nOutput: [3, 4]\n")),Object(o.b)("h2",{id:"solution"},"Solution"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"\nclass Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n        List<List<Integer>> toRet = new ArrayList<>();\n        if (root == null) return toRet;\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.add(root);\n        int count;\n        boolean leftToRight = true;\n        while(!queue.isEmpty()){\n            count = queue.size();\n            ArrayList<Integer> level = new ArrayList<>();\n            for (int i = 0; i < count; i ++){\n                TreeNode node = queue.poll();\n                if(leftToRight) {\n                    level.add(node.val);\n                } else {\n                    level.add(0, node.val);\n                }\n                if(node.left != null){\n                    queue.add(node.left);\n                }\n                if(node.right != null){\n                    queue.add(node.right);\n                }\n            }\n            leftToRight = !leftToRight;\n            toRet.add(level);\n        }\n        return toRet;\n    }\n}\n"))),Object(o.b)(l.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'class Solution(object):\n    def findMinHeightTrees(self, n, edges):\n        """\n        :type n: int\n        :type edges: List[List[int]]\n        :rtype: List[int]\n        """\n\n        graph = collections.defaultdict(set)\n        for u,v in edges: \n            graph[u].add(v)\n            graph[v].add(u)\n\n        leaves = { i for i in range(n) if len(graph[i]) <= 1 } \n        newLeaves = set() \n\n        rn = n \n\n        while rn > 2: \n            for l in leaves: \n                rn -= 1\n                for parent in graph[l]: \n                    graph[parent].remove(l) \n                    if len(graph[parent]) == 1: \n                        newLeaves.add(parent)\n            leaves = newLeaves\n            newLeaves = set()\n\n        return list(leaves)\n')))))}d.isMDXComponent=!0},147:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(f,l(l({ref:n},s),{},{components:t})):a.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},149:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},150:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},151:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(153),i=t(150),l=t(53),c=t.n(l);const s=37,u=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:p,groupId:d,className:b}=e,{tabGroupChoices:f,setTabGroupChoices:m}=Object(o.a)(),[h,g]=Object(r.useState)(l),v=r.Children.toArray(e.children);if(null!=d){const e=f[d];null!=e&&e!==h&&p.some((n=>n.value===e))&&g(e)}const O=e=>{g(e),null!=d&&m(d,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},p.map((({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},n)))),n?Object(r.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,n)=>Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==h})))))}},152:function(e,n,t){"use strict";var r=t(147),a=t(0),o=t.n(a);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:t}),e)}},153:function(e,n,t){"use strict";var r=t(0),a=t(154);n.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,n,t){"use strict";var r=t(0);const a=Object(r.createContext)(void 0);n.a=a}}]);