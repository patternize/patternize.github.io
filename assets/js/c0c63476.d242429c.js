"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[2071],{8478:(e,r,a)=>{a.d(r,{A:()=>i});var t=a(6540),n=a(2303);function i(e){let{children:r,fallback:a}=e;return(0,n.A)()?t.createElement(t.Fragment,null,null==r?void 0:r()):null!=a?a:null}},6462:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>y});var t=a(8168),n=a(8587),i=(a(6540),a(5680)),l=a(2268),s=a(8478);const g=["components"],o={id:"MergeSort",title:"Merge Sort",sidebar_label:"Merge Sort",head:[{tag:"link",attributes:{rel:"stylesheet",href:"/css/sorting.css",precedence:"high"}}]},m=void 0,d={unversionedId:"Algorithms/Sorting/MergeSort",id:"Algorithms/Sorting/MergeSort",title:"Merge Sort",description:"Idea",source:"@site/docs/Algorithms/Sorting/MergeSort.md",sourceDirName:"Algorithms/Sorting",slug:"/Algorithms/Sorting/MergeSort",permalink:"/docs/Algorithms/Sorting/MergeSort",draft:!1,tags:[],version:"current",frontMatter:{id:"MergeSort",title:"Merge Sort",sidebar_label:"Merge Sort",head:[{tag:"link",attributes:{rel:"stylesheet",href:"/css/sorting.css",precedence:"high"}}]},sidebar:"Algorithms",previous:{title:"Odd-Even Sort",permalink:"/docs/Algorithms/Sorting/OddEvenSort"},next:{title:"Introduction to Backtracking",permalink:"/docs/Algorithms/Backtracking/Introduction"}},p={},y=[{value:"Idea",id:"idea",level:2},{value:"Visualization",id:"visualization",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Time and Space Analysis",id:"time-and-space-analysis",level:2},{value:"Properties",id:"properties",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Variants",id:"variants",level:2},{value:"References",id:"references",level:2}],u={toc:y},h="wrapper";function c(e){let{components:r}=e,a=(0,n.A)(e,g);return(0,i.yg)(h,(0,t.A)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"idea"},"Idea"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Uses divide and conquer paradigm"),(0,i.yg)("li",{parentName:"ul"},"Divides array into two halves, recursively sorts them, then merges"),(0,i.yg)("li",{parentName:"ul"},"Stable sorting algorithm that maintains relative order of equal elements"),(0,i.yg)("li",{parentName:"ul"},"Guaranteed O(n log n) performance regardless of input data")),(0,i.yg)("h2",{id:"visualization"},"Visualization"),(0,i.yg)("br",null),(0,i.yg)(s.A,{mdxType:"BrowserOnly"},(()=>(0,i.yg)(l.Nj,{data:[[6,3,8,1,5,2,7],[6,3,8,1,5,2,7],[6,3,8,1,5,2,7],[6,3,8,1,5,2,7],[3,6,8,1,5,2,7],[3,6,1,8,5,2,7],[3,6,1,8,5,2,7],[1,3,6,8,5,2,7],[1,3,6,8,2,5,7],[1,3,6,8,2,5,7],[1,2,3,5,6,7,8]],steps:["Initial array","Divide into [6,3,8,1] and [5,2,7]","Divide left: [6,3] and [8,1]","Divide further: [6] and [3]","Merge: [3,6] (sorted pair)","Divide right: [8] and [1]","Merge: [1,8] (sorted pair)","Merge left halves: [1,3,6,8]","Divide right half: [5,2] and [7]","Merge right halves: [2,5,7]","Final merge: [1,2,3,5,6,7,8]"],mdxType:"Sorting"}))),(0,i.yg)("h2",{id:"how-it-works"},"How It Works"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Divide Phase"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Recursively divide the array into two halves"),(0,i.yg)("li",{parentName:"ul"},"Continue dividing until each subarray has one element"),(0,i.yg)("li",{parentName:"ul"},"Single element arrays are considered sorted"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Merge Phase"),":"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Merge pairs of sorted subarrays to create larger sorted arrays"),(0,i.yg)("li",{parentName:"ul"},"Compare elements from both arrays and place smaller one first"),(0,i.yg)("li",{parentName:"ul"},"Continue until all elements are merged"),(0,i.yg)("li",{parentName:"ul"},"Use temporary arrays to store intermediate results"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Example Process"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"Original: [38,27,43,3,9,82,10]\n\nDivide:\n[38,27,43,3] | [9,82,10]\n[38,27] | [43,3] | [9,82] | [10]\n[38] | [27] | [43] | [3] | [9] | [82] | [10]\n\nMerge:\n[27,38] | [3,43] | [9,82] | [10]\n[3,27,38,43] | [9,10,82]\n[3,9,10,27,38,43,82]\n")))),(0,i.yg)("h2",{id:"implementation"},"Implementation"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public class MergeSort {\n    public static void mergeSort(int[] arr, int left, int right) {\n        if (left < right) {\n            int mid = (left + right) / 2;\n            \n            // Sort first and second halves\n            mergeSort(arr, left, mid);\n            mergeSort(arr, mid + 1, right);\n            \n            // Merge the sorted halves\n            merge(arr, left, mid, right);\n        }\n    }\n    \n    private static void merge(int[] arr, int left, int mid, int right) {\n        // Create temporary arrays\n        int[] leftArray = new int[mid - left + 1];\n        int[] rightArray = new int[right - mid];\n        \n        // Copy data to temporary arrays\n        for (int i = 0; i < leftArray.length; i++) {\n            leftArray[i] = arr[left + i];\n        }\n        for (int i = 0; i < rightArray.length; i++) {\n            rightArray[i] = arr[mid + 1 + i];\n        }\n        \n        // Merge the temporary arrays back\n        int i = 0, j = 0, k = left;\n        while (i < leftArray.length && j < rightArray.length) {\n            if (leftArray[i] <= rightArray[j]) {\n                arr[k] = leftArray[i];\n                i++;\n            } else {\n                arr[k] = rightArray[j];\n                j++;\n            }\n            k++;\n        }\n        \n        // Copy remaining elements if any\n        while (i < leftArray.length) {\n            arr[k] = leftArray[i];\n            i++;\n            k++;\n        }\n        while (j < rightArray.length) {\n            arr[k] = rightArray[j];\n            j++;\n            k++;\n        }\n    }\n}\n")),(0,i.yg)("h2",{id:"time-and-space-analysis"},"Time and Space Analysis"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Time Complexity:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Best Case: O(n log n)"),(0,i.yg)("li",{parentName:"ul"},"Average Case: O(n log n)"),(0,i.yg)("li",{parentName:"ul"},"Worst Case: O(n log n)"))),(0,i.yg)("li",{parentName:"ul"},"Space Complexity: O(n) for temporary arrays")),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Stable sorting algorithm"),(0,i.yg)("li",{parentName:"ul"},"Not in-place (requires extra space)"),(0,i.yg)("li",{parentName:"ul"},"Divide and conquer algorithm"),(0,i.yg)("li",{parentName:"ul"},"Predictable performance (always O(n log n))"),(0,i.yg)("li",{parentName:"ul"},"Parallelizable (different parts can be sorted concurrently)")),(0,i.yg)("h2",{id:"use-cases"},"Use Cases"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When stable sort is needed"),(0,i.yg)("li",{parentName:"ul"},"When predictable performance is required"),(0,i.yg)("li",{parentName:"ul"},"External sorting (sorting large files)"),(0,i.yg)("li",{parentName:"ul"},"When data is in linked lists (no random access needed)"),(0,i.yg)("li",{parentName:"ul"},"Parallel processing environments")),(0,i.yg)("h2",{id:"advantages"},"Advantages"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Stable sorting algorithm"),(0,i.yg)("li",{parentName:"ol"},"Guaranteed O(n log n) performance"),(0,i.yg)("li",{parentName:"ol"},"Parallelizable"),(0,i.yg)("li",{parentName:"ol"},"Works well with linked lists")),(0,i.yg)("h2",{id:"disadvantages"},"Disadvantages"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Requires O(n) extra space"),(0,i.yg)("li",{parentName:"ol"},"Overkill for small arrays"),(0,i.yg)("li",{parentName:"ol"},"Not cache friendly in basic implementation")),(0,i.yg)("h2",{id:"variants"},"Variants"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Bottom-up merge sort (iterative version)"),(0,i.yg)("li",{parentName:"ul"},"Natural merge sort"),(0,i.yg)("li",{parentName:"ul"},"Parallel merge sort"),(0,i.yg)("li",{parentName:"ul"},"In-place merge sort (complex but possible)")),(0,i.yg)("h2",{id:"references"},"References"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/merge-sort/"},"Merge Sort - GeeksforGeeks")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/External_sorting"},"External Merge Sort"))))}c.isMDXComponent=!0}}]);