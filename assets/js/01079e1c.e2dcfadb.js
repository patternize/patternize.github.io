"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[9347],{3069:(e,t,a)=>{a.r(t),a.d(t,{ConcurrencySlideShow:()=>m,FiberSlideShow:()=>u,StackSlideShow:()=>g,assets:()=>p,contentTitle:()=>l,default:()=>w,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=a(8168),i=a(8587),o=(a(6540),a(5680)),n=a(8299);const s=["components"],c={slug:"intro-to-react-fiber",title:"Introduction to React Fiber",description:"A comprehensive guide to understanding React Fiber, its architecture, and how it improves React performance",keywords:["react","react fiber","javascript","web development","performance"],image:"./diff.jpg",authors:["gazcn007"],tags:["react","javascript","web development"]},l=void 0,d={unversionedId:"Algorithms/ReactFiber/index",id:"Algorithms/ReactFiber/index",title:"Introduction to React Fiber",description:"A comprehensive guide to understanding React Fiber, its architecture, and how it improves React performance",source:"@site/docs/Algorithms/ReactFiber/index.md",sourceDirName:"Algorithms/ReactFiber",slug:"/Algorithms/ReactFiber/intro-to-react-fiber",permalink:"/docs/Algorithms/ReactFiber/intro-to-react-fiber",draft:!1,tags:[{label:"react",permalink:"/docs/tags/react"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"web development",permalink:"/docs/tags/web-development"}],version:"current",frontMatter:{slug:"intro-to-react-fiber",title:"Introduction to React Fiber",description:"A comprehensive guide to understanding React Fiber, its architecture, and how it improves React performance",keywords:["react","react fiber","javascript","web development","performance"],image:"./diff.jpg",authors:["gazcn007"],tags:["react","javascript","web development"]},sidebar:"Algorithms",previous:{title:"Merge Sort",permalink:"/docs/Algorithms/Sorting/MergeSort"}},p={image:a(8537).A},h=[{value:"Diff Calculation of React",id:"diff-calculation-of-react",level:3},{value:"Problem with Recursion",id:"problem-with-recursion",level:3},{value:"Solution to the problems - Morris Traversal",id:"solution-to-the-problems---morris-traversal",level:2},{value:"React Fiber with concurrency",id:"react-fiber-with-concurrency",level:2}],g=()=>(0,o.yg)(n.pB,{maxWidth:"1000px",maxHeight:"460px",images:["/slideshow/React-Stack/React-Fiber.001.jpeg","/slideshow/React-Stack/React-Fiber.002.jpeg","/slideshow/React-Stack/React-Fiber.003.jpeg","/slideshow/React-Stack/React-Fiber.004.jpeg","/slideshow/React-Stack/React-Fiber.005.jpeg","/slideshow/React-Stack/React-Fiber.006.jpeg","/slideshow/React-Stack/React-Fiber.007.jpeg"],mdxType:"SlideShow"}),u=()=>(0,o.yg)(n.pB,{maxWidth:"1000px",maxHeight:"460px",images:["/slideshow/React-Fiber/React-Fiber.001.jpeg","/slideshow/React-Fiber/React-Fiber.002.jpeg","/slideshow/React-Fiber/React-Fiber.003.jpeg","/slideshow/React-Fiber/React-Fiber.004.jpeg","/slideshow/React-Fiber/React-Fiber.005.jpeg","/slideshow/React-Fiber/React-Fiber.006.jpeg","/slideshow/React-Fiber/React-Fiber.007.jpeg","/slideshow/React-Fiber/React-Fiber.008.jpeg","/slideshow/React-Fiber/React-Fiber.009.jpeg","/slideshow/React-Fiber/React-Fiber.010.jpeg","/slideshow/React-Fiber/React-Fiber.011.jpeg"],mdxType:"SlideShow"}),m=()=>(0,o.yg)(n.pB,{maxWidth:"1000px",maxHeight:"460px",images:["/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.001.jpeg","/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.002.jpeg","/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.003.jpeg","/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.004.jpeg","/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.005.jpeg","/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.006.jpeg","/slideshow/React-Fiber-Concurrency/React-Fiber-Concurrency.007.jpeg"],mdxType:"SlideShow"}),b={toc:h,StackSlideShow:g,FiberSlideShow:u,ConcurrencySlideShow:m},y="wrapper";function w(e){let{components:t}=e,c=(0,i.A)(e,s);return(0,o.yg)(y,(0,r.A)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This blog will explain React Fiber Internal Algorithms, we will:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Revisit how React diff works"),(0,o.yg)("li",{parentName:"ul"},"Problems with Tree Traversal"),(0,o.yg)("li",{parentName:"ul"},"Morris Traversal")),(0,o.yg)("p",{parentName:"admonition"},"It's recommended to have a basic understanding of React, virtualDOM, and diff before reading this blog.")),(0,o.yg)("p",null,"You can first experience the difference between React Fiber (v17+) and pre-Fiber (v16) by playing with the playground below:"),(0,o.yg)(n.w6,{mdxType:"ReactFiber"}),(0,o.yg)("p",null,"You can tell a huge difference between the two versions, the old reconcilor is very slow, but the fiber one is very smooth."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(8537).A,width:"1397",height:"515"})),(0,o.yg)("h3",{id:"diff-calculation-of-react"},"Diff Calculation of React"),(0,o.yg)("p",null,"React's diff calculation is based on the virtualDOM, which is a tree structure that represents the UI. When a state change happens, React will calculate the difference between the old virtualDOM and the new virtualDOM, and then apply the changes to the realDOM."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"MinimalEDTrees",src:a(5061).A,width:"897",height:"396"})),(0,o.yg)("p",null,"However, calculating the edit distance of two unordered trees is NP-Complete, and the standard algorithm needs at least a runtime of ",(0,o.yg)("strong",{parentName:"p"},"O(n^3)"),"."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"There are papers that show that the problem is NP-Complete. Because it is equivalent to a graph isomorphism problem."),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("img",{alt:"Np-Hard.jpg",src:a(4621).A,width:"1550",height:"736"}))),(0,o.yg)("p",null,"React uses a ",(0,o.yg)("strong",{parentName:"p"},"heuristic approach")," that compares nodes level-by-level rather than doing an exhaustive node-by-node comparison. While this may sometimes update more nodes than strictly necessary, it ensures no required updates are missed while being much more efficient than a full tree traversal. The algorithm trades perfect accuracy for speed and predictability."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(2177).A,width:"1450",height:"784"})),(0,o.yg)("p",null,"You can see the heuristic approach of diff traversal in the gif below - ",(0,o.yg)("strong",{parentName:"p"},"React compares the tree level by level instead of node by node.")),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(756).A,width:"1080",height:"608"})),(0,o.yg)("h3",{id:"problem-with-recursion"},"Problem with Recursion"),(0,o.yg)("p",null,"What\u2019s wrong with doing a full tree traversal for diff in the above animation?"),(0,o.yg)("p",null,"Well, there are two problems with traversing the tree using recursion, we all know in computer science:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"For any tree recursion, the call stack is O(n)"),(0,o.yg)("li",{parentName:"ol"},"It is impossible to pause the traversal and stop the stack from growing while you are doing recursion.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Here is an interactive slide show of the call stack of the recursion stack:")),(0,o.yg)("p",null,"(You can navigate back and forth using Previous and Next button)"),(0,o.yg)(g,{mdxType:"StackSlideShow"}),(0,o.yg)("h2",{id:"solution-to-the-problems---morris-traversal"},"Solution to the problems - Morris Traversal"),(0,o.yg)("p",null,"Morris Traversal is a way to traverse a tree without using recursion. It is a linear time algorithm that uses a single stack to store the nodes."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Here is an interactive slide show of traversing the tree with Morris Traversal:")),(0,o.yg)(u,{mdxType:"FiberSlideShow"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"With Morris Traversal, the call stack is constant O(1) space. Runtime is O(1) for each evaluation. And you can pause the traversal anytime!")),(0,o.yg)("p",null,"This is exactly what React Fiber is doing in their code - adding more path between the nodes to turn a tree into a graph like Morris Traversal."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(478).A,width:"1575",height:"735"})),(0,o.yg)("h2",{id:"react-fiber-with-concurrency"},"React Fiber with concurrency"),(0,o.yg)("p",null,"What you can do with fiber once you have O(1) time and space for each evaluation and being able to pause the traversal is concurrent rendering."),(0,o.yg)("p",null,"This is how React Fiber achieves concurrent rendering, you can see the animation below:"),(0,o.yg)(m,{mdxType:"ConcurrencySlideShow"}))}w.isMDXComponent=!0},756:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/DiffTraversal-889ec8142ff7c31a013f2f57dfe46867.gif"},5061:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/MinimalEDTrees-08c1facdb11a1cf83054da52634429fc.jpg"},4621:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/NpHard-0139db9d92a8b52987f0d6e4e58735da.jpg"},2177:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/ReactDoc-c51e67f9033d597d8959536212acfc74.jpg"},8537:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/diff-710159a5e0171ee85fb719fbcfeeb6eb.jpg"},478:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/graph-a6fc24740e8fb9a03014e23ff49ce6a7.jpg"}}]);