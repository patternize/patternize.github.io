"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[1468],{4852:(e,t,n)=>{n.r(t),n.d(t,{SelectionSort:()=>g,assets:()=>S,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>u});var i=n(8168),a=n(8587),o=n(6540),r=n(5680),l=n(8299);const s=["components"],m={id:"SelectionSort",title:"Selection Sort",sidebar_label:"Selection Sort"},d=void 0,c={unversionedId:"Algorithms/Sorting/SelectionSort",id:"Algorithms/Sorting/SelectionSort",title:"Selection Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/SelectionSort.md",sourceDirName:"Algorithms/Sorting",slug:"/Algorithms/Sorting/SelectionSort",permalink:"/docs/Algorithms/Sorting/SelectionSort",draft:!1,tags:[],version:"current",frontMatter:{id:"SelectionSort",title:"Selection Sort",sidebar_label:"Selection Sort"},sidebar:"Algorithms",previous:{title:"Odd-Even Sort",permalink:"/docs/Algorithms/Sorting/OddEvenSort"},next:{title:"Insertion Sort",permalink:"/docs/Algorithms/Sorting/InsertionSort"}},S={},u=[{value:"Idea",id:"idea",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Time and Space Analysis",id:"time-and-space-analysis",level:2}],g=e=>{let{data:t}=e;const[n,i]=o.useState(0);return(0,r.yg)("div",{className:"controller"},(0,r.yg)(l.gD,{data:t[n],mdxType:"VerticalBarChart"}),(0,r.yg)("br",null),(0,r.yg)(l.$n,{onClick:()=>i(n-1),disabled:0==n,mdxType:"Button"},"Previous"),(0,r.yg)(l.$n,{onClick:()=>i(n+1),disabled:n==t.length-1,mdxType:"Button"},"Next"))},p={toc:u,SelectionSort:g},y="wrapper";function h(e){let{components:t}=e,n=(0,a.A)(e,s);return(0,r.yg)(y,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"idea"},"Idea"),(0,r.yg)("p",null,"The idea is to select the smallest element of remaining array and then swap it to the front."),(0,r.yg)("h2",{id:"visualization"},"Visualization"),(0,r.yg)(g,{data:[[29,72,98,13,87,66,52,51,36],[13,72,98,29,87,66,52,51,36],[13,29,98,72,87,66,52,51,36],[13,29,36,72,87,66,52,51,98],[13,29,36,51,87,66,52,72,98],[13,29,36,51,52,66,87,72,98],[13,29,36,51,52,66,72,87,98]],mdxType:"SelectionSort"}),(0,r.yg)("h2",{id:"implementation"},"Implementation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"scan array, find the minimum element's index min_idx"),(0,r.yg)("li",{parentName:"ul"},"swap the element to the index i, then incrememnt i")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class SelectionSort{\n    void selectionSort(int arr[]) {\n        int n = arr.length; \n    \n        // One by one move boundary of unsorted subarray \n        for (int i = 0; i < n-1; i++) { \n            // Find the minimum element in the input array \n            int min_idx = i; \n            for (int j = i+1; j < n; j++) \n                if (arr[j] < arr[min_idx]) \n                    min_idx = j; \n    \n            // Swap the found minimum element with the ith element\n            int temp = arr[min_idx]; \n            arr[min_idx] = arr[i]; \n            arr[i] = temp; \n        }\n    }\n}\n")),(0,r.yg)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Time O(n^2)"),(0,r.yg)("li",{parentName:"ul"},"Space O(1)")))}h.isMDXComponent=!0}}]);