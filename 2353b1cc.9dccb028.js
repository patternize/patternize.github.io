(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(145)),l={id:"vlist",title:"VList",sidebar_label:"VList"},c={id:"DataStructures/Advanced/vlist",title:"VList",description:"# VList",source:"@site/docs/DataStructures/Advanced/VList.md",permalink:"/docs/DataStructures/Advanced/vlist",sidebar_label:"VList",sidebar:"Data Structure",previous:{title:"LC103. Binary Tree Zigzag Level Order Traversal",permalink:"/docs/QuestionBank/Leetcode/LC103"}},o=[{value:"Knowledge Points",id:"knowledge-points",children:[]},{value:"Implementation",id:"implementation",children:[]}],u={rightToc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"vlist"},"VList"),Object(i.b)("p",null,"Implement an array that has flexible length. In other words, implement ArrayList in Java without using ArrayList."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Implement 2 methods:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"void append(T element) -> should be O(1)"),Object(i.b)("li",{parentName:"ul"},"T getByIndex(int index) -> should be O(log n)"))),Object(i.b)("li",{parentName:"ul"},"Full explanation: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.keithschwarz.com/interesting/code/vlist/VList.java.html"}),"http://www.keithschwarz.com/interesting/code/vlist/VList.java.html")))),Object(i.b)("li",{parentName:"ul"},"TL;DR:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"ArrayList ditches previous arrays after a new longer array is created, VList save those previous arrays and link them together")))),Object(i.b)("h2",{id:"knowledge-points"},"Knowledge Points"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do you know how does Java implement ArrayList, why is it implement that way (1, 2, 4, 8, 16...growth):",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java implement ArrayList by making a new Array with size * 2, then copy the original elements over."),Object(i.b)("li",{parentName:"ul"},"append might be -> O(n)"),Object(i.b)("li",{parentName:"ul"},"get is always -> O(1)")))),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class VList<T> {\n\n    private VListCell<T> head;\n    int size;\n\n    private class VListCell<T> {\n        public T[] elems;\n        public VListCell<T> next;\n        public VListCell<T> prev;\n        public int count;\n        public VListCell(int numElems, VListCell<T> next){\n            this.elems = (T[]) new Object[numElems];\n            this.next = next;\n            this.prev = null;\n            if(next != null){\n                next.prev = this;\n            }\n            count = 0;\n        }\n        \n        public boolean isFull(){\n            return this.count == elems.length;\n        }\n    }\n    \n    public boolean add(T elem){\n        if(head == null || head.isFull()){\n            head = new VListCell<T>(head == null ? 1 : head.elems.length * 2, head);\n        }\n        head.elems[head.count++] = elem;\n        size++;\n        return true;\n    }\n    \n    public T get(int index){\n        index = size - 1 - index; // find the reverse index\n        VListCell<T> cur = head;\n        while(index >= cur.count){\n            index -= cur.count;\n            cur = cur.next;\n        }\n        index = cur.count - index - 1;\n        return cur.elems[index];\n    }\n}\n")))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,c({ref:t},u,{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);