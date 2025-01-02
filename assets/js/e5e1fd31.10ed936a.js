"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[5485],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(8168),i=n(8587),r=(n(6540),n(5680));const l=["components"],o={id:"Introduction",title:"Linked List",sidebar_label:"Introduction"},s="Linked List",d={unversionedId:"DataStructures/Basic/LinkedList/Introduction",id:"DataStructures/Basic/LinkedList/Introduction",title:"Linked List",description:"What is a Linked List?",source:"@site/docs/DataStructures/Basic/LinkedList/Introduction.md",sourceDirName:"DataStructures/Basic/LinkedList",slug:"/DataStructures/Basic/LinkedList/Introduction",permalink:"/docs/DataStructures/Basic/LinkedList/Introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"Introduction",title:"Linked List",sidebar_label:"Introduction"},sidebar:"Data Structure",previous:{title:"Lowest Common Ancestor of a Binary Tree",permalink:"/docs/QuestionBank/Leetcode/LC236"},next:{title:"Insertion Operations",permalink:"/docs/DataStructures/Basic/LinkedList/Insertion"}},c={},p=[{value:"What is a Linked List?",id:"what-is-a-linked-list",level:2},{value:"Basic Structure",id:"basic-structure",level:2},{value:"Types of Linked Lists",id:"types-of-linked-lists",level:2},{value:"Time Complexity",id:"time-complexity",level:2},{value:"Space Complexity",id:"space-complexity",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Real-world Applications",id:"real-world-applications",level:2},{value:"Common Interview Problems",id:"common-interview-problems",level:2},{value:"Common Techniques",id:"common-techniques",level:2},{value:"References",id:"references",level:2}],u={toc:p},m="wrapper";function y(e){let{components:t}=e,n=(0,i.A)(e,l);return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"linked-list"},"Linked List"),(0,r.yg)("h2",{id:"what-is-a-linked-list"},"What is a Linked List?"),(0,r.yg)("p",null,"A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked list elements are not stored in contiguous memory locations."),(0,r.yg)("h2",{id:"basic-structure"},"Basic Structure"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"class ListNode {\n    int val;\n    ListNode next;\n    \n    ListNode(int val) {\n        this.val = val;\n        this.next = null;\n    }\n}\n")),(0,r.yg)("h2",{id:"types-of-linked-lists"},"Types of Linked Lists"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Singly Linked List"),": Each node points to the next node"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Doubly Linked List"),": Each node has pointers to both next and previous nodes"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Circular Linked List"),": Last node points back to the first node")),(0,r.yg)("h2",{id:"time-complexity"},"Time Complexity"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Operation"),(0,r.yg)("th",{parentName:"tr",align:null},"Time Complexity"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Access"),(0,r.yg)("td",{parentName:"tr",align:null},"O(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Search"),(0,r.yg)("td",{parentName:"tr",align:null},"O(n)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Insertion"),(0,r.yg)("td",{parentName:"tr",align:null},"O(1)*")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Deletion"),(0,r.yg)("td",{parentName:"tr",align:null},"O(1)*")))),(0,r.yg)("p",null,"*"," When position is known, otherwise O(n) to find position"),(0,r.yg)("h2",{id:"space-complexity"},"Space Complexity"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"O(n) where n is the number of nodes")),(0,r.yg)("h2",{id:"advantages"},"Advantages"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Dynamic size"),(0,r.yg)("li",{parentName:"ol"},"Efficient insertion/deletion at beginning"),(0,r.yg)("li",{parentName:"ol"},"No memory wastage"),(0,r.yg)("li",{parentName:"ol"},"Implementation of other data structures (stacks, queues)")),(0,r.yg)("h2",{id:"disadvantages"},"Disadvantages"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"No random access"),(0,r.yg)("li",{parentName:"ol"},"Extra memory for pointers"),(0,r.yg)("li",{parentName:"ol"},"Not cache friendly"),(0,r.yg)("li",{parentName:"ol"},"No reverse traversal (in singly linked list)")),(0,r.yg)("h2",{id:"real-world-applications"},"Real-world Applications"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Implementation of file systems"),(0,r.yg)("li",{parentName:"ol"},"Previous/Next page in web browsers"),(0,r.yg)("li",{parentName:"ol"},"Music playlist management"),(0,r.yg)("li",{parentName:"ol"},"Undo/Redo operations in software"),(0,r.yg)("li",{parentName:"ol"},"Symbol table management in compiler design")),(0,r.yg)("h2",{id:"common-interview-problems"},"Common Interview Problems"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Reverse a linked list"),(0,r.yg)("li",{parentName:"ol"},"Detect cycle in a linked list"),(0,r.yg)("li",{parentName:"ol"},"Find middle element"),(0,r.yg)("li",{parentName:"ol"},"Merge two sorted lists"),(0,r.yg)("li",{parentName:"ol"},"Remove nth node from end")),(0,r.yg)("h2",{id:"common-techniques"},"Common Techniques"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Two-pointer technique"),(0,r.yg)("li",{parentName:"ol"},"Floyd's cycle finding algorithm"),(0,r.yg)("li",{parentName:"ol"},"Dummy head node"),(0,r.yg)("li",{parentName:"ol"},"Runner technique"),(0,r.yg)("li",{parentName:"ol"},"Recursive solutions")),(0,r.yg)("h2",{id:"references"},"References"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/data-structures/linked-list/"},"GeeksforGeeks - Linked List Data Structure")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://leetcode.com/tag/linked-list/"},"LeetCode Linked List Problems"))))}y.isMDXComponent=!0}}]);