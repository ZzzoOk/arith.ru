(this["webpackJsonparith.ru"]=this["webpackJsonparith.ru"]||[]).push([[0],{121:function(e,t,n){e.exports={leaderboard:"Leaderboard_leaderboard__3ylgd",last:"Leaderboard_last__2jW8J"}},122:function(e,t,n){},171:function(e,t,n){},189:function(e,t,n){e.exports={main:"LogIn_main__2t8Ew",links:"LogIn_links__1eZTY"}},190:function(e,t,n){e.exports={main:"SignUp_main__1_3G2"}},204:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(51),s=n.n(a),l=(n(204),n(30)),o=n(19),i=n(27),j=n(13),u=n(49),d=n.n(u),b=n(171),h=n.n(b),O=n(2),x=function(){var e=Object(i.c)((function(e){return e.user.isAuth}));return Object(O.jsx)("nav",{id:h.a.menu,children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(O.jsx)("path",{d:"m 8 3.293 l 6 6 V 13.5 a 1.5 1.5 0 0 1 -1.5 1.5 h -9 A 1.5 1.5 0 0 1 2 13.5 V 9.293 l 6 -6 z"}),Object(O.jsx)("path",{d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:"/leaderboard",children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:Object(O.jsx)("path",{d:"m 1 10 h 4 v 5 H 1 v -5 z M 6 1 h 4 v 14 H 6 V 1 z m 5 5 h 4 v 9 h -4 V 6 z"})})})}),Object(O.jsx)("li",{children:Object(O.jsx)(l.b,{to:e?"/profile":"/login",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(O.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(O.jsx)("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})})})]})})},m=n(172),p=n.n(m),g=function(){var e,t,n,a,s,l,i=null!==(e=localStorage.getItem("maxCount"))&&void 0!==e?e:5,u=Object(r.useState)(null!==(t=JSON.parse(localStorage.getItem("results"+i)))&&void 0!==t?t:[]),b=Object(j.a)(u,2),h=b[0],m=(b[1],c.a.useState(!1)),g=Object(j.a)(m,2),f=g[0],v=g[1],k=(Object(o.e)(),function(){return Math.floor(9*Math.random())+1}),w=function(){var e;if(s==i){var t=new Date,r={date:t,result:(t-l)/1e3};return h.push(r),localStorage.setItem("results"+i,JSON.stringify(h)),void v(!0)}l=null!==(e=l)&&void 0!==e?e:new Date,a="",document.getElementById(d.a.counter).innerText="".concat(++s,"/").concat(i),n.innerText=k()+" + "+k()},y=function(e){var t,r;a+=null!==(t=null===(r=e.target)||void 0===r?void 0:r.innerText)&&void 0!==t?t:e;var c=function(){var e=n.innerText.split("+");return+e[0]+ +e[1]+""}();c.startsWith(a)&&c==a?w():(!c.startsWith(a)||a.length>=c.length)&&(a="",n.style.color="red",setTimeout((function(){n.style.color="black"}),250))},S=function(){a="",s=0,l=null,n.innerText="1 + 1",document.getElementById(d.a.counter).innerText="0/".concat(i)},C=function(e){isFinite(e.key)&&32!=e.keyCode&&y(e.key),35==e.keyCode&&S()};Object(r.useEffect)((function(){return n=document.getElementById(d.a.task),document.addEventListener("keydown",C),S(),function(){document.removeEventListener("keydown",C)}}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(x,{})}),Object(O.jsxs)("main",{id:d.a.main,children:[Object(O.jsxs)("table",{children:[Object(O.jsx)("caption",{id:d.a.task,onClick:S,children:"1 + 1"}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"7"})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"8"})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"9"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"4"})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"5"})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"6"})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"1"})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"2"})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"button",onClick:y,children:"3"})})]}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{colSpan:"3",children:Object(O.jsx)("span",{id:d.a.btn0,className:"button",onClick:y,children:"0"})})})]}),Object(O.jsx)("tfoot",{children:Object(O.jsx)("tr",{children:Object(O.jsx)("td",{id:d.a.counter,colSpan:"3",children:"0/50"})})})]}),Object(O.jsxs)(p.a,{isOpen:f,style:{content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)"}},onRequestClose:function(){return v(!1)},children:[h.length>0&&Object(O.jsxs)("div",{children:["Your result: ",h[h.length-1].result," sec"]}),function(){if(h.length<2)return!1;var e=h[h.length-1].result;return h.every((function(t){return t.result>=e}))}()&&Object(O.jsx)("div",{children:"It's personal best!"}),h.length>1&&Object(O.jsxs)("div",{children:["Previous: ",h[h.length-2].result]})]})]}),Object(O.jsx)("footer",{})]})},f=n(194),v=n(121),k=n.n(v),w=function(e){var t=Object(i.c)((function(e){return e.user.user}));if(!e.results)return null;var n={hour:"numeric",minute:"numeric",second:"numeric",year:"numeric",month:"numeric",day:"numeric"},r=e.results,c=r[r.length-1].date;return Object(f.a)(r).sort((function(e,t){return e.result-t.result})).map((function(e){return Object(O.jsxs)("tr",{className:e.date===c?k.a.last:null,children:[Object(O.jsx)("td",{children:t}),Object(O.jsx)("td",{children:new Intl.DateTimeFormat("default",n).format(new Date(e.date))}),Object(O.jsx)("td",{children:e.result})]})}))},y=function(){var e,t=null!==(e=localStorage.getItem("maxCount"))&&void 0!==e?e:5,n=Object(r.useState)(JSON.parse(localStorage.getItem("results"+t))),c=Object(j.a)(n,2),a=c[0],s=c[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(x,{})}),Object(O.jsxs)("main",{children:[Object(O.jsxs)("table",{id:k.a.leaderboard,children:[Object(O.jsx)("caption",{children:Object(O.jsx)("h2",{children:"Leaderboard"})}),Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Username"}),Object(O.jsx)("th",{children:"Date"}),Object(O.jsx)("th",{children:"Result (sec)"})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(w,{results:a})})]}),Object(O.jsx)("span",{className:"button",onClick:function(){s(),localStorage.removeItem("results"+t)},children:"Clear"})]}),Object(O.jsx)("footer",{})]})},S=n(122),C=n.n(S),_=n(374),I=n(378),N=n(187),A=n(188),L=n(81),T=n(195),E=n(38),M=function(e){return Object(O.jsx)("input",Object(E.a)({onChange:function(t){return e.setValue(t.target.value)}},e))},U=function(){var e,t=Object(i.c)((function(e){return e.user.user})),n=Object(r.useState)(null!==(e=localStorage.getItem("maxCount"))&&void 0!==e?e:5),c=Object(j.a)(n,2),a=c[0],s=c[1],l=JSON.parse(localStorage.getItem("results"+a)),o=function(e){return new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",second:"numeric",year:"numeric",month:"numeric",day:"numeric"}).format(new Date(e))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(x,{})}),Object(O.jsxs)("main",{id:C.a.main,children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)("label",{htmlFor:"count",children:"Number of sums:"}),Object(O.jsx)(M,{id:C.a.count,type:"number",name:"count",value:a,setValue:s,onInput:function(e){var t=e.target.value;t=(t=t<1?1:t)>100?100:t,localStorage.setItem("maxCount",t)},min:"1",max:"100"}),Object(O.jsx)("h3",{children:"Your stats:"}),Object(O.jsxs)(_.a,{width:800,height:400,data:l,margin:{top:40,right:40,bottom:20,left:20},children:[Object(O.jsx)(I.a,{vertical:!1}),Object(O.jsx)(N.a,{dataKey:"date",tickFormatter:o,dy:15}),Object(O.jsx)(A.a,{domain:["auto","auto"]}),Object(O.jsx)(L.a,{itemStyle:{color:"black",backgroundColor:"white"},labelFormatter:o,contentStyle:{backgroundColor:"rgba(255, 255, 255, 0.8)"}}),Object(O.jsx)(T.a,{dataKey:"result"})]})]}),Object(O.jsx)("footer",{})]})},F=n(189),V=n.n(F),z=n(39),B=n.n(z),D=n(95),J=n(96),R=n.n(J),W="SET_USER",H="LOGOUT",P={user:"anon",isAuth:!1};var Y=function(e){return{type:W,payload:e}},G=function(){var e=Object(D.a)(B.a.mark((function e(t,n,r){var c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.post("https://api.arith.ru/signup",{username:t,email:n,password:r});case 3:c=e.sent,alert(c.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(j.a)(a,2),u=s[0],d=s[1],b=Object(i.b)(),h=Object(o.e)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(x,{})}),Object(O.jsxs)("main",{id:V.a.main,children:[Object(O.jsx)("h2",{children:"Log In"}),Object(O.jsx)(M,{value:n,setValue:c,type:"text",placeholder:"Username or email"}),Object(O.jsx)(M,{value:u,setValue:d,type:"password",placeholder:"Password"}),Object(O.jsx)("span",{className:"button",onClick:function(){b(function(e,t){return function(){var n=Object(D.a)(B.a.mark((function n(r){var c;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R.a.post("https://api.arith.ru/login",{username:e,password:t});case 3:c=n.sent,r(Y(c.data.username)),localStorage.setItem("token",c.data.token),console.log(c.data),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),alert(n.t0.response.data.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,u)),h.push("/profile")},children:"Log In"})]}),Object(O.jsxs)("footer",{children:[Object(O.jsx)("div",{className:"links",children:Object(O.jsx)(l.b,{to:"/resetpassword",children:"Reset password"})}),Object(O.jsx)("div",{className:"links",children:Object(O.jsx)(l.b,{to:"/signup",children:"Sign Up"})})]})]})},Z=n(190),q=n.n(Z),Q=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(j.a)(a,2),i=s[0],u=s[1],d=Object(r.useState)(""),b=Object(j.a)(d,2),h=b[0],m=b[1],p=Object(o.e)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(x,{})}),Object(O.jsxs)("main",{id:q.a.main,children:[Object(O.jsx)("h2",{children:"Sign Up"}),Object(O.jsx)(M,{value:n,setValue:c,type:"text",placeholder:"Username"}),Object(O.jsx)("span",{className:"errorAlert hidden",children:"Username already taken"}),Object(O.jsx)("span",{className:"errorAlert hidden",children:"Only letters and numbers are allowed"}),Object(O.jsx)(M,{value:i,setValue:u,type:"email",placeholder:"Email"}),Object(O.jsx)("span",{className:"errorAlert hidden",children:"Another account is using this email"}),Object(O.jsx)(M,{value:h,setValue:m,type:"password",placeholder:"Password"}),Object(O.jsx)("span",{className:"errorAlert hidden",children:"Use from 6 to 15 characters"}),Object(O.jsx)("div",{children:Object(O.jsx)("span",{className:"button",onClick:function(){G(n,i,h),p.push("/profile")},children:"Sign Up"})})]}),Object(O.jsx)("footer",{children:Object(O.jsx)("div",{className:"links",children:Object(O.jsx)(l.b,{to:"/login",children:"Log In"})})})]})};var X=function(){Object(i.c)((function(e){return e.user.isAuth}));var e=Object(i.b)();return Object(r.useEffect)((function(){e(function(){var e=Object(D.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("https://api.arith.ru/auth",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:n=e.sent,t(Y(n.data.username)),localStorage.setItem("token",n.data.token),console.log(n.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("token");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(O.jsxs)(l.a,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(O.jsx)(o.a,{path:"/leaderboard",component:y}),Object(O.jsx)(o.a,{path:"/profile",component:U}),Object(O.jsx)(o.a,{path:"/login",component:K}),Object(O.jsx)(o.a,{path:"/signup",component:Q})]})},$=n(76),ee=n(191),te=n(192),ne=Object($.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(E.a)(Object(E.a)({},e),{},{user:t.payload,isAuth:!0});case H:return localStorage.removeItem("token"),Object(E.a)(Object(E.a)({},e),{},{user:"anon",isAuth:!1});default:return e}}}),re=Object($.createStore)(ne,Object(ee.composeWithDevTools)(Object($.applyMiddleware)(te.a)));s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{store:re,children:Object(O.jsx)(X,{})})}),document.getElementById("root"))},49:function(e,t,n){e.exports={main:"Main_main__1Ho6U",task:"Main_task__1sNWt",btn0:"Main_btn0__1Zex9",counter:"Main_counter__1ksg2"}}},[[372,1,2]]]);
//# sourceMappingURL=main.57aacf53.chunk.js.map