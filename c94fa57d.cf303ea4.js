(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},128:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},129:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(132),o=n(128),c=n(48),u=n.n(c);const l=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(i.a)(),[f,h]=Object(r.useState)(c),[g,O]=Object(r.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==f&&p.some(t=>t.value===e)&&h(e)}const y=e=>{h(e),null!=b&&m(b,e)},j=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},w=()=>{O(!1)};return Object(r.useEffect)(()=>{window.addEventListener("keydown",v),window.addEventListener("mousedown",w)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),v(e)},onFocus:()=>y(e),onClick:()=>{y(e),O(!1)},onPointerDown:()=>O(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},130:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},131:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},132:function(e,t,n){"use strict";var r=n(0),a=n(131);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},153:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/UnqiuePathsII-1a74a9add9be3282543fdcf71d291ca8.jpg"},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),i=(n(0),n(127)),o=n(129),c=n(130),u={title:"Leetcode 63. Unique Paths II",tags:["DynamicProgramming/Coordinate"]},l={unversionedId:"Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/63-unique-paths-ii",id:"Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/63-unique-paths-ii",isDocsHomePage:!1,title:"Leetcode 63. Unique Paths II",description:"Question Description",source:"@site/docs/Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/63-unique-paths-ii.md",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/OptimalPathFinding/63-unique-paths-ii"},s=[{value:"Example:",id:"example",children:[]}],p={rightToc:s};function b(e){var t=e.components,u=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,u,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{src:n(153).default})),Object(i.b)("h1",{id:"question-description"},"Question Description"),Object(i.b)("p",null,"Original Question: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://leetcode.com/problems/unique-paths-ii/"}),"Leetcode 63. Unique Paths II")),Object(i.b)("p",null,"A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)."),Object(i.b)("p",null,"The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)."),Object(i.b)("p",null,"Now consider if some obstacles are added to the grids. How many unique paths would there be?"),Object(i.b)("h3",{id:"example"},"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-aidl"}),"Input:\n[\n  [0,0,0],\n  [0,1,0],\n  [0,0,0]\n]\nOutput: 2\nExplanation:\nThere is one obstacle in the middle of the 3x3 grid above.\nThere are two ways to reach the bottom-right corner:\n1. Right -> Right -> Down -> Down\n2. Down -> Down -> Right -> Right\n")),Object(i.b)("h1",{id:"solution"},"Solution"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public int uniquePaths(int m, int n) {\n        if(m == 0|| n==0) return 0;\n        int[][] dp = new int[m][n];\n        for(int i = 0; i < m; i++){\n            dp[i][n-1] = 1;\n        }\n        for(int i = 0; i < n; i++){\n            dp[m-1][i] = 1;\n        }\n        for(int j = m-2; j>=0; j--){\n            for(int i = n-2; i>=0;i--){\n                dp[j][i] = dp[j+1][i] + dp[j][i+1];\n            }\n        }\n        return dp[0][0];\n    }\n}\n"))),Object(i.b)(c.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        if not m or not n:\n            return 0\n\n        paths = [[1]*(n+1)]*(m +1)\n\n        for i in range(2,m+1):\n            for j in range(2, n+1):\n                paths[i][j] = paths[i-1][j] + paths[i][j-1]\n\n        return paths[m][n]\n")))))}b.isMDXComponent=!0}}]);