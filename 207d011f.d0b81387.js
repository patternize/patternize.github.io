(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},148:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,d=p["".concat(o,".").concat(h)]||p[h]||f[h]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},149:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(147),a=r(149),i=(r(0),r(148)),o={id:"Definitions&&Properties",title:"Definition and Properties",sidebar_label:"Definition and Properties"},c={unversionedId:"DataStructures/Basic/BinaryTree/Definitions&&Properties",id:"DataStructures/Basic/BinaryTree/Definitions&&Properties",isDocsHomePage:!1,title:"Definition and Properties",description:"The binary tree is a subset of the m-ary tree, which can have any number of children for each node. Like the m-ary tree, a binary tree is typically implemented in the form of a linked list. Every node in a binary tree contains a value property, and two pointers that point to the node's left or right child.",source:"@site/docs/DataStructures/Basic/BinaryTree/BSTDefinitionAndProperties.md",slug:"/DataStructures/Basic/BinaryTree/Definitions&&Properties",permalink:"/docs/DataStructures/Basic/BinaryTree/Definitions&&Properties",version:"current",sidebar_label:"Definition and Properties",sidebar:"Data Structure",next:{title:"Basic Operations",permalink:"/docs/DataStructures/Basic/BinaryTree/BSTOperations"}},l=[{value:"Binary Search Tree",id:"binary-search-tree",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The binary tree is a subset of the ",Object(i.b)("em",{parentName:"p"},"m"),"-ary tree, which can have any number of children for each node. Like the ",Object(i.b)("em",{parentName:"p"},"m"),"-ary tree, a binary tree is typically implemented in the form of a linked list. Every node in a binary tree contains a value property, and two pointers that point to the node's left or right child. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function TreeNode(value, left, right) {\n    this.value = value === undefined ? 0 : value;\n    this.left = left === undefined ? null : left;\n    this.right = right === undefined ? null : right;\n}\n")),Object(i.b)("h3",{id:"binary-search-tree"},"Binary Search Tree"),Object(i.b)("p",null,"A binary search tree is essentially a binary tree, with the addition of the binary search tree invariant. Namely, that ",Object(i.b)("em",{parentName:"p"},"the value of the left child will always be smaller than the value of the parent, while the value of the right child will always be greater than the value of the parent"),". The result of this is that the greatest value on the left side of a node will always be the smallest value on the right side. Similarly, the smallest value on the right side will always be the greatest on the left side. This becomes very important when conducting binary search tree operations, that is, any look-up, insertion, or deletion. "))}u.isMDXComponent=!0}}]);