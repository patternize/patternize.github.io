"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[7144],{8478:(e,n,i)=>{i.d(n,{A:()=>r});var t=i(6540),a=i(2303);function r(e){let{children:n,fallback:i}=e;return(0,a.A)()?t.createElement(t.Fragment,null,null==n?void 0:n()):null!=i?i:null}},6442:(e,n,i)=>{i.r(n),i.d(n,{Backtracking:()=>d,assets:()=>g,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=i(8168),a=i(8587),r=(i(6540),i(5680)),o=i(3973),l=i(8478);const s=["components"],c={id:"Introduction",title:"Backtracking Algorithm",sidebar_label:"Introduction to Backtracking",description:"Learn backtracking algorithms with step-by-step examples. Master problem-solving techniques for combinations, permutations, and optimization problems.",keywords:["backtracking algorithm","backtracking examples","recursive backtracking","algorithm optimization","problem solving","programming techniques"],sidebar_position:1},m=void 0,u={unversionedId:"Algorithms/Backtracking/Introduction",id:"Algorithms/Backtracking/Introduction",title:"Backtracking Algorithm",description:"Learn backtracking algorithms with step-by-step examples. Master problem-solving techniques for combinations, permutations, and optimization problems.",source:"@site/docs/Algorithms/Backtracking/Introduction.md",sourceDirName:"Algorithms/Backtracking",slug:"/Algorithms/Backtracking/Introduction",permalink:"/Algorithms/Backtracking/Introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Introduction",title:"Backtracking Algorithm",sidebar_label:"Introduction to Backtracking",description:"Learn backtracking algorithms with step-by-step examples. Master problem-solving techniques for combinations, permutations, and optimization problems.",keywords:["backtracking algorithm","backtracking examples","recursive backtracking","algorithm optimization","problem solving","programming techniques"],sidebar_position:1},sidebar:"Algorithms",previous:{title:"Selection Sort",permalink:"/Algorithms/Sorting/SelectionSort"},next:{title:"Confusing Number Algorithm",permalink:"/Algorithms/Backtracking/confusing-number"}},g={},p=[{value:"Backtracking: The Art of Exploring All Possibilities",id:"backtracking-the-art-of-exploring-all-possibilities",level:2},{value:"How to Spot a Backtracking Problem \ud83d\udd0d",id:"how-to-spot-a-backtracking-problem-",level:2}],d=()=>{const e={name:"\ud83e\udd43",children:[{name:"Bourbon",children:[{name:"Mint",children:[{name:"Mint Julep"}]},{name:"Vermouth",children:[{name:"Manhattan"}]},{name:"Lime",children:[{name:"Cherry",children:[{name:"Whiskey Sour"}]}]},{name:"Ice Cube",children:[{name:"Orange Peel",children:[{name:"Old Fashioned"}]}]}]},{name:"Vodka",children:[{name:"Tomato",children:[{name:"Bloody Mary"}]},{name:"Kahlua",children:[{name:"Cream",children:[{name:"White Russian"}]}]},{name:"Cranberry",children:[{name:"Grapefruit",children:[{name:"Sea Breeze"},{name:"Lime",children:[{name:"Cosmopolitan"}]}]}]}]},{name:"Rum",children:[{name:"Pineapple",children:[{name:"Coconut",children:[{name:"Pina Colada"}]}]},{name:"Lime",children:[{name:"Mojito"},{name:"Cola",children:[{name:"Cuba Libre"}]}]}]}]};return(0,r.yg)(l.A,{mdxType:"BrowserOnly"},(()=>(0,r.yg)(o.Lc,{data:e,mdxType:"TreeChart"})))},h={toc:p,Backtracking:d},k="wrapper";function y(e){let{components:n}=e,i=(0,a.A)(e,s);return(0,r.yg)(k,(0,t.A)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Ever faced these intriguing puzzles in your daily life? \ud83e\udd14"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Cracking the perfect combination for your luggage lock - how many cool patterns could you create? \ud83d\udd10"),(0,r.yg)("li",{parentName:"ul"},"Playing interior designer in your living room - what's the most stylish way to arrange your furniture? \ud83d\udcfa"),(0,r.yg)("li",{parentName:"ul"},"Here's a fun one: channeling your inner mixologist - what amazing cocktails could you craft from your home bar? \ud83c\udf79")),(0,r.yg)(d,{mdxType:"Backtracking"}),(0,r.yg)("h2",{id:"backtracking-the-art-of-exploring-all-possibilities"},"Backtracking: The Art of Exploring All Possibilities"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'"Backtracking is like being a detective who methodically explores every possible clue to solve a mystery. It\'s an algorithmic technique that systematically searches through all potential combinations to find the perfect solution."')),(0,r.yg)("h2",{id:"how-to-spot-a-backtracking-problem-"},"How to Spot a Backtracking Problem \ud83d\udd0d"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"The Combination Challenge"),": You're dealing with puzzles involving combinations, permutations, or multiple possible solutions. Think of it like creating different playlists from your favorite songs - there are many valid ways to arrange them!")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"The Recursive Dance"),": Your solution needs both iteration and recursion working together in perfect harmony. Like a nested loop within a recursive function, where each iteration opens up new possibilities:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"void someRecursiveFunction(int x, int y){\n    /* do something... */\n    for(int i = 0; i < y; i++){\n        /* do something in the for loop... */\n        // call someRecursiveFunction with updated parameters\n        someRecursiveFunction(x, y+i);\n    }\n    /* do something else... */\n}\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"The Base Case"),": You need to identify the point where you've found a valid solution. This is where you'll stop the recursion and return the result.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The runtime of backtracking is O(n!)")),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Click to see example code"),"Yes, this is a backtracking problem!",(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    /* Declare private data structures: */\n    private ArrayList<Integer> solutions;\n    public List<List<Integer>> permute(int[] nums) {\n        // declare private data structures\n        solutions = new ArrayList<>();\n        // call backtrack\n        backtrack(param1, param2);\n        // return results\n        return this.results;\n    }\n\n    private void backtrack(int param1, int param2){\n        // handle base case!\n        if(BaseCase qualified){\n            // Add current result to the solution collection\n            solutions.add(param2)\n            return;\n        }\n\n        for(int i = 0; i< param1; i++){\n            // 1. Handle edge case\n            if(count[i] == 0) continue;\n            // 2. Prepare a possible solution using some variable\n            result.set(level, nums[i]);\n            // 3. Remove used variable in step 2\n            count[i]--;\n            // 4. Call backtrack recursively\n            backtrack(param1, param2+1);\n            // 5. Add used variable in step 2 and 4 back to the set\n            count[i]++;\n        }\n    }\n}\n"))))}y.isMDXComponent=!0}}]);