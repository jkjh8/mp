(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-toolbar",[a("q-item",{staticClass:"q-pa-md"},[a("q-btn",{staticStyle:{"font-size":"2em"},attrs:{flat:"",to:"/"}},[a("q-icon",{staticClass:"q-mx-xm",attrs:{name:"mdi-play-network-outline"}}),t._v("\n      MEDIA SERVER\n    ")],1)],1),a("q-space"),a("q-item",[t.user?a("q-item-section",{staticClass:"q-px-xs",staticStyle:{"font-size":"0.8rem"}},[t._v("\n      "+t._s(t.user.id)+"\n    ")]):t._e(),a("q-item-section",[a("q-btn",{attrs:{round:"",color:"blue-grey-10",icon:t.user?"mdi-lock-open-outline":"mdi-lock-outline"},on:{click:t.login}})],1)],1)],1)},n=[],o=a("ded3"),l=a.n(o),r=a("2f62"),i={computed:l()({},Object(r["c"])({user:t=>t.user.authUser})),data(){return{loginIcon:"mdi-lock-outline"}},methods:{login(){this.user?this.$axios.get("/logout").then((t=>{t.data.success&&(this.$store.dispatch("user/setUser",null),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Logout!"}))})):this.$router.push("/login")}}},c=i,u=a("2877"),d=a("65c6"),b=a("66e5"),m=a("9c40"),p=a("0016"),h=a("2c91"),f=a("4074"),q=a("eebe"),g=a.n(q),y=Object(u["a"])(c,s,n,!1,null,null,null);e["a"]=y.exports;g()(y,"components",{QToolbar:d["a"],QItem:b["a"],QBtn:m["a"],QIcon:p["a"],QSpace:h["a"],QItemSection:f["a"]})},"713b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-white text-black",attrs:{bordered:"","height-hint":"98"}},[a("Header"),a("HeaderMenu")],1),a("q-page-container",[a("router-view")],1),a("Footer")],1)},n=[],o=a("0418"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-tabs",{attrs:{align:"center"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"home",to:"/",label:"HOME"}}),a("q-route-tab",{attrs:{name:"playlist",to:"/playlist",label:"PLAYLIST"}}),a("q-route-tab",{attrs:{name:"filelist",to:"/filelist",label:"FILELIST"}}),a("q-route-tab",{attrs:{name:"player",to:"/player",label:"PLAYER SETUP"}}),a("q-route-tab",{attrs:{name:"ipaddr",to:"/ipaddr",label:"IP ADDRESS"}})],1)},r=[],i={data(){return{tab:"home"}}},c=i,u=a("2877"),d=a("429b"),b=a("7867"),m=a("eebe"),p=a.n(m),h=Object(u["a"])(c,l,r,!1,null,null,null),f=h.exports;p()(h,"components",{QTabs:d["a"],QRouteTab:b["a"]});var q=a("fd2d"),g={name:"MainLayout",components:{Header:o["a"],HeaderMenu:f,Footer:q["a"]},mounted(){this.$socket.on("playlist",(t=>{this.$store.dispatch("playlist/reqPlaylist")})),this.$socket.on("filelist",(t=>{this.$store.dispatch("filelist/updateFilelist")}))},data(){return{}}},y=g,v=a("4d5a"),E=a("e359"),w=a("09e3"),x=Object(u["a"])(y,s,n,!1,null,null,null);e["default"]=x.exports;p()(x,"components",{QLayout:v["a"],QHeader:E["a"],QPageContainer:w["a"]})},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"bg-blue-grey-10 text-white",attrs:{elevated:""}},[a("q-toolbar",[a("div",{staticClass:"absolute-center",staticStyle:{"font-size":"0.5rem"}},[t._v("\n      MEDIA CONSULTING SOCIETY\n    ")])])],1)},n=[],o=a("2877"),l=a("7ff0"),r=a("65c6"),i=a("eebe"),c=a.n(i),u={},d=Object(o["a"])(u,s,n,!1,null,null,null);e["a"]=d.exports;c()(d,"components",{QFooter:l["a"],QToolbar:r["a"]})}}]);