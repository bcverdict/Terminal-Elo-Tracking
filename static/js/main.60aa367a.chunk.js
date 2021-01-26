(this["webpackJsonpterminal-app"]=this["webpackJsonpterminal-app"]||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),c=a.n(n),l=a(48),i=a.n(l),r=(a(56),a(57),a(11)),d=a.n(r),o=a(32),j=a(3),h=a(162),b=a(163),u=(a(59),a(49)),O=(a(158),Object(n.createContext)());function g(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],l=a[1];return Object(s.jsx)(O.Provider,{value:{darkMode:c,setDarkMode:l},children:e.children})}function m(e){var t=Object(n.useContext)(O).darkMode,a={display:"flex",flexDirection:"column",alignItems:"center",height:"100%",width:"70%",color:t?"#c9d1d9":"black",backgroundColor:t?"#0d1117":"white"};return Object(s.jsxs)("div",{style:a,children:[Object(s.jsxs)("h2",{children:["algo: ",e.algoName]}),Object(s.jsxs)("h3",{children:["creator: ",e.creator]}),Object(s.jsx)(u.Line,{data:e.data,options:{title:{display:!0,text:""},hover:{mode:"nearest",intersect:!1},tooltips:{mode:"nearest",intersect:!1,backgroundColor:"hsla(240,25%,76%,.81)",displayColors:!1},legend:{display:!1},scales:{yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Elo"}}],xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Opponents"},ticks:{display:!1}}]}}})]})}a(159);function x(e){var t=Object(n.useContext)(O).darkMode,a=e.rival,c=e.data,l={display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%",color:t?"#c9d1d9":"black",backgroundColor:t?"#0d1117":"white"};return Object(s.jsxs)("div",{style:l,children:[Object(s.jsxs)("h1",{children:["Rival: ",a]}),Object(s.jsxs)("h2",{children:["Games Played: ",c[a].Results.length," "]}),Object(s.jsxs)("table",{className:"toCenter",children:[Object(s.jsx)("thead",{className:"full",children:Object(s.jsxs)("tr",{className:"full",children:[Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Algo name"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Results"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Turns"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Elo"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Game"})})]})}),Object(s.jsx)("tbody",{className:"toCenter",children:c[a].Results.map((function(t,n){return Object(s.jsxs)("tr",{className:"full",children:[Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("button",{type:"button",className:"link-button",onClick:function(){return e.changeId(c[a].AlgoId[n])},children:Object(s.jsx)("h5",{children:c[a].AlgoName[n]})})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h5",{children:c[a].Results[n]})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h5",{children:c[a].Turns[n]})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h5",{children:c[a].Elo[n]})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("a",{href:c[a].Game[n],target:"blank",children:Object(s.jsx)("h5",{children:"watch"})})})]})}))})]}),Object(s.jsx)("h1",{children:"All Games"}),Object(s.jsxs)("div",{className:"WAndL",children:[Object(s.jsxs)("h2",{children:["Wins: ",e.wins]}),Object(s.jsxs)("h2",{children:["Losses: ",e.losses]})]}),Object(s.jsxs)("table",{className:"toCenter",children:[Object(s.jsx)("thead",{className:"full",children:Object(s.jsxs)("tr",{className:"full",children:[Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Algo name"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Results"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Turns"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Elo"})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h4",{children:"Game"})})]})}),Object(s.jsx)("tbody",{className:"toCenter",children:Object.keys(c).map((function(t){return c[t].Results.map((function(a,n){return Object(s.jsxs)("tr",{className:"full",children:[Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("button",{type:"button",className:"link-button",onClick:function(){return e.changeId(c[t].AlgoId[n])},children:Object(s.jsx)("h5",{children:c[t].AlgoName[n]})})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h5",{children:c[t].Results[n]})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h5",{children:c[t].Turns[n]})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("h5",{children:c[t].Elo[n]})}),Object(s.jsx)("td",{className:"data",children:Object(s.jsx)("a",{href:c[t].Game[n],children:Object(s.jsx)("h5",{children:"watch"})})})]})}))}))})]})]})}function p(){var e=Object(n.useContext)(O),t=e.darkMode,a=e.setDarkMode,c=Object(n.useState)(),l=Object(j.a)(c,2),i=l[0],r=l[1],u=Object(n.useState)([]),g=Object(j.a)(u,2),p=g[0],f=g[1],N=Object(n.useState)([]),y=Object(j.a)(N,2),w=y[0],k=y[1],v=Object(n.useState)(""),_=Object(j.a)(v,2),C=_[0],A=_[1],S=Object(n.useState)({}),M=Object(j.a)(S,2),I=M[0],E=M[1],R=Object(n.useState)(""),G=Object(j.a)(R,2),F=G[0],L=G[1],T=Object(n.useState)(""),D=Object(j.a)(T,2),B=D[0],J=D[1],W=Object(n.useState)(0),P=Object(j.a)(W,2),q=P[0],z=P[1],H=Object(n.useState)(!1),K=Object(j.a)(H,2),Q=K[0],U=K[1],V=Object(n.useState)({}),X=Object(j.a)(V,2),Y=(X[0],X[1],Object(n.useState)({})),Z=Object(j.a)(Y,2),$=(Z[0],Z[1],Object(n.useState)({})),ee=Object(j.a)($,2),te=(ee[0],ee[1],Object(n.useState)(0)),ae=Object(j.a)(te,2),se=ae[0],ne=ae[1],ce=Object(n.useState)(0),le=Object(j.a)(ce,2),ie=le[0],re=le[1],de=Object(n.useState)(!1),oe=Object(j.a)(de,2),je=oe[0],he=oe[1],be={labels:w,datasets:[{fill:!1,lineTension:.5,backgroundColor:t?"black":"rgba(75,192,192,1)",borderColor:t?"rgba(175,175,175,1)":"rgba(0,0,0,1)",borderWidth:2,data:p}]},ue=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),z(i),e.next=4,Oe();case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://terminal.c1games.com/api/game/algo/"+i+"/matches");case 2:return t=e.sent,he(200!=t.status),e.next=6,t.json().then((function(e){console.log("response: "+JSON.stringify(e));var t=e.data.matches,a=t[0].winning_algo.id==i?t[0].winning_algo:t[0].losing_algo,s=a.name,n=a.rating,c=(a.createdAt,[1500]),l=[""],r=0,d=0,o=1500,j=t.length,h=(n-o)/j;console.log("slope: "+h);var b,u,O,g,m,x,p,N=o,y={},w=1/1.2,v=t[0]&&t[0].winning_user;m=v?t[0].winning_algo.id==i?t[0].winning_user.displayName:t[0].losing_user.displayName:t[0].winning_algo.id==i?t[0].winning_algo.team.createdBy.displayName:t[0].losing_algo.team.createdBy.displayName,t.forEach((function(e,t){if(e.winning_algo.id==i){r+=1,v="losing_user"in e||"team"in e.losing_algo&&"null"==JSON.stringify(e.losing_algo.team),b=v?"losing_user"in e?e.losing_user.displayName:e.losing_algo.user:e.losing_algo.team.createdBy.displayName,u="W",O=e.losing_algo.rating,x=e.losing_algo.name,p=e.losing_algo.id,console.log("temp before: "+N),N=h*t+o+32*(1-w),console.log("temp after: "+N)}else{d+=1,v="winning_algo"in e||"team"in e.winning_algo&&"null"==JSON.stringify(e.winning_algo.team),b=v?"winning_user"in e?e.winning_user.displayName:e.winning_algo.user:e.winning_algo.team.createdBy.displayName,u="L",O=e.winning_algo.rating,x=e.winning_algo.name,p=e.winning_algo.id,console.log("temp before: "+N);N=h*t+o+32*(0-w),console.log("temp after: "+N)}console.log("original: "+(Math.round(h*Math.abs(j-t))+o)),console.log("new: "+N),c.push(Math.round(N)),l.push(x),b in y?(y[b].AlgoId.push(p),y[b].AlgoName.push(x),y[b].Results.push(u),y[b].Turns.push(e.turns),y[b].Elo.push(O),y[b].Game.push("https://terminal.c1games.com/watch/"+e.id),y[b].count+=1):(y[b]={},y[b].AlgoId=[p],y[b].AlgoName=[x],y[b].Results=[u],y[b].Turns=[e.turns],y[b].Elo=[O],y[b].Game=["https://terminal.c1games.com/watch/"+e.id],y[b].count=1),y[b].count>0&&(g=b)})),f(c),k(l),A(g),E(y),L(m),J(s),ne(r),re(d)}));case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){i!=q&&Q&&(z(i),ue())}),[i,r]);var ge={color:t?"white":"black",backgroundColor:t?"#545b62":"#AFAFAF",borderColor:t?"#545b62":"#AFAFAF"},me={color:t?"#c9d1d9":"black",backgroundColor:t?"#0d1117":"white",height:"100%"},xe={display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%",color:t?"#c9d1d9":"black",backgroundColor:t?"#0d1117":"white"};return Object(s.jsx)("div",{style:me,children:Object(s.jsxs)("div",{style:xe,children:[Object(s.jsx)("div",{className:"darkModeContainer",children:Object(s.jsx)(h.a,{style:ge,onClick:function(){a(!t)},children:t?"Light Mode":"Dark Mode"})}),Object(s.jsx)(b.a,{className:"input",onChange:function(e){return t=e.target.value,U(!1),void r(t);var t}}),Object(s.jsx)(h.a,{className:"button",color:"primary",onClick:ue,children:"Find"}),je&&Object(s.jsx)("h2",{children:"no algo with this id found"}),je&&Object(s.jsx)("h2",{children:"(could have been deleted)"}),!je&&0!=Object.keys(be).length&&""!=F&&""!=B&&0!=Object.keys(I).length&&""!=C&&C in I&&Object(s.jsxs)("div",{style:xe,children:[Object(s.jsx)(m,{data:be,creator:F,algoName:B}),Object(s.jsx)(x,{data:I,rival:C,changeId:function(e){r(e)},wins:se,losses:ie})]})]})})}function f(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(g,{style:{height:"100%"},children:Object(s.jsx)(p,{style:{height:"100%"}})})})}a(160);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){}},[[161,1,2]]]);
//# sourceMappingURL=main.60aa367a.chunk.js.map