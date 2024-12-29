"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[841],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,g=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=t(8168),i=t(8587),a=(t(6540),t(5680));const s=["components"],o={id:"SegmentTree",title:"Segment Tree",sidebar_label:"Segment Tree"},l=void 0,u={unversionedId:"DataStructures/Tree/SegmentTree",id:"DataStructures/Tree/SegmentTree",title:"Segment Tree",description:"Idea",source:"@site/docs/DataStructures/Tree/SegmentTree.md",sourceDirName:"DataStructures/Tree",slug:"/DataStructures/Tree/SegmentTree",permalink:"/docs/DataStructures/Tree/SegmentTree",draft:!1,tags:[],version:"current",frontMatter:{id:"SegmentTree",title:"Segment Tree",sidebar_label:"Segment Tree"}},m={},c=[{value:"Idea",id:"idea",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Runtime Analysis",id:"runtime-analysis",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c},f="wrapper";function g(e){let{components:n}=e,t=(0,i.A)(e,s);return(0,a.yg)(f,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"idea"},"Idea"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This is mostly used for mutable range sum."),(0,a.yg)("li",{parentName:"ul"},"For general segment tree built against a array of ",(0,a.yg)("inlineCode",{parentName:"li"},"n")," length, the segment tree is ",(0,a.yg)("inlineCode",{parentName:"li"},"2n")," because ",(0,a.yg)("inlineCode",{parentName:"li"}," (n+n/2+n/4+n/8+\u2026+1\u22482n)")),(0,a.yg)("li",{parentName:"ul"},"Segment Tree is only good when you have consistent interval updates and queries. It is not useful if you have to print or give analytics over all data points")),(0,a.yg)("h2",{id:"implementation"},"Implementation"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"class SegmentTree  \n{ \n    int st[]; // The array that stores segment tree nodes \n    int n;\n    SegmentTree(int arr[]) { \n        n = arr.length;\n        int x = (int) (Math.ceil(Math.log(n) / Math.log(2))); \n        //Maximum size of segment tree \n        int max_size = 2 * (int) Math.pow(2, x) - 1; \n        st = new int[max_size]; // Memory allocation \n        constructTree(arr, 0, n - 1, 0); \n    } \n    \n    \n    // A recursive function that constructs Segment Tree for array[ss..se]. \n    // si is index of current node in segment tree st \n    int constructTree(int arr[], int ss, int se, int si) \n    { \n        // If there is one element in array, store it in current node of \n        // segment tree and return \n        if (ss == se) { \n            st[si] = arr[ss]; \n            return arr[ss]; \n        } \n\n        // If there are more than one elements, then recur for left and \n        // right subtrees and store the sum of values in this node \n        int mid = ss + (se - ss) / 2; \n        st[si] = constructTree(arr, ss, mid, si * 2 + 1) + \n                 constructTree(arr, mid + 1, se, si * 2 + 2); \n        return st[si]; \n    } \n\n\n    int getSumUtil(int ss, int se, int qs, int qe, int si) { \n        // If segment of this node is a part of given range, then return \n        // the sum of the segment \n        if (qs <= ss && qe >= se) \n            return st[si]; \n\n        // If segment of this node is outside the given range \n        if (se < qs || ss > qe) \n            return 0; \n\n        // If a part of this segment overlaps with the given range \n        int mid = ss + (se - ss) / 2; \n        return getSumUtil(ss, mid, qs, qe, 2 * si + 1) + \n                getSumUtil(mid + 1, se, qs, qe, 2 * si + 2); \n    } \n\n    void updateValueUtil(int ss, int se, int i, int diff, int si) { \n        // Base Case: If the input index lies outside the range of  \n        // this segment \n        if (i < ss || i > se) \n            return; \n\n        // If the input index is in range of this node, then update the \n        // value of the node and its children\n        st[si] = st[si] + diff; \n        if (se != ss) { \n            int mid = ss + (se - ss) / 2; \n            updateValueUtil(ss, mid, i, diff, 2 * si + 1); \n            updateValueUtil(mid + 1, se, i, diff, 2 * si + 2); \n        } \n    } \n\n    // The function to update a value in input array and segment tree. \n   // It uses updateValueUtil() to update the value in segment tree \n    void updateValue(int arr[], int n, int i, int new_val) \n    { \n        // Check for erroneous input index \n        if (i < 0 || i > n - 1) { \n            return; \n        } \n\n        // Get the difference between new value and old value \n        int diff = new_val - arr[i]; \n\n        // Update the value in array \n        arr[i] = new_val; \n\n        // Update the values of nodes in segment tree \n        updateValueUtil(0, n - 1, i, diff, 0); \n    } \n\n    // Return sum of elements in range from index qs (quey start) to \n   // qe (query end).  It mainly uses getSumUtil() \n    int getSum(int n, int qs, int qe) \n    { \n        // Check for erroneous input values \n        if (qs < 0 || qe > n - 1 || qs > qe) { \n            return -1; \n        } \n        return getSumUtil(0, n - 1, qs, qe, 0); \n    } \n}\n")),(0,a.yg)("h2",{id:"runtime-analysis"},"Runtime Analysis"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Build the tree: O(n)"),(0,a.yg)("li",{parentName:"ul"},"Update Tree: O(log n)"),(0,a.yg)("li",{parentName:"ul"},"Query: O(log n)")),(0,a.yg)("h2",{id:"reference"},"Reference"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/"},"GeeksForGeeks Implement"))))}g.isMDXComponent=!0}}]);