(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0418":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-toolbar",[n("div",{staticClass:"q-pa-md",staticStyle:{"font-size":"2rem"}},[n("q-icon",{staticClass:"q-mx-xm",attrs:{name:"mdi-play-network-outline"}}),e._v("\n    MEDIA SERVER\n  ")],1),n("q-space"),n("div",[e.user?n("p",{staticClass:"q-px-xs",staticStyle:{"font-size":"0.8rem"}},[e._v("\n      "+e._s(e.user.id)+"\n    ")]):e._e(),n("q-btn",{attrs:{round:"",color:"blue-grey-10",icon:e.user?"mdi-lock-open-outline":"mdi-lock-outline"},on:{click:e.login}})],1)],1)},a=[],s=n("ded3"),r=n.n(s),i=n("2f62"),l={computed:r()({},Object(i["b"])({user:"authUser"})),data(){return{loginIcon:"mdi-lock-outline"}},methods:{login(){this.user?this.$axios.get("/logout").then((e=>{e.data.success&&(this.$store.commit("setUser",null),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Logout!"}))})):this.$router.push("/login")}}},c=l,u=n("2877"),d=n("65c6"),m=n("0016"),p=n("2c91"),b=n("9c40"),f=n("eebe"),h=n.n(f),g=Object(u["a"])(c,o,a,!1,null,null,null);t["a"]=g.exports;h()(g,"components",{QToolbar:d["a"],QIcon:m["a"],QSpace:p["a"],QBtn:b["a"]})},4632:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"bg-white text-black",attrs:{bordered:"","height-hint":"98"}},[n("Header")],1),n("q-page-container",[n("router-view")],1),n("Footer")],1)},a=[],s=n("0418"),r=n("fd2d"),i={name:"MainLayout",components:{Header:s["a"],Footer:r["a"]},data(){return{}}},l=i,c=n("2877"),u=n("4d5a"),d=n("e359"),m=n("09e3"),p=n("eebe"),b=n.n(p),f=Object(c["a"])(l,o,a,!1,null,null,null);t["default"]=f.exports;b()(f,"components",{QLayout:u["a"],QHeader:d["a"],QPageContainer:m["a"]})},fd2d:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-footer",{staticClass:"bg-blue-grey-10 text-white",attrs:{elevated:""}},[n("q-toolbar",[n("div",{staticClass:"absolute-center",staticStyle:{"font-size":"0.5rem"}},[e._v("\n      MEDIA CONSULTING SOCIETY\n    ")])])],1)},a=[],s=n("2877"),r=n("7ff0"),i=n("65c6"),l=n("eebe"),c=n.n(l),u={},d=Object(s["a"])(u,o,a,!1,null,null,null);t["a"]=d.exports;c()(d,"components",{QFooter:r["a"],QToolbar:i["a"]})}}]);