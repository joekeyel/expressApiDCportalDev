(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1773:function(e,a,t){"use strict";t.r(a);var l=t(1009),n=t(3),c=t.n(n),r=t(1491),E=t(1217),m=t(1196),s=(t(1714),t(1134)),u=t(1135),I=t(1198),o=t(1694),i=t(1774),A=t(1027);a.default=function(e){var a=c.a.useState([]),t=Object(l.a)(a,2),d=t[0],T=t[1],C=c.a.useState(""),O=Object(l.a)(C,2),p=(O[0],O[1],c.a.useState([])),_=Object(l.a)(p,2),g=_[0],U=_[1];Object(n.useEffect)(function(){A.get("/claritybqm/reportFetch/?scriptName=DC_DASHBOARD_INFO").then(function(e){e.data&&(T(e.data),x(e.data))}).catch(function(e){console.log(e)})});var x=function(e){var a=[],t=[],l=[],n=[];e.map(function(e){a.push(e.SPACE_AVAILABLE),t.push(e.SPACE_UTILIZED),l.push(e.LOCN_NAME),n.push(e.SPACE_CAPACITY)}),U({labels:l,datasets:[{stack:"stack",label:"Available DC Space (sqft)",indexLabel:n,backgroundColor:"rgba(0, 20, 187)",data:a},{stack:"stack",label:"Utilize DC Space (sqft)",backgroundColor:"rgba(248, 111, 27)",data:t}]})};return c.a.createElement(E.a,null,c.a.createElement(m.a,{container:!0},c.a.createElement("h2",null,"SUMMARY OF DC LOCATION SPACE UTILIZATION"),c.a.createElement(r.a,{data:g,options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0,index:!0}]},plugins:{datalabels:{display:!0,color:"white"}},animation:{duration:0}}})),c.a.createElement(m.a,{container:!0},c.a.createElement("h2",null,"EXECUTIVE SUMMARY FOR DCO 1"),c.a.createElement(m.a,{container:!0},c.a.createElement(m.a,{item:!0},c.a.createElement("h5",null,"Lagend:"),c.a.createElement(s.a,null,c.a.createElement(u.a,null,c.a.createElement(I.a,{body:!0,color:"success",style:{width:"180px",height:"5px",alignItems:"center"}},c.a.createElement(o.a,null,c.a.createElement("h6",null,"Below 70%")))),c.a.createElement(u.a,null,c.a.createElement(I.a,{body:!0,color:"warning",style:{width:"180px",height:"5px",alignItems:"center"}},c.a.createElement(o.a,null,c.a.createElement("h6",null,"Between 70%-98%")))),c.a.createElement(u.a,null,c.a.createElement(I.a,{body:!0,color:"danger",style:{width:"180px",height:"5px",alignItems:"center"}},c.a.createElement(o.a,null,c.a.createElement("h6",null,"90% and above"))))))),c.a.createElement(m.a,{container:!0},d.map(function(e,a){var t="",l="",n="";return e.POWER_UTILIZATION<"75%"?t="success":e.POWER_UTILIZATION>="75%"?t="warning":e.POWER_UTILIZATION>="90%"&&(t="danger"),e.SPACE_UTILIZATION<"75%"?l="success":e.SPACE_UTILIZATION>="75%"?l="warning":e.SPACE_UTILIZATION>="90%"&&(l="danger"),e.RACK_UTILIZATION<"75%"?n="success":e.RACK_UTILIZATION>="75%"?n="warning":e.RACK_UTILIZATION>="90%"&&(n="danger"),c.a.createElement(m.a,{item:!0,xs:12,sm:12,md:4,lg:4},c.a.createElement(I.a,{id:e.LOCN_ID,style:{padding:"10px"}},c.a.createElement("div",{className:"animated fadeIn",style:{padding:"10px"}},c.a.createElement("h6",null,e.LOCN_NAME),c.a.createElement(I.a,{body:!0,id:e.POWER_UTILIZATION,color:t,style:{marginBottom:"0px"}},c.a.createElement(s.a,null,c.a.createElement(u.a,{xs:"4"},c.a.createElement(o.a,null,c.a.createElement("h3",null,c.a.createElement("strong",null,e.POWER_UTILIZATION))),c.a.createElement(i.a,null,"Used & Reserved Power")),c.a.createElement(u.a,{xs:"2"},c.a.createElement(i.a,null,e.POWER_UTILIZATION),c.a.createElement(i.a,null,e.POWER_UTILIZATION)),c.a.createElement(u.a,{xs:"3"},c.a.createElement(i.a,null,e.POWER_INSERVICE," (kW)"),c.a.createElement(i.a,null,e.POWER_RESERVED," (kW)"),c.a.createElement(i.a,null,e.POWER_CAPACITY," (kW)")),c.a.createElement(u.a,{xs:"3"},c.a.createElement(i.a,null,"Used"),c.a.createElement(i.a,null,"Reserved"),c.a.createElement(i.a,null,"Capacity")))),c.a.createElement(I.a,{body:!0,id:e.SPACE_UTILIZATION,color:l,style:{marginBottom:"0px"}},c.a.createElement(s.a,null,c.a.createElement(u.a,{xs:"4"},c.a.createElement(o.a,null,c.a.createElement("h3",null,c.a.createElement("strong",null,e.SPACE_UTILIZATION))),c.a.createElement(i.a,null,"Used Space")),c.a.createElement(u.a,{xs:"2"}),c.a.createElement(u.a,{xs:"3"},c.a.createElement(i.a,null,e.SPACE_UTILIZED," (sqft)"),c.a.createElement(i.a,null,e.SPACE_CAPACITY," (sqft)")),c.a.createElement(u.a,{xs:"3"},c.a.createElement(i.a,null,"Used"),c.a.createElement(i.a,null,"Capacity")))),c.a.createElement(I.a,{body:!0,id:e.RACK_UTILIZATION,color:n,style:{marginBottom:"0px"}},c.a.createElement(s.a,null,c.a.createElement(u.a,{xs:"4"},c.a.createElement(o.a,null,c.a.createElement("h3",null,c.a.createElement("strong",null,e.RACK_UTILIZATION))),c.a.createElement(i.a,null,"Used Rack")),c.a.createElement(u.a,{xs:"2"}),c.a.createElement(u.a,{xs:"3"},c.a.createElement(i.a,null,e.RACK_UTILIZED," (onos)"),c.a.createElement(i.a,null,e.RACK_CAPACITY," (onos)")),c.a.createElement(u.a,{xs:"3"},c.a.createElement(i.a,null,"Used"),c.a.createElement(i.a,null,"Capacity")))))))}))))}}}]);
//# sourceMappingURL=102.15337bd4.chunk.js.map