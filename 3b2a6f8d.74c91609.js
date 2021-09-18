(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{147:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),f=r,b=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return t?a.a.createElement(b,o(o({ref:n},p),{},{components:t})):a.a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},149:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(147),a=t(149),i=(t(0),t(148)),c={id:"LinkedHashMap",title:"LinkedHashMap",sidebar_label:"LinkedHashMap"},o={unversionedId:"Language/Java/Map/LinkedHashMap",id:"Language/Java/Map/LinkedHashMap",isDocsHomePage:!1,title:"LinkedHashMap",description:"Basics",source:"@site/docs/Language/Java/Map/LinkedHashMap.md",slug:"/Language/Java/Map/LinkedHashMap",permalink:"/docs/Language/Java/Map/LinkedHashMap",version:"current",sidebar_label:"LinkedHashMap",sidebar:"Language",previous:{title:"TreeMap",permalink:"/docs/Language/Java/Map/TreeMap"},next:{title:"Runtime",permalink:"/docs/Language/Java/Map/Runtime"}},u=[{value:"Basics",id:"basics",children:[]},{value:"LRU",id:"lru",children:[]}],p={toc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"basics"},"Basics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Insertion order is preserved")),Object(i.b)("h2",{id:"lru"},"LRU"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It is famous that you can implement LRUCache using a LinkedHashMap!")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class LRUCache extends LinkedHashMap<Integer, Integer>{\n    private int maxSize;\n    public LRUCache(int capacity) {\n        super(capacity, 0.75f, true);\n        this.maxSize = capacity;\n    }\n\n    //return -1 if miss\n    public int get(int key) {\n        Integer v = super.get(key);\n        return v == null ? -1 : v;\n    }\n\n    public void put(int key, int value) {\n        super.put(key, value);\n    }\n\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {\n        return this.size() > maxSize; //must override it if used in a fixed cache\n    }\n}\n")))}s.isMDXComponent=!0}}]);