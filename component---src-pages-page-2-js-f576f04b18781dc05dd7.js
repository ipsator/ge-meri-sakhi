(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(157),s=a(155);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(151);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"GE मेरी सखी"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(159),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"GE मेरी सखी",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@_akush"}}}}},157:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(152),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{color:"white",margin:0,textAlign:"center"}},t)))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(158),function(e){var t=e.title,a=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:t||e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 2.45rem",paddingTop:0,minHeight:"100%"}},i.a.createElement("main",null,a),i.a.createElement("footer",{style:{position:"fixed",bottom:0,background:"white",width:"calc( 100% - 2.175rem )",textAlign:"center",fontSize:"0.8rem",color:"#777",padding:"0.5rem 0",fontFamily:"sans-serif"}},"© ",(new Date).getFullYear(),", Built by GE Healthcare")))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-page-2-js-f576f04b18781dc05dd7.js.map