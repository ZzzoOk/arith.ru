(this["webpackJsonparith.ru"]=this["webpackJsonparith.ru"]||[]).push([[0],{12:function(t,e,n){t.exports={main:"Main_main__ZnQir",task:"Main_task__3GsLL",btn0:"Main_btn0__3o-m8",counter:"Main_counter__gdxYu"}},15:function(t,e,n){t.exports={main:"Settings_main__-yezg"}},20:function(t,e,n){t.exports={leaderboard:"Stats_leaderboard__FcHM8",last:"Stats_last__37UrW"}},22:function(t,e,n){},29:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var s,c,a,r,i,o,l=n(1),u=n.n(l),j=n(21),d=n.n(j),h=(n(29),n(9)),b=n(2),x=n(7),m=n(8),O=n(11),g=n(10),p=n(12),C=n.n(p),f=n(22),k=n.n(f),v=n(0),S=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){return Object(x.a)(this,n),e.call(this,t)}return Object(m.a)(n,[{key:"render",value:function(){return Object(v.jsx)("nav",{id:k.a.menu,children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/stats",children:"Stats"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/settings",children:"Settings"})})]})})}}]),n}(u.a.Component),I=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var l,u,j,d,h;return Object(x.a)(this,n),(h=e.call(this,t)).getRandomInt=function(){return Math.floor(9*Math.random())+1},h.newTask=function(){s.innerText=h.getRandomInt()+" + "+h.getRandomInt()},h.incorrect=function(){c="",s.style.color="red",setTimeout((function(){s.style.color="black"}),250)},h.incCounter=function(){document.getElementById(C.a.counter).innerText="".concat(++a,"/").concat(i)},h.last=function(){return a==i},h.correct=function(){var t;h.last()&&(o.push((new Date-r)/1e3),h.setState({results:o}),sessionStorage.setItem("results"+i,JSON.stringify(o)),h.props.history.push("/stats")),r=null!==(t=r)&&void 0!==t?t:new Date,c="",h.incCounter(),h.newTask()},h.getResult=function(){var t=s.innerText.split("+");return+t[0]+ +t[1]+""},h.handleButtonClick=function(t){c+=t.target.innerText;var e=h.getResult();e.startsWith(c)&&e==c?h.correct():(!e.startsWith(c)||c.length>=e.length)&&h.incorrect()},h.handleTaskClick=function(){h.init()},h.init=function(){c="",a=0,r=null,s.innerText="1 + 1",document.getElementById(C.a.counter).innerText="0/".concat(i)},h.state={username:null!==(l=sessionStorage.getItem("username"))&&void 0!==l?l:"anon",maxCount:null!==(u=sessionStorage.getItem("maxCount"))&&void 0!==u?u:5,results:null!==(j=JSON.parse(sessionStorage.getItem(null!==(d="results"+sessionStorage.getItem("maxCount"))&&void 0!==d?d:5)))&&void 0!==j?j:[]},i=h.state.maxCount,o=h.state.results,h}return Object(m.a)(n,[{key:"componentDidMount",value:function(){s=document.getElementById(C.a.task),this.init()}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)(S,{})}),Object(v.jsx)("main",{id:C.a.main,children:Object(v.jsxs)("table",{children:[Object(v.jsx)("caption",{id:C.a.task,onClick:this.init,children:"1 + 1"}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"7"})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"8"})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"9"})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"4"})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"5"})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"6"})})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"1"})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"2"})}),Object(v.jsx)("td",{children:Object(v.jsx)("span",{className:"button",onClick:this.handleButtonClick,children:"3"})})]}),Object(v.jsx)("tr",{children:Object(v.jsx)("td",{colSpan:"3",children:Object(v.jsx)("span",{id:C.a.btn0,className:"button",onClick:this.handleButtonClick,children:"0"})})})]}),Object(v.jsx)("tfoot",{children:Object(v.jsx)("tr",{children:Object(v.jsx)("td",{id:C.a.counter,colSpan:"3",children:"0/50"})})})]})}),Object(v.jsx)("footer",{})]})}}]),n}(u.a.Component),_=n(24),y=n(20),B=n.n(y),N=function(t){return Object(v.jsxs)("tr",{className:t.last?B.a.last:null,children:[Object(v.jsx)("td",{children:t.username}),Object(v.jsx)("td",{children:t.result})]})},T=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var s,c,a,r,i;return Object(x.a)(this,n),(i=e.call(this,t)).state={username:null!==(s=sessionStorage.getItem("username"))&&void 0!==s?s:"anon",maxCount:null!==(c=sessionStorage.getItem("maxCount"))&&void 0!==c?c:5,results:null!==(a=JSON.parse(sessionStorage.getItem(null!==(r="results"+sessionStorage.getItem("maxCount"))&&void 0!==r?r:5)))&&void 0!==a?a:[]},i}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=Object(_.a)(this.state.results),n=e[e.length-1];return e=e.sort((function(t,e){return t-e})).map((function(e){return Object(v.jsx)(N,{username:t.state.username,result:e,last:e==n})})),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)(S,{})}),Object(v.jsx)("main",{children:Object(v.jsxs)("table",{id:B.a.leaderboard,children:[Object(v.jsx)("caption",{children:"Leaderboard"}),Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Username"}),Object(v.jsx)("th",{children:"Time"})]})}),Object(v.jsx)("tbody",{children:e})]})}),Object(v.jsx)("footer",{})]})}}]),n}(u.a.Component),F=n(15),M=n.n(F),w=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var s,c,a;return Object(x.a)(this,n),(a=e.call(this,t)).handleInput=function(t){a.setState({maxCount:t.target.value}),sessionStorage.setItem("maxCount",t.target.value)},a.handleChange=function(t){a.setState({username:t.target.value}),sessionStorage.setItem("username",t.target.value)},a.state={username:null!==(s=sessionStorage.getItem("username"))&&void 0!==s?s:"anon",maxCount:null!==(c=sessionStorage.getItem("maxCount"))&&void 0!==c?c:5},a}return Object(m.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)(S,{})}),Object(v.jsxs)("main",{id:M.a.main,children:[Object(v.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(v.jsx)("input",{id:M.a.username,type:"text",name:"username",onChange:this.handleChange,value:this.state.username}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{htmlFor:"count",children:"Count: "}),Object(v.jsx)("input",{id:M.a.count,type:"number",name:"count",onInput:this.handleInput,value:this.state.maxCount})]}),Object(v.jsx)("footer",{})]})}}]),n}(u.a.Component);var J=function(){return Object(v.jsxs)(h.a,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",component:I}),Object(v.jsx)(b.a,{path:"/stats",component:T}),Object(v.jsx)(b.a,{path:"/settings",component:w})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),a(t),r(t)}))};d.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),L()}},[[39,1,2]]]);
//# sourceMappingURL=main.8ca48e43.chunk.js.map