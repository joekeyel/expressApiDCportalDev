(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1082:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(3),c=t.n(n),s=t(103),o=t.n(s),i=t(879),m=t.n(i),u=t(880),d={tag:u.s,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},f=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,i=Object(l.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.o)(m()(a,n?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(s,Object(r.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1083:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(944),c=t.n(n),s=t(3),o=t.n(s),i=t(103),m=t.n(i),u=t(879),d=t.n(u),f=t(880),g=m.a.oneOfType([m.a.number,m.a.string]),p=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:g,offset:g})]),b={tag:f.s,xs:p,sm:p,md:p,lg:p,xl:p,className:m.a.string,cssModule:m.a.object,widths:m.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),m=[];n.forEach((function(a,r){var l=e[a];if(delete i[a],l||""===l){var n=!r;if(c()(l)){var s,o=n?"-":"-"+a+"-",u=N(n,a,l.size);m.push(Object(f.o)(d()(((s={})[u]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s)),t))}else{var g=N(n,a,l);m.push(g)}}})),m.length||m.push("col");var u=Object(f.o)(d()(a,m),t);return o.a.createElement(s,Object(r.a)({},i,{className:u}))};h.propTypes=b,h.defaultProps=E,a.a=h},1152:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(3),c=t.n(n),s=t(103),o=t.n(s),i=t(879),m=t.n(i),u=t(880),d={tag:u.s,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,o=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.o)(m()(a,"card-body"),t);return c.a.createElement(s,Object(r.a)({},o,{className:i,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1157:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(3),c=t.n(n),s=t(103),o=t.n(s),i=t(879),m=t.n(i),u=t(880),d={tag:u.s,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,o=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,g=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.o)(m()(a,"card",!!o&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(r.a)({},g,{className:p,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1161:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(3),c=t.n(n),s=t(103),o=t.n(s),i=t(879),m=t.n(i),u=t(880),d={tag:u.s,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),o=Object(u.o)(m()(a,"card-header"),t);return c.a.createElement(n,Object(r.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1179:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(929),c=t(67),s=t(3),o=t.n(s),i=t(103),m=t.n(i),u=t(879),d=t.n(u),f=t(880),g={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.s,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(n.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,m=e.color,u=e.outline,g=e.size,p=e.tag,b=e.innerRef,E=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var N="btn"+(u?"-outline":"")+"-"+m,h=Object(f.o)(d()(c,{close:s},s||"btn",s||N,!!g&&"btn-"+g,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===p&&(p="a");var y=s?"Close":null;return o.a.createElement(p,Object(r.a)({type:"button"===p&&E.onClick?"button":void 0},E,{className:h,ref:b,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);p.propTypes=g,p.defaultProps={color:"secondary",tag:"button"},a.a=p},1353:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(3),c=t.n(n),s=t(103),o=t.n(s),i=t(879),m=t.n(i),u=t(880),d={color:o.a.string,pill:o.a.bool,tag:u.s,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.innerRef,o=e.pill,i=e.tag,d=Object(l.a)(e,["className","cssModule","color","innerRef","pill","tag"]),f=Object(u.o)(m()(a,"badge","badge-"+n,!!o&&"badge-pill"),t);return d.href&&"span"===i&&(i="a"),c.a.createElement(i,Object(r.a)({},d,{className:f,ref:s}))};f.propTypes=d,f.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=f},1474:function(e,a,t){"use strict";var r=t(40),l=t(104),n=t(3),c=t.n(n),s=t(103),o=t.n(s),i=t(879),m=t.n(i),u=t(880),d={tag:u.s,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),o=Object(u.o)(m()(a,"card-footer"),t);return c.a.createElement(n,Object(r.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1775:function(e,a,t){"use strict";t.r(a);var r=t(149),l=t(150),n=t(236),c=t(235),s=t(3),o=t.n(s),i=t(1082),m=t(1083),u=t(1157),d=t(1161),f=t(1152),g=t(1353),p=t(1474),b=t(1179),E=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(i.a,null,o.a.createElement(m.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/badge/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(f.a,null,o.a.createElement("h1",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h2",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h3",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h4",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h5",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h6",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New"))),o.a.createElement(p.a,null,o.a.createElement(b.a,{color:"primary",outline:!0},"Notifications ",o.a.createElement(g.a,{color:"secondary",pill:!0,style:{position:"static"}},"9"))))),o.a.createElement(m.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges")," ",o.a.createElement("small",null,"contextual variations")),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"mr-1",color:"primary"},"Primary"),o.a.createElement(g.a,{className:"mr-1",color:"secondary"},"Secondary"),o.a.createElement(g.a,{className:"mr-1",color:"success"},"Success"),o.a.createElement(g.a,{className:"mr-1",color:"danger"},"Danger"),o.a.createElement(g.a,{className:"mr-1",color:"warning"},"Warning"),o.a.createElement(g.a,{className:"mr-1",color:"info"},"Info"),o.a.createElement(g.a,{className:"mr-1",color:"light"},"Light"),o.a.createElement(g.a,{className:"mr-1",color:"dark"},"Dark"))),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges")," ",o.a.createElement("small",null,"pill badges")),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"mr-1",color:"primary",pill:!0},"Primary"),o.a.createElement(g.a,{className:"mr-1",color:"secondary",pill:!0},"Secondary"),o.a.createElement(g.a,{className:"mr-1",color:"success",pill:!0},"Success"),o.a.createElement(g.a,{className:"mr-1",color:"danger",pill:!0},"Danger"),o.a.createElement(g.a,{className:"mr-1",color:"warning",pill:!0},"Warning"),o.a.createElement(g.a,{className:"mr-1",color:"info",pill:!0},"Info"),o.a.createElement(g.a,{className:"mr-1",color:"light",pill:!0},"Light"),o.a.createElement(g.a,{className:"mr-1",color:"dark",pill:!0},"Dark"))),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges")," ",o.a.createElement("small",null,"links")),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"mr-1",href:"#",color:"primary"},"Primary"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"secondary"},"Secondary"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"success"},"Success"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"danger"},"Danger"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"warning"},"Warning"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"info"},"Info"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"light"},"Light"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"dark",pill:!0},"Dark"))))))}}]),t}(s.Component);a.default=E},944:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}}}]);
//# sourceMappingURL=22.e746a64c.chunk.js.map