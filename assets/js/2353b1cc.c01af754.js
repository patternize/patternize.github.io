"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[9227],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(8168),a=n(8587),i=(n(6540),n(5680));const l=["components"],o={id:"VList",title:"VList",sidebar_label:"VList"},s="VList",u={unversionedId:"DataStructures/Advanced/VList",id:"DataStructures/Advanced/VList",title:"VList",description:"Implement an array that has flexible length. In other words, implement ArrayList in Java without using ArrayList.",source:"@site/docs/DataStructures/Advanced/VList.md",sourceDirName:"DataStructures/Advanced",slug:"/DataStructures/Advanced/VList",permalink:"/docs/DataStructures/Advanced/VList",draft:!1,tags:[],version:"current",frontMatter:{id:"VList",title:"VList",sidebar_label:"VList"},sidebar:"Data Structure",previous:{title:"Lowest Common Ancestor of a Binary Tree",permalink:"/docs/QuestionBank/Leetcode/LC236"}},c={},p=[{value:"Knowledge Points",id:"knowledge-points",level:2},{value:"Implementation",id:"implementation",level:2}],m={toc:p},d="wrapper";function y(e){let{components:t}=e,n=(0,a.A)(e,l);return(0,i.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"vlist"},"VList"),(0,i.yg)("p",null,"Implement an array that has flexible length. In other words, implement ArrayList in Java without using ArrayList. "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Implement 2 methods:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"void append(T element) -> should be O(1)"),(0,i.yg)("li",{parentName:"ul"},"T getByIndex(int index) -> should be O(log n)"))),(0,i.yg)("li",{parentName:"ul"},"Full explanation: ",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"http://www.keithschwarz.com/interesting/code/vlist/VList.java.html"},"http://www.keithschwarz.com/interesting/code/vlist/VList.java.html")))),(0,i.yg)("li",{parentName:"ul"},"TL;DR:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"ArrayList ditches previous arrays after a new longer array is created, VList save those previous arrays and link them together")))),(0,i.yg)("h2",{id:"knowledge-points"},"Knowledge Points"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Do you know how does Java implement ArrayList, why is it implement that way (1, 2, 4, 8, 16...growth):",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Java implement ArrayList by making a new Array with size * 2, then copy the original elements over."),(0,i.yg)("li",{parentName:"ul"},"append might be -> O(n)"),(0,i.yg)("li",{parentName:"ul"},"get is always -> O(1)")))),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"class VList<T> {\n\n    private VListCell<T> head;\n    int size;\n\n    private class VListCell<T> {\n        public T[] elems;\n        public VListCell<T> next;\n        public VListCell<T> prev;\n        public int count;\n        public VListCell(int numElems, VListCell<T> next){\n            this.elems = (T[]) new Object[numElems];\n            this.next = next;\n            this.prev = null;\n            if(next != null){\n                next.prev = this;\n            }\n            count = 0;\n        }\n        \n        public boolean isFull(){\n            return this.count == elems.length;\n        }\n    }\n    \n    public boolean add(T elem){\n        if(head == null || head.isFull()){\n            head = new VListCell<T>(head == null ? 1 : head.elems.length * 2, head);\n        }\n        head.elems[head.count++] = elem;\n        size++;\n        return true;\n    }\n    \n    public T get(int index){\n        index = size - 1 - index; // find the reverse index\n        VListCell<T> cur = head;\n        while(index >= cur.count){\n            index -= cur.count;\n            cur = cur.next;\n        }\n        index = cur.count - index - 1;\n        return cur.elems[index];\n    }\n}\n")))}y.isMDXComponent=!0}}]);