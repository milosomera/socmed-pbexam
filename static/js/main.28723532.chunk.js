(this.webpackJsonpsocialmediaapp=this.webpackJsonpsocialmediaapp||[]).push([[0],{58:function(e,t,a){e.exports=a(88)},63:function(e,t,a){},64:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(23),l=a.n(s),o=(a(63),a(64),Object(r.createContext)()),m=a(5),c=a(12),i=a(13),u=a(15),d=a(14),p=a(98),E=a(48),h=a(99),g=a(8),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"navbar"},n.a.createElement(p.a,{bg:"success",expand:"lg",variant:"dark",fixed:"top"},n.a.createElement(E.a,null,"Welcome to SocMed, ",this.props.user.username),n.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(h.a,{className:"mr-auto"},n.a.createElement(g.b,{to:"/socmed-pbexam",className:"nav-item"},"View Posts"),n.a.createElement(g.b,{to:"/socmed-pbexam/create-post",className:"nav-item"},"Create Post")),n.a.createElement(h.a,{id:"sign-out",className:"ml-auto"},n.a.createElement(g.b,{to:"/socmed-pbexam",onClick:this.props.logout},"Sign Out")))))}}]),a}(n.a.Component),b=a(27),f=a(91),w=a(92),C=a(93),y=a(55),S=a(97),x=a(56),O=a(57),P=a(94),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",emailError:"",passwordError:""},e.inputChangeHandler=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.errorHandler=function(){""===e.state.email?e.setState({emailError:"This field is required"}):e.setState({emailError:""}),""===e.state.password?e.setState({passwordError:"This field is required"}):e.setState({passwordError:""})},e.login=function(){e.errorHandler(),""!==e.state.email&&""!==e.state.password&&e.props.userCredential(e.state.email,e.state.password)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"home"},n.a.createElement(f.a,null,n.a.createElement(w.a,null,n.a.createElement(f.a,null,n.a.createElement(C.a,null,n.a.createElement(y.a,null,n.a.createElement("h1",null,"SocMed"),n.a.createElement("p",{className:"text"},"Broaden your perspective with different opinions on SocMed.")),n.a.createElement(y.a,{id:"home-form"},n.a.createElement(S.a,null,n.a.createElement(x.a,null,n.a.createElement(O.a,{type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.inputChangeHandler}),n.a.createElement("div",{className:"error-msg"},n.a.createElement("small",null,this.state.emailError))),n.a.createElement(x.a,null,n.a.createElement(O.a,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.inputChangeHandler}),n.a.createElement("div",{className:"error-msg"},n.a.createElement("small",null,this.state.passwordError))),n.a.createElement(P.a,{variant:"success",onClick:this.login,block:!0},"Log In"),n.a.createElement("hr",null),n.a.createElement(g.b,{to:"/socmed-pbexam/registration"},n.a.createElement(P.a,{variant:"info",block:!0},"Sign Up ")),n.a.createElement("p",{className:"sign-up"},"Not yet registered? Click ",n.a.createElement("span",null,'"Sign Up"'),"."))))))))}}]),a}(n.a.Component),j=a(20),N=a.n(j),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={username:"",email:"",password:"",confirmPassword:"",usernameError:"",emailError:"",passwordError:"",confirmPasswordError:""},e.inputChangeHandler=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.errorHandler=function(){""===e.state.username?e.setState({usernameError:"This field is required"}):e.setState({usernameError:""}),""===e.state.email?e.setState({emailError:"This field is required"}):e.setState({emailError:""}),""===e.state.password?e.setState({passwordError:"This field is required"}):e.setState({passwordError:""}),e.state.confirmPassword!==e.state.password?e.setState({confirmPasswordError:"Password didn't match"}):e.setState({confirmPasswordError:""})},e.register=function(){e.errorHandler(),""!==e.state.username&&""!==e.state.email&&""!==e.state.password&&e.state.password===e.state.confirmPassword&&N.a.post("https://socmed-pbexam.herokuapp.com/users/register",{username:e.state.username,email:e.state.email,password:e.state.password}).then((function(){e.props.userCredential(e.state.email,e.state.password),e.setState({username:"",email:"",password:"",confirmPassword:""})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"registration"},n.a.createElement(f.a,null,n.a.createElement(w.a,null,n.a.createElement(S.a,null,n.a.createElement(x.a,null,n.a.createElement(C.a,null,n.a.createElement(y.a,null,n.a.createElement(O.a,{type:"text",placeholder:"Username",name:"username",value:this.state.username,onChange:this.inputChangeHandler}),n.a.createElement("div",{className:"error-msg"},n.a.createElement("small",null,this.state.usernameError))),n.a.createElement(y.a,null,n.a.createElement(O.a,{type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.inputChangeHandler}),n.a.createElement("div",{className:"error-msg"},n.a.createElement("small",null,this.state.emailError))))),n.a.createElement(x.a,null,n.a.createElement(C.a,null,n.a.createElement(y.a,null,n.a.createElement(O.a,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.inputChangeHandler}),n.a.createElement("div",{className:"error-msg"},n.a.createElement("small",null,this.state.passwordError))),n.a.createElement(y.a,null,n.a.createElement(O.a,{type:"password",placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.inputChangeHandler}),n.a.createElement("div",{className:"error-msg"},n.a.createElement("small",null,this.state.confirmPasswordError))))),n.a.createElement(g.b,{to:"/socmed-pbexam"},n.a.createElement(P.a,{className:"reg-button",variant:"success",onClick:this.register,block:!0},"Register")),n.a.createElement("hr",null),n.a.createElement(g.b,{to:"/socmed-pbexam"},n.a.createElement(P.a,{className:"reg-button",variant:"info",block:!0},"Sign In")),n.a.createElement("p",{className:"sign-in"},"Registered already? Click ",n.a.createElement("span",null,'"Sign In"'),".")))))}}]),a}(n.a.Component),H=a(95),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={comment:""},e.getComment=function(t){e.setState({comment:t.target.value})},e.addCommentHandler=function(){var t={body:e.state.comment,user:e.props.user.username,post:e.props.post._id};e.props.addComment(t,e.props.post._id)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"comment-box"},n.a.createElement(S.a,null,n.a.createElement(C.a,null,n.a.createElement(y.a,{md:9},n.a.createElement(x.a,null,n.a.createElement(O.a,{as:"textarea",rows:"1",placeholder:"Comment here",onChange:this.getComment}))),n.a.createElement(y.a,{md:3},n.a.createElement(P.a,{id:"comment-button",variant:"success",size:"sm",onClick:this.addCommentHandler},n.a.createElement(g.b,{to:"/socmed-pbexam/posts/"+this.props.post._id},"Comment"))))))}}]),a}(n.a.Component),U=a(96),T=function(e){var t=Object(r.useContext)(o),a=t.addComment,s=t.user;return n.a.createElement("div",{id:"post"},n.a.createElement(C.a,null,n.a.createElement(y.a,{md:4,id:"image-container"},n.a.createElement(H.a,{src:e.post.image,alt:"Image goes here",thumbnail:!0})),n.a.createElement(y.a,{id:"post-body",md:8},n.a.createElement("div",{id:"button-div"},e.post.user.username===JSON.parse(localStorage.getItem("appUser")).username?n.a.createElement(P.a,{variant:"outline-danger",size:"sm",id:e.post._id,onClick:e.deletePost},"x"):""),n.a.createElement("div",null,n.a.createElement("strong",null,e.post.user.username,":")," ",e.post.body.substring(0,100)),n.a.createElement("hr",null),n.a.createElement("div",{id:"post-detail-link"},n.a.createElement(C.a,null,n.a.createElement(y.a,null,n.a.createElement(g.b,{to:"/socemed-pbexam/posts/"+e.post._id},"read more")),n.a.createElement(y.a,null,n.a.createElement("span",null,"Comments: (",e.post.comments.length,")"),n.a.createElement("span",null,n.a.createElement(U.a,null))))),n.a.createElement(_,{post:e.post,addComment:a,user:s}))))},L=function(){var e=Object(r.useContext)(o),t=e.posts,a=e.user,s=e.deletePost,l=t.map((function(e){return n.a.createElement(T,{key:e._id,post:e,user:a,deletePost:s})}));return n.a.createElement("div",{id:"all-post"},n.a.createElement(y.a,{id:"posts-container",lg:6},n.a.createElement(f.a,null,l)))},q=function(e){var t=e.post.comments.map((function(e){return n.a.createElement("div",{key:e._id,className:"comment-body"},n.a.createElement("strong",null,e.user,": ")," ",e.body,n.a.createElement("br",null))}));return n.a.createElement("div",{id:"post-detail"},n.a.createElement(y.a,{id:"post-detail-container",lg:6},n.a.createElement(f.a,null,n.a.createElement(C.a,null,n.a.createElement(H.a,{src:e.post.image,alt:"Image goes here",thumbnail:!0,fluid:!0})),n.a.createElement(C.a,{className:"post-body-detail"},n.a.createElement("div",null,n.a.createElement("strong",null,e.post.user.username,":")," ",e.post.body)),e.post.comments.length>0?n.a.createElement(C.a,null,n.a.createElement("div",{id:"comment-header"},n.a.createElement("strong",null,"Comments:"))):"",n.a.createElement(C.a,null,t))))},A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={newPost:"",newImage:""},e.getPost=function(t){var a=t.target.value;e.setState({newPost:a})},e.getImage=function(t){e.setState({newImage:t.target.value})},e.addPostHandler=function(){var t={user:e.props.user._id,body:e.state.newPost,image:e.state.newImage};e.props.addPost(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"create-post"},n.a.createElement(y.a,{id:"create-post-container",lg:6},n.a.createElement(f.a,null,n.a.createElement(S.a,null,n.a.createElement(x.a,null,n.a.createElement(O.a,{as:"textarea",rows:"3",placeholder:"Type your post here.",onChange:this.getPost})),n.a.createElement(x.a,null,n.a.createElement(O.a,{type:"text",placeholder:"Image URL",onChange:this.getImage})),n.a.createElement(y.a,{id:"submit-post",lg:1,xs:1},n.a.createElement(P.a,{variant:"success",onClick:this.addPostHandler},n.a.createElement(g.b,{to:"/socmed-pbexam"},"Post")))))))}}]),a}(n.a.Component),J=function(){var e=Object(r.useContext)(o),t=e.isLoggedin,a=e.user,s=e.userCredential,l=e.logout,c=e.posts,i=e.addPost,u=c.map((function(e){return n.a.createElement(m.a,{path:"/socmed-pbexam/posts/"+e._id,key:e._id},n.a.createElement(q,{post:e}))}));return n.a.createElement("div",null,t?n.a.createElement("div",null,n.a.createElement(v,{logout:l,user:a}),n.a.createElement(m.a,{path:"/socmed-pbexam",exact:!0},n.a.createElement(L,null)),u,n.a.createElement(m.a,{path:"/socmed-pbexam/create-post"},n.a.createElement(A,{addPost:i,user:a}))):n.a.createElement("div",null,n.a.createElement(m.a,{path:"/socmed-pbexam",exact:!0},n.a.createElement(k,{user:a,userCredential:s})),n.a.createElement(m.a,{path:"/socmed-pbexam/registration"},n.a.createElement(I,{userCredential:s}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(31),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).userCredential=function(t,a){N.a.post("https://socmed-pbexam.herokuapp.com/users/login",{email:t,password:a}).then((function(t){t.data.error?alert("Invalid email/password"):(localStorage.setItem("appUser",JSON.stringify(t.data)),e.setState({user:t.data,isLoggedin:!0}))}))},e.logout=function(){localStorage.removeItem("appUser"),e.setState({isLoggedin:!1})},e.addPost=function(t){N.a.post("https://socmed-pbexam.herokuapp.com/posts",{post:t}).then((function(t){var a=[t.data].concat(Object(M.a)(e.state.posts));e.setState({posts:a})}))},e.deletePost=function(t){var a=Object(M.a)(e.state.posts);a.map((function(e){return t.target.id===e._id&&a.splice(a.indexOf(e),1),a})),e.setState({posts:a}),N.a.delete("https://socmed-pbexam.herokuapp.com/posts/"+t.target.id)},e.addComment=function(t,a){N.a.post("https://socmed-pbexam.herokuapp.com/comments",{comment:t}).then((function(){var r=Object(M.a)(e.state.posts);r.map((function(e){return e._id===a&&e.comments.push(t),e})),e.setState({posts:r})}))},e.state={isLoggedin:!!localStorage.getItem("appUser"),user:localStorage.getItem("appUser")?JSON.parse(localStorage.getItem("appUser")):{},posts:[],userCredential:e.userCredential,logout:e.logout,addPost:e.addPost,deletePost:e.deletePost,addComment:e.addComment},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;N()("https://socmed-pbexam.herokuapp.com/posts").then((function(t){var a=t.data;e.setState({posts:a})}))}},{key:"render",value:function(){return n.a.createElement(o.Provider,{value:this.state},this.props.children)}}]),a}(n.a.Component);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null,n.a.createElement(g.a,null,n.a.createElement(J,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.28723532.chunk.js.map