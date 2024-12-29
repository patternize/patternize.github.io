"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[1986],{3990:(e,t,a)=>{a.r(t),a.d(t,{BubbleSort:()=>y,assets:()=>g,contentTitle:()=>u,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var r=a(8168),i=a(8587),n=a(6540),l=a(5680),o=a(8299);const s=["components"],d={id:"BubbleSort",title:"Bubble Sort",sidebar_label:"Bubble Sort"},u=void 0,p={unversionedId:"Algorithms/Sorting/BubbleSort",id:"Algorithms/Sorting/BubbleSort",title:"Bubble Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/BubbleSort.md",sourceDirName:"Algorithms/Sorting",slug:"/Algorithms/Sorting/BubbleSort",permalink:"/docs/Algorithms/Sorting/BubbleSort",draft:!1,tags:[],version:"current",frontMatter:{id:"BubbleSort",title:"Bubble Sort",sidebar_label:"Bubble Sort"},sidebar:"Algorithms",next:{title:"Odd-Even Sort",permalink:"/docs/Algorithms/Sorting/OddEvenSort"}},g={},m=[{value:"Idea",id:"idea",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Time and Space Analysis",id:"time-and-space-analysis",level:2},{value:"Properties",id:"properties",level:2},{value:"Variants",id:"variants",level:2}],y=e=>{let{data:t}=e;const[a,r]=n.useState(0);return(0,l.yg)("div",{className:"controller"},(0,l.yg)(o.O3,{data:t[a],mdxType:"Array"}),(0,l.yg)(o.gD,{data:t[a],mdxType:"VerticalBarChart"}),(0,l.yg)("br",null),(0,l.yg)(o.$n,{onClick:()=>r(a-1),disabled:0==a,mdxType:"Button"},"Previous"),(0,l.yg)(o.$n,{onClick:()=>r(a+1),disabled:a==t.length-1,mdxType:"Button"},"Next"))},b={toc:m,BubbleSort:y},h="wrapper";function c(e){let{components:t}=e,a=(0,i.A)(e,s);return(0,l.yg)(h,(0,r.A)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"idea"},"Idea"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"compare each item wth the item next to it, and swap positions if required"),(0,l.yg)("li",{parentName:"ul"},"the largest element will be bubbled to the end of the array"),(0,l.yg)("li",{parentName:"ul"},"algorithm repeats until we have a pass without swapping any elements")),(0,l.yg)("h2",{id:"visualization"},"Visualization"),(0,l.yg)(y,{data:[[5,1,4,2,8],[1,5,4,2,8],[1,4,5,2,8],[1,4,2,5,8],[1,2,4,5,8]],mdxType:"BubbleSort"}),(0,l.yg)("h2",{id:"implementation"},"Implementation"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"for every step, move largest element in left unsorted array to the end; in this caes, avoid inner loop to iterate through right sorted subarray"),(0,l.yg)("li",{parentName:"ul"},"for every step, swap unordered adjacent pair until no swap is needed "),(0,l.yg)("li",{parentName:"ul"},"note that in one pass, more than one element can be placed into their final positions, so the position after last swap is sorted and do not need to traverse again")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"void bubbleSort(int arr[]) { \n    int n = arr.length; \n    for (int i = 0; i < n-1; i++) \n        for (int j = 0; j < n-i-1; j++) \n            if (arr[j] > arr[j+1]) { \n                // swap arr[j+1] and arr[i] \n                int temp = arr[j]; \n                arr[j] = arr[j+1]; \n                arr[j+1] = temp; \n            } \n} \n")),(0,l.yg)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Time O(n^2)"),(0,l.yg)("li",{parentName:"ul"},"Space O(1)")),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"the algorithm garantees that the list is sorted"),(0,l.yg)("li",{parentName:"ul"},"Turtle and Hare Problem:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"larger elements at the beginning get swapped to the end quickly, but small elements at the end get swapped very slowly to the beginning"),(0,l.yg)("li",{parentName:"ul"},"this property is good to find k largest elements - use outer loop of bubble sort for k times")))),(0,l.yg)("h2",{id:"variants"},"Variants"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/odd-even-sort-brick-sort/"},"Odd Even Sort / Brick Sort")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/cocktail-sort/"},"Cocktail Sort"))))}c.isMDXComponent=!0}}]);