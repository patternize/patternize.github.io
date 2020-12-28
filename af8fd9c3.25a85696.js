(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),l=(a(0),a(149)),b={id:"LinkedList",title:"LinkedList",sidebar_label:"LinkedList"},i={unversionedId:"Language/Java/List/LinkedList",id:"Language/Java/List/LinkedList",isDocsHomePage:!1,title:"LinkedList",description:"Basics",source:"@site/docs/Language/Java/List/LinkedList.md",slug:"/Language/Java/List/LinkedList",permalink:"/docs/Language/Java/List/LinkedList",version:"current",sidebar_label:"LinkedList",sidebar:"Language",previous:{title:"ArrayList",permalink:"/docs/Language/Java/List/ArrayList"},next:{title:"Stack",permalink:"/docs/Language/Java/List/Stack"}},c=[{value:"Basics",id:"basics",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Pros/Cons",id:"proscons",children:[]}],O={toc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"basics"},"Basics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Implements both Queue (interface) and Deque (interface)"),Object(l.b)("li",{parentName:"ul"},"Implemented with ",Object(l.b)("strong",{parentName:"li"},"List")),Object(l.b)("li",{parentName:"ul"},"Common Methods:")),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Runtime"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"add(E e)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Appends the specified element to the end of this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"add(int index, E element)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(N)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inserts the specified element at the specified position in this list. (equivalent to ",Object(l.b)("inlineCode",{parentName:"td"},"offer()"),"/",Object(l.b)("inlineCode",{parentName:"td"},"offerLast()"),") or offerFirst when ",Object(l.b)("inlineCode",{parentName:"td"},"add(0, E ele)")," is called"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"void")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains(Object o)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns true if this list contains the specified element."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"get(int index)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the element at the specified position in this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"indexOf(Object o)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offer(E e)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adds the specified element as the tail (last element) of this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peek()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieves but doesn't remove the head (first element) of this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"poll()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieves and removes the head (first element) of this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pop()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pops an element from the stack represented by this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"push(E e)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pushes an element onto the stack represented by this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"void")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remove()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retrieves and removes the head (first element) of this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remove(int index)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(N)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Removes the element at the specified position in this list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return size"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"toArray()"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return array containing elements in the list"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object[]")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"toArray(T[] a)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"return array with generic types"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"<T>")," T[]")))),Object(l.b)("h2",{id:"proscons"},"Pros/Cons"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Advantage:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"insertion and removal is cheap(constant time), provided the position of the changes is known"),Object(l.b)("li",{parentName:"ul"},"efficient space usage"))),Object(l.b)("li",{parentName:"ul"},"Disadvantage:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"not easily indexable (slow gets and sets)"),Object(l.b)("li",{parentName:"ul"},"inefficient for search")))))}o.isMDXComponent=!0},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),o=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,O=c(e,["components","mdxType","originalType","parentName"]),d=o(a),j=n,s=d["".concat(b,".").concat(j)]||d[j]||p[j]||l;return a?r.a.createElement(s,i(i({ref:t},O),{},{components:a})):r.a.createElement(s,i({ref:t},O))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var O=2;O<l;O++)b[O]=a[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);