(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),b=(n(0),n(132)),l={id:"LinkedList",title:"LinkedList",sidebar_label:"LinkedList"},i={id:"Language/Java/List/LinkedList",title:"LinkedList",description:"## Basics",source:"@site/docs/Language/Java/List/LinkedList.md",permalink:"/docs/Language/Java/List/LinkedList",sidebar_label:"LinkedList",sidebar:"Language",previous:{title:"Interface",permalink:"/docs/Language/Java/Queue/Interface"},next:{title:"PriorityQueue",permalink:"/docs/Language/Java/Queue/PriorityQueue"}},c=[{value:"Basics",id:"basics",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Pros/Cons",id:"proscons",children:[]}],O={rightToc:c},o="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"basics"},"Basics"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Implements both Queue (interface) and Deque (interface)"),Object(b.b)("li",{parentName:"ul"},"Implemented with ",Object(b.b)("strong",{parentName:"li"},"List")),Object(b.b)("li",{parentName:"ul"},"Common Methods:")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Runtime"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"add(E e)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Appends the specified element to the end of this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"add(int index, E element)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(N)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inserts the specified element at the specified position in this list. (equivalent to ",Object(b.b)("inlineCode",{parentName:"td"},"offer()"),"/",Object(b.b)("inlineCode",{parentName:"td"},"offerLast()"),") or offerFirst when ",Object(b.b)("inlineCode",{parentName:"td"},"add(0, E ele)")," is called"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"void")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"contains(Object o)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(n)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns true if this list contains the specified element."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"get(int index)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(n)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns the element at the specified position in this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"indexOf(Object o)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(n)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"offer(E e)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(n)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Adds the specified element as the tail (last element) of this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"peek()"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retrieves but doesn't remove the head (first element) of this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"poll()"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retrieves and removes the head (first element) of this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pop()"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pops an element from the stack represented by this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"push(E e)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pushes an element onto the stack represented by this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"void")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"remove()"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Retrieves and removes the head (first element) of this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"remove(int index)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(N)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Removes the element at the specified position in this list."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"size()"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"return size"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"int")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"toArray()"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(n)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"return array containing elements in the list"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"toArray(T[] a)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(n)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"return array with generic types"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"<T>")," T[]")))),Object(b.b)("h2",{id:"proscons"},"Pros/Cons"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Advantage:\n- insertion and removal is cheap(constant time), provided the position of the changes is known\n- efficient space usage"),Object(b.b)("li",{parentName:"ul"},"Disadvantage:\n- not easily indexable (slow gets and sets)\n- inefficient for search")))}d.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createContext({}),o=function(e){var t=r.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=o(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},p="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,O=c(e,["components","mdxType","originalType","parentName"]),d=o(n),p=a,s=d["".concat(l,".").concat(p)]||d[p]||j[p]||b;return n?r.a.createElement(s,i({ref:t},O,{components:n})):r.a.createElement(s,i({ref:t},O))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var O=2;O<b;O++)l[O]=n[O];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);