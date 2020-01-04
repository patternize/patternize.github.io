(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return l}));var r=t(1),a=(t(0),t(132));const i={id:"LinkedHashMap",title:"LinkedHashMap",sidebar_label:"LinkedHashMap"},c={id:"Language/Java/Map/LinkedHashMap",title:"LinkedHashMap",description:"## Basics",source:"@site/docs/Language/Java/Map/LinkedHashMap.md",permalink:"/docs/Language/Java/Map/LinkedHashMap",sidebar_label:"LinkedHashMap",sidebar:"Language",previous:{title:"TreeMap",permalink:"/docs/Language/Java/Map/TreeMap"},next:{title:"Runtime",permalink:"/docs/Language/Java/Map/Runtime"}},o=[{value:"Basics",id:"basics",children:[]},{value:"LRU",id:"lru",children:[]}],u={rightToc:o},p="wrapper";function l({components:e,...n}){return Object(a.b)(p,Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"basics"},"Basics"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Insertion order is preserved")),Object(a.b)("h2",{id:"lru"},"LRU"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It is famous that you can implement LRUCache using a LinkedHashMap!")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class LRUCache extends LinkedHashMap<Integer, Integer>{\n    private int maxSize;\n    public LRUCache(int capacity) {\n        super(capacity, 0.75f, true);\n        this.maxSize = capacity;\n    }\n\n    //return -1 if miss\n    public int get(int key) {\n        Integer v = super.get(key);\n        return v == null ? -1 : v;\n    }\n\n    public void put(int key, int value) {\n        super.put(key, value);\n    }\n\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {\n        return this.size() > maxSize; //must override it if used in a fixed cache\n    }\n}\n")))}l.isMDXComponent=!0},132:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=r,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||i;return t?a.a.createElement(f,o({ref:n},p,{components:t})):a.a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);