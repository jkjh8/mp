(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-toolbar",[a("div",{staticClass:"q-pa-md",staticStyle:{"font-size":"2rem"}},[a("q-icon",{staticClass:"q-mx-xm",attrs:{name:"mdi-play-network-outline"}}),t._v("\n    MEDIA SERVER\n  ")],1),a("q-space"),a("div",[t.user?a("p",{staticClass:"q-px-xs",staticStyle:{"font-size":"0.8rem"}},[t._v("\n      "+t._s(t.user.id)+"\n    ")]):t._e(),a("q-btn",{attrs:{round:"",color:"blue-grey-10",icon:t.user?"mdi-lock-open-outline":"mdi-lock-outline"},on:{click:t.login}})],1)],1)},o=[],r=a("ded3"),s=a.n(r),l=a("2f62"),i={computed:s()({},Object(l["b"])({user:"authUser"})),data(){return{loginIcon:"mdi-lock-outline"}},methods:{login(){this.user?this.$axios.get("/logout").then((t=>{t.data.success&&(this.$store.commit("setUser",null),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Logout!"}))})):this.$router.push("/login")}}},c=i,u=a("2877"),d=a("65c6"),b=a("0016"),m=a("2c91"),p=a("9c40"),h=a("eebe"),f=a.n(h),g=Object(u["a"])(c,n,o,!1,null,null,null);e["a"]=g.exports;f()(g,"components",{QToolbar:d["a"],QIcon:b["a"],QSpace:m["a"],QBtn:p["a"]})},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-white text-black",attrs:{bordered:"","height-hint":"98"}},[a("Header"),a("HeaderMenu")],1),a("q-page-container",[a("router-view")],1),a("Footer")],1)},o=[],r=a("0418"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-tabs",{attrs:{align:"center"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"home",to:"/",label:"HOME"}}),a("q-route-tab",{attrs:{name:"playlist",to:"/playlist",label:"PLAYLIST"}}),a("q-route-tab",{attrs:{name:"filelist",to:"/filelist",label:"FILELIST"}}),a("q-route-tab",{attrs:{name:"player",to:"/player",label:"PLAYER SETUP"}}),a("q-route-tab",{attrs:{name:"ipaddr",to:"/ipaddr",label:"IP ADDRESS"}})],1)},l=[],i={created(){this.$axios.get("/login").then((t=>{t.data.user?this.$store.commit("setUser",t.data.user):this.$router.push("/")}))},data(){return{tab:"home"}}},c=i,u=a("2877"),d=a("429b"),b=a("7867"),m=a("eebe"),p=a.n(m),h=Object(u["a"])(c,s,l,!1,null,null,null),f=h.exports;p()(h,"components",{QTabs:d["a"],QRouteTab:b["a"]});var g=a("fd2d"),q={name:"MainLayout",components:{Header:r["a"],HeaderMenu:f,Footer:g["a"]},data(){return{}}},v=q,x=a("4d5a"),y=a("e359"),E=a("09e3"),w=Object(u["a"])(v,n,o,!1,null,null,null);e["default"]=w.exports;p()(w,"components",{QLayout:x["a"],QHeader:y["a"],QPageContainer:E["a"]})},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"bg-blue-grey-10 text-white",attrs:{elevated:""}},[a("q-toolbar",[a("div",{staticClass:"absolute-center",staticStyle:{"font-size":"0.5rem"}},[t._v("\n      MEDIA CONSULTING SOCIETY\n    ")])])],1)},o=[],r=a("2877"),s=a("7ff0"),l=a("65c6"),i=a("eebe"),c=a.n(i),u={},d=Object(r["a"])(u,n,o,!1,null,null,null);e["a"]=d.exports;c()(d,"components",{QFooter:s["a"],QToolbar:l["a"]})}}]);