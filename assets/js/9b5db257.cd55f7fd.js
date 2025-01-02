"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[1389],{2796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var l=n(8168),i=n(8587),a=(n(6540),n(5680)),r=n(543);const o=["components"],u={id:"Deletion",title:"Linked List Deletion",sidebar_label:"Deletion Operations"},d="Linked List Deletion",s={unversionedId:"DataStructures/Basic/LinkedList/Deletion",id:"DataStructures/Basic/LinkedList/Deletion",title:"Linked List Deletion",description:"Visualization",source:"@site/docs/DataStructures/Basic/LinkedList/Deletion.md",sourceDirName:"DataStructures/Basic/LinkedList",slug:"/DataStructures/Basic/LinkedList/Deletion",permalink:"/docs/DataStructures/Basic/LinkedList/Deletion",draft:!1,tags:[],version:"current",frontMatter:{id:"Deletion",title:"Linked List Deletion",sidebar_label:"Deletion Operations"},sidebar:"Data Structure",previous:{title:"Insertion Operations",permalink:"/docs/DataStructures/Basic/LinkedList/Insertion"},next:{title:"VList",permalink:"/docs/DataStructures/Advanced/VList"}},c={},m=[{value:"Visualization",id:"visualization",level:2},{value:"Types of Deletion",id:"types-of-deletion",level:2},{value:"1. Delete from Head",id:"1-delete-from-head",level:3},{value:"2. Delete from Tail",id:"2-delete-from-tail",level:3},{value:"3. Delete by Value",id:"3-delete-by-value",level:3},{value:"Common Deletion Patterns",id:"common-deletion-patterns",level:2}],p={toc:m},y="wrapper";function g(e){let{components:t}=e,n=(0,i.A)(e,o);return(0,a.yg)(y,(0,l.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"linked-list-deletion"},"Linked List Deletion"),(0,a.yg)("h2",{id:"visualization"},"Visualization"),(0,a.yg)("p",null,"Watch how elements are removed from a linked list:"),(0,a.yg)(r.eX,{mdxType:"LLRemoveOperation"}),(0,a.yg)("h2",{id:"types-of-deletion"},"Types of Deletion"),(0,a.yg)("h3",{id:"1-delete-from-head"},"1. Delete from Head"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Time Complexity: O(1)"),(0,a.yg)("li",{parentName:"ul"},"Most efficient deletion operation")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public void deleteHead() {\n    if (head != null) {\n        head = head.next;\n    }\n}\n")),(0,a.yg)("h3",{id:"2-delete-from-tail"},"2. Delete from Tail"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Time Complexity: O(n)"),(0,a.yg)("li",{parentName:"ul"},"Requires traversal to second-last node")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public void deleteTail() {\n    if (head == null || head.next == null) {\n        head = null;\n        return;\n    }\n    \n    ListNode current = head;\n    while (current.next.next != null) {\n        current = current.next;\n    }\n    current.next = null;\n}\n")),(0,a.yg)("h3",{id:"3-delete-by-value"},"3. Delete by Value"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Time Complexity: O(n)"),(0,a.yg)("li",{parentName:"ul"},"Requires traversal to find value")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"public void deleteValue(int val) {\n    if (head == null) return;\n    \n    if (head.val == val) {\n        head = head.next;\n        return;\n    }\n    \n    ListNode current = head;\n    while (current.next != null && current.next.val != val) {\n        current = current.next;\n    }\n    \n    if (current.next != null) {\n        current.next = current.next.next;\n    }\n}\n")),(0,a.yg)("h2",{id:"common-deletion-patterns"},"Common Deletion Patterns"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Using dummy head node"),(0,a.yg)("li",{parentName:"ol"},"Two-pointer technique"),(0,a.yg)("li",{parentName:"ol"},"Handle edge cases (empty list, single node)"),(0,a.yg)("li",{parentName:"ol"},"Recursive deletion")))}g.isMDXComponent=!0}}]);