(this["webpackJsonparith.ru"]=this["webpackJsonparith.ru"]||[]).push([[0],{124:function(e,t,n){e.exports={leaderboard:"Leaderboard_leaderboard__3ylgd",currentUser:"Leaderboard_currentUser__2bDSQ"}},174:function(e,t,n){},192:function(e,t,n){e.exports={main:"LogIn_main__2t8Ew",links:"LogIn_links__1eZTY"}},193:function(e,t,n){e.exports={main:"SignUp_main__1_3G2"}},206:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(46),s=n.n(a),o=(n(206),n(31)),i=n(19),l=n(26),u=n(12),j=n(24),d=n.n(j),b=n(55),h=n(56),O=n.n(h),x="SET_USER",m="LOGOUT",p={username:"anon",isAuth:!1};var f=function(e){return{type:x,payload:e}},g=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("https://api.arith.ru/signup",{username:t,email:n,password:r});case 3:c=e.sent,alert(c.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.arith.ru/get",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},params:{questionCount:t}});case 3:n=e.sent,localStorage.setItem("results"+t,JSON.stringify(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("https://api.arith.ru/set",{date:t,result:n,questionCount:r},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.arith.ru/leaders",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},params:{questionCount:t}});case 3:n=e.sent,localStorage.setItem("leaderboard"+t,JSON.stringify({leaders:n.data,date:new Date})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=n(173),y=n.n(S),C=n(66),_=n.n(C),N=n(80),I=n.n(N),A=n(1),L=function(){var e=Object(l.c)((function(e){return e.user.isAuth}));return Object(A.jsx)("nav",{id:I.a.menu,children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{exact:!0,to:"/",activeClassName:I.a.active,children:Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(A.jsx)("path",{d:"m 8 3.293 l 6 6 V 13.5 a 1.5 1.5 0 0 1 -1.5 1.5 h -9 A 1.5 1.5 0 0 1 2 13.5 V 9.293 l 6 -6 z"}),Object(A.jsx)("path",{d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"})]})})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:"/leaderboard",activeClassName:I.a.active,children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:Object(A.jsx)("path",{d:"m 1 10 h 4 v 5 H 1 v -5 z M 6 1 h 4 v 14 H 6 V 1 z m 5 5 h 4 v 9 h -4 V 6 z"})})})}),Object(A.jsx)("li",{children:Object(A.jsx)(o.b,{to:e?"/profile":"/login",activeClassName:I.a.active,children:Object(A.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(A.jsx)("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(A.jsx)("path",{d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})]})})})]})})},U=function(){var e,t,n,c=Object(r.useState)("1 + 1"),a=Object(u.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(0),l=Object(u.a)(i,2),j=l[0],d=l[1],b=Object(r.useState)(),h=Object(u.a)(b,2),O=h[0],x=h[1],m=Object(r.useState)(!1),p=Object(u.a)(m,2),f=p[0],g=p[1],v=Object(r.useState)(),w=Object(u.a)(v,2),S=w[0],C=w[1],N=null!==(e=localStorage.getItem("questionCount"))&&void 0!==e?e:5,I=null!==(t=JSON.parse(localStorage.getItem("results"+N)))&&void 0!==t?t:[],U=function(){return Math.floor(9*Math.random())+1},M=function(){if(j==N){var e=new Date,t={date:e,result:(e-O)/1e3};return I.push(t),localStorage.setItem("results"+N,JSON.stringify(I)),g(!0),k(t.date,t.result,N),void z()}O||x(new Date),n="",function(){var e=U(),t=U();o("".concat(e," + ").concat(t))}(),d(j+1)},q=function(e){var t,r;n+=null!==(t=null===(r=e.target)||void 0===r?void 0:r.innerText)&&void 0!==t?t:e;var c=function(){var e=s.split("+"),t=Object(u.a)(e,2);return+t[0]+ +t[1]+""}();c.startsWith(n)&&c==n?M():(!c.startsWith(n)||n.length>=c.length)&&(n="",C(_.a.incorrect),setTimeout((function(){C()}),250))},z=function(){n="",x(),o("1 + 1"),d(0)},D=function(e){isFinite(e.key)&&32!=e.keyCode&&q(e.key),35==e.keyCode&&z()};return Object(r.useEffect)((function(){return n="",document.addEventListener("keydown",D),function(){document.removeEventListener("keydown",D)}})),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("header",{children:Object(A.jsx)(L,{})}),Object(A.jsxs)("main",{id:_.a.main,children:[Object(A.jsxs)("table",{children:[Object(A.jsx)("caption",{id:_.a.question,className:S,onClick:z,children:s}),Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"7"})}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"8"})}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"9"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"4"})}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"5"})}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"6"})})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"1"})}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"2"})}),Object(A.jsx)("td",{children:Object(A.jsx)("span",{className:"button",onClick:q,children:"3"})})]}),Object(A.jsx)("tr",{children:Object(A.jsx)("td",{colSpan:"3",children:Object(A.jsx)("span",{id:_.a.btn0,className:"button",onClick:q,children:"0"})})})]}),Object(A.jsx)("tfoot",{children:Object(A.jsx)("tr",{children:Object(A.jsx)("td",{id:_.a.counter,colSpan:"3",children:"".concat(j,"/").concat(N)})})})]}),Object(A.jsxs)(y.a,{isOpen:f,style:{content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)"}},onRequestClose:function(){return g(!1)},children:[I.length>0&&Object(A.jsxs)("div",{children:["Your result: ",I[I.length-1].result," sec"]}),function(){if(I.length<2)return!1;var e=I[I.length-1].result;return I.every((function(t){return t.result>=e}))}()&&Object(A.jsx)("div",{children:"It's personal best!"}),I.length>1&&Object(A.jsxs)("div",{children:["Previous: ",I[I.length-2].result]})]})]}),Object(A.jsx)("footer",{})]})},M=n(124),q=n.n(M),z=function(e){var t=Object(l.c)((function(e){return e.user.username}));if(!e.leaders)return null;var n={hour:"numeric",minute:"numeric",second:"numeric",year:"numeric",month:"numeric",day:"numeric"};return e.leaders.sort((function(e,t){return e.result-t.result})).map((function(e){return Object(A.jsxs)("tr",{className:e.username==t?q.a.currentUser:null,children:[Object(A.jsx)("td",{children:e.username}),Object(A.jsx)("td",{children:new Intl.DateTimeFormat("default",n).format(new Date(e.date))}),Object(A.jsx)("td",{children:e.result})]})}))},D=function(){var e,t,n=Object(r.useState)(null!==(e=localStorage.getItem("questionCount"))&&void 0!==e?e:5),c=Object(u.a)(n,2),a=c[0],s=c[1],o=null!==(t=JSON.parse(localStorage.getItem("leaderboard"+a)))&&void 0!==t?t:[],i=function(e){e>0&&e<101&&s(e)};return Object(r.useEffect)((function(){(o.length<1||new Date-new Date(o.date)>3e5)&&w(a)})),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("header",{children:Object(A.jsx)(L,{})}),Object(A.jsx)("main",{children:Object(A.jsxs)("table",{id:q.a.leaderboard,children:[Object(A.jsxs)("caption",{children:[Object(A.jsx)("h2",{children:"Leaderboard"}),Object(A.jsxs)("h3",{children:["Questions: ",a]}),Object(A.jsx)("span",{className:"button",onClick:function(){return i(+a-1)},children:"Prev"}),"|",Object(A.jsx)("span",{className:"button",onClick:function(){return i(+a+1)},children:"Next"})]}),Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Username"}),Object(A.jsx)("th",{children:"Date"}),Object(A.jsx)("th",{children:"Result (sec)"})]})}),Object(A.jsx)("tbody",{children:Object(A.jsx)(z,{leaders:o.leaders})})]})}),Object(A.jsx)("footer",{})]})},F=n(174),E=n.n(F),V=n(79),B=function(e){return Object(A.jsx)("input",Object(V.a)({onChange:function(t){return e.setValue(t.target.value)}},e))},J=n(378),T=n(379),R=n(383),P=n(190),Q=n(191),G=n(83),H=n(197),W=function(){var e,t=Object(l.c)((function(e){return e.user.username})),n=Object(r.useState)(null!==(e=localStorage.getItem("questionCount"))&&void 0!==e?e:5),c=Object(u.a)(n,2),a=c[0],s=c[1],o=JSON.parse(localStorage.getItem("results"+a)),j=Object(l.b)(),d=Object(i.e)(),b=function(e){if("auto"===e)return null;return new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric",second:"numeric",year:"numeric",month:"numeric",day:"numeric"}).format(new Date(e))};return Object(r.useEffect)((function(){localStorage.getItem("results"+a)&&"[]"!=localStorage.getItem("results"+a)||v(a)})),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("header",{children:Object(A.jsx)(L,{})}),Object(A.jsxs)("main",{id:E.a.main,children:[Object(A.jsx)("h2",{children:t}),Object(A.jsx)("label",{htmlFor:"count",children:Object(A.jsx)("h3",{children:"Questions:"})}),Object(A.jsx)(B,{type:"number",name:"count",value:a,setValue:s,onInput:function(e){var t=e.target.value;t=(t=t<1?1:t)>100?100:t,localStorage.setItem("questionCount",t)},min:"1",max:"100"}),Object(A.jsx)(J.a,{height:400,children:Object(A.jsxs)(T.a,{data:o,margin:{top:40,right:40,bottom:20,left:20},children:[Object(A.jsx)(R.a,{vertical:!1}),Object(A.jsx)(P.a,{dataKey:"date",tickFormatter:b,dy:15}),Object(A.jsx)(Q.a,{domain:["auto","auto"]}),Object(A.jsx)(G.a,{itemStyle:{color:"black",backgroundColor:"white"},labelFormatter:b,contentStyle:{backgroundColor:"rgba(255, 255, 255, 0.8)"}}),Object(A.jsx)(H.a,{dataKey:"result"})]})}),Object(A.jsx)("span",{className:"button",onClick:function(){j({type:m}),d.push("/login")},children:"Log Out"})]}),Object(A.jsx)("footer",{})]})},Y=n(192),Z=n.n(Y),K=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),j=s[0],h=s[1],x=Object(l.b)(),m=Object(i.e)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("header",{children:Object(A.jsx)(L,{})}),Object(A.jsxs)("main",{id:Z.a.main,children:[Object(A.jsx)("h2",{children:"Log In"}),Object(A.jsx)(B,{value:n,setValue:c,type:"text",placeholder:"Username or email"}),Object(A.jsx)(B,{value:j,setValue:h,type:"password",placeholder:"Password"}),Object(A.jsx)("span",{className:"button",onClick:function(){x(function(e,t){return function(){var n=Object(b.a)(d.a.mark((function n(r){var c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.a.post("https://api.arith.ru/login",{username:e,password:t});case 3:c=n.sent,r(f(c.data.username)),localStorage.setItem("token",c.data.token),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,j)),m.push("/profile")},children:"Log In"})]}),Object(A.jsxs)("footer",{children:[Object(A.jsx)("div",{className:"links",children:Object(A.jsx)(o.b,{to:"/resetpassword",children:"Reset password"})}),Object(A.jsx)("div",{className:"links",children:Object(A.jsx)(o.b,{to:"/signup",children:"Sign Up"})})]})]})},X=n(193),$=n.n(X),ee=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),l=s[0],j=s[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),h=b[0],O=b[1],x=Object(i.e)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("header",{children:Object(A.jsx)(L,{})}),Object(A.jsxs)("main",{id:$.a.main,children:[Object(A.jsx)("h2",{children:"Sign Up"}),Object(A.jsx)(B,{value:n,setValue:c,type:"text",placeholder:"Username"}),Object(A.jsx)("span",{className:"errorAlert hidden",children:"Username already taken"}),Object(A.jsx)("span",{className:"errorAlert hidden",children:"Only letters and numbers are allowed"}),Object(A.jsx)(B,{value:l,setValue:j,type:"email",placeholder:"Email"}),Object(A.jsx)("span",{className:"errorAlert hidden",children:"Another account is using this email"}),Object(A.jsx)(B,{value:h,setValue:O,type:"password",placeholder:"Password"}),Object(A.jsx)("span",{className:"errorAlert hidden",children:"Use from 6 to 15 characters"}),Object(A.jsx)("div",{children:Object(A.jsx)("span",{className:"button",onClick:function(){g(n,l,h),x.push("/login")},children:"Sign Up"})})]}),Object(A.jsx)("footer",{children:Object(A.jsx)("div",{className:"links",children:Object(A.jsx)(o.b,{to:"/login",children:"Log In"})})})]})};var te=function(){var e=Object(l.c)((function(e){return e.user.isAuth})),t=Object(l.b)();return Object(r.useEffect)((function(){t(function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.arith.ru/auth",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:n=e.sent,t(f(n.data.username)),localStorage.setItem("token",n.data.token),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),localStorage.removeItem("token");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(A.jsxs)(o.a,{children:[Object(A.jsx)(i.a,{exact:!0,path:"/",component:U}),Object(A.jsx)(i.a,{path:"/leaderboard",component:D}),e?Object(A.jsx)(i.a,{path:"/profile",component:W}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(i.a,{path:"/login",component:K}),Object(A.jsx)(i.a,{path:"/signup",component:ee})]})]})},ne=n(76),re=n(194),ce=n(195),ae=Object(ne.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{username:t.payload,isAuth:!0};case m:return localStorage.removeItem("token"),{username:"anon",isAuth:!1};default:return e}}}),se=Object(ne.createStore)(ae,Object(re.composeWithDevTools)(Object(ne.applyMiddleware)(ce.a)));s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(l.a,{store:se,children:Object(A.jsx)(te,{})})}),document.getElementById("root"))},66:function(e,t,n){e.exports={question:"Main_question__ByQyq",main:"Main_main__1Ho6U",btn0:"Main_btn0__1Zex9",counter:"Main_counter__1ksg2",incorrect:"Main_incorrect__2AGZl"}},80:function(e,t,n){e.exports={active:"Menu_active__2YLX4"}}},[[376,1,2]]]);
//# sourceMappingURL=main.574be184.chunk.js.map