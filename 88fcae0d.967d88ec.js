(window.webpackJsonp=window.webpackJsonp||[]).push([[30,22,50],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(t),b=a,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},117:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},120:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},121:function(e,n,t){"use strict";var a=t(0),r=t(120);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(121),o=t(117),c=t(48),u=t.n(c);const s=37,l=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:m,groupId:p}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(i.a)(),[f,h]=Object(a.useState)(c);if(null!=p){const e=b[p];null!=e&&e!==f&&m.some(n=>n.value===e)&&h(e)}const g=e=>{h(e),null!=p&&d(p,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},m.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case l:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(j,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===f)[0]))}},124:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},49:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(6),i=(t(0),t(115)),o={title:"Leetcode 62. Unique Paths",tags:["DynamicProgramming/Coordinate"]},c={unversionedId:"Patterns/DynamicProgramming/Coordinate/Examples/62-unique-paths",id:"Patterns/DynamicProgramming/Coordinate/Examples/62-unique-paths",isDocsHomePage:!1,title:"Leetcode 62. Unique Paths",description:"Question",source:"@site/docs/Patterns/DynamicProgramming/Coordinate/Examples/62-unique-paths.md",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/Examples/62-unique-paths"},u=[],s=function(e){return function(n){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},l=s("Tabs"),m=s("TabItem"),p={rightToc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"question"},"Question"),Object(i.b)("p",null,"Original Question: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode.com/problems/unique-paths/"}),"Leetcode 62. Unique Paths")),Object(i.b)("p",null,"A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)."),Object(i.b)("p",null,"The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)."),Object(i.b)("p",null,"How many possible unique paths are there?"),Object(i.b)("h1",{id:"solution"},"Solution"),Object(i.b)(l,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(m,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public int uniquePaths(int m, int n) {\n        if(m == 0|| n==0) return 0;\n        int[][] dp = new int[m][n];\n        for(int i = 0; i < m; i++){\n            dp[i][n-1] = 1;\n        }\n        for(int i = 0; i < n; i++){\n            dp[m-1][i] = 1;\n        }\n        for(int j = m-2; j>=0; j--){\n            for(int i = n-2; i>=0;i--){\n                dp[j][i] = dp[j+1][i] + dp[j][i+1];\n            }\n        }\n        return dp[0][0];\n    }\n}\n"))),Object(i.b)(m,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        if not m or not n:\n            return 0\n\n        paths = [[1]*(n+1)]*(m +1)\n\n        for i in range(2,m+1):\n            for j in range(2, n+1):\n                paths[i][j] = paths[i-1][j] + paths[i][j-1]\n\n        return paths[m][n]\n")))))}b.isMDXComponent=!0},50:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(6),i=(t(0),t(115)),o={title:"Leetcode 63. Unique Paths II",tags:["DynamicProgramming/Coordinate"]},c={unversionedId:"Patterns/DynamicProgramming/Coordinate/Examples/63-unique-paths-ii",id:"Patterns/DynamicProgramming/Coordinate/Examples/63-unique-paths-ii",isDocsHomePage:!1,title:"Leetcode 63. Unique Paths II",description:"Question",source:"@site/docs/Patterns/DynamicProgramming/Coordinate/Examples/63-unique-paths-ii.md",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/Examples/63-unique-paths-ii"},u=[],s=function(e){return function(n){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},l=s("Tabs"),m=s("TabItem"),p={rightToc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"question"},"Question"),Object(i.b)("p",null,"Original Question: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://leetcode.com/problems/unique-paths-ii/"}),"Leetcode 63. Unique Paths II")),Object(i.b)("p",null,"A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below)."),Object(i.b)("p",null,"The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below)."),Object(i.b)("p",null,"Now consider if some obstacles are added to the grids. How many unique paths would there be?"),Object(i.b)("h1",{id:"solution"},"Solution"),Object(i.b)(l,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(m,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public int uniquePaths(int m, int n) {\n        if(m == 0|| n==0) return 0;\n        int[][] dp = new int[m][n];\n        for(int i = 0; i < m; i++){\n            dp[i][n-1] = 1;\n        }\n        for(int i = 0; i < n; i++){\n            dp[m-1][i] = 1;\n        }\n        for(int j = m-2; j>=0; j--){\n            for(int i = n-2; i>=0;i--){\n                dp[j][i] = dp[j+1][i] + dp[j][i+1];\n            }\n        }\n        return dp[0][0];\n    }\n}\n"))),Object(i.b)(m,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"class Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        if not m or not n:\n            return 0\n\n        paths = [[1]*(n+1)]*(m +1)\n\n        for i in range(2,m+1):\n            for j in range(2, n+1):\n                paths[i][j] = paths[i-1][j] + paths[i][j-1]\n\n        return paths[m][n]\n")))))}b.isMDXComponent=!0},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return m})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return h}));var a,r=t(1),i=t(6),o=(t(0),t(115)),c=t(123),u=t(124),s=t(49),l=t(50),m={id:"index",title:"Coordinate-based Examples",sidebar_label:"Examples"},p={unversionedId:"Patterns/DynamicProgramming/Coordinate/Examples/index",id:"Patterns/DynamicProgramming/Coordinate/Examples/index",isDocsHomePage:!1,title:"Coordinate-based Examples",description:"<Tabs",source:"@site/docs/Patterns/DynamicProgramming/Coordinate/Examples/index.md",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/Examples/index",sidebar_label:"Examples",sidebar:"Patterns",previous:{title:"Coordinate-based Dynamic Programming",permalink:"/docs/Patterns/DynamicProgramming/Coordinate/intro"},next:{title:"Bit Manipulation",permalink:"/docs/Patterns/BitManipulation/README"}},b=[],d=(a="Zigzag",function(e){return console.warn("Component '"+a+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),f={rightToc:b};function h(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"Unique Path",values:[{label:"Unique Path",value:"Unique Path"},{label:"Unique Path II",value:"Unique Path II"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"Unique Path",mdxType:"TabItem"},Object(o.b)(s.default,{mdxType:"UniquePaths"})),Object(o.b)(u.a,{value:"Unique Path II",mdxType:"TabItem"},Object(o.b)(l.default,{mdxType:"UniquePathsII"})),Object(o.b)(u.a,{value:"banana",mdxType:"TabItem"},Object(o.b)(d,{mdxType:"Zigzag"}))))}h.isMDXComponent=!0}}]);