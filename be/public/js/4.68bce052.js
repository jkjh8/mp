(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0374":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-table",{attrs:{data:e.filelist,columns:e.columns,"row-key":"index",selection:"multiple",selected:e.selected,filter:e.filter},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-right",fn:function(){return[l("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[l("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body-cell-action",fn:function(t){return[l("q-td",{attrs:{props:t}},[l("q-btn",{attrs:{dense:"",round:"",flat:"",color:"primary",icon:"mdi-play"},on:{click:function(l){return e.preview(t.row.name)}}})],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},i=[],o=l("ded3"),s=l.n(o),n=l("2f62"),r=l("bb3d"),c=l.n(r),d={props:["selFilelist"],computed:s()({},Object(n["c"])("filelist",["filelist"])),mounted(){this.$store.dispatch("filelist/updateFilelist")},watch:{selected(e){this.$emit("selFile",e)},selFilelist(e){this.selected=e}},data(){return{columns:[{name:"index",label:"#",field:"index"},{name:"name",label:"NAME",align:"left",field:"name"},{name:"size",label:"SIZE",align:"center",field:"size",format:e=>""+c.a.formatBytes(e)},{name:"duration",label:"DURATION",align:"center",field:"duration",format:e=>""+c.a.formatTimes(1e3*e)},{name:"action",label:"ACTION",align:"center",field:""}],selected:this.selFilelist,filter:""}},methods:{preview(e){this.$emit("preview",e)}}},p=d,u=l("2877"),f=l("eaac"),m=l("27f9"),b=l("0016"),h=l("db86"),v=l("9c40"),q=l("eebe"),g=l.n(q),w=Object(u["a"])(p,a,i,!1,null,null,null);t["a"]=w.exports;g()(w,"components",{QTable:f["a"],QInput:m["a"],QIcon:b["a"],QTd:h["a"],QBtn:v["a"]})},b57a:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"q-ma-xl"},[l("q-card",[l("q-card-section",[l("FilelistHeader",{on:{upload:function(t){e.uploaddialog=!e.uploaddialog},delFiles:e.delFiles}})],1),l("q-separator"),l("q-card-section",[l("FilelistTable",{attrs:{selFilelist:e.selFilelist},on:{selFile:e.selFile,preview:e.preview}})],1)],1),l("q-dialog",{attrs:{persistent:""},model:{value:e.uploaddialog,callback:function(t){e.uploaddialog=t},expression:"uploaddialog"}},[l("FileUpload",{on:{upload:function(t){e.uploaddialog=!e.uploaddialog}}})],1),l("q-dialog",{model:{value:e.previewDialog,callback:function(t){e.previewDialog=t},expression:"previewDialog"}},[l("div",{staticStyle:{width:"100%"}},[l("q-video",{attrs:{autoplay:!0,ratio:16/9,src:e.src}})],1)])],1)},i=[],o=(l("e6cf"),function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("q-item",[l("q-item-section",{attrs:{avatar:""}},[l("q-avatar",{attrs:{color:"warning",size:"36px"}},[l("q-icon",{attrs:{name:"mdi-folder"}})],1)],1),l("q-item-section",[l("q-item-label",[e._v("\n        FILE LIST\n      ")])],1),l("q-item-section",{attrs:{side:""}},[l("q-btn",{attrs:{icon:"mdi-delete-outline",round:"",flat:""},on:{click:function(t){e.confirm=!e.confirm}}})],1),l("q-item-section",{attrs:{side:""}},[l("q-btn",{attrs:{icon:"mdi-plus-circle-outline",round:"",flat:""},on:{click:e.upload}})],1)],1),l("q-dialog",{attrs:{persistent:""},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[l("q-card",[l("q-card-section",{staticClass:"row items-center"},[l("q-avatar",{attrs:{icon:"mdi-delete-outline",color:"primary","text-color":"white"}}),l("span",{staticClass:"q-ml-sm"},[e._v("You are delete checked files.")])],1),l("q-card-actions",{attrs:{align:"right"}},[l("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),l("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Confirm",color:"primary"},on:{click:e.deleteFiles}})],1)],1)],1)],1)}),s=[],n={data(){return{confirm:!1}},methods:{upload(){this.$emit("upload")},deleteFiles(){this.$emit("delFiles")}}},r=n,c=l("2877"),d=l("66e5"),p=l("4074"),u=l("cb32"),f=l("0016"),m=l("0170"),b=l("9c40"),h=l("24e8"),v=l("f09f"),q=l("a370"),g=l("4b7e"),w=l("7f67"),F=l("eebe"),_=l.n(F),Q=Object(c["a"])(r,o,s,!1,null,null,null),y=Q.exports;_()(Q,"components",{QItem:d["a"],QItemSection:p["a"],QAvatar:u["a"],QIcon:f["a"],QItemLabel:m["a"],QBtn:b["a"],QDialog:h["a"],QCard:v["a"],QCardSection:q["a"],QCardActions:g["a"]}),_()(Q,"directives",{ClosePopup:w["a"]});var k=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("q-uploader",{attrs:{url:e.url,label:"Files Upload",multiple:""},scopedSlots:e._u([{key:"header",fn:function(t){return[l("div",{staticClass:"row no-wrap items-center q-pa-sm q-gutter-xs"},[t.queuedFiles.length>0?l("q-btn",{attrs:{icon:"clear_all",round:"",dense:"",flat:""},on:{click:t.removeQueuedFiles}},[l("q-tooltip",[e._v("Clear All")])],1):e._e(),t.uploadedFiles.length>0?l("q-btn",{attrs:{icon:"done_all",round:"",dense:"",flat:""},on:{click:t.removeUploadedFiles}},[l("q-tooltip",[e._v("Remove Uploaded Files")])],1):e._e(),t.isUploading?l("q-spinner",{staticClass:"q-uploader__spinner"}):e._e(),l("div",{staticClass:"col"},[l("div",{staticClass:"q-uploader__title"},[e._v("Upload your files")]),l("div",{staticClass:"q-uploader__subtitle"},[e._v(e._s(t.uploadSizeLabel)+" / "+e._s(t.uploadProgressLabel))])]),t.canAddFiles?l("q-btn",{attrs:{type:"a",icon:"add_box",round:"",dense:"",flat:""}},[l("q-uploader-add-trigger"),l("q-tooltip",[e._v("Pick Files")])],1):e._e(),t.canUpload?l("q-btn",{attrs:{icon:"cloud_upload",round:"",dense:"",flat:""},on:{click:t.upload}},[l("q-tooltip",[e._v("Upload Files")])],1):e._e(),t.isUploading?l("q-btn",{attrs:{icon:"clear",round:"",dense:"",flat:""},on:{click:t.abort}},[l("q-tooltip",[e._v("Abort Upload")])],1):e._e(),l("q-btn",{attrs:{icon:"close",round:"",dense:"",flat:""},on:{click:e.upload}})],1)]}}])})},x=[],$={data(){return{url:`http://${window.location.hostname}:3000/api/uploads`}},watch:{scope(e){console.log(e.isUploading)}},methods:{async upload(){this.$store.dispatch("filelist/refreshFilelist"),this.$emit("upload")}}},C=$,U=l("ee89"),B=l("05c0"),T=l("0d59"),S=l("cc04"),I=Object(c["a"])(C,k,x,!1,null,null,null),A=I.exports;_()(I,"components",{QUploader:U["a"],QBtn:b["a"],QTooltip:B["a"],QSpinner:T["a"],QUploaderAddTrigger:S["a"]});var D=l("0374");let E=[];var M={components:{FilelistHeader:y,FileUpload:A,FilelistTable:D["a"]},async created(){if(await this.$store.dispatch("user/getUser"),!this.$store.state.user.authUser)return this.$router.push("/login")},data(){return{uploaddialog:!1,selFilelist:[],previewDialog:!1,src:""}},methods:{preview(e){this.src=`http://${window.location.hostname}:3000/api/preview/${e}`,this.previewDialog=!0},async delFiles(){await this.$axios.post("/filelist/del",E),await this.$store.dispatch("filelist/refreshFilelist"),this.selFilelist=[]},selFile(e){E=e}}},O=M,j=l("eb85"),L=l("6ac0"),N=Object(c["a"])(O,a,i,!1,null,null,null);t["default"]=N.exports;_()(N,"components",{QCard:v["a"],QCardSection:q["a"],QSeparator:j["a"],QDialog:h["a"],QVideo:L["a"]})},bb3d:function(e,t){function l(e,t=2){if(0===e)return"0 Bytes";const l=1024,a=t<0?0:t,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(l));return parseFloat((e/Math.pow(l,o)).toFixed(a))+" "+i[o]}function a(e){const t=new Date(e);let l=t.getUTCHours(),a=t.getUTCMinutes(),i=t.getUTCSeconds();return l=l<10?"0"+l:l,a=a<10?"0"+a:a,i=i<10?"0"+i:i,`${l}:${a}:${i}`}e.exports.formatBytes=l,e.exports.formatTimes=a}}]);