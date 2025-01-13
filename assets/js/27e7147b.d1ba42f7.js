"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[3754,8448],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>p});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),g=a,p=m["".concat(s,".").concat(g)]||m[g]||d[g]||o;return t?r.createElement(p,i(i({ref:n},c),{},{components:t})):r.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(6540),a=t(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(8168),a=t(6540),o=t(53),i=t(3104),u=t(6347),s=t(7485),l=t(1682),c=t(9466);function m(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:m(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[o,r])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,u]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,l]=p({queryString:t,groupId:r}),[m,y]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=null!=s?s:m;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);u(e),l(e),y(e)}),[l,y,o]),tabValues:o}}var f=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:u,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==u&&(m(n),s(r))},g=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var a;const n=c.indexOf(e.currentTarget)-1;t=null!=(a=c[n])?a:c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:d},i,{className:(0,o.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function A(e){const n=y(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(h,(0,r.A)({},e,n)),a.createElement(v,(0,r.A)({},e,n)))}function C(e){const n=(0,f.A)();return a.createElement(A,(0,r.A)({key:String(n)},e))}},5685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>g});var r=t(8168),a=t(8587),o=(t(6540),t(5680)),i=t(1470),u=t(9365);const s=["components"],l={title:"Leetcode 674. Longest Continuous Increasing Subsequence",tags:["DynamicProgramming/Coordinate"]},c="Question",m={unversionedId:"Algorithms/DynamicProgramming/Coordinate/Array/longest-continuous-increasing-subsequence",id:"Algorithms/DynamicProgramming/Coordinate/Array/longest-continuous-increasing-subsequence",title:"Leetcode 674. Longest Continuous Increasing Subsequence",description:"Original Question: Leetcode 674. Longest Continuous Increasing Subsequence",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/Array/674-longest-continuous-increasing-subsequence.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/Array",slug:"/Algorithms/DynamicProgramming/Coordinate/Array/longest-continuous-increasing-subsequence",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/Array/longest-continuous-increasing-subsequence",draft:!1,tags:[{label:"DynamicProgramming/Coordinate",permalink:"/docs/tags/dynamic-programming-coordinate"}],version:"current",sidebarPosition:674,frontMatter:{title:"Leetcode 674. Longest Continuous Increasing Subsequence",tags:["DynamicProgramming/Coordinate"]},sidebar:"Algorithms",previous:{title:"Array",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/Array/"},next:{title:"Introduction",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/intro"}},d={},g=[{value:"Example 1:",id:"example-1",level:3},{value:"Example 2:",id:"example-2",level:3}],p={toc:g},y="wrapper";function f(e){let{components:n}=e,t=(0,a.A)(e,s);return(0,o.yg)(y,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"question"},"Question"),(0,o.yg)("p",null,"Original Question: ",(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-continuous-increasing-subsequence/"},"Leetcode 674. Longest Continuous Increasing Subsequence")),(0,o.yg)("p",null,"Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray)."),(0,o.yg)("h3",{id:"example-1"},"Example 1:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Input: [1,3,5,4,7]\nOutput: 3\nExplanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. \nEven though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.\n")),(0,o.yg)("h3",{id:"example-2"},"Example 2:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Input: [2,2,2,2,2]\nOutput: 1\nExplanation: The longest continuous increasing subsequence is [2], its length is 1. \n")),(0,o.yg)("h1",{id:"solution"},"Solution"),(0,o.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"}],mdxType:"Tabs"},(0,o.yg)(u.A,{value:"java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int findLengthOfLCIS(int[] nums) {\n        if(nums.length == 0) return 0;\n        int dp[] = new int[nums.length];\n        dp[0] = 1;\n        int res = 1;\n        for(int i = 1; i < nums.length; i++){\n            if(nums[i] > nums[i-1]){\n                dp[i] = dp[i-1]+1;\n            } else {\n                dp[i] = 1;\n            }\n            res = Math.max(dp[i], res);\n        }\n        return res;\n    }\n}\n"))),(0,o.yg)(u.A,{value:"py",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-py"},"class Solution(object):\n    def findLengthOfLCIS(self, nums):\n        if not nums:\n            return 0\n        dp = [1] * len(nums)\n        for i in range(1, len(nums)):\n            if nums[i] > nums[i-1]:\n                dp[i] = dp[i - 1] + 1\n        return max(dp)\n")))))}f.isMDXComponent=!0},9893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=t(8168),a=t(8587),o=(t(6540),t(5680)),i=t(1470),u=t(9365),s=t(5685);const l=["components"],c={id:"index",title:"Array Questions",sidebar_label:"Array"},m=void 0,d={unversionedId:"Algorithms/DynamicProgramming/Coordinate/Array/index",id:"Algorithms/DynamicProgramming/Coordinate/Array/index",title:"Array Questions",description:"<Tabs",source:"@site/docs/Algorithms/DynamicProgramming/Coordinate/Array/index.md",sourceDirName:"Algorithms/DynamicProgramming/Coordinate/Array",slug:"/Algorithms/DynamicProgramming/Coordinate/Array/",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/Array/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Array Questions",sidebar_label:"Array"},sidebar:"Algorithms",previous:{title:"Dijkstra's Algorithm",permalink:"/docs/Algorithms/Graph/dijkstra-algorithm"},next:{title:"Leetcode 674. Longest Continuous Increasing Subsequence",permalink:"/docs/Algorithms/DynamicProgramming/Coordinate/Array/longest-continuous-increasing-subsequence"}},g={},p=[],y={toc:p},f="wrapper";function b(e){let{components:n}=e,t=(0,a.A)(e,l);return(0,o.yg)(f,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{defaultValue:"LCIS",values:[{label:"Longest Continuous Increasing Subsequence",value:"LCIS"}],mdxType:"Tabs"},(0,o.yg)(u.A,{value:"LCIS",mdxType:"TabItem"},(0,o.yg)(s.default,{mdxType:"LCIS"}))))}b.isMDXComponent=!0}}]);