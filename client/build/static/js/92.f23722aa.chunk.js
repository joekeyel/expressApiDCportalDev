(window.webpackJsonp=window.webpackJsonp||[]).push([[92,95],{1139:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(918);function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(a){Object(n.a)(e,a,t[a])})}return e}},1212:function(e,a,t){"use strict";var n=t(40),r=t(107),c=t(961),o=t(68),l=t(3),s=t.n(l),i=t(106),u=t.n(i),p=t(906),d=t.n(p),m=t(907),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.s,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,o=e.className,l=e.close,i=e.cssModule,u=e.color,p=e.outline,b=e.size,f=e.tag,g=e.innerRef,v=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof v.children&&(v.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(p?"-outline":"")+"-"+u,O=Object(m.o)(d()(o,{close:l},l||"btn",l||h,!!b&&"btn-"+b,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),i);v.href&&"button"===f&&(f="a");var j=l?"Close":null;return s.a.createElement(f,Object(n.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:O,ref:g,onClick:this.onClick,"aria-label":t||j}))},a}(s.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},1351:function(e,a,t){"use strict";var n=t(40),r=t(107),c=t(3),o=t.n(c),l=t(106),s=t.n(l),i=t(906),u=t.n(i),p=t(907),d={color:s.a.string,pill:s.a.bool,tag:p.s,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),children:s.a.node,className:s.a.string,cssModule:s.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.color,l=e.innerRef,s=e.pill,i=e.tag,d=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(p.o)(u()(a,"badge","badge-"+c,!!s&&"badge-pill"),t);return d.href&&"span"===i&&(i="a"),o.a.createElement(i,Object(n.a)({},d,{className:m,ref:l}))};m.propTypes=d,m.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=m},1443:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,"a",function(){return n})},1468:function(e,a,t){"use strict";var n=t(40),r=t(107),c=t(3),o=t.n(c),l=t(106),s=t.n(l),i=t(906),u=t.n(i),p=t(907),d={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:p.s,className:s.a.string,cssModule:s.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tabs,l=e.pills,s=e.vertical,i=e.horizontal,d=e.justified,m=e.fill,b=e.navbar,f=e.card,g=e.tag,v=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),h=Object(p.o)(u()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":c,"card-header-tabs":f&&c,"nav-pills":l,"card-header-pills":f&&l,"nav-justified":d,"nav-fill":m}),t);return o.a.createElement(g,Object(n.a)({},v,{className:h}))};m.propTypes=d,m.defaultProps={tag:"ul",vertical:!1},a.a=m},1469:function(e,a,t){"use strict";var n=t(40),r=t(107),c=t(3),o=t.n(c),l=t(106),s=t.n(l),i=t(906),u=t.n(i),p=t(907),d={tag:p.s,active:s.a.bool,className:s.a.string,cssModule:s.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,l=e.tag,s=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(p.o)(u()(a,"nav-item",!!c&&"active"),t);return o.a.createElement(l,Object(n.a)({},s,{className:i}))};m.propTypes=d,m.defaultProps={tag:"li"},a.a=m},1514:function(e,a,t){e.exports=t.p+"static/media/logo.537211e7.svg"},1515:function(e,a,t){e.exports=t.p+"static/media/sygnet.c8d5c2d9.svg"},1516:function(e,a,t){"use strict";t.d(a,"a",function(){return b});var n=t(1139),r=t(40),c=t(961),o=t(68),l=t(3),s=t.n(l),i=t(106),u=t.n(i),p=t(1460),d=t(907),m=["defaultOpen"],b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return s.a.createElement(p.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(d.p)(this.props,m)))},a}(l.Component);b.propTypes=Object(n.a)({defaultOpen:u.a.bool},p.a.propTypes)},1543:function(e,a,t){"use strict";t.r(a);var n=t(1443),r=t(150),c=t(151),o=t(242),l=t(241),s=t(243),i=t(3),u=t.n(i),p=t(248),d=t(1468),m=t(1469),b=t(1351),f=t(1516),g=t(1723),v=t(1724),h=t(1725),O=t(1459),j=t(1514),E=t.n(j),N=t(1515),y=t.n(N),k=t(245),w=t(244),C=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBadge(),this.props.fetchUser()}},{key:"render",value:function(){var e=this,a=this.props,t=(a.children,Object(n.a)(a,["children"]),this.props.badge.Task);return u.a.createElement(u.a.Fragment,null,u.a.createElement(O.m,{className:"d-lg-none",display:"md",mobile:!0}),u.a.createElement(O.f,{full:{src:E.a,width:89,height:25,alt:"CoreUI Logo"},minimized:{src:y.a,width:30,height:30,alt:"CoreUI Logo"}}),u.a.createElement(O.m,{className:"d-md-down-none",display:"lg"}),u.a.createElement(d.a,{className:"d-md-down-none",navbar:!0},u.a.createElement(m.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/main-menu",className:"nav-link"}," Main Menu"))),u.a.createElement(d.a,{className:"ml-auto",navbar:!0},u.a.createElement(m.a,{className:"d-md-down-none"},u.a.createElement(p.NavLink,{to:"#",className:"nav-link"},u.a.createElement("i",{className:"icon-bell"}),u.a.createElement(b.a,{pill:!0,color:"danger"},t))),u.a.createElement(m.a,{className:"d-md-down-none"},u.a.createElement(p.NavLink,{to:"#",className:"nav-link"},u.a.createElement("i",{className:"icon-list"}))),u.a.createElement(m.a,{className:"d-md-down-none"},u.a.createElement(p.NavLink,{to:"#",className:"nav-link"},u.a.createElement("i",{className:"icon-location-pin"}))),u.a.createElement(f.a,{nav:!0,direction:"down"},u.a.createElement(g.a,{nav:!0},u.a.createElement("span",{id:k.a.authenticated.username.toUpperCase()},k.a.authenticated.username.toUpperCase()),u.a.createElement("img",{src:"../../assets/img/avatars/telekom.png",className:"img-avatar"})),u.a.createElement(v.a,{right:!0},u.a.createElement(h.a,{header:!0,tag:"div",className:"text-center"},u.a.createElement("strong",null,"Account")),u.a.createElement(h.a,{action:!0,tag:"a",href:"#/taskList"},u.a.createElement("i",{className:"fa fa-tasks"})," Tasks",u.a.createElement(b.a,{color:"danger"},t)),u.a.createElement(h.a,{action:!0,tag:"a",href:"#/myTask"},u.a.createElement("i",{className:"fa fa-bell-o"})," Waiting Approval",u.a.createElement(b.a,{color:"warning"}," 42")),u.a.createElement(h.a,{onClick:function(a){return e.props.onLogout(a)}},u.a.createElement("i",{className:"fa fa-lock"})," Logout")))),u.a.createElement(O.b,{className:"d-md-down-none"}))}}]),a}(i.Component);C.defaultProps={};a.default=Object(w.b)(function(e){return{badge:e.badge,user:e.user}},function(e){return{fetchBadge:function(){return e({type:"FETCH_BADGE"})},fetchUser:function(){return e({type:"FETCH_USER"})}}})(C)},918:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",function(){return n})}}]);
//# sourceMappingURL=92.f23722aa.chunk.js.map