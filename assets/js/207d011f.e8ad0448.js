"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[2036],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,h=u["".concat(s,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(8168),i=r(8587),a=(r(6540),r(5680));const o=["components"],l={id:"Definitions&&Properties",title:"Definition and Properties",sidebar_label:"Definition and Properties"},s=void 0,c={unversionedId:"DataStructures/Basic/BinaryTree/Definitions&&Properties",id:"DataStructures/Basic/BinaryTree/Definitions&&Properties",title:"Definition and Properties",description:"The binary tree is a subset of the m-ary tree, which can have any number of children for each node. Like the m-ary tree, a binary tree is typically implemented in the form of a linked list. Every node in a binary tree contains a value property, and two pointers that point to the node's left or right child.",source:"@site/docs/DataStructures/Basic/BinaryTree/BSTDefinitionAndProperties.md",sourceDirName:"DataStructures/Basic/BinaryTree",slug:"/DataStructures/Basic/BinaryTree/Definitions&&Properties",permalink:"/docs/DataStructures/Basic/BinaryTree/Definitions&&Properties",draft:!1,tags:[],version:"current",frontMatter:{id:"Definitions&&Properties",title:"Definition and Properties",sidebar_label:"Definition and Properties"},sidebar:"Data Structure",next:{title:"Basic Operations",permalink:"/docs/DataStructures/Basic/BinaryTree/BSTOperations"}},p={},u=[{value:"Binary Search Tree",id:"binary-search-tree",level:3}],y={toc:u},f="wrapper";function h(e){let{components:t}=e,r=(0,i.A)(e,o);return(0,a.yg)(f,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The binary tree is a subset of the ",(0,a.yg)("em",{parentName:"p"},"m"),"-ary tree, which can have any number of children for each node. Like the ",(0,a.yg)("em",{parentName:"p"},"m"),"-ary tree, a binary tree is typically implemented in the form of a linked list. Every node in a binary tree contains a value property, and two pointers that point to the node's left or right child. "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function TreeNode(value, left, right) {\n    this.value = value === undefined ? 0 : value;\n    this.left = left === undefined ? null : left;\n    this.right = right === undefined ? null : right;\n}\n")),(0,a.yg)("h3",{id:"binary-search-tree"},"Binary Search Tree"),(0,a.yg)("p",null,"A binary search tree is essentially a binary tree, with the addition of the binary search tree invariant. Namely, that ",(0,a.yg)("em",{parentName:"p"},"the value of the left child will always be smaller than the value of the parent, while the value of the right child will always be greater than the value of the parent"),". The result of this is that the greatest value on the left side of a node will always be the smallest value on the right side. Similarly, the smallest value on the right side will always be the greatest on the left side. This becomes very important when conducting binary search tree operations, that is, any look-up, insertion, or deletion."))}h.isMDXComponent=!0}}]);