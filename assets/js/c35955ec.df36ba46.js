"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[2353],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540),a=n(53);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(8168),a=n(6540),l=n(53),o=n(3104),i=n(6347),u=n(7485),s=n(1682),c=n(9466);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=null!=u?u:d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var h=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;n=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var a;const t=c.indexOf(e.currentTarget)-1;n=null!=(a=c[t])?a:c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},a.createElement(v,(0,r.A)({},e,t)),a.createElement(y,(0,r.A)({},e,t)))}function T(e){const t=(0,h.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},3881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var r=n(8168),a=n(8587),l=(n(6540),n(5680)),o=n(1470),i=n(9365);const u=["components"],s={id:"LC310",title:"Minimum Height Trees",sidebar_label:"Minimum Height Trees",tags:["Patterns/Graph"]},c=void 0,d={unversionedId:"QuestionBank/Leetcode/LC310",id:"QuestionBank/Leetcode/LC310",title:"Minimum Height Trees",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/310. Minimum Height Trees.md",sourceDirName:"QuestionBank/Leetcode",slug:"/QuestionBank/Leetcode/LC310",permalink:"/docs/QuestionBank/Leetcode/LC310",draft:!1,tags:[{label:"Patterns/Graph",permalink:"/docs/tags/patterns-graph"}],version:"current",sidebarPosition:310,frontMatter:{id:"LC310",title:"Minimum Height Trees",sidebar_label:"Minimum Height Trees",tags:["Patterns/Graph"]},sidebar:"Patterns",previous:{title:"Introduction",permalink:"/docs/Patterns/BitManipulation/Introduction"}},p={},m=[{value:"Problem Description",id:"problem-description",level:2},{value:"Solution",id:"solution",level:2}],f={toc:m},g="wrapper";function h(e){let{components:t}=e,n=(0,a.A)(e,u);return(0,l.yg)(g,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"problem-description"},"Problem Description"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-height-trees/"},"https://leetcode.com/problems/minimum-height-trees/")),(0,l.yg)("p",null,"For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels."),(0,l.yg)("p",null,"Format\nThe graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels)."),(0,l.yg)("p",null,"You can assume that no duplicate edges will appear in edges. Since all edges are undirected, ","[0, 1]"," is the same as ","[1, 0]"," and thus will not appear together in edges."),(0,l.yg)("p",null,"Example 1 :"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]\n\n        0\n        |\n        1\n       / \\\n      2   3\n\nOutput: [1]\n")),(0,l.yg)("p",null,"Example 2 :"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]\n\n     0  1  2\n      \\ | /\n        3\n        |\n        4\n        |\n        5\n\nOutput: [3, 4]\n")),(0,l.yg)("h2",{id:"solution"},"Solution"),(0,l.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\nclass Solution {\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\n        List<List<Integer>> toRet = new ArrayList<>();\n        if (root == null) return toRet;\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.add(root);\n        int count;\n        boolean leftToRight = true;\n        while(!queue.isEmpty()){\n            count = queue.size();\n            ArrayList<Integer> level = new ArrayList<>();\n            for (int i = 0; i < count; i ++){\n                TreeNode node = queue.poll();\n                if(leftToRight) {\n                    level.add(node.val);\n                } else {\n                    level.add(0, node.val);\n                }\n                if(node.left != null){\n                    queue.add(node.left);\n                }\n                if(node.right != null){\n                    queue.add(node.right);\n                }\n            }\n            leftToRight = !leftToRight;\n            toRet.add(level);\n        }\n        return toRet;\n    }\n}\n"))),(0,l.yg)(i.A,{value:"py",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-py"},'class Solution(object):\n    def findMinHeightTrees(self, n, edges):\n        """\n        :type n: int\n        :type edges: List[List[int]]\n        :rtype: List[int]\n        """\n\n        graph = collections.defaultdict(set)\n        for u,v in edges:\n            graph[u].add(v)\n            graph[v].add(u)\n\n        leaves = { i for i in range(n) if len(graph[i]) <= 1 }\n        newLeaves = set()\n\n        rn = n\n\n        while rn > 2:\n            for l in leaves:\n                rn -= 1\n                for parent in graph[l]:\n                    graph[parent].remove(l)\n                    if len(graph[parent]) == 1:\n                        newLeaves.add(parent)\n            leaves = newLeaves\n            newLeaves = set()\n\n        return list(leaves)\n')))))}h.isMDXComponent=!0}}]);