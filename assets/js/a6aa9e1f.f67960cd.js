"use strict";(self.webpackChunkpatternize_io=self.webpackChunkpatternize_io||[]).push([[7643],{2667:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(6540),r=a(53),l=a(4586),i=a(9024),o=a(7559),s=a(6669),m=a(1312),c=a(9022);function g(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.A,{permalink:a,title:n.createElement(m.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&n.createElement(c.A,{permalink:r,title:n.createElement(m.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(1463),u=a(7131),E=a(8258);function b(e){let{items:t,component:a=E.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(u.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.A)(),{blogDescription:r,blogTitle:o,permalink:s}=t,m="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.be,{title:m,description:r}),n.createElement(p.A,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(s.A,{sidebar:r},n.createElement(b,{items:a}),n.createElement(g,{metadata:t}))}function A(e){return n.createElement(i.e3,{className:(0,r.A)(o.G.wrapper.blogPages,o.G.page.blogListPage)},n.createElement(d,e),n.createElement(h,e))}}}]);