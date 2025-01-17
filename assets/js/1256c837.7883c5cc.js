"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[9452],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9365:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(6540),a=t(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t},n)}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(8168),a=t(6540),o=t(53),i=t(3104),u=t(6347),l=t(7485),s=t(1682),c=t(9466);function m(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:m(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=p(e),[i,u]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,s]=d({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),b=(()=>{const e=null!=l?l:m;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);u(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:u,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==u&&(m(n),l(r))},g=e=>{var n;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var a;const n=c.indexOf(e.currentTarget)-1;t=null!=(a=c[n])?a:c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:p},i,{className:(0,o.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},a.createElement(h,(0,r.A)({},e,n)),a.createElement(y,(0,r.A)({},e,n)))}function w(e){const n=(0,b.A)();return a.createElement(k,(0,r.A)({key:String(n)},e))}},8879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>g});var r=t(8168),a=t(8587),o=(t(6540),t(5680)),i=t(1470),u=t(9365);const l=["components"],s={id:"confusing-number",title:"Confusing Number - Backtracking Algorithm for Rotated Digits",sidebar_label:"Confusing Number Algorithm",description:"Learn how to solve the Confusing Number problem using backtracking. Find numbers that become different valid numbers when rotated 180 degrees.",keywords:["confusing number","rotated digits","backtracking","algorithm","leetcode","programming","interview preparation"]},c=void 0,m={unversionedId:"Algorithms/Backtracking/confusing-number",id:"Algorithms/Backtracking/confusing-number",title:"Confusing Number - Backtracking Algorithm for Rotated Digits",description:"Learn how to solve the Confusing Number problem using backtracking. Find numbers that become different valid numbers when rotated 180 degrees.",source:"@site/docs/Algorithms/Backtracking/ConfusingNumber.md",sourceDirName:"Algorithms/Backtracking",slug:"/Algorithms/Backtracking/confusing-number",permalink:"/Algorithms/Backtracking/confusing-number",draft:!1,tags:[],version:"current",frontMatter:{id:"confusing-number",title:"Confusing Number - Backtracking Algorithm for Rotated Digits",sidebar_label:"Confusing Number Algorithm",description:"Learn how to solve the Confusing Number problem using backtracking. Find numbers that become different valid numbers when rotated 180 degrees.",keywords:["confusing number","rotated digits","backtracking","algorithm","leetcode","programming","interview preparation"]},sidebar:"Algorithms",previous:{title:"Introduction to Backtracking",permalink:"/Algorithms/Backtracking/Introduction"},next:{title:"Expression Puzzle",permalink:"/Algorithms/Backtracking/ExpressionPuzzle"}},p={},g=[{value:"Problem Description",id:"problem-description",level:2}],d={toc:g},f="wrapper";function b(e){let{components:n}=e,t=(0,a.A)(e,l);return(0,o.yg)(f,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"problem-description"},"Problem Description"),(0,o.yg)("p",null,"Source: ",(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/confusing-number-ii/"},"https://leetcode.com/problems/confusing-number-ii/")),(0,o.yg)("p",null,"We can rotate digits by 180 degrees to form new digits. When 0, 1, 6, 8, 9 are rotated 180 degrees, they become 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5 and 7 are rotated 180 degrees, they become invalid."),(0,o.yg)("p",null,"A confusing number is a number that when rotated 180 degrees becomes a different number with each digit valid.(Note that the rotated number can be greater than the original number.)"),(0,o.yg)("p",null,"Given a positive integer N, return the number of confusing numbers between 1 and N inclusive."),(0,o.yg)("p",null,"Example 1:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Input: 20\nOutput: 6\nExplanation: \nThe confusing numbers are [6,9,10,16,18,19].\n6 converts to 9.\n9 converts to 6.\n10 converts to 01 which is just 1.\n16 converts to 91.\n18 converts to 81.\n19 converts to 61.\n")),(0,o.yg)("p",null,"Example 2:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Input: 100\nOutput: 19\nExplanation: \nThe confusing numbers are [6,9,10,16,18,19,60,61,66,68,80,81,86,89,90,91,98,99,100].\n")),(0,o.yg)("p",null,"Note:\n",(0,o.yg)("inlineCode",{parentName:"p"},"1 <= N <= 10^9")),(0,o.yg)(i.A,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Python",value:"py"},{label:"C++",value:"C++"}],mdxType:"Tabs"},(0,o.yg)(u.A,{value:"java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    Map<Integer, Integer> map;\n    int count = 0;\n    public Solution() {\n        map = new HashMap<>();\n        map.put(6, 9);\n        map.put(9, 6);\n        map.put(0, 0);\n        map.put(1, 1);\n        map.put(8, 8); \n    }\n\n    private boolean isConfusingNumber(long n) {\n        long src = n;\n        long res = 0;\n        while (n > 0) {\n            res = res * 10 + map.get((int) n % 10); \n            n /= 10;\n        }\n        return res != src;\n    }\n\n    public int confusingNumberII(int N) {\n        for(int x: new int[]{1, 6, 8, 9}){\n            dfs(x, N);\n        }\n        return count;\n    }\n\n    public void dfs(long x, int N){\n        if(x>N) return;\n        if(isConfusingNumber(x)){\n            count++;\n        }\n        for(int y: new int[]{0, 1, 6, 8, 9}){\n            dfs(x*10 + y, N);\n        }\n    }\n}\n"))),(0,o.yg)(u.A,{value:"py",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def confusingNumberII(self, N: int) -> int:\n        digits = {0:0, 1:1, 6:9, 8:8, 9:6}\n\n        def count(cur, rev, digit): \n            res = 0 \n            if cur != rev: \n                res += 1                  \n            for k,v in digits.items():\n                if cur == 0 and k == 0: \n                    continue                     \n                if cur*10 + k > N: \n                    break \n                else: \n                    res += count(cur*10+k, v*digit + rev, digit*10)\n            return res \n\n        return count(0,0,1)\n"))),(0,o.yg)(u.A,{value:"C++",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int confusingNumberII(int N) {\n        ans = 0;\n        for (auto x: {1,6,8,9})\n            dfs(x, N);\n        return ans;\n    }\n\nprivate:\n    void dfs(long x, int N) {\n        if (x > N) return;\n        if (isConfusing(x)) ans++;\n        for (auto y: {0,1,6,8,9})\n            dfs(x * 10 + y, N);\n    }\n    bool isConfusing(int x) {\n        int num[10];\n        int size = 0;\n        while(x) {\n            num[size++] = x % 10;\n            x /= 10;\n        }\n        for (int l = 0, r = size - 1; l <= r; l++, r--) {\n            if (num[l] != myMap[num[r]])\n                return true;\n        }\n        return false;\n    }\n    const int myMap[10] = {0,1,2,3,4,5,9,7,8,6};\n    int ans;\n};\n")))))}b.isMDXComponent=!0}}]);