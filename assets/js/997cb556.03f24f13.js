"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[6981],{8478:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(6540),r=a(2303);function l(e){let{children:t,fallback:a}=e;return(0,r.A)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}},9365:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(6540),r=a(53);const l={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,u),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(8168),r=a(6540),l=a(53),u=a(3104),s=a(6347),o=a(7485),i=a(1682),c=a(9466);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace(Object.assign({},n.location,{search:t.toString()}))}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[u,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const r=null!=(t=n.find((e=>e.default)))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,i]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=null!=o?o:p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var g=a(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.a_)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==s&&(p(t),o(n))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{var n;const t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{var r;const t=c.indexOf(e.currentTarget)-1;a=null!=(r=c[t])?r:c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},u,{className:(0,l.A)("tabs__item",y.tabItem,null==u?void 0:u.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=f(e);return r.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(h,(0,n.A)({},e,t)))}function E(e){const t=(0,g.A)();return r.createElement(x,(0,n.A)({key:String(t)},e))}},644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>f});var n=a(8168),r=a(8587),l=(a(6540),a(5680)),u=a(1470),s=a(9365),o=a(3973),i=a(8478);const c=["components"],p={id:"LC1131",title:"Maximum of Absolute Value Expression",sidebar_label:"Maximum of Absolute Value Expression",tags:["Patterns/Tree","DataStructures/Tree"]},m=void 0,d={unversionedId:"QuestionBank/Leetcode/LC1131",id:"QuestionBank/Leetcode/LC1131",title:"Maximum of Absolute Value Expression",description:"Problem Description",source:"@site/docs/QuestionBank/Leetcode/1131. Maximum of Absolute Value Expression.md",sourceDirName:"QuestionBank/Leetcode",slug:"/QuestionBank/Leetcode/LC1131",permalink:"/docs/QuestionBank/Leetcode/LC1131",draft:!1,tags:[{label:"Patterns/Tree",permalink:"/docs/tags/patterns-tree"},{label:"DataStructures/Tree",permalink:"/docs/tags/data-structures-tree"}],version:"current",sidebarPosition:1131,frontMatter:{id:"LC1131",title:"Maximum of Absolute Value Expression",sidebar_label:"Maximum of Absolute Value Expression",tags:["Patterns/Tree","DataStructures/Tree"]}},b={},f=[{value:"Problem Description",id:"problem-description",level:2},{value:"Example 1:",id:"example-1",level:4},{value:"Intuition",id:"intuition",level:3},{value:"Code",id:"code",level:3}],g={toc:f},y="wrapper";function v(e){let{components:t}=e,a=(0,r.A)(e,c);return(0,l.yg)(y,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"problem-description"},"Problem Description"),(0,l.yg)("p",null,"Given two arrays of integers with equal lengths, return the maximum value of:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|\n")),(0,l.yg)("p",null,"where the maximum is taken over all 0 <= i, j < arr1.length."),(0,l.yg)("h4",{id:"example-1"},"Example 1:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]\nOutput: 13\nExample 2:\n\nInput: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]\nOutput: 20\n")),(0,l.yg)("p",null,"Constraints:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"2 <= arr1.length == arr2.length <= 40000\n-10^6 <= arr1[i], arr2[i] <= 10^6\n")),(0,l.yg)("h3",{id:"intuition"},"Intuition"),(0,l.yg)("p",null,"Take |x","[i]"," - x","[j]","| + |y","[i]"," - y","[j]","| as Manhattan distance of two points.\nx is the coordinate of points on the x-axis,\ny is the coordinate of points on the y-axis."),(0,l.yg)("admonition",{title:"Playground",type:"info"},(0,l.yg)(i.A,{mdxType:"BrowserOnly"},(()=>(0,l.yg)(o.O5,{mdxType:"ManhattanDistanceOptimizedStory"})))),(0,l.yg)("h3",{id:"code"},"Code"),(0,l.yg)(u.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"},{label:"C++",value:"cp"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"java",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"public int maxAbsValExpr(int[] x, int[] y) {\n    int res = 0, n = x.length, P[] = {-1,1};\n    for (int p : P) {\n        for (int q : P) {\n            int smallest = p * x[0] + q * y[0] + 0;\n            for (int i = 1; i < n; ++i) {\n                int cur = p * x[i] + q * y[i] + i;\n                res = Math.max(res, cur - smallest);\n                smallest = Math.min(smallest, cur);\n            }\n        }\n    }\n    return res;\n}\n"))),(0,l.yg)(s.A,{value:"py",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-python"},"# Trick: Keep track of depth and update it via the traversal length. Make sure you stack left first then right to ensure properly visiting right first.\ndef maxAbsValExpr(self, x, y):\n  res, n = 0, len(x)\n  for p, q in [[1, 1], [1, -1], [-1, 1], [-1, -1]]:\n      smallest = p * x[0] + q * y[0] + 0\n      for i in xrange(n):\n          cur = p * x[i] + q * y[i] + i\n          res = max(res, cur - smallest)\n          smallest = min(smallest, cur)\n  return res\n"))),(0,l.yg)(s.A,{value:"cp",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"//C++\nint maxAbsValExpr(vector<int>& x, vector<int>& y) {\n    int res = 0, n = x.size(), smallest, cur;\n    for (int p : {1, -1}) {\n        for (int q : {1, -1}) {\n            smallest = p * x[0] + q * y[0] + 0;\n            for (int i = 1; i < n; ++i) {\n                cur = p * x[i] + q * y[i] + i;\n                res = max(res, cur - smallest);\n                smallest = min(smallest, cur);\n            }\n        }\n    }\n    return res;\n}\n")))),(0,l.yg)("p",null,"Source: ",(0,l.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-of-absolute-value-expression/"},"https://leetcode.com/problems/maximum-of-absolute-value-expression/")))}v.isMDXComponent=!0}}]);