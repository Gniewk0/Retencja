(function(){"use strict";var t={3257:function(t,e,r){var s=r(144),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",{staticClass:"background"},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(" Retencja ")]),r("v-list-item-subtitle",[t._v(" Zadanie rekrutacyjne ")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",dark:"",src:"people.jpg",prominent:""},scopedSlots:t._u([{key:"img",fn:function(e){var s=e.props;return[r("v-img",t._b({},"v-img",s,!1))]}}])},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-app-bar-title",[t._v("Retencja")]),r("v-spacer")],1),r("v-main",{staticClass:"background"},[r("router-view")],1)],1)},n=[],a={data:()=>({drawer:null,items:[{title:"Lista użytkowników",icon:"mdi-format-list-bulleted",to:"/"},{title:"Polubieni użytkownicy",icon:"mdi-heart",to:"/FavoriteUsers"}]})},o=a,l=r(1001),c=r(3453),u=r.n(c),d=r(7524),p=r(426),v=r(5206),m=r(7905),f=r(1418),g=r(6428),h=r(7047),k=r(6816),b=r(7620),L=r(2212),Z=r(459),y=r(7877),_=r(4216),I=r(3631),w=(0,l.Z)(o,i,n,!1,null,"b27f1916",null),V=w.exports;u()(w,{VApp:d.Z,VAppBar:p.Z,VAppBarNavIcon:v.Z,VAppBarTitle:m.Z,VDivider:f.Z,VIcon:g.Z,VImg:h.Z,VList:k.Z,VListItem:b.Z,VListItemContent:L.km,VListItemIcon:Z.Z,VListItemSubtitle:L.oZ,VListItemTitle:L.V9,VMain:y.Z,VNavigationDrawer:_.Z,VSpacer:I.Z});var S=r(8345),U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home pa-6"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200"}},[r("v-card",{staticClass:"d-flex justify-space-between pl-4 pt-2",attrs:{flat:""}},[r("h1",{staticClass:"mt-2"},[t._v("Lista Użytkowników")]),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"d-flex justify-center"},[r("v-text-field",{attrs:{solo:"","background-color":"#E4E4E4",flat:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),r("div",{staticClass:"mt-2 pl-1",on:{click:function(e){return t.searchUser()}}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1)],1)])],1),t.search?t._e():r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.userLists.users,(function(e){return r("v-list-item",{key:e.id},[r("v-list-item-icon",{on:{click:function(r){return t.likeUser(e.id)}}},[r("v-btn",{attrs:{icon:"",color:e.like?"pink":"gray"}},[r("v-icon",[t._v("mdi-heart")])],1)],1),r("v-list-item-content",{on:{click:function(r){return t.UserDetails(e.id)}}},[r("v-hover",[r("v-list-item-title",{domProps:{textContent:t._s(e.first_name+" "+e.last_name)}})],1)],1),r("v-list-item-avatar",[r("v-img",{attrs:{src:e.avatar}})],1)],1)})),1)],1),t.search?r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.searchdUsers,(function(e,s){return r("v-list-item",{key:s},[r("v-list-item-icon",{on:{click:function(t){e.like=!e.like}}},[r("v-btn",{attrs:{icon:"",color:"pink"}},[r("v-icon",[t._v("mdi-heart")])],1)],1),r("v-list-item-content",{on:{click:function(r){return t.UserDetails(e.id)}}},[r("v-hover",[r("v-list-item-title",{domProps:{textContent:t._s(e.first_name+" "+e.last_name)}})],1)],1),r("v-list-item-avatar",[r("v-img",{attrs:{src:e.avatar}})],1)],1)})),1)],1):t._e(),t.search&&!t.searchdUsers[0]?r("div",[r("h2",{staticClass:"pl-10 pb-10"},[t._v("Nie znaleziono takiego użytkownika")])]):t._e(),t.search?t._e():r("div",{staticClass:"text-center pb-2"},[r("v-pagination",{attrs:{length:t.userLists.totalPages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)},C=[],O=r(629),P={name:"Home",data(){return{search:"",page:1,searchdUsers:[]}},mounted:function(){this.loadPage()},methods:{color(t){return t?"pink":"grey"},searchUser(){let t=[];this.userLists.users.forEach(((e,r)=>{e.first_name.includes(this.search)&&t.push(e)})),this.searchdUsers=t},UserDetails(t){this.$store.commit("userId",t),this.$router.push({name:"User"})},submit(t){this.$store.dispatch("getUserList",t).then((t=>{})).catch((t=>{console.log(t)}))},loadPage(){this.$store.commit("userListsResset"),this.submit(this.page)},likeUser(t){this.$store.commit("likeUser",t)}},computed:{...(0,O.rn)(["userLists"])},watch:{userLists:{handler:function(t){console.log(t)},deep:!0},page:{handler(t,e){t!==e&&this.loadPage()}},search:{handler(t,e){t!==e&&this.searchUser()}}}},j=P,x=r(680),E=r(3237),N=r(1493),T=r(43),A=r(5457),J=r(6651),$=r(6325),F=r(6571),B=(0,l.Z)(j,U,C,!1,null,null,null),D=B.exports;u()(B,{VBtn:x.Z,VCard:E.Z,VCol:N.Z,VHover:T.Z,VIcon:g.Z,VImg:h.Z,VList:k.Z,VListItem:b.Z,VListItemAvatar:A.Z,VListItemContent:L.km,VListItemGroup:J.Z,VListItemIcon:Z.Z,VListItemTitle:L.V9,VPagination:$.Z,VTextField:F.Z}),s.Z.use(S.Z);const M=[{path:"/",name:"home",component:D},{path:"/FavoriteUsers",name:"FavoriteUsers",component:()=>r.e(443).then(r.bind(r,7015))},{path:"/User",name:"User",component:()=>r.e(443).then(r.bind(r,8807))}],R=new S.Z({mode:"history",base:"/",routes:M});var q=R,z=r(9669),H=r.n(z);s.Z.use(O.ZP);var G=new O.ZP.Store({state:{userLists:{users:[],page:1,total:1,totalPages:1,perPage:1},userId:null},getters:{userLists(t){return t.userLists},userId(t){return t.userId},User(t){return t.userLists.users.find((e=>e.id===t.userId))}},mutations:{list(t,e){t.list=e},userLists(t,e){let r=JSON.parse(localStorage.getItem("like"));e.data.forEach(((e,s)=>{t.userLists.users.push(e),t.userLists.users.forEach((t=>{r?Array.from(r).forEach((e=>{e==t.id&&(t.like=!0)})):t.like=!1}))})),t.userLists.page=e.page,t.userLists.perPage=e.per_page,t.userLists.total=e.total,t.userLists.totalPages=e.total_pages},userListsResset(t,e){t.userLists={users:[],page:1,total:1,totalPages:1,perPage:1}},userId(t,e){t.userId=e},likeUser(t,e){let r=t.userLists.users.findIndex((t=>t.id===e)),i=!t.userLists.users[r].like;if(s.Z.set(t.userLists.users[r],"like",i),i)if(console.log(!0),JSON.parse(localStorage.getItem("like"))){let t=localStorage.getItem("like"),r=JSON.parse(t).toString()+e;localStorage.setItem("like",JSON.stringify(r))}else localStorage.setItem("like",JSON.stringify(e));else if(console.log(!1),console.log(JSON.parse(localStorage.getItem("like"))),null!==JSON.parse(localStorage.getItem("like"))){let t=localStorage.getItem("like"),r=JSON.parse(t).toString().replace(e,"");localStorage.setItem("like",JSON.stringify(r))}}},actions:{getUserList(t,e){return H().get("https://reqres.in/api/users?page="+e).then((e=>(t.commit("userLists",e.data),e))).catch((t=>(console.log(t.response),t)))}},modules:{}}),K=r(5671);s.Z.use(K.Z);var Q=new K.Z({});s.Z.config.productionTip=!1,new s.Z({router:q,store:G,vuetify:Q,render:t=>t(V)}).$mount("#app")}},e={};function r(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,s,i,n){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],n=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](s[l])}))?s.splice(l--,1):(o=!1,n<a&&(a=n));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,i,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,s){return r.f[s](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.f04853d3.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="retencja:";r.l=function(s,i,n,a){if(t[s])t[s].push(i);else{var o,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+n){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",e+n),o.src=s),t[s]=[i];var p=function(e,r){o.onerror=o.onload=null,clearTimeout(v);var i=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(r)})),e)return e(r)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(e,s){var i=r.o(t,e)?t[e]:void 0;if(0!==i)if(i)s.push(i[2]);else{var n=new Promise((function(r,s){i=t[e]=[r,s]}));s.push(i[2]=n);var a=r.p+r.u(e),o=new Error,l=function(s){if(r.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,i[1](o)}};r.l(a,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,a=s[0],o=s[1],l=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var u=l(r)}for(e&&e(s);c<a.length;c++)n=a[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(u)},s=self["webpackChunkretencja"]=self["webpackChunkretencja"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(3257)}));s=r.O(s)})();
//# sourceMappingURL=app.9efbfa34.js.map