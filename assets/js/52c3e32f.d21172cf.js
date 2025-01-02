"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[1984],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),v=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=v(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=v(t),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var v=2;v<l;v++)i[v]=t[v];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1788:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>v,toc:()=>c});var n=t(8168),a=t(8587),l=(t(6540),t(5680));const i=["components"],o={id:"MergeIntervals",title:"Merge Intervals Pattern",sidebar_label:"Merge Intervals"},s=void 0,v={unversionedId:"Patterns/Interval/MergeIntervals",id:"Patterns/Interval/MergeIntervals",title:"Merge Intervals Pattern",description:"Pattern Description",source:"@site/docs/Patterns/Interval/MergeIntervals.md",sourceDirName:"Patterns/Interval",slug:"/Patterns/Interval/MergeIntervals",permalink:"/docs/Patterns/Interval/MergeIntervals",draft:!1,tags:[],version:"current",frontMatter:{id:"MergeIntervals",title:"Merge Intervals Pattern",sidebar_label:"Merge Intervals"},sidebar:"Patterns",previous:{title:"Introduction",permalink:"/docs/Patterns/Interval/Introduction"},next:{title:"Introduction",permalink:"/docs/Patterns/BitManipulation/Introduction"}},p={},c=[{value:"Pattern Description",id:"pattern-description",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"1. Merge Overlapping Intervals",id:"1-merge-overlapping-intervals",level:3},{value:"2. Insert Interval",id:"2-insert-interval",level:3},{value:"3. Interval List Intersections",id:"3-interval-list-intersections",level:3},{value:"4. Non-overlapping Intervals",id:"4-non-overlapping-intervals",level:3},{value:"5. Meeting Rooms",id:"5-meeting-rooms",level:3},{value:"Common Techniques",id:"common-techniques",level:2}],u={toc:c},g="wrapper";function m(e){let{components:r}=e,t=(0,a.A)(e,i);return(0,l.yg)(g,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"pattern-description"},"Pattern Description"),(0,l.yg)("p",null,"The Merge Intervals pattern deals with problems involving overlapping intervals. These problems typically require:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Sorting intervals by start time"),(0,l.yg)("li",{parentName:"ol"},"Merging overlapping intervals"),(0,l.yg)("li",{parentName:"ol"},"Finding intersections or unions of intervals")),(0,l.yg)("h2",{id:"common-problems"},"Common Problems"),(0,l.yg)("h3",{id:"1-merge-overlapping-intervals"},"1. Merge Overlapping Intervals"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"public int[][] merge(int[][] intervals) {\n    if (intervals.length <= 1) return intervals;\n    \n    // Sort by start time\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    \n    List<int[]> result = new ArrayList<>();\n    int[] currentInterval = intervals[0];\n    result.add(currentInterval);\n    \n    for (int[] interval : intervals) {\n        if (interval[0] <= currentInterval[1]) {\n            currentInterval[1] = Math.max(currentInterval[1], interval[1]);\n        } else {\n            currentInterval = interval;\n            result.add(currentInterval);\n        }\n    }\n    \n    return result.toArray(new int[result.size()][]);\n}\n")),(0,l.yg)("h3",{id:"2-insert-interval"},"2. Insert Interval"),(0,l.yg)("h3",{id:"3-interval-list-intersections"},"3. Interval List Intersections"),(0,l.yg)("h3",{id:"4-non-overlapping-intervals"},"4. Non-overlapping Intervals"),(0,l.yg)("h3",{id:"5-meeting-rooms"},"5. Meeting Rooms"),(0,l.yg)("h2",{id:"common-techniques"},"Common Techniques"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Sort intervals by start/end time"),(0,l.yg)("li",{parentName:"ol"},"Track previous interval"),(0,l.yg)("li",{parentName:"ol"},"Use min-heap for meeting rooms"),(0,l.yg)("li",{parentName:"ol"},"Merge overlapping intervals"),(0,l.yg)("li",{parentName:"ol"},"Count overlapping intervals")))}m.isMDXComponent=!0}}]);