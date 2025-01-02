"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[745],{6633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var i=t(8168),a=t(8587),r=(t(6540),t(5680)),s=t(543);const o=["components"],l={id:"Insertion",title:"Linked List Insertion",sidebar_label:"Insertion Operations"},u="Linked List Insertion",d={unversionedId:"DataStructures/Basic/LinkedList/Insertion",id:"DataStructures/Basic/LinkedList/Insertion",title:"Linked List Insertion",description:"Visualization",source:"@site/docs/DataStructures/Basic/LinkedList/Insertion.md",sourceDirName:"DataStructures/Basic/LinkedList",slug:"/DataStructures/Basic/LinkedList/Insertion",permalink:"/docs/DataStructures/Basic/LinkedList/Insertion",draft:!1,tags:[],version:"current",frontMatter:{id:"Insertion",title:"Linked List Insertion",sidebar_label:"Insertion Operations"},sidebar:"Data Structure",previous:{title:"Introduction",permalink:"/docs/DataStructures/Basic/LinkedList/Introduction"},next:{title:"Deletion Operations",permalink:"/docs/DataStructures/Basic/LinkedList/Deletion"}},c={},p=[{value:"Visualization",id:"visualization",level:2},{value:"Types of Insertion",id:"types-of-insertion",level:2},{value:"1. Insert at Head",id:"1-insert-at-head",level:3},{value:"2. Insert at Tail",id:"2-insert-at-tail",level:3},{value:"3. Insert at Position",id:"3-insert-at-position",level:3},{value:"Common Insertion Patterns",id:"common-insertion-patterns",level:2}],m={toc:p},g="wrapper";function y(e){let{components:n}=e,t=(0,a.A)(e,o);return(0,r.yg)(g,(0,i.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"linked-list-insertion"},"Linked List Insertion"),(0,r.yg)("h2",{id:"visualization"},"Visualization"),(0,r.yg)("p",null,"Watch how elements are inserted into a linked list:"),(0,r.yg)(s.$D,{mdxType:"LLInsertOperation"}),(0,r.yg)("h2",{id:"types-of-insertion"},"Types of Insertion"),(0,r.yg)("h3",{id:"1-insert-at-head"},"1. Insert at Head"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Time Complexity: O(1)"),(0,r.yg)("li",{parentName:"ul"},"Most efficient insertion operation")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public void insertAtHead(int val) {\n    ListNode newNode = new ListNode(val);\n    newNode.next = head;\n    head = newNode;\n}\n")),(0,r.yg)("h3",{id:"2-insert-at-tail"},"2. Insert at Tail"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Time Complexity: O(n)"),(0,r.yg)("li",{parentName:"ul"},"Requires traversal to end")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public void insertAtTail(int val) {\n    ListNode newNode = new ListNode(val);\n    if (head == null) {\n        head = newNode;\n        return;\n    }\n    \n    ListNode current = head;\n    while (current.next != null) {\n        current = current.next;\n    }\n    current.next = newNode;\n}\n")),(0,r.yg)("h3",{id:"3-insert-at-position"},"3. Insert at Position"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Time Complexity: O(n)"),(0,r.yg)("li",{parentName:"ul"},"Requires traversal to position")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public void insertAtPosition(int val, int position) {\n    if (position == 0) {\n        insertAtHead(val);\n        return;\n    }\n    \n    ListNode newNode = new ListNode(val);\n    ListNode current = head;\n    for (int i = 0; i < position - 1 && current != null; i++) {\n        current = current.next;\n    }\n    \n    if (current == null) return;\n    \n    newNode.next = current.next;\n    current.next = newNode;\n}\n")),(0,r.yg)("h2",{id:"common-insertion-patterns"},"Common Insertion Patterns"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Using dummy head node"),(0,r.yg)("li",{parentName:"ol"},"Maintaining tail pointer"),(0,r.yg)("li",{parentName:"ol"},"Two-pointer technique for position finding"),(0,r.yg)("li",{parentName:"ol"},"Recursive insertion")))}y.isMDXComponent=!0}}]);