(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/profile_photo_luke_skywalker.36855576.png"},31:function(e,t,a){e.exports=a.p+"static/media/star_wars_banner.ce97ecfc.jpg"},38:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/comic-header.4e5a8a79.png"},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),l=a.n(i),o=a(54),c=a(34),m=(a(43),a(36)),s=a(2),d=a(7),u=a(15),g=a(8),E=a(10),p=a(12),f="USERS_REGISTER_REQUEST",v="USERS_REGISTER_SUCCESS",y="USERS_REGISTER_FAILURE",h="USERS_LOGIN_REQUEST",b="USERS_LOGIN_SUCCESS",N="USERS_LOGIN_FAILURE",O="USERS_LOGOUT",C={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("/api/users/login",a).then(k).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},logout:S,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e})};return fetch("/api/users/register",t).then(k)}};function S(){localStorage.removeItem("user")}function k(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&S();var n=a&&a.msg||e.statusText;return Promise.reject(n)}return a}))}var I=a(4),T=Object(I.a)(),w={login:function(e,t,a){return function(a){a({type:h,user:{username:e}}),C.login(e,t).then((function(e){a(function(e){return{type:b,user:e}}(e)),T.replace("/users/".concat(e.id))}),(function(e){a(function(e){return{type:N,error:e}}(e.toString()))}))}},logout:function(){return C.logout(),{type:O}},register:function(e){return function(t){t(function(e){return{type:f,user:e}}(e)),C.register(e).then((function(e){t(function(e){return{type:b,user:e}}(e)),T.replace("/users/".concat(e.id))}),(function(e){t(function(e){return{type:y,error:e}}(e.toString()))}))}},setUser:function(e,t,a){return{type:b,id:e,username:t,email:a}}};var L=a(35),_=function(e){var t=e.data,a=e.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"drag-drop-container",className:"drag-drop-zone",onDrop:function(e){return function(e){e.preventDefault();var t=Object(L.a)(e.dataTransfer.files),n=[];t.map((function(e){return e.preview=URL.createObjectURL(e),n.push(e),n})),t&&(a({type:"AddToList",files:t}),a({type:"AddToDropZone",inDropZone:!1}))}(e)},onDragOver:function(e){return function(e){e.preventDefault(),e.dataTransfer.dropEffect="move",a({type:"AddToDropZone",inDropZone:!0})}(e)},onDragEnter:function(e){return function(e){e.preventDefault(),a({type:"AddToDropZone",inDropZone:!0})}(e)}},r.a.createElement("div",{id:"drag-drop-zone"},"Upload Image"),r.a.createElement("div",{id:"image-preview"},t.fileList.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("img",{src:e.preview,alt:"",style:{width:150,height:150}}))})))))};function j(){var e=r.a.useReducer((function(e,t){switch(t.type){case"AddToDropZone":return Object(g.a)(Object(g.a)({},e),{},{inDropZone:t.inDropZone});case"AddToList":return Object(g.a)(Object(g.a)({},e),{},{fileList:e.fileList.concat(t.files)});default:return e}}),{inDropZone:!1,fileList:[]}),t=Object(E.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(_,{data:a,dispatch:n}))}function D(){var e=Object(n.useState)({username:"",password:""}),t=Object(E.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)({userId:"",username:"",email:"",password:""}),o=Object(E.a)(l,2),c=o[0],m=o[1],f=a.username,v=a.password,y=a.collection,h=a.category,b=Object(d.d)((function(e){return e.auth.loggingIn})),N=Object(d.d)((function(e){return e.auth.loggedIn})),O=Object(s.g)(),C=Object(d.c)(),S=function(e){e.preventDefault();var t=document.getElementById("register-modal"),a=document.getElementById("login-modal");t.style.display="none",a.style.display="block"},k=function(e){e.preventDefault();var t=document.getElementById("login-modal"),a=document.getElementById("register-modal");t.style.display="none",a.style.display="block"},I=function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(u.a)({},a,n))})),m((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(u.a)({},a,n))}))},T=function(e){if(e.preventDefault(),f&&v){var t=(O.pathname||{from:{pathname:"/"}}).from;C(w.login(f,v,t))}},L=function(e){e.preventDefault(),document.getElementById("create-item-modal").style.display="block"};return N?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"landing-page-nav-list-logged"},r.a.createElement("span",{id:"landing-page-logo-logged"},r.a.createElement(p.a,{to:"/",id:"main-logo-logged",activeclass:"active",className:"modal-nav-bar-link"},"Dust 'Em Off")),r.a.createElement("button",{id:"add-collection-button",className:"modal-nav-bar-link",onClick:function(e){e.preventDefault(),document.getElementById("create-modal").style.display="block"}},"Add to Collection"),r.a.createElement("button",{id:"add-item-button",className:"modal-nav-bar-link",onClick:L},"Add Item"),r.a.createElement("div",{id:"my-account-container-logged"},r.a.createElement("button",{id:"logout-button",className:"drop-down-links-buttons",onClick:function(e){e.preventDefault(),C(w.logout())}},"Logout"))),r.a.createElement("div",{id:"create-modal",className:"nav-bar-modal",style:{display:"none"}},r.a.createElement("div",{className:"create-modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(e){e.preventDefault(),document.getElementById("create-modal").style.display="none"}},"\xd7"),r.a.createElement("form",{id:"nav-bar-create-form",onSubmit:T},r.a.createElement("span",{id:"create-form-header"},"Create a New Collection"),r.a.createElement("div",{id:"create-form-elements"},r.a.createElement("input",{id:"create-form-collection",type:"text",name:"collection",placeholder:"Your Collection Name",value:y,onChange:I}),r.a.createElement("select",{id:"create-form-category",type:"select",name:"category",placeholder:"",value:h,onChange:I},r.a.createElement("option",{value:""},"Category"),r.a.createElement("option",{value:"Antiques"},"Antiques"),r.a.createElement("option",{value:"Comic Books"},"Comic Books"),r.a.createElement("option",{value:"Dolls & Toys"},"Dolls & Toys"),r.a.createElement("option",{value:"Sport Memorabilia"},"Sports Memorabilia"),r.a.createElement("option",{value:"Star Wars"},"Star Wars"),r.a.createElement("option",{value:"Trading Cards"},"Trading Cards"),r.a.createElement("option",{value:"Vinyl Records"},"Vinyl Records"))),r.a.createElement("button",{id:"create-form-next-button",type:"submit",onClick:L},"Next ",r.a.createElement("i",{className:"right-arrow"}))))),r.a.createElement("div",{id:"create-item-modal",className:"nav-bar-modal"},r.a.createElement("div",{className:"create-item-modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(e){e.preventDefault(),document.getElementById("create-item-modal").style.display="none"}},"\xd7"),r.a.createElement("form",{id:"nav-bar-item-form",onSubmit:T},r.a.createElement("span",{id:"create-item-form-header"},"Put Your Item on Display"),r.a.createElement("div",{id:"create-item-form-content"},r.a.createElement("div",{id:"create-item-form-elements-left"},r.a.createElement("select",{id:"create-item-form-collection",type:"text",name:"collection",placeholder:"Collection",onChange:I},r.a.createElement("option",{value:""},"Choose Collection"),[]),r.a.createElement("input",{id:"create-item-form-name",type:"text",name:"name",placeholder:"Item Name",onChange:I}),r.a.createElement("textarea",{id:"create-item-form-description",placeholder:"Item Description",type:"textarea",name:"description",onChange:I})),r.a.createElement("div",{id:"create-item-form-elements-right"},r.a.createElement("select",{id:"create-item-form-year",type:"select",name:"year",placeholder:"",onChange:I},r.a.createElement("option",{value:""},"Year"),function(){for(var e=[],t=1900;t<2021;t++)e.unshift(r.a.createElement("option",{key:999*Math.random()+1,value:""},t.toString()));return e}()),r.a.createElement("select",{id:"create-item-form-condition",type:"select",name:"condition",placeholder:"",onChange:I},r.a.createElement("option",{value:""},"Item Condition"),r.a.createElement("option",{value:"Mint"},"Mint"),r.a.createElement("option",{value:"Near Mint"},"Near Mint"),r.a.createElement("option",{value:"Dolls & Toys"},"Good"),r.a.createElement("option",{value:"Sport Memorabilia"},"Fair"),r.a.createElement("option",{value:"Star Wars"},"Poor"),r.a.createElement("option",{value:"Trading Cards"},"Damaged")),r.a.createElement("div",{id:"drag-and-drop-container"},r.a.createElement(j,null)))),r.a.createElement("button",{id:"create-item-form-button",type:"submit"},"Submit ",r.a.createElement("i",{className:"right-arrow"})))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"landing-page-nav-list"},r.a.createElement("span",{id:"landing-page-logo"},r.a.createElement(p.a,{to:"/",activeclass:"active",id:"logo-not-logged",className:"modal-nav-bar-link"},"Dust 'Em Off")),r.a.createElement("button",{id:"landing-page-login-button",className:"modal-nav-bar-link",onClick:S},"My Account"),r.a.createElement("button",{id:"landing-page-signup-button",className:"modal-nav-bar-link",onClick:k},"Sign Up")),r.a.createElement("div",{id:"login-modal",className:"nav-bar-modal"},r.a.createElement("div",{className:"nav-bar-modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(e){e.preventDefault(),document.getElementById("login-modal").style.display="none"}},"\xd7"),r.a.createElement("form",{id:"nav-bar-login-form",onSubmit:T},r.a.createElement("span",{id:"login-form-header"},"Account Login"),r.a.createElement("input",{id:"login-form-username",type:"text",name:"username",placeholder:"Username",value:f,onChange:I}),r.a.createElement("input",{id:"login-form-password",type:"password",name:"password",placeholder:"Password",value:v,onChange:I}),r.a.createElement("button",{id:"login-form-button",type:"submit"},b&&r.a.createElement("span",{className:"spinner"}),"Login")),r.a.createElement("button",{id:"demo-user",onClick:function(e){e.preventDefault();var t=O.pathname||{from:{pathname:"/"}};C(w.login("DemoUser","password",t))}},"Login as Demo"),r.a.createElement("span",{id:"register-now-header"},"Don't have an account?"),r.a.createElement("button",{id:"register-now-button",onClick:k},"Register Now"))),r.a.createElement("div",{id:"register-modal",className:"nav-bar-modal"},r.a.createElement("div",{className:"nav-bar-modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(e){e.preventDefault(),document.getElementById("register-modal").style.display="none"}},"\xd7"),r.a.createElement("form",{id:"nav-bar-register-form",onSubmit:function(e){e.preventDefault(),c.username&&c.email&&c.password&&C(w.register(c))}},r.a.createElement("span",{id:"register-form-header"},"Create an Account"),r.a.createElement("input",{id:"register-form-username",type:"text",name:"username",placeholder:"Username",value:c.username,onChange:I}),r.a.createElement("input",{id:"register-form-email",type:"email",name:"email",placeholder:"Email",value:c.email,onChange:I}),r.a.createElement("input",{id:"register-form-password",type:"password",name:"password",placeholder:"Password",value:c.password,onChange:I}),r.a.createElement("button",{id:"register-form-button",type:"submit"},b&&r.a.createElement("span",{className:"spinner"}),"Sign Up"),r.a.createElement("span",{id:"login-now-header"},"Already registered?"),r.a.createElement("button",{id:"login-now-button",onClick:S},"Login Now")))))}function R(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"search-master-container"},r.a.createElement("input",{id:"search-bar",type:"text",placeholder:"Explore Collections..."})))}function A(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"footer-master-container"},r.a.createElement("div",{id:"footer-column-1"},r.a.createElement("div",{id:"my-info"},r.a.createElement("span",{className:"personal-info"},"dustin.schulte@gmail.com"),r.a.createElement("span",{className:"personal-info"},"+509.969.2978")),r.a.createElement("div",{id:"trademark"},"\xa9 2020 Dust 'Em Off")),r.a.createElement("div",{id:"footer-column-2"},r.a.createElement("div",{id:"social-media-links"},r.a.createElement("div",{id:"linked-in"},r.a.createElement("a",{className:"footer-links",href:"https://linkedin.com/in/dustin-schulte07/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement("div",{id:"github"},r.a.createElement("a",{className:"footer-links",href:"https://github.com/Dschulte1982",target:"_blank",rel:"noopener noreferrer"},"GitHub"))))))}var U=Object(s.h)((function(e){return r.a.createElement("div",{id:"main-content-container"},r.a.createElement("div",{id:"main-content-body-container"},r.a.createElement("nav",null,D()),r.a.createElement("div",{id:"main-content-desc-container"},r.a.createElement("div",{id:"main-content-background-image"}),r.a.createElement("div",{id:"main-content-header-1"},r.a.createElement("h2",null,"Curate Your Collection")),r.a.createElement("div",{id:"main-content-header-2"},r.a.createElement("h1",null,"Display All the Things You Love")),r.a.createElement("div",{id:"main-content-body"},"Are your collectibles tucked away in a closet or worse, collecting dust? Dust 'Em Off is a digital display case for all your favorite things. Keep your collectibles organized, on display, and share with other enthusiastic collectors."),r.a.createElement("button",{id:"main-content-button"},"Start Your Collection"))),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"main-featured"},r.a.createElement("div",{id:"main-featured-header"},"Featured Items"),r.a.createElement("div",{id:"main-featured-collection"},r.a.createElement("div",{id:"main-featured-image-container"},r.a.createElement("div",{id:"main-featured-image"},r.a.createElement("img",{className:"images",src:"https://cdn-3d.niceshops.com/upload/image/product/large/default/revell-millennium-falcon-1-pc-312173-en.jpg",alt:"Featured","object-fit":"contain"}))),r.a.createElement("div",{id:"main-featured-content-container"},r.a.createElement("div",{id:"main-featured-profile-header"},r.a.createElement("div",{id:"main-featured-profile-image"},r.a.createElement("img",{id:"featured-profile-img",className:"images",src:a(21),alt:"","object-fit":"contain"})),r.a.createElement("div",{id:"featured-profile-user"},"lukeskywalker82 ",r.a.createElement("br",null),r.a.createElement("span",{id:"featured-item-count"},"653 Items"))),r.a.createElement("div",{id:"main-featured-item-container"},r.a.createElement("div",{id:"main-featured-item-title"},"1979 Millenium Falcon Vehicle with Figures"),r.a.createElement("div",{id:"main-featured-item-description"},"Playset comes with multiple figures. Original box still intact and in good condition. Inherited from my uncle and moderately played with, but all pieces still intact."))))))),r.a.createElement("div",{id:"explore-collections-master"},r.a.createElement("div",{id:"main-search-bar-container"},r.a.createElement("div",{id:"main-search-bar"},R())),r.a.createElement("div",{id:"main-categories-container"},r.a.createElement("div",{id:"main-categories-1"},r.a.createElement("div",{id:"main-category-1-1",className:"main-categories"},r.a.createElement("a",{href:"/category/1",className:"landing-page-links"},"Antiques")),r.a.createElement("div",{id:"main-category-2-1",className:"main-categories"},r.a.createElement("a",{href:"/category/5",className:"landing-page-links"},"Star Wars"))),r.a.createElement("div",{id:"main-categories-2"},r.a.createElement("div",{id:"main-category-1-2",className:"main-categories"},r.a.createElement("a",{href:"/category/2",className:"landing-page-links"},"Comic Books")),r.a.createElement("div",{id:"main-category-2-2",className:"main-categories"},r.a.createElement("a",{href:"/category/6",className:"landing-page-links"},"Trading Cards"))),r.a.createElement("div",{id:"main-categories-3"},r.a.createElement("div",{id:"main-category-1-3",className:"main-categories"},r.a.createElement("a",{href:"/category/3",className:"landing-page-links"},"Dolls & Toys")),r.a.createElement("div",{id:"main-category-2-3",className:"main-categories"},r.a.createElement("a",{href:"/category/7",className:"landing-page-links"},"Video Games"))),r.a.createElement("div",{id:"main-categories-4"},r.a.createElement("div",{id:"main-category-1-4",className:"main-categories"},r.a.createElement("a",{href:"/category/4",className:"landing-page-links"},"Sports Memorabilia")),r.a.createElement("div",{id:"main-category-2-4",className:"main-categories"},r.a.createElement("a",{href:"/category/8",className:"landing-page-links"},"Vinyl Records")))),r.a.createElement("div",null,A())))})),x=a(25),G=a.n(x),F=a(30);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P=r.a.createElement("defs",null,r.a.createElement("style",null,".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:14px;}")),Y=r.a.createElement("path",{className:"cls-1",d:"M207.5,96.88a41.25,41.25,0,0,0-41.25-41.26C148.76,55.62,131,66.51,125,81.88c-6-15.37-23.76-26.26-41.25-26.26A41.25,41.25,0,0,0,42.5,96.88"}),Z=r.a.createElement("path",{className:"cls-1",d:"M42.5,96.88c0,36.56,44.53,73.59,82.5,97.5,38-23.91,82.5-60.94,82.5-97.5"}),J=function(e){var t=e.svgRef,a=e.title,n=B(e,["svgRef","title"]);return r.a.createElement("svg",M({id:"_\\xCE\\xD3\\xC8_1","data-name":"\\u2014\\xCE\\xD3\\xC8_1",viewBox:"0 0 250 250",ref:t},n),a?r.a.createElement("title",null,a):null,P,Y,Z)},Q=r.a.forwardRef((function(e,t){return r.a.createElement(J,M({svgRef:t},e))}));a.p;function V(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"category-gallery-card"},r.a.createElement("div",{className:"category-gallery-frame"},r.a.createElement("img",{className:"category-gallery-img",src:"https://cdn.guff.com/site_1/media/14000/13732/items/184bda4149a6d070a3522e92.jpg","object-fit":"contain",alt:""})),r.a.createElement("div",{className:"category-gallery-info-container"},r.a.createElement("div",{className:"category-gallery-info"},r.a.createElement("div",{className:"category-gallery-user"},"lukeskywalker82"),r.a.createElement("div",{className:"category-gallery-title"},"Action Comics #1 - Rise of Superman")),r.a.createElement("div",{id:"category-gallery-likes-container"},r.a.createElement("div",{id:"category-gallery-likes"},r.a.createElement("img",{href:Q,alt:"",width:"20",height:"20","object-fit":"contain"})),r.a.createElement("div",{id:"category-gallery-likes-count"},"115")))))}function W(e){var t=Object(s.g)(),i=Object(n.useState)({}),l=Object(E.a)(i,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(F.a)(G.a.mark((function e(){var a,n,r,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.pathname,n=a.split("/category/").pop(),e.next=4,fetch("/api/category/".concat(n));case 4:if(!(r=e.sent).ok){e.next=10;break}return e.next=8,r.json();case 8:i=e.sent,c(i);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.pathname]),o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"category-master-container"},r.a.createElement("div",{id:"header-nav-bar"},D()),r.a.createElement("div",{id:"category-type-header"},r.a.createElement("img",{id:"category-img",className:"images",width:"100%",src:a(50),"object-fit":"contain",alt:""}),r.a.createElement("div",{id:"category-img-layer"}),r.a.createElement("div",{id:"category-header"},o.category)),r.a.createElement("div",{id:"category-search-container"},r.a.createElement("div",null,R())),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"category-gallery-container"},r.a.createElement("div",{id:"category-gallery-1"},r.a.createElement("div",{id:"category-gallery-1-1"},V()),r.a.createElement("div",{id:"category-gallery-1-2"},V()),r.a.createElement("div",{id:"category-gallery-1-3"},V())),r.a.createElement("div",{id:"category-gallery-2"},r.a.createElement("div",{id:"category-gallery-2-1"},V()),r.a.createElement("div",{id:"category-gallery-2-2"},V()),r.a.createElement("div",{id:"category-gallery-2-3"},V()))))),r.a.createElement("div",{id:"category-footer"},A()))):null}var q=a(31),z=a.n(q),H=a(21),K=a.n(H);function X(){var e=Object(d.d)((function(e){return e.auth.user}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"profile-page-master"},r.a.createElement("div",{id:"profile-page-nav"},D()),r.a.createElement("div",{id:"profile-page-banner-container"},r.a.createElement("div",{id:"profile-banner-img-container"},r.a.createElement("img",{id:"profile-banner-img",className:"images",src:z.a,alt:""})),r.a.createElement("div",{id:"profile-img-container"},r.a.createElement("img",{id:"profile-page-img",className:"images",src:K.a,alt:"Profile Pic"}))),r.a.createElement("div",{id:"profile-user-details-container"},r.a.createElement("div",{id:"profile-user-details"},r.a.createElement("div",{id:"profile-username"},e.username),r.a.createElement("div",{id:"profile-user-item-total"},"653 Items"),r.a.createElement("button",{id:"profile-user-follow"},"Follow +")),r.a.createElement("div",{id:"profile-user-gallery-container"},r.a.createElement("div",{id:"profile-user-gallery-1"},V()),r.a.createElement("div",{id:"profile-user-gallery-2"},V()),r.a.createElement("div",{id:"profile-user-gallery-3"},V()))),r.a.createElement("div",{id:"profile-categories-container"},r.a.createElement("div",{id:"profile-category-1-container"},r.a.createElement("div",{id:"profile-category-1-header-container",className:"profile-header-container"},r.a.createElement("div",{id:"profile-category-1-header",className:"profile-category-header"},"Star Wars"),r.a.createElement("button",{id:"profile-category-1-show",className:"profile-category-show"},"Show More")),r.a.createElement("div",{id:"profile-category-1-content",className:"profile-category-content-container"},r.a.createElement("div",{id:"profile-user-content-1-1",className:"profile-content-gallery"},V()),r.a.createElement("div",{id:"profile-user-content-2-1",className:"profile-content-gallery"},V()),r.a.createElement("div",{id:"profile-user-content-3-1",className:"profile-content-gallery"},V()),r.a.createElement("div",{id:"profile-user-content-4-1",className:"profile-content-gallery"},V()))),r.a.createElement("div",{id:"profile-category-2-container"},r.a.createElement("div",{id:"profile-category-2-header-container",className:"profile-header-container"},r.a.createElement("div",{id:"profile-category-2-header",className:"profile-category-header"},"Comic Books"),r.a.createElement("button",{id:"profile-category-2-show",className:"profile-category-show"},"Show More")),r.a.createElement("div",{id:"profile-category-2-content"},r.a.createElement("div",{id:"profile-user-content-1-2",className:"profile-content-gallery"},V()),r.a.createElement("div",{id:"profile-user-content-2-2",className:"profile-content-gallery"},V()),r.a.createElement("div",{id:"profile-user-content-3-2",className:"profile-content-gallery"},V()),r.a.createElement("div",{id:"profile-user-content-3-2",className:"profile-content-gallery"},V())))),r.a.createElement("div",{id:"profile-page-footer-container"},A())))}var $=Object(d.b)((function(e){return{loggedIn:!!e.auth.loggedIn||!!e.register.loggedIn}}),null)((function(e){var t=e.component,a=e.loggedIn,n=Object(m.a)(e,["component","loggedIn"]);return a?r.a.createElement(s.b,Object.assign({},n,{component:t})):r.a.createElement(s.a,{to:"/"})}));var ee=function(){return r.a.createElement(s.c,{history:T},r.a.createElement(s.d,null,r.a.createElement($,{exact:!0,path:"/users/:userId",component:X}),r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(U,e)}}),r.a.createElement(s.b,{exact:!0,path:"/category/:categoryId",render:function(e){return r.a.createElement(W,e)}})))},te=a(9),ae=a(32),ne=JSON.parse(localStorage.getItem("user")),re=ne?{loggedIn:!0,user:ne}:{};var ie="COLLECTION_GETONE_REQUEST",le="COLLECTION_GETONE_SUCCESS",oe="COLLECTION_GETONE_FAILURE",ce="COLLECTION_GETALL_REQUEST",me="COLLECTION_GETALL_SUCCESS",se="COLLECTION_GETALL_FAILURE",de="COLLECTION_DELETE_REQUEST",ue="COLLECTION_DELETE_SUCCESS",ge="COLLECTION_DELETE_FAILURE",Ee="ITEM_GETONE_SUCCESS",pe="ITEM_GETONE_FAILURE",fe=JSON.parse(localStorage.getItem("user")),ve=fe?{loggedIn:!0,user:fe}:{};var ye="CATEGORY_GETONE_REQUEST",he="CATEGORY_GETONE_SUCCESS",be="CATEGORY_GETONE_FAILURE",Ne="CATEGORY_GETALL_REQUEST",Oe="CATEGORY_GETALL_SUCCESS",Ce="CATEGORY_GETALL_FAILURE",Se=JSON.parse(localStorage.getItem("user")),ke=Se?{loggedIn:!0,user:Se}:{};var Ie,Te=Object(te.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loggingIn:!0,user:t.user};case b:return{loggedIn:!0,user:t.user};case N:case O:return{};default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{registering:!0};case v:return{loggedIn:!0,user:t.user};case y:return{};default:return e}},collection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return{loggingIn:!0,user:t.user};case le:return{loggedIn:!0,user:t.user};case oe:case ce:return{};case me:return{collection:t.collections};case se:case de:case ue:case ge:return{};default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye:return{searching:!0,category:t.category};case he:return{found:!0,category:t.category};case be:return{};case Ne:return{searching:!0,categories:t.categories};case Oe:return{found:!0,categories:t.categoreis};case Ce:return{};default:return e}},item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return{item:t.item};case pe:return{};default:return e}}}),we=a(33),Le=a.n(we);Ie=Object(te.a)(ae.a,Le.a);var _e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(te.d)(Te,e,Ie)}();l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{backend:c.a},r.a.createElement(d.a,{store:_e},r.a.createElement(ee,null)))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9ab80423.chunk.js.map