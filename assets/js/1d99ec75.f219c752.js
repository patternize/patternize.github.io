"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[3334],{1709:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>p,contentTitle:()=>h,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>m});var a=e(8168),r=e(8587),s=(e(6540),e(5680)),o=e(3402);const n=["components"],l={slug:"dijkstra-algorithm",title:"Dijkstra's Algorithm",description:"Understanding Dijkstra's shortest path algorithm and its implementation",keywords:["dijkstra","shortest path","graph algorithms","weighted graphs"]},h="Dijkstra's Algorithm",g={unversionedId:"Algorithms/Graph/Dijkstra",id:"Algorithms/Graph/Dijkstra",title:"Dijkstra's Algorithm",description:"Understanding Dijkstra's shortest path algorithm and its implementation",source:"@site/docs/Algorithms/Graph/Dijkstra.md",sourceDirName:"Algorithms/Graph",slug:"/Algorithms/Graph/dijkstra-algorithm",permalink:"/docs/Algorithms/Graph/dijkstra-algorithm",draft:!1,tags:[],version:"current",frontMatter:{slug:"dijkstra-algorithm",title:"Dijkstra's Algorithm",description:"Understanding Dijkstra's shortest path algorithm and its implementation",keywords:["dijkstra","shortest path","graph algorithms","weighted graphs"]},sidebar:"Algorithms",previous:{title:"Depth First Search (DFS)",permalink:"/docs/Algorithms/Graph/depth-first-search"},next:{title:"Introduction to React Fiber",permalink:"/docs/Algorithms/ReactFiber/intro-to-react-fiber"}},p={},m=[{value:"Interactive Visualization",id:"interactive-visualization",level:2},{value:"How Dijkstra&#39;s Algorithm Works",id:"how-dijkstras-algorithm-works",level:2},{value:"Key Characteristics",id:"key-characteristics",level:2},{value:"Common Applications",id:"common-applications",level:2}],d={toc:m},c="wrapper";function u(t){let{components:i}=t,e=(0,r.A)(t,n);return(0,s.yg)(c,(0,a.A)({},d,e,{components:i,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"dijkstras-algorithm"},"Dijkstra's Algorithm"),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},"Dijkstra's algorithm finds the shortest path between nodes in a weighted graph, which may represent, for example, road networks.")),(0,s.yg)("h2",{id:"interactive-visualization"},"Interactive Visualization"),(0,s.yg)("p",null,"Try Dijkstra's algorithm on this interactive graph:"),(0,s.yg)(o.fp,{mdxType:"GraphDijkstra"}),(0,s.yg)("h2",{id:"how-dijkstras-algorithm-works"},"How Dijkstra's Algorithm Works"),(0,s.yg)("p",null,"The algorithm maintains a set of unvisited nodes and operates as follows:"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"Initialize distances to all vertices as infinity, except the source (which is zero)"),(0,s.yg)("li",{parentName:"ol"},"Select the unvisited vertex with the smallest distance"),(0,s.yg)("li",{parentName:"ol"},"Calculate distances to all unvisited neighbors"),(0,s.yg)("li",{parentName:"ol"},"Update the neighbor's distance if a shorter path is found"),(0,s.yg)("li",{parentName:"ol"},"Mark the current vertex as visited"),(0,s.yg)("li",{parentName:"ol"},"Repeat until all vertices are visited")),(0,s.yg)("h2",{id:"key-characteristics"},"Key Characteristics"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Uses a priority queue for efficiency"),(0,s.yg)("li",{parentName:"ul"},"Time Complexity: O((V + E) log V) with binary heap"),(0,s.yg)("li",{parentName:"ul"},"Space Complexity: O(V)"),(0,s.yg)("li",{parentName:"ul"},"Works only with non-negative weights"),(0,s.yg)("li",{parentName:"ul"},"Finds the optimal (shortest) path")),(0,s.yg)("h2",{id:"common-applications"},"Common Applications"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"GPS and Navigation systems"),(0,s.yg)("li",{parentName:"ul"},"Network routing protocols"),(0,s.yg)("li",{parentName:"ul"},"Social networks"),(0,s.yg)("li",{parentName:"ul"},"Flight scheduling"),(0,s.yg)("li",{parentName:"ul"},"Games (finding shortest path for NPCs)")),(0,s.yg)("admonition",{type:"caution"},(0,s.yg)("p",{parentName:"admonition"},"Dijkstra's algorithm doesn't work with negative edge weights. For graphs with negative weights, use the Bellman-Ford algorithm instead.")))}u.isMDXComponent=!0}}]);