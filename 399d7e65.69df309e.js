(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=h(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,p=c["".concat(i,".").concat(f)]||c[f]||d[f]||o;return n?a.a.createElement(p,l(l({ref:t},s),{},{components:n})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(149)),i={id:"BSTOperations",title:"Basic Operations",sidebar_label:"Basic Operations"},l={unversionedId:"DataStructures/Basic/BinaryTree/BSTOperations",id:"DataStructures/Basic/BinaryTree/BSTOperations",isDocsHomePage:!1,title:"Basic Operations",description:"Lookup",source:"@site/docs/DataStructures/Basic/BinaryTree/BSTOperations.md",slug:"/DataStructures/Basic/BinaryTree/BSTOperations",permalink:"/docs/DataStructures/Basic/BinaryTree/BSTOperations",version:"current",sidebar_label:"Basic Operations",sidebar:"Data Structure",previous:{title:"Definition and Properties",permalink:"/docs/DataStructures/Basic/BinaryTree/Definitions&&Properties"},next:{title:"Traversals",permalink:"/docs/DataStructures/Basic/BinaryTree/BSTTraversals"}},h=[{value:"Lookup",id:"lookup",children:[]},{value:"Insertion",id:"insertion",children:[]},{value:"Deletion",id:"deletion",children:[]}],s={toc:h};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"lookup"},"Lookup"),Object(o.b)("p",null,'There are two ways to conduct a lookup operation in a binary search tree. The first is known as the "brute force" method, while the second is known as the "binary search" method. As I will explain, the binary search method is much more efficient than the brute force method. '),Object(o.b)("h4",{id:"brute-force"},"Brute Force"),Object(o.b)("p",null,"To conduct a lookup operation in a binary search tree using the brute force method, we must traverse both sides of the tree, and return the subtree with the root node that contains the matching value. In the worst case, we will have to traverse the entire tree before we find the node which contains the value we are looking for, making the time complexity of this method O(n)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// definition for a binary tree node\n// function TreeNode(value, left, right) {\n//     this.value = value === undefined ? 0 : value;\n//     this.left = left === undefined ? null : left;\n//     this.right = right === undefined ? null : right;\n// }\n\nconst lookup = (node, target) => {\n    if (node === null) return null\n    if (node.value === target) return node;\n    return lookup(node.left, target) || lookup(node.right, target);\n}\n")),Object(o.b)("h4",{id:"binary-search"},"Binary Search"),Object(o.b)("p",null,"To conduct a lookup operation in a binary search tree using the binary search method, we will only have to traverse one side of the current node for every iteration. The availability of this leverage results from the fact that a binary search tree is already sorted. The value of the left child in a binary search tree will always be smaller than the value of the parent, while the value of the right child will always be greater than the value of the parent. Therefore, if the value we are looking for is greater than the value of the current node, then we can know for a fact that the node we are looking for cannot be on the left side of the current node. In this way, we only have to check half of the current subtree each time. This makes the time complexity of the binary search method O(logn). "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// definition for a binary tree node\n// function TreeNode(value, left, right) {\n//     this.value = value === undefined ? 0 : value;\n//     this.left = left === undefined ? null : left;\n//     this.right = right === undefined ? null : right;\n// }\n\nconst lookup = (node, target) => {\n    /* return null when we have exhausted the binary search tree \n    and have not found a node with the target value */\n    if (node === null) return null; \n    if (node.value === target) {\n        return node;\n    } else if (node.value < target) {\n        return lookup(node.right, target);\n    } else if (node.value > target) {\n        return lookup(node.left, target);\n    }\n}\n")),Object(o.b)("h3",{id:"insertion"},"Insertion"),Object(o.b)("p",null,"To insert a value into a binary search tree, we must follow the BST invariant. Namely, that ",Object(o.b)("em",{parentName:"p"},"the value of the left child must always be smaller than the value of the parent, and the value of the right child must always be greater than the value of the parent"),". Hence, we must always compare the value we want to insert against the value of the current node. "),Object(o.b)("p",null,"We begin at the root node. If we find the root node to be null, then we know that we have exhausted the tree, or that the tree is empty, and we can simply assign the value we want to insert to the to root node. If the value we want to insert is greater than the value of the root node, we move on to the right child of the root node. If the value we want to insert is smaller than the value of the root node, we move on to the left child of the root node. After we arrive at the next node, we repeat the aforementioned steps, in which we check whether the node is null or empty, whether the value we want to insert is greater or lesser than the value of the current node, so on and so forth. "),Object(o.b)("p",null,"Therefore, at any point during a BST insertion operation, we can expect one of three situations: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The value of current node is null, at which point we have exhausted the tree. In this situation, we can simply assign the value we want to insert onto the current node."),Object(o.b)("li",{parentName:"ol"},"The value of the current node is lesser than the value we want to insert, at which point we move on to the right child of the current node."),Object(o.b)("li",{parentName:"ol"},"The value of the current node is greater than the value we want to insert, at which point we move on to the left child of the current node. ")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// definition for a binary tree node\n// function TreeNode(value, left, right) {\n//     this.value = value === undefined ? 0 : value;\n//     this.left = left === undefined ? null : left;\n//     this.right = right === undefined ? null : right;\n// }\n\nconst insertNode = (node, target) => {\n    if (node === null) return new TreeNode(target); //situation #1\n    if (node.value < target) { //situation #2\n        node.right = insertNode(node.right, target);\n    } else if (node.value > target) { // situation # 3\n        node.left = insertNode(node.left, target);\n    }\n\n    return node;\n}\n")),Object(o.b)("h3",{id:"deletion"},"Deletion"),Object(o.b)("p",null,"To delete a node in a binary search tree, we also need to make sure to preserve the binary search tree invariant. Therefore, the delete operation involves an additional layer of complexity of rearranging the remaining nodes. We must rearrange the remaining nodes in such a way that the value of every left child will always be smaller than the value of the parent, while the value of every right child will always be greater than the value of the parent."),Object(o.b)("p",null,"There are two parts to the delete operation in the binary tree: the binary search, and the delete. The binary search is identical to what we covered in the binary search section (see above). Therefore, the delete operation is simply a binary search with an extra bit of logic after we find the node we want to delete. "),Object(o.b)("p",null,"In the delete operation, we can expect one of four situations after a binary search is complete:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The target node does not have any children, in which case we can replace it with null."),Object(o.b)("li",{parentName:"ol"},"The target node is missing the right child, in which case we can replace it with its left child. "),Object(o.b)("li",{parentName:"ol"},"The target node is missing the left child, in which case we can replace it with its right child."),Object(o.b)("li",{parentName:"ol"},"The target node has both children, in which case we can replace it with either the greatest node on its left side, or the smallest node on its right side. ")),Object(o.b)("p",null,"Our logic in the fourth situation results from an implication from the binary search tree invariant. That is, the greatest node on the left side of a tree will always be smaller than any node on the right side, while the smallest node on the right side will always be greater than any node on the left side. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// definition for a binary tree node\n// function TreeNode(value, left, right) {\n//     this.value = value === undefined ? 0 : value;\n//     this.left = left === undefined ? null : left;\n//     this.right = right === undefined ? null : right;\n// }\n\nconst deleteNode = (node, target) => {\n    if (node === null) return null;\n    if (node.val === target) {\n        //situation 2 & 3\n        if (node.left === null) return node.right;\n        if (node.right === null) return node.left;\n        //situation 1 & 4\n        //if target node has no child, the helper function will return null\n        let min = getMin(node.right);\n        node.val = min.val;\n        node.right = deleteNode(node.right, min.val);\n    } else if (node.val < target) {\n        node.right = deleteNode(node.right, target);\n    } else {\n        node.left = deleteNode(node.left, target);\n    }\n    \n    return node;\n};\n\n//helper function to find the smallest node on the right side\nconst getMin = (node) => {\n    while (node.left !== null) {\n        node = node.left;\n    }\n    return node;\n}\n")))}u.isMDXComponent=!0}}]);