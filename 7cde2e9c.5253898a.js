(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{127:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),m=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=m(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=m(t),d=r,b=s["".concat(o,".").concat(d)]||s[d]||p[d]||a;return t?i.a.createElement(b,c(c({ref:n},l),{},{components:t})):i.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},128:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},129:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(132),o=t(128),c=t(48),u=t.n(c);const l=37,m=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:s,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:b}=Object(a.a)(),[f,g]=Object(r.useState)(c),[j,h]=Object(r.useState)(!1);if(null!=p){const e=d[p];null!=e&&e!==f&&s.some(n=>n.value===e)&&g(e)}const O=e=>{g(e),null!=p&&b(p,e)},y=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},P=()=>{h(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",P)},[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},s.map(({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":f===e}),style:j?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case m:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case l:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),v(e)},onFocus:()=>O(e),onClick:()=>{O(e),h(!1)},onPointerDown:()=>h(!1)},n))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter(e=>e.props.value===f)[0]))}},130:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}},131:function(e,n,t){"use strict";var r=t(0);const i=Object(r.createContext)(void 0);n.a=i},132:function(e,n,t){"use strict";var r=t(0),i=t(131);n.a=function(){const e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/MinimumPathSum-442c8c2cba704b5eb8e8baf1a7ec4672.jpg"},52:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(6),a=(t(0),t(127)),o=t(129),c=t(130),u={title:"Leetcode 64. Minimum Path Sum",tags:["DynamicProgramming/Coordinate"]},l={unversionedId:"Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/64-minimum-path-sum",id:"Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/64-minimum-path-sum",isDocsHomePage:!1,title:"Leetcode 64. Minimum Path Sum",description:"Question Description",source:"@site/docs/Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/64-minimum-path-sum.md",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/64-minimum-path-sum"},m=[{value:"Example:",id:"example",children:[]}],s={rightToc:m};function p(e){var n=e.components,u=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,u,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{src:t(152).default})),Object(a.b)("h1",{id:"question-description"},"Question Description"),Object(a.b)("p",null,"Original Question: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/minimum-path-sum/"}),"Leetcode 64. Minimum Path Sum")),Object(a.b)("p",null,"Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path."),Object(a.b)("p",null,"Note: You can only move either down or right at any point in time."),Object(a.b)("h3",{id:"example"},"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-aidl"}),"Input:\n[\n  [1,3,1],\n  [1,5,1],\n  [4,2,1]\n]\nOutput: 7\nExplanation: Because the path 1\u21923\u21921\u21921\u21921 minimizes the sum.\n")),Object(a.b)("h1",{id:"solution"},"Solution"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public int minPathSum(int[][] grid) {\n        if(grid.length == 0 || grid[0].length == 0) return 0;\n        int[][] dp = new int [grid.length][grid[0].length];\n        for(int i = 0; i<grid.length; i++){\n            for(int j = 0; j < grid[0].length; j++){\n                if(i==0 && j==0) dp[i][j] = grid[0][0];\n                else if(i==0) {\n                    dp[i][j] = grid[i][j] + dp[i][j-1];\n                } else if (j == 0){\n                    dp[i][j] = grid[i][j] + dp[i-1][j];\n                } else {\n                    dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);\n                }\n            }\n        }\n        return dp[grid.length-1][grid[0].length-1];\n    }\n}\n"))),Object(a.b)(c.a,{value:"py",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"class Solution:\n    def minPathSum(self, grid: List[List[int]]) -> int:\n        if not grid or not grid[0]:\n            return 0\n\n        m,n = len(grid), len(grid[0])\n\n\n        minSum = [[0 for j in range(n)] for i in range(m) ] \n        minSum[0][0] = grid[0][0]\n\n        for i in range(1,m):\n            minSum[i][0] = minSum[i-1][0] + grid[i][0]\n\n        for j in range(1,n):\n            minSum[0][j] = minSum[0][j-1] + grid[0][j]\n\n        for i in range(1,m):\n            for j in range(1,n):\n                minSum[i][j] = min(minSum[i-1][j], minSum[i][j-1]) + grid[i][j]\n\n        return minSum[m-1][n-1]\n")))))}p.isMDXComponent=!0}}]);