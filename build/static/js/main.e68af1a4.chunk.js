(this["webpackJsonpmusic-static"]=this["webpackJsonpmusic-static"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(19),s=n(1),r=n.n(s),a=n(20),i=n.n(a),l=(n(26),n(11)),j=n(0);var o=function(e){return Object(j.jsx)("header",{children:Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:Object(j.jsxs)("ul",{className:"menuul",children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/signup",children:"Sign up"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/signin",children:"Sign in"})})]})})})})},u=n(7),b=n(8),h=n(10),d=n(9),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Vibrato Music"}),Object(j.jsx)("h2",{children:"All your favorite music in one spot!"}),Object(j.jsxs)("div",{className:"flex-container",children:[Object(j.jsx)("h3",{children:"What is Vibrato Music"}),Object(j.jsx)("img",{alt:"musicapp",style:{width:"500px",height:"auto"},src:"https://purepng.com/public/uploads/large/purepng.com-women-listening-musicwomenpeoplepersonsfemalemusiclistening-music-1121525075419p7qae.png"}),Object(j.jsx)("p",{children:"Do you like to list your favorite music from different places ? Vibrato Music is an app to not only store  your favorite music but also allows you to add more songs from random websites."})]}),Object(j.jsxs)("div",{className:"flex-container",children:[Object(j.jsx)("h3",{children:"Why use Vibrato Music"}),Object(j.jsx)("p",{children:"Apple Music, Youtube, Spotify, Dont Know which music to play? Imagine bringing all that on one place. Thats what Vibrato does for you."})]})]})}}]),n}(s.Component),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"\xa9 2021 VibratitonMusic"})})}}]),n}(s.Component);var x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{children:Object(j.jsx)(O,{})}),Object(j.jsx)(p,{})]})},m=(n(36),n(2)),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsx)("h1",{children:"Sign in"}),Object(j.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(j.jsxs)("div",{className:"flex-container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{onChange:function(t){return e.handleInput(t)},type:"text",name:"email",placeholder:"Email"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{onChange:function(t){return e.handleInput(t)},type:"password",name:"password",placeholder:"password"})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("button",{children:"Sign In"})}),Object(j.jsx)("br",{})]})}),Object(j.jsx)(p,{})]})}}]),n}(r.a.Component),v=n(14),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={fullname:"",email:"",pasword:""},e.handleSubmit=function(t){t.preventDefault(),fetch("http://localhost:8000/api/users",{method:"POST",body:JSON.stringify({fullname:e.state.fullname,email:e.state.email,password:e.state.password}),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e.json())})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(n,[{key:"handleInput",value:function(e){var t=e.currentTarget,n=t.name,c=t.value;this.setState(Object(v.a)({},n,c)),console.log(this.state.fullname)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsx)("h1",{children:"Sign up"}),Object(j.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(j.jsxs)("div",{className:"flex-container",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"fullname",children:"Fullname"}),Object(j.jsx)("input",{onChange:function(t){return e.handleInput(t)},type:"text",name:"fullname",placeholder:"fullname"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{onChange:function(t){return e.handleInput(t)},type:"text",name:"email",placeholder:"email"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{onChange:function(t){return e.handleInput(t)},type:"password",name:"password",placeholder:"password"})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("button",{children:"Sign Up"})}),Object(j.jsx)("br",{})]})}),Object(j.jsx)(p,{})]})}}]),n}(r.a.Component),y={color:"white","text-decoration":"none"};var w=function(e){return Object(j.jsx)("header",{children:Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{children:Object(j.jsxs)("ul",{className:"menuul",children:[Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{to:"/",style:y,children:["Welcome ",e.email]})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/signin",style:y,children:"Sign out"})})]})})})})},N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"dashboard",children:[Object(j.jsx)("br",{}),Object(j.jsx)(w,{}),Object(j.jsxs)("h2",{children:[Object(j.jsx)("i",{className:"fas fa-music"}),"Whats Next? Just add your favorite music and get started with the app!"]}),Object(j.jsx)("hr",{}),Object(j.jsx)(p,{})]})}}]),n}(s.Component);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/",children:Object(j.jsx)(x,{})}),Object(j.jsx)(m.a,{path:"/signin",children:Object(j.jsx)(f,{})}),Object(j.jsx)(m.a,{path:"/signup",children:Object(j.jsx)(g,{})}),Object(j.jsx)(m.a,{path:"/dashboard/:id",render:function(e){return Object(j.jsx)(N,Object(c.a)({},e))}})]})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e68af1a4.chunk.js.map