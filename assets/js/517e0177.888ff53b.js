"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[9282],{1067:(e,t,a)=>{a.r(t),a.d(t,{InsertionSort:()=>u,assets:()=>g,contentTitle:()=>p,default:()=>S,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var r=a(8168),n=a(8587),i=a(6540),l=a(5680),o=a(543);const s=["components"],d={id:"InsertionSort",title:"Insertion Sort",sidebar_label:"Insertion Sort"},p=void 0,m={unversionedId:"Algorithms/Sorting/InsertionSort",id:"Algorithms/Sorting/InsertionSort",title:"Insertion Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/InsertionSort.md",sourceDirName:"Algorithms/Sorting",slug:"/Algorithms/Sorting/InsertionSort",permalink:"/docs/Algorithms/Sorting/InsertionSort",draft:!1,tags:[],version:"current",frontMatter:{id:"InsertionSort",title:"Insertion Sort",sidebar_label:"Insertion Sort"},sidebar:"Algorithms",previous:{title:"Selection Sort",permalink:"/docs/Algorithms/Sorting/SelectionSort"},next:{title:"Odd-Even Sort",permalink:"/docs/Algorithms/Sorting/OddEvenSort"}},g={},y=[{value:"Idea",id:"idea",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Time and Space Analysis",id:"time-and-space-analysis",level:2},{value:"Properties",id:"properties",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Variants",id:"variants",level:2}],u=e=>{let{data:t}=e;const[a,r]=i.useState(0);return(0,l.yg)("div",{className:"controller"},(0,l.yg)(o.O3,{data:t[a],mdxType:"Array"}),(0,l.yg)(o.gD,{data:t[a],mdxType:"VerticalBarChart"}),(0,l.yg)("br",null),(0,l.yg)(o.$n,{onClick:()=>r(a-1),disabled:0==a,mdxType:"Button"},"Previous"),(0,l.yg)(o.$n,{onClick:()=>r(a+1),disabled:a==t.length-1,mdxType:"Button"},"Next"),(0,l.yg)("span",{style:{marginLeft:"10px"}},["Initial array: [7,3,5,1,9,4,6,2,8]","Take 3: Compare with 7, shift 7 right, place 3 at start","Take 5: Compare with 7 and 3, place 5 between 3 and 7","Take 1: Compare and shift all larger elements right, place 1 at start","Take 9: Compare with 7, no shift needed as 9 > 7","Take 4: Compare and shift larger elements, place 4 between 3 and 5","Take 6: Compare and shift, place 6 between 5 and 7","Take 2: Compare and shift larger elements, place 2 between 1 and 3","Take 8: Compare and shift, place 8 between 7 and 9"][a]))},c={toc:y,InsertionSort:u},h="wrapper";function S(e){let{components:t}=e,a=(0,n.A)(e,s);return(0,l.yg)(h,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"idea"},"Idea"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The algorithm works similar to sorting playing cards in your hands"),(0,l.yg)("li",{parentName:"ul"},"Start from the second element, compare with previous elements and insert it in its correct position"),(0,l.yg)("li",{parentName:"ul"},"The array is virtually split into a sorted and unsorted part"),(0,l.yg)("li",{parentName:"ul"},"Values from the unsorted part are picked and placed in the correct position in the sorted part")),(0,l.yg)("h2",{id:"visualization"},"Visualization"),(0,l.yg)("br",null),(0,l.yg)(u,{data:[[7,3,5,1,9,4,6,2,8],[3,7,5,1,9,4,6,2,8],[3,5,7,1,9,4,6,2,8],[1,3,5,7,9,4,6,2,8],[1,3,5,7,9,4,6,2,8],[1,3,4,5,7,9,6,2,8],[1,3,4,5,6,7,9,2,8],[1,2,3,4,5,6,7,9,8],[1,2,3,4,5,6,7,8,9]],mdxType:"InsertionSort"}),(0,l.yg)("h2",{id:"implementation"},"Implementation"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"void insertionSort(int arr[]) {  \n    int n = arr.length;\n    for (int i = 1; i < n; i++) {  \n        int key = arr[i];  \n        int j = i - 1;  \n        \n        // Move elements that are greater than key \n        // to one position ahead of their current position\n        while (j >= 0 && arr[j] > key) {  \n            arr[j + 1] = arr[j];  \n            j = j - 1;  \n        }  \n        arr[j + 1] = key;  \n    }  \n}  \n")),(0,l.yg)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Time Complexity:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Best Case: O(n) when array is already sorted"),(0,l.yg)("li",{parentName:"ul"},"Average Case: O(n\xb2)"),(0,l.yg)("li",{parentName:"ul"},"Worst Case: O(n\xb2) when array is reverse sorted"))),(0,l.yg)("li",{parentName:"ul"},"Space Complexity: O(1) as it sorts in-place")),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Stable sorting algorithm"),(0,l.yg)("li",{parentName:"ul"},"In-place algorithm"),(0,l.yg)("li",{parentName:"ul"},"Adaptive: number of operations reduces if array is already somewhat sorted"),(0,l.yg)("li",{parentName:"ul"},"Very efficient for small data sets"),(0,l.yg)("li",{parentName:"ul"},"More efficient in practice than bubble sort and selection sort")),(0,l.yg)("h2",{id:"use-cases"},"Use Cases"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Small data sets"),(0,l.yg)("li",{parentName:"ul"},"Nearly sorted arrays"),(0,l.yg)("li",{parentName:"ul"},"When stable sort is required"),(0,l.yg)("li",{parentName:"ul"},"When memory space is limited"),(0,l.yg)("li",{parentName:"ul"},"Online algorithm (can sort as data is being received)")),(0,l.yg)("h2",{id:"variants"},"Variants"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Binary Insertion Sort (uses binary search to find insertion position)"),(0,l.yg)("li",{parentName:"ul"},"Shell Sort (extension of insertion sort that allows exchange of items that are far apart)")))}S.isMDXComponent=!0}}]);