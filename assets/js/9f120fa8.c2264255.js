"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[452,4084,5368,5604,9782],{5680:(n,e,t)=>{t.d(e,{xA:()=>s,yg:()=>c});var i=t(6540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var m=i.createContext({}),u=function(n){var e=i.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=u(n.components);return i.createElement(m.Provider,{value:e},n.children)},g="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,m=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),g=u(t),p=a,c=g["".concat(m,".").concat(p)]||g[p]||d[p]||r;return t?i.createElement(c,o(o({ref:e},s),{},{components:t})):i.createElement(c,o({ref:e},s))}));function c(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=n,l[g]="string"==typeof n?n:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9365:(n,e,t)=>{t.d(e,{A:()=>o});var i=t(6540),a=t(53);const r={tabItem:"tabItem_Ymn6"};function o(n){let{children:e,hidden:t,className:o}=n;return i.createElement("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t},e)}},1470:(n,e,t)=>{t.d(e,{A:()=>A});var i=t(8168),a=t(6540),r=t(53),o=t(3104),l=t(6347),m=t(7485),u=t(1682),s=t(9466);function g(n){return function(n){var e,t;return null!=(e=null==(t=a.Children.map(n,(n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}(n).map((n=>{let{props:{value:e,label:t,attributes:i,default:a}}=n;return{value:e,label:t,attributes:i,default:a}}))}function d(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=null!=e?e:g(t);return function(n){const e=(0,u.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((n=>n.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function c(n){let{queryString:e=!1,groupId:t}=n;const i=(0,l.W6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,m.aZ)(r),(0,a.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace(Object.assign({},i.location,{search:e.toString()}))}),[r,i])]}function h(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=d(n),[o,l]=(0,a.useState)((()=>function(n){var e;let{defaultValue:t,tabValues:i}=n;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((n=>n.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(e=i.find((n=>n.default)))?e:i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[m,u]=c({queryString:t,groupId:i}),[g,h]=function(n){let{groupId:e}=n;const t=function(n){return n?"docusaurus.tab."+n:null}(e),[i,r]=(0,s.Dv)(t);return[i,(0,a.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),y=(()=>{const n=null!=m?m:g;return p({value:n,tabValues:r})?n:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error("Can't select invalid tab value="+n);l(n),u(n),h(n)}),[u,h,r]),tabValues:r}}var y=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(n){let{className:e,block:t,selectedValue:l,selectValue:m,tabValues:u}=n;const s=[],{blockElementScrollPositionUntilNextRender:g}=(0,o.a_)(),d=n=>{const e=n.currentTarget,t=s.indexOf(e),i=u[t].value;i!==l&&(g(e),m(i))},p=n=>{var e;let t=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{var i;const e=s.indexOf(n.currentTarget)+1;t=null!=(i=s[e])?i:s[0];break}case"ArrowLeft":{var a;const e=s.indexOf(n.currentTarget)-1;t=null!=(a=s[e])?a:s[s.length-1];break}}null==(e=t)||e.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e)},u.map((n=>{let{value:e,label:t,attributes:o}=n;return a.createElement("li",(0,i.A)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:n=>s.push(n),onKeyDown:p,onClick:d},o,{className:(0,r.A)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===e})}),null!=t?t:e)})))}function P(n){let{lazy:e,children:t,selectedValue:i}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==i}))))}function v(n){const e=h(n);return a.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},a.createElement(b,(0,i.A)({},n,e)),a.createElement(P,(0,i.A)({},n,e)))}function A(n){const e=(0,y.A)();return a.createElement(v,(0,i.A)({key:String(e)},n))}},9783:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>p});var i=t(8168),a=t(8587),r=(t(6540),t(5680)),o=t(1470),l=t(9365);const m=["components"],u={title:"Leetcode 62. Unique Paths",tags:["DynamicProgramming/Coordinate"]},s=void 0,g={unversionedId:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths",id:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths",title:"Leetcode 62. Unique Paths",description:"Original Question: Leetcode 62. Unique Paths",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/62-unique-paths.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding",slug:"/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths",draft:!1,tags:[{label:"DynamicProgramming/Coordinate",permalink:"/docs/tags/dynamic-programming-coordinate"}],version:"current",sidebarPosition:62,frontMatter:{title:"Leetcode 62. Unique Paths",tags:["DynamicProgramming/Coordinate"]},sidebar:"Algorithms",previous:{title:"Optimal Path Finding",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/"},next:{title:"Leetcode 63. Unique Paths II",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths-ii"}},d={},p=[{value:"Example 1:",id:"example-1",level:3},{value:"Example 2:",id:"example-2",level:3}],c={toc:p},h="wrapper";function y(n){let{components:e}=n,u=(0,a.A)(n,m);return(0,r.yg)(h,(0,i.A)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(3300).A,width:"714",height:"527"})),(0,r.yg)("h1",{id:"question-description"},"Question Description"),(0,r.yg)("p",null,"Original Question: ",(0,r.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-paths/"},"Leetcode 62. Unique Paths")),(0,r.yg)("p",null,"A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)."),(0,r.yg)("p",null,"The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)."),(0,r.yg)("p",null,"How many possible unique paths are there?"),(0,r.yg)("h3",{id:"example-1"},"Example 1:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Input: m = 3, n = 2\nOutput: 3\nExplanation:\nFrom the top-left corner, there are a total of 3 ways to reach the bottom-right corner:\n1. Right -> Right -> Down\n2. Right -> Down -> Right\n3. Down -> Right -> Right\n")),(0,r.yg)("h3",{id:"example-2"},"Example 2:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Input: m = 7, n = 3\nOutput: 28\n")),(0,r.yg)("h1",{id:"solution"},"Solution"),(0,r.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int uniquePaths(int m, int n) {\n        if(m == 0|| n==0) return 0;\n        int[][] dp = new int[m][n];\n        for(int i = 0; i < m; i++){\n            dp[i][n-1] = 1;\n        }\n        for(int i = 0; i < n; i++){\n            dp[m-1][i] = 1;\n        }\n        for(int j = m-2; j>=0; j--){\n            for(int i = n-2; i>=0;i--){\n                dp[j][i] = dp[j+1][i] + dp[j][i+1];\n            }\n        }\n        return dp[0][0];\n    }\n}\n"))),(0,r.yg)(l.A,{value:"py",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        if not m or not n:\n            return 0\n\n        paths = [[1]*(n+1)]*(m +1)\n\n        for i in range(2,m+1):\n            for j in range(2, n+1):\n                paths[i][j] = paths[i-1][j] + paths[i][j-1]\n\n        return paths[m][n]\n")))))}y.isMDXComponent=!0},5521:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>p});var i=t(8168),a=t(8587),r=(t(6540),t(5680)),o=t(1470),l=t(9365);const m=["components"],u={title:"Leetcode 63. Unique Paths II",tags:["DynamicProgramming/Coordinate"]},s=void 0,g={unversionedId:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths-ii",id:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths-ii",title:"Leetcode 63. Unique Paths II",description:"Original Question: Leetcode 63. Unique Paths II",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/63-unique-paths-ii.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding",slug:"/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths-ii",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths-ii",draft:!1,tags:[{label:"DynamicProgramming/Coordinate",permalink:"/docs/tags/dynamic-programming-coordinate"}],version:"current",sidebarPosition:63,frontMatter:{title:"Leetcode 63. Unique Paths II",tags:["DynamicProgramming/Coordinate"]},sidebar:"Algorithms",previous:{title:"Leetcode 62. Unique Paths",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths"},next:{title:"Leetcode 64. Minimum Path Sum",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-path-sum"}},d={},p=[{value:"Example:",id:"example",level:3}],c={toc:p},h="wrapper";function y(n){let{components:e}=n,u=(0,a.A)(n,m);return(0,r.yg)(h,(0,i.A)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(9646).A,width:"714",height:"527"})),(0,r.yg)("h1",{id:"question-description"},"Question Description"),(0,r.yg)("p",null,"Original Question: ",(0,r.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-paths-ii/"},"Leetcode 63. Unique Paths II")),(0,r.yg)("p",null,"A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)."),(0,r.yg)("p",null,"The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)."),(0,r.yg)("p",null,"Now consider if some obstacles are added to the grids. How many unique paths would there be?"),(0,r.yg)("h3",{id:"example"},"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"Input:\n[\n  [0,0,0],\n  [0,1,0],\n  [0,0,0]\n]\nOutput: 2\nExplanation:\nThere is one obstacle in the middle of the 3x3 grid above.\nThere are two ways to reach the bottom-right corner:\n1. Right -> Right -> Down -> Down\n2. Down -> Down -> Right -> Right\n")),(0,r.yg)("h1",{id:"solution"},"Solution"),(0,r.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int uniquePaths(int m, int n) {\n        if(m == 0|| n==0) return 0;\n        int[][] dp = new int[m][n];\n        for(int i = 0; i < m; i++){\n            dp[i][n-1] = 1;\n        }\n        for(int i = 0; i < n; i++){\n            dp[m-1][i] = 1;\n        }\n        for(int j = m-2; j>=0; j--){\n            for(int i = n-2; i>=0;i--){\n                dp[j][i] = dp[j+1][i] + dp[j][i+1];\n            }\n        }\n        return dp[0][0];\n    }\n}\n"))),(0,r.yg)(l.A,{value:"py",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        if not m or not n:\n            return 0\n\n        paths = [[1]*(n+1)]*(m +1)\n\n        for i in range(2,m+1):\n            for j in range(2, n+1):\n                paths[i][j] = paths[i-1][j] + paths[i][j-1]\n\n        return paths[m][n]\n")))))}y.isMDXComponent=!0},3297:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>p});var i=t(8168),a=t(8587),r=(t(6540),t(5680)),o=t(1470),l=t(9365);const m=["components"],u={title:"Leetcode 64. Minimum Path Sum",tags:["DynamicProgramming/Coordinate"]},s=void 0,g={unversionedId:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-path-sum",id:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-path-sum",title:"Leetcode 64. Minimum Path Sum",description:"Original Question: Leetcode 64. Minimum Path Sum",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/64-minimum-path-sum.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding",slug:"/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-path-sum",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-path-sum",draft:!1,tags:[{label:"DynamicProgramming/Coordinate",permalink:"/docs/tags/dynamic-programming-coordinate"}],version:"current",sidebarPosition:64,frontMatter:{title:"Leetcode 64. Minimum Path Sum",tags:["DynamicProgramming/Coordinate"]},sidebar:"Algorithms",previous:{title:"Leetcode 63. Unique Paths II",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths-ii"},next:{title:"Leetcode 931. Minimum Falling Path Sum",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-falling-path-sum"}},d={},p=[{value:"Example:",id:"example",level:3}],c={toc:p},h="wrapper";function y(n){let{components:e}=n,u=(0,a.A)(n,m);return(0,r.yg)(h,(0,i.A)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(8841).A,width:"714",height:"527"})),(0,r.yg)("h1",{id:"question-description"},"Question Description"),(0,r.yg)("p",null,"Original Question: ",(0,r.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-path-sum/"},"Leetcode 64. Minimum Path Sum")),(0,r.yg)("p",null,"Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path."),(0,r.yg)("p",null,"Note: You can only move either down or right at any point in time."),(0,r.yg)("h3",{id:"example"},"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"Input:\n[\n  [1,3,1],\n  [1,5,1],\n  [4,2,1]\n]\nOutput: 7\nExplanation: Because the path 1\u21923\u21921\u21921\u21921 minimizes the sum.\n")),(0,r.yg)("h1",{id:"solution"},"Solution"),(0,r.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int minPathSum(int[][] grid) {\n        if(grid.length == 0 || grid[0].length == 0) return 0;\n        int[][] dp = new int [grid.length][grid[0].length];\n        for(int i = 0; i<grid.length; i++){\n            for(int j = 0; j < grid[0].length; j++){\n                if(i==0 && j==0) dp[i][j] = grid[0][0];\n                else if(i==0) {\n                    dp[i][j] = grid[i][j] + dp[i][j-1];\n                } else if (j == 0){\n                    dp[i][j] = grid[i][j] + dp[i-1][j];\n                } else {\n                    dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);\n                }\n            }\n        }\n        return dp[grid.length-1][grid[0].length-1];\n    }\n}\n"))),(0,r.yg)(l.A,{value:"py",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minPathSum(self, grid: List[List[int]]) -> int:\n        if not grid or not grid[0]:\n            return 0\n\n        m,n = len(grid), len(grid[0])\n\n\n        minSum = [[0 for j in range(n)] for i in range(m) ] \n        minSum[0][0] = grid[0][0]\n\n        for i in range(1,m):\n            minSum[i][0] = minSum[i-1][0] + grid[i][0]\n\n        for j in range(1,n):\n            minSum[0][j] = minSum[0][j-1] + grid[0][j]\n\n        for i in range(1,m):\n            for j in range(1,n):\n                minSum[i][j] = min(minSum[i-1][j], minSum[i][j-1]) + grid[i][j]\n\n        return minSum[m-1][n-1]\n")))))}y.isMDXComponent=!0},7830:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>p});var i=t(8168),a=t(8587),r=(t(6540),t(5680)),o=t(1470),l=t(9365);const m=["components"],u={title:"Leetcode 931. Minimum Falling Path Sum",tags:["DynamicProgramming/Coordinate"]},s=void 0,g={unversionedId:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-falling-path-sum",id:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-falling-path-sum",title:"Leetcode 931. Minimum Falling Path Sum",description:"Original Question: 931. Minimum Falling Path Sum",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/931-minimum-falling-path-sum.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding",slug:"/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-falling-path-sum",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-falling-path-sum",draft:!1,tags:[{label:"DynamicProgramming/Coordinate",permalink:"/docs/tags/dynamic-programming-coordinate"}],version:"current",sidebarPosition:931,frontMatter:{title:"Leetcode 931. Minimum Falling Path Sum",tags:["DynamicProgramming/Coordinate"]},sidebar:"Algorithms",previous:{title:"Leetcode 64. Minimum Path Sum",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/minimum-path-sum"},next:{title:"Introduction",permalink:"/docs/Algorithms/SlidingWindow/Introduction"}},d={},p=[{value:"Example:",id:"example",level:3}],c={toc:p},h="wrapper";function y(n){let{components:e}=n,u=(0,a.A)(n,m);return(0,r.yg)(h,(0,i.A)({},c,u,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(2098).A,width:"714",height:"579"})),(0,r.yg)("h1",{id:"question-description"},"Question Description"),(0,r.yg)("p",null,"Original Question: ",(0,r.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-falling-path-sum/"},"931. Minimum Falling Path Sum")),(0,r.yg)("p",null,"Given a square array of integers A, we want the minimum sum of a falling path through A."),(0,r.yg)("p",null,"A falling path starts at any element in the first row, and chooses one element from each row.  The next row's choice must be in a column that is different from the previous row's column by at most one."),(0,r.yg)("h3",{id:"example"},"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-aidl"},"Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 12\nExplanation: \nThe possible falling paths are:\n- [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]\n- [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]\n- [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]\n\nThe falling path with the smallest sum is [1,4,7], so the answer is 12.\n\n")),(0,r.yg)("h1",{id:"solution"},"Solution"),(0,r.yg)(o.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int minFallingPathSum(int[][] A) {\n        int m = A.length, n = A[0].length;\n        int[][] dp = new int[m][n];\n        for(int i = 0; i < n; i++){\n            dp[0][i] = A[0][i];\n        }\n        for(int i = 1; i < m; i++){\n            for(int j = 0; j < n; j++){\n                int topLeft = j-1 < 0 ? Integer.MAX_VALUE : dp[i-1][j-1];\n                int topMid = dp[i-1][j];\n                int topRight = j+1 >= n ? Integer.MAX_VALUE : dp[i-1][j+1];\n                dp[i][j] = A[i][j] + Math.min(topLeft, Math.min(topMid, topRight));\n            }\n        }\n        int smallestPath = Integer.MAX_VALUE;\n        for(int i = 0; i < n; i++){\n            smallestPath = Math.min(smallestPath, dp[m-1][i]);\n        }\n        return smallestPath;\n    }\n}\n"))),(0,r.yg)(l.A,{value:"py",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minFallingPathSum(self, A: List[List[int]]) -> int:\n        for i in range(1,len(A)):\n            for j in range(len(A[0])):\n                if j == 0:\n                    A[i][j]  = min((A[i][j] + A[i - 1][j]), (A[i][j] + A[i - 1][j + 1]) )\n                elif (j == len(A[0]) - 1):\n                    A[i][j]  = min((A[i][j] + A[i - 1][j]), (A[i][j] + A[i - 1][j - 1]) )\n                else:\n                    A[i][j] = min(A[i][j] + A[i - 1][j],A[i][j] + A[i - 1][j + 1], A[i][j] + A[i - 1][j - 1])\n            \n        return min(A[len(A) - 1])\n")))))}y.isMDXComponent=!0},7374:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>y,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>h,toc:()=>f});var i=t(8168),a=t(8587),r=(t(6540),t(5680)),o=t(1470),l=t(9365),m=t(9783),u=t(5521),s=t(3297),g=t(7830);const d=["components"],p={id:"index",title:"Optimal Path Finding Questions",sidebar_label:"Optimal Path Finding"},c=void 0,h={unversionedId:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/index",id:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/index",title:"Optimal Path Finding Questions",description:"<Tabs",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/index.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding",slug:"/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Optimal Path Finding Questions",sidebar_label:"Optimal Path Finding"},sidebar:"Algorithms",previous:{title:"Leetcode 1277. Count Square Submatrices with All Ones",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/Matrix/count-square-submatrices-with-all-ones"},next:{title:"Leetcode 62. Unique Paths",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/OptimalPathFinding/unique-paths"}},y={},f=[],b={toc:f},P="wrapper";function v(n){let{components:e}=n,t=(0,a.A)(n,d);return(0,r.yg)(P,(0,i.A)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{defaultValue:"Unique Path",values:[{label:"Unique Path",value:"Unique Path"},{label:"Unique Path II",value:"Unique Path II"},{label:"Minimum Path Sum",value:"MinimumPathSum"},{label:"Minimum Falling Path Sum",value:"MinimumFallingPathSum"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Unique Path",mdxType:"TabItem"},(0,r.yg)(m.default,{mdxType:"UniquePaths"})),(0,r.yg)(l.A,{value:"Unique Path II",mdxType:"TabItem"},(0,r.yg)(u.default,{mdxType:"UniquePathsII"})),(0,r.yg)(l.A,{value:"MinimumPathSum",mdxType:"TabItem"},(0,r.yg)(s.default,{mdxType:"MinimumPathSum"})),(0,r.yg)(l.A,{value:"MinimumFallingPathSum",mdxType:"TabItem"},(0,r.yg)(g.default,{mdxType:"MinimumFallingPathSum"}))))}v.isMDXComponent=!0},2098:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/MinimumFallingPathSum-a4ffea2f95fc4bf4f745c33c53b2cb67.jpg"},8841:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/MinimumPathSum-442c8c2cba704b5eb8e8baf1a7ec4672.jpg"},3300:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/UnqiuePaths-e851675d74abe535a9b38e878b0ef1bc.jpg"},9646:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/UnqiuePathsII-1a74a9add9be3282543fdcf71d291ca8.jpg"}}]);