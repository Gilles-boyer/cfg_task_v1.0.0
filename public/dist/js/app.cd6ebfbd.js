(function(){"use strict";var t={3540:function(t,e,s){var a=s(9669),r=s.n(a);e["Z"]=r().create({baseURL:"api",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"}})},2066:function(t,e,s){var a=s(3540);e["Z"]={index(){return a.Z.get("folders")},listFolder(){return a.Z.get("listfolder")},archived(t){return a.Z.get(`folder/${t}/archived`)},delete(t){return a.Z.get(`folder/${t}/delete`)},foldersArchived(){return a.Z.get("folders/archived")}}},3373:function(t,e,s){var a=s(3540);e["Z"]={index(){return a.Z.get("levels")},store(t){return a.Z.post("level/store",t)},update(t){return a.Z.post("level/update",t)},delete(t){return a.Z.get(`level/${t}/delete`)}}},976:function(t,e,s){var a=s(3540),r=s(9669),i=s.n(r);e["Z"]={index(){return a.Z.get("users")},list(){return a.Z.get("user/list")},store(t){return a.Z.post("user/store",t)},update(t){return a.Z.put("user/update",t)},delete(t){return a.Z.get(`user/${t}/delete`)},resetPassword(t){return a.Z.get(`user/${t}/reset/password`)},resetPasswordUser(t,e){var s=i().create({baseURL:"api",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json",Accept:"application/json"}});return s.post("user/reset/password",t)},login(t){return a.Z.post("user/login",t)},userAuth(){return a.Z.get("user/auth")}}},3263:function(t,e,s){var a=s(144),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{color:"primary"}},[s("v-main",[s("router-view")],1)],1)},i=[],l={name:"App",data:()=>({})},o=l,n=s(1001),c=s(3453),d=s.n(c),u=s(879),v=s(7405),h=(0,n.Z)(o,r,i,!1,null,null,null),m=h.exports;d()(h,{VApp:u.Z,VMain:v.Z});var f=s(8345),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"home mt-4 mb-10"},[s("v-overlay",{attrs:{value:t.overlay}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),s("snackbar",{attrs:{snackOpen:t.boolSnack,snackColor:t.colorSnack,textSnack:t.textSnack},on:{snackClose:function(e){t.boolSnack=e}}}),s("v-row",{class:t.getRowWith(e.width)},[s("v-col",{class:t.getColWith(e.width)},[s("v-toolbar",{staticClass:"mb-2",attrs:{dark:"",shaped:"",color:"primary"}},[s("v-toolbar-title",{staticClass:"body-1"},[t._v(" Filtre par Utilisateur ")]),s("v-spacer"),t.btnFilterUser?t._e():s("v-btn",{attrs:{icon:""},on:{click:function(e){t.btnFilterUser=!0}}},[s("v-icon",[t._v("mdi-arrow-down-drop-circle")])],1),t.btnFilterUser?s("v-btn",{attrs:{icon:""},on:{click:function(e){t.btnFilterUser=!1}}},[s("v-icon",[t._v("mdi-arrow-up-drop-circle")])],1):t._e()],1),s("v-list",{directives:[{name:"show",rawName:"v-show",value:t.btnFilterUser,expression:"btnFilterUser"}]},[t._l(t.filterUsers,(function(e){return s("v-list-item",{key:e.id,staticStyle:{padding:"0ch"}},[s("v-list-item-content",{staticStyle:{padding:"0ch"}},[s("v-btn",{attrs:{width:"100%"},on:{click:function(s){t.searchUser=e.lastName}}},[t._v(t._s(e.lastName))])],1)],1)})),t.searchUser?s("v-list-item",{staticStyle:{padding:"0ch"}},[s("v-list-item-content",{staticStyle:{padding:"0ch"}},[s("v-btn",{staticClass:"access--text",attrs:{color:"primary",elevation:"1",width:"100%"},on:{click:function(e){return t.deleteFilterUser()}}},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-close")]),t._v(" filtre")],1)],1)],1):t._e()],2),s("v-toolbar",{attrs:{dark:"",shaped:"",color:"primary"}},[s("v-toolbar-title",{staticClass:"body-1"},[t._v("Filtre par Importance ")]),s("v-spacer"),t.btnFilterLevel?t._e():s("v-btn",{attrs:{icon:""},on:{click:function(e){t.btnFilterLevel=!0}}},[s("v-icon",[t._v("mdi-arrow-down-drop-circle")])],1),t.btnFilterLevel?s("v-btn",{attrs:{icon:""},on:{click:function(e){t.btnFilterLevel=!1}}},[s("v-icon",[t._v("mdi-arrow-up-drop-circle")])],1):t._e()],1),s("v-list",{directives:[{name:"show",rawName:"v-show",value:t.btnFilterLevel,expression:"btnFilterLevel"}]},[t._l(t.filterLevels,(function(e){return s("v-list-item",{key:e.id,staticStyle:{padding:"0ch"}},[s("v-list-item-content",{staticStyle:{padding:"0ch"}},[s("v-btn",{class:e.color+"--text",attrs:{elevation:"1",width:"100%"},on:{click:function(s){t.searchLevels=e.label}}},[s("v-icon",{staticClass:"mr-2",attrs:{color:e.color}},[t._v(" "+t._s(e.definition)+" ")]),t._v(" "+t._s(e.label)+" ")],1)],1)],1)})),t.searchLevels?s("v-list-item",{staticStyle:{padding:"0ch"}},[s("v-list-item-content",{staticStyle:{padding:"0ch"}},[s("v-btn",{staticClass:"access--text",attrs:{color:"primary",elevation:"1",width:"100%"},on:{click:function(e){return t.deleteFilterLevel()}}},[s("v-icon",{staticClass:"mr-2"},[t._v("mdi-close")]),t._v(" filtre")],1)],1)],1):t._e()],2)],1),s("v-col",{staticClass:"col-10"},[s("v-card",{staticClass:"mx-auto mb-4"},[s("v-toolbar",{attrs:{dark:"",shaped:"",color:"primary"}},[s("v-toolbar-title",[t._v("Liste des Taches")]),s("v-switch",{staticClass:"mt-6 ml-5",attrs:{label:"Archivé"},model:{value:t.archivedVisible,callback:function(e){t.archivedVisible=e},expression:"archivedVisible"}}),s("v-spacer"),s("modalTask",{attrs:{levels:t.levels,listUsers:t.users,listFolders:t.listFolder},on:{newTask:function(e){return t.addTask(e)}}})],1),s("v-card-title",{staticClass:"col-10 mx-auto"},[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("v-card-title",{staticClass:"col-10 mx-auto"},[t.loading?s("v-progress-linear",{attrs:{color:"primary accent-4",indeterminate:"",rounded:"",height:"6"}}):t._e()],1),t._l(t.filterFolders,(function(a,r){return a.archived?t._e():s("v-list",{key:a._id},[s("v-subheader",{staticClass:"caption",attrs:{inset:""}},[s("modalDelete",{attrs:{folderDel:a,indexFolder:r},on:{deleteFolder:function(e){return t.deleteFolder(e)}}}),s("v-btn",{staticClass:"mr-1",attrs:{color:"#C89B57",icon:""},on:{click:function(e){return t.archiveFolder(a)}}},[s("v-icon",[t._v("mdi-archive")])],1),s("v-spacer"),s("v-chip",{staticClass:"ml-3 font-weight-bold",attrs:{color:"primary"}},[t._v(t._s(a.label)+" "),s("v-icon",{staticClass:"ml-2"},[t._v(" mdi-folder")])],1)],1),t._l(t.filterListTask(a.Tasks),(function(a,i){return t.getTaskarchived(a)?s("v-list-item",{key:a._id},[s("v-list-item-avatar",[a.archived?t._e():s("v-btn",{attrs:{icon:"",title:a.level.label}},[s("v-icon",{attrs:{color:a.level.color}},[t._v(" "+t._s(a.level.definition)+" ")])],1)],1),a.archived?t._e():s("v-list-item-content",{staticClass:"primary--text"},[t._v(" "+t._s(a.title)+" "),s("div",{staticClass:"text-left"},t._l(a.Users,(function(e){return s("v-chip",{key:e.id,staticClass:"ma-1",attrs:{"x-small":""}},[t._v(" "+t._s(e.user.lastName)+" ")])})),1)]),a.archived?s("v-list-item-content",{staticClass:"blue-grey--text darken-2"},[t._v(" "+t._s(a.title)+" "),s("div",{staticClass:"text-left"},t._l(a.Users,(function(e){return s("v-chip",{key:e.id,staticClass:"ma-1",attrs:{"x-small":""}},[t._v(" "+t._s(e.user.lastName)+" ")])})),1)]):t._e(),a.archived?t._e():s("v-list-item-action",{staticClass:"d-flex align-center",class:t.getListWith(e.width)},[s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{color:"success"},on:{click:function(e){return t.archiveTask(a)}}},[t._v("mdi-check-circle")])],1),s("modalTask",{attrs:{levels:t.levels,listUsers:t.users,listFolders:t.listFolder,taskDate:a},on:{modifyTask:function(e){return t.updateTask(e)}}}),s("modalDelete",{attrs:{taskDel:a,indexFolder:r,indexTask:i},on:{deleteTask:function(e){return t.deleteTask(e)}}})],1)],1):t._e()})),s("v-divider",{attrs:{color:"#04153B",inset:""}})],2)})),s("v-list",[s("v-list-item",[t.nothingView?s("v-list-item-title",{staticClass:"mx-auto text-center"},[t._v(" Aucun élément à afficher ")]):t._e()],1)],1)],2)],1)],1)],1)]}}])})},b=[],g=s(3366),k=s(2066),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{justify:"center","align-content":"center"}},[s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[t.taskDate?t._e():s("v-spacer"),t.taskDate?t._e():s("v-btn",t._g(t._b({attrs:{color:"white",icon:""}},"v-btn",r,!1),a),[s("v-icon",[t._v("mdi-plus-circle")])],1),t.taskDate?s("v-btn",t._g(t._b({staticClass:"ma-3",attrs:{color:"grey darken-1",icon:""}},"v-btn",r,!1),a),[s("v-icon",[t._v("mdi-cog")])],1):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-overlay",{attrs:{value:t.overlay}},[s("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),s("v-card",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.closeAndReset()}}},[s("v-icon",[t._v("mdi-close")])],1),s("v-toolbar-title",[t._v("Settings")]),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{staticClass:"mr-4",attrs:{dark:"",text:"",disabled:!t.valid},on:{click:t.validate}},[t._v(" Save ")])],1)],1),s("v-container",{staticClass:"col-10"},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{counter:100,rules:t.titleRules,label:"Description de la tache",required:""},model:{value:t.titleTask,callback:function(e){t.titleTask=e},expression:"titleTask"}}),t.taskDate?t._e():s("v-row",{attrs:{"align-content":"center",justify:"center"}},[t.addFolder?s("v-col",{attrs:{cols:"12",xl:"10",md:"10",lg:"10",sm:"12"}},[s("v-text-field",{attrs:{counter:100,rules:t.titleRules,label:"Nom du dossier",required:""},model:{value:t.labelFolder,callback:function(e){t.labelFolder=e},expression:"labelFolder"}})],1):t._e(),t.addFolder?s("v-col",{attrs:{cols:"12",md:"2",sm:"12",xl:"2",lg:"2","align-self":"center"}},[s("v-btn",{attrs:{outlined:"",color:"primary",text:""},on:{click:function(e){t.addFolder=!1}}},[t._v("Selectioner un dossier")])],1):t._e(),t.addFolder?t._e():s("v-col",{attrs:{cols:"12",md:"10",sm:"12",lg:"10",xl:"10"}},[s("v-select",{attrs:{"item-value":"id","return-object":"",items:t.listFolders,"item-text":"label",rules:[function(t){return!!t||"Mercide choisir un dossier"}],label:"Dossier",required:""},model:{value:t.folder,callback:function(e){t.folder=e},expression:"folder"}})],1),t.addFolder?t._e():s("v-col",{attrs:{cols:"12",md:"2",sm:"12",xl:"2",lg:"2","align-self":"center"}},[s("v-btn",{attrs:{color:"primary",outlined:"",text:""},on:{click:function(e){t.addFolder=!0}}},[t._v("Créer un dossier")])],1)],1),null!=t.taskDate?s("v-chip",{staticClass:"white--text",attrs:{color:"primary"}},[t._v(" Tache du dossier : "+t._s(t.folder.label)+" ")]):t._e(),s("v-select",{attrs:{"item-value":"_id",items:t.levels,"return-object":"",rules:[function(t){return!!t||"Merci de choisir un niveau"}],label:"Niveau",required:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[t._v(" "+t._s(e.item.label)+" ")]}},{key:"item",fn:function(e){return[s("v-row",{attrs:{"align-content":"center"}},[s("v-col",{staticClass:"col-2"},[s("v-icon",{attrs:{color:e.item.color}},[t._v(" "+t._s(e.item.definition)+" ")])],1),s("v-col",{staticClass:"col-10",class:e.item.color+"--text"},[t._v(" "+t._s(e.item.label)+" ")])],1)]}}]),model:{value:t.level,callback:function(e){t.level=e},expression:"level"}}),s("v-select",{attrs:{"item-value":"_id",items:t.listUsers,attach:"","return-object":"","item-text":"lastName",rules:t.usersRules,chips:"",label:"Utilisateur",multiple:""},model:{value:t.users,callback:function(e){t.users=e},expression:"users"}})],1)],1)],1)],1)],1)},y=[],x=s(3540),_={store(t){return x.Z.post("task/add",t)},update(t){return x.Z.put("task/update",t)},archived(t){return x.Z.get(`task/${t}/archived`)},delete(t){return x.Z.get(`task/${t}/delete`)}},Z={methods:{},props:{taskDate:{default:null},levels:null,listUsers:null,listFolders:null},data(){return{dialog:!1,overlay:!1,addFolder:!1,labelFolder:"",users:[],valid:!0,titleTask:"",titleRules:[t=>!!t||"Merci de saisir un bref descriptif",t=>t&&t.length<=100||"Merci de saisir moin de 100 charactères"],usersRules:[t=>!!t||"Merci de choisir un ou plusieurs utilisateurs",t=>t.length>0||"Merci de vérifier le nombre selectionné"],folder:null,level:null,folders:["Item 1","Item 2","Item 3","Item 4"]}},created(){this.initialize()},methods:{async initialize(){this.folders=this.listFolders,null!=this.taskDate&&(this.titleTask=this.taskDate.title,this.users=[],this.taskDate.Users.forEach((t=>{this.users.push({_id:t.user._id,lastName:t.user.lastName})})),this.folder=this.folders.filter((t=>t.id.includes(this.taskDate.folder)))[0],this.level=this.taskDate.level)},async validate(){if(this.$refs.form.validate()){this.overlay=!0;var t={addFolder:this.addFolder,title:this.titleTask,level:this.level._id,users:this.users};if(this.addFolder?t.folder=this.labelFolder:t.folder=this.folder.id,null==this.taskDate){var e=await _.store(t);e.data.newFolder=this.addFolder,this.$emit("newTask",e.data),this.closeAndReset()}else{t.id=this.taskDate.id;var s=!1;if(t.title!=this.taskDate.title&&(s=!0),t.level!=this.taskDate.level._id&&(s=!0),this.checkUserIfModify()&&(s=!0),s){e=await _.update(t);this.$emit("modifyTask",e.data),this.dialog=!1}else this.closeAndReset()}this.overlay=!1}},checkUserIfModify(){var t=[];return this.taskDate.Users.forEach((e=>{t.push({_id:e.user._id,lastName:e.user.lastName})})),JSON.stringify(t)!==JSON.stringify(this.users)},closeAndReset(){this.taskDate?this.initialize():this.$refs.form.reset(),this.dialog=!1,this.addFolder=!1}}},C=Z,V=s(2032),F=s(3030),S=s(8143),T=s(5528),D=s(4490),L=s(3433),A=s(7802),E=s(8518),U=s(9399),$=s(801),I=s(8676),j=s(3468),R=s(3762),N=s(7922),O=s(6697),B=s(6972),M=(0,n.Z)(C,w,y,!1,null,null,null),P=M.exports;d()(M,{VBtn:V.Z,VCard:F.Z,VChip:S.Z,VCol:T.Z,VContainer:D.Z,VDialog:L.Z,VForm:A.Z,VIcon:E.Z,VOverlay:U.Z,VProgressCircular:$.Z,VRow:I.Z,VSelect:j.Z,VSpacer:R.Z,VTextField:N.Z,VToolbar:O.Z,VToolbarItems:B.lj,VToolbarTitle:B.qW});var z=s(976),q=s(3373),W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center ma-2"},[s("v-snackbar",{attrs:{top:"",timeout:t.timeout,tile:"",color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[s("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.textSnack)+" ")])],1)},H=[],J={name:"snackbar",props:{snackOpen:Boolean,snackColor:String,textSnack:String},watch:{snackOpen:function(){this.snackOpen&&(this.snackbar=this.snackOpen,this.$emit("snackClose",!1))}},data(){return{snackbar:!1,timeout:2e3}}},K=J,Y=s(8748),G=(0,n.Z)(K,W,H,!1,null,null,null),Q=G.exports;d()(G,{VBtn:V.Z,VSnackbar:Y.Z});var X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"red",icon:""}},"v-btn",r,!1),a),[s("v-icon",[t._v("mdi-delete")])],1)]}}]),model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[s("v-card",[s("v-card-title",{staticClass:"text-h5"},[t._v("Voulez-vous vraiment supprimer : "+t._s(t.title)+" ? ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogDelete=!1}}},[t._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),s("v-spacer")],1)],1)],1)},tt=[],et={name:"deleteModal",data(){return{dialogDelete:!1,title:""}},props:["folderDel","taskDel","indexFolder","indexTask"],created(){this.init()},methods:{async deleteItemConfirm(){if(null!=this.taskDel){var t=await _["delete"](this.taskDel.id);console.log(t),this.$emit("deleteTask",{iTask:this.indexTask,iFolder:this.indexFolder})}if(null!=this.folderDel){t=await k.Z["delete"](this.folderDel.id);console.log(t),this.$emit("deleteFolder",this.indexFolder)}this.dialogDelete=!1},init(){null!=this.taskDel&&(this.title=this.taskDel.title),null!=this.folderDel&&(this.title=this.folderDel.label)}}},st=et,at=s(8131),rt=(0,n.Z)(st,X,tt,!1,null,null,null),it=rt.exports;d()(rt,{VBtn:V.Z,VCard:F.Z,VCardActions:at.h7,VCardTitle:at.EB,VDialog:L.Z,VIcon:E.Z,VSpacer:R.Z});var lt={index(t){return x.Z.get(`/version/${t}`)}},ot={data(){return{archivedVisible:!1,overlay:!1,folders:[],foldersSave:[],btnFilterUser:!1,btnFilterLevel:!1,search:"",searchUser:"",searchLevels:"",nothingView:!0,loading:!0,users:[],levels:[],textSnack:"",folderDeleteName:"",boolSnack:!1,colorSnack:"primary",listFolder:[],dialogDelete:!0,initialise:!1,version:0}},computed:{filterUsers(){var t=this.users.filter((t=>t.lastName.toLowerCase().includes(this.searchUser.toLowerCase())));return t},filterLevels(){var t=this.levels.filter((t=>t.label.toLowerCase().includes(this.searchLevels.toLowerCase())));return t},filterFolders(){var t=this.folders.filter((t=>t.label.toLowerCase().includes(this.search.toLowerCase())));return t.length>0?this.nothingView=!1:this.nothingView=!0,t}},mounted(){this.refresh()},created(){this.initialize()},methods:{getTaskarchived(t){return!(t.archived&&!this.archivedVisible)},activeOver(t){this.overlay=t},refresh(){setInterval(this.checkVersionBdd,1e4)},async checkVersionBdd(){var t=await lt.index(this.version);console.log(t),t.data.modify&&(this.version=t.data.version,this.initialize())},deleteTask(t){this.textSnack="la tache a été supprimé",this.colorSnack="success",this.boolSnack=!0,this.folders[t.iFolder].Tasks.splice(t.iTask,1)},async deleteFolder(t){this.textSnack="votre dossier a été supprimé",this.colorSnack="success",this.boolSnack=!0;var e=await k.Z.listFolder();this.listFolder=e.data,this.folders.splice(t,1)},async archiveFolder(t){if(confirm(`Voulez-vous vraiment archiver le dossier ${t.label} ?`)){this.overlay=!0,this.textSnack="votre dossier a été archivé",this.colorSnack="success",this.boolSnack=!0,t.Tasks.forEach((t=>{this.archiveTask(t,!1)}));await k.Z.archived(t.id);t.archived=!0,this.overlay=!1}},async archiveTask(t,e=!0){if(confirm(`Voulez-vous vraiment archiver la tache ${t.title} ?`)){this.overlay=!0;await _.archived(t.id);e&&(this.textSnack="votre tache a été archivé",this.colorSnack="success",this.boolSnack=!0),t.archived=!0,this.overlay=!1}},addTask(t){this.textSnack="votre tache a été ajouté",this.colorSnack="success",this.boolSnack=!0,t.newFolder?this.initialize():this.folders.forEach(((e,s)=>{e.id==t.folder&&this.folders[s].Tasks.push(t)}))},updateTask(t){this.textSnack="votre tache a été modifié",this.colorSnack="success",this.boolSnack=!0,this.folders.forEach(((e,s)=>{e.id==t.folder&&e.Tasks.forEach(((e,a)=>{e.id==t.id&&(this.folders[s].Tasks[a]=t)}))}))},filterListTask(t){var e=t.filter((t=>t.level.label.includes(this.searchLevels))),s=e.filter((t=>{var e=t.Users.filter((t=>t.user.lastName.includes(this.searchUser)));return e.length>0}));return s},deleteFilterUser(){this.searchUser=""},deleteFilterLevel(){this.searchLevels=""},async initialize(){if(!this.initialise){var t=await z.Z.index();this.users=t.data,console.log(t);var e=await q.Z.index();this.levels=e.data,this.initialise=!0}var s=await k.Z.listFolder();this.listFolder=s.data;var a=await k.Z.index();console.log(a),a.data.length>0&&(this.loading=!1),this.folders=a.data},getColWith(t){return t>1400?"col-2":t>800&&t<1400?"col-5":t<800?"col-10":void 0},getRowWith(t){if(t<1400)return"d-flex flex-column align-center"},getListWith(t){if(t>850)return"d-flex flex-row mb1"}},name:"Home",components:{layout:g.Z,modalTask:P,snackbar:Q,modalDelete:it}},nt=ot,ct=s(9207),dt=s(3198),ut=s(3065),vt=s(2325),ht=s(9547),mt=s(5493),ft=s(6110),pt=s(462),bt=s(6218),gt=(0,n.Z)(nt,p,b,!1,null,null,null),kt=gt.exports;d()(gt,{VBtn:V.Z,VCard:F.Z,VCardTitle:at.EB,VChip:S.Z,VCol:T.Z,VDivider:ct.Z,VIcon:E.Z,VList:dt.Z,VListItem:ut.Z,VListItemAction:vt.Z,VListItemAvatar:ht.Z,VListItemContent:mt.km,VListItemTitle:mt.V9,VOverlay:U.Z,VProgressCircular:$.Z,VProgressLinear:ft.Z,VRow:I.Z,VSpacer:R.Z,VSubheader:pt.Z,VSwitch:bt.Z,VTextField:N.Z,VToolbar:O.Z,VToolbarTitle:B.qW});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{background:"#04153b"},attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"col-12",attrs:{align:"center"}},[a("v-img",{attrs:{src:s(6949),height:"200px",width:"200"}})],1),a("v-col",{staticStyle:{"border-bottom":"8px solid #a09f9f"},attrs:{xl:"4",md:"4",sm:"2",cols:"1"}}),a("v-col",{staticStyle:{padding:"0"},attrs:{align:"center",xl:"4",md:"4",sm:"8",cols:"10"}},[a("v-card",{staticStyle:{"border-radius":"50px 0px"},attrs:{color:"secondary"}},[a("v-card-title",{staticClass:"white--text text-h4 justify-center"},[t._v(" Login ")]),a("v-form",{ref:"form",staticClass:"white--text",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-text-field",{attrs:{solo:"",rules:t.emailRules,label:"Identifiant",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":t.show4?"mdi-eye":"mdi-eye-off",rules:t.passwordRules,type:t.show4?"text":"password",label:"Password",solo:"",error:""},on:{"click:append":function(e){t.show4=!t.show4}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:t.login}},[t._v(" Valider ")]),a("v-btn",{attrs:{color:"primary"}},[t._v(" Reset password ")])],1)],1)],1)],1),a("v-col",{staticStyle:{"border-top":"8px solid #a09f9f"},attrs:{xl:"4",md:"4",sm:"2",cols:"1"}})],1)],1)},yt=[],xt={data(){return{email:"",valid:!0,show4:!1,emailRules:[t=>!!t||"Merci de saisir un email",t=>t.length>=3||"Merci de saisir min 3 caractères",t=>t.length<=50||"Max 25 characters"],password:"",passwordRules:[t=>!!t||"Merci de saisir votre mot de passe",t=>t.length>=8||"Merci de saisir min 8 caractères",t=>t.length<=25||"Max 25 characters"]}},created(){localStorage.getItem("token")&&this.home()},methods:{async home(){try{await z.Z.userAuth(),this.$router.push({name:"Home"})}catch(t){console.log(t)}},async login(){if(this.$refs.form.validate()){var t={email:this.email,password:this.password},e=await z.Z.login(t);console.log(e),e.data.login&&(localStorage.setItem("token",e.data.token),location.reload())}}}},_t=xt,Zt=s(9564),Ct=(0,n.Z)(_t,wt,yt,!1,null,null,null),Vt=Ct.exports;d()(Ct,{VBtn:V.Z,VCard:F.Z,VCardActions:at.h7,VCardText:at.ZB,VCardTitle:at.EB,VCol:T.Z,VContainer:D.Z,VForm:A.Z,VImg:Zt.Z,VRow:I.Z,VTextField:N.Z});var Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{background:"#04153b"},attrs:{"fill-height":"",fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"col-12",attrs:{align:"center"}},[a("v-img",{attrs:{src:s(6949),height:"200px",width:"200"}})],1),a("v-col",{staticStyle:{"border-bottom":"8px solid #a09f9f"},attrs:{xl:"4",md:"4",sm:"2",cols:"1"}}),a("v-col",{staticStyle:{padding:"0"},attrs:{align:"center",xl:"4",md:"4",sm:"8",cols:"10"}},[a("v-card",{staticStyle:{"border-radius":"50px 0px"},attrs:{color:"#a09f9f"}},[a("v-card-title",{staticClass:"white--text text-h4 justify-center",attrs:{width:"100px"}},[t._v(" Créer un Mot de passe : ")]),a("v-form",{ref:"form",staticClass:"white--text",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":t.show4?"mdi-eye":"mdi-eye-off",rules:t.passwordRules,solo:"",type:t.show4?"text":"password",label:"password",required:""},on:{"click:append":function(e){t.show4=!t.show4}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{"append-icon":t.show4?"mdi-eye":"mdi-eye-off",rules:t.ConfirmPasswordRules,solo:"",type:t.show4?"text":"password",label:"Confirmation password",required:""},on:{"click:append":function(e){t.show4=!t.show4}}})],1),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{disabled:!t.valid,color:"primary",width:"200px"},on:{click:t.validate}},[t._v(" Valider ")])],1)],1)],1)],1),a("v-col",{staticStyle:{"border-top":"8px solid #a09f9f"},attrs:{xl:"4",md:"4",sm:"2",cols:"1"}})],1)],1)},St=[],Tt={data(){return{valid:!0,show4:!1,ConfirmPasswordRules:[t=>!!t||"Merci de saisir un password",t=>t==this.password||"Merci de saisir le même mot de passe"],password:"",confirmPassword:"",passwordRules:[t=>!!t||"Merci de saisir un password",t=>t.length>=8||"Merci de saisir min 8 caractères"]}},created(){},methods:{async validate(){if(this.$refs.form.validate()){var t=await z.Z.resetPasswordUser({password:this.password},this.$route.params.token);console.log(t),this.$refs.form.reset(),this.$router.push({name:"Login"})}}}},Dt=Tt,Lt=(0,n.Z)(Dt,Ft,St,!1,null,null,null),At=Lt.exports;d()(Lt,{VBtn:V.Z,VCard:F.Z,VCardActions:at.h7,VCardText:at.ZB,VCardTitle:at.EB,VCol:T.Z,VContainer:D.Z,VForm:A.Z,VImg:Zt.Z,VRow:I.Z,VTextField:N.Z}),a.Z.use(f.Z);const Et=[{path:"/",name:"Home",component:kt,meta:{authRequired:!0}},{path:"/login",name:"Login",component:Vt},{path:"/user/:token/reset/password",name:"Password",component:At},{path:"/archive",name:"Archive",component:()=>s.e(443).then(s.bind(s,5123)),meta:{authRequired:!0}},{path:"/admin",name:"Admin",component:()=>s.e(443).then(s.bind(s,3620)),meta:{authRequired:!0,admin:!0}},{path:"*",redirect:"/login"}],Ut=new f.Z({routes:Et});Ut.beforeEach((async(t,e,s)=>{if(t.matched.some((t=>t.meta.authRequired)))if(null==localStorage.getItem("token"))s({path:"/login"});else{var a=localStorage.getItem("token");let e;console.log(a),a.length>15&&!a.includes("ey")&&s({path:"/login"});try{var r=await z.Z.userAuth();e=r.data,e.login&&s()}catch(i){s({path:"/login"})}t.matched.some((t=>t.meta.admin))?e.admin?s():s({name:"Home"}):s()}else s()}));var $t=Ut,It=s(629);a.Z.use(It.ZP);var jt=new It.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),Rt=s(5856);a.Z.use(Rt.Z);var Nt=new Rt.Z({theme:{light:!0,themes:{light:{primary:"#04153B",secondary:"#A09F9F",accent:"#FFFFFF",error:"#FE001A",success:"#009788",warning:"#FD801F"}}}});new a.Z({router:$t,store:jt,vuetify:Nt,render:t=>t(m)}).$mount("#app")},3366:function(t,e,s){s.d(e,{Z:function(){return x}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{padding:"0"},attrs:{fluid:""}},[a("v-app-bar",{attrs:{color:"primary",flat:"",app:""}},[[a("v-container",{staticClass:"d-flex justify-center col-lg-10 col-md-10 col-sm-12 col-xs-12",staticStyle:{padding:"0"}},[a("v-app-bar",{attrs:{color:"primary",flat:""}},[a("v-btn",{staticClass:"ml-2",attrs:{color:"primary",icon:""}},[a("v-img",{attrs:{src:s(6949),"max-height":"90","max-width":"90"}})],1),a("v-spacer"),t.width>700?a("v-btn",{staticClass:"white--text",attrs:{text:""}},[t._v(" "+t._s(t.user.lastName)+" "+t._s(t.user.firstName)+" ")]):t._e(),a("v-btn",{staticClass:"white--text",attrs:{icon:""}},[a("v-icon",[t._v("mdi-account")])],1),a("v-btn",{staticClass:"red--text",attrs:{icon:""},on:{click:function(e){return t.logout()}}},[a("v-icon",[t._v("mdi-exit-to-app")])],1)],1)],1)]],2),t.width<=700?a("v-tabs",{attrs:{color:"error","background-color":"primary",vertical:""}},[a("v-container",{staticClass:"col-lg-10 col-md-10 col-sm-12 col-xs-12",staticStyle:{padding:"0"}},[a("v-tab",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Home")]),a("v-tab",{staticClass:"white--text",attrs:{to:"/archive"}},[t._v("Archive")]),t.user.admin?a("v-tab",{staticClass:"white--text",attrs:{to:"/admin"}},[t._v("Admin")]):t._e()],1)],1):t._e(),t.width>700?a("v-tabs",{attrs:{color:"error","background-color":"primary","align-with-title":""}},[a("v-container",{staticClass:"col-lg-10 col-md-10 col-sm-12 col-xs-12 d-flex",staticStyle:{padding:"0"}},[a("v-tab",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Home")]),a("v-tab",{staticClass:"white--text",attrs:{to:"/archive"}},[t._v("Archive")]),t.user.admin?a("v-tab",{staticClass:"white--text",attrs:{to:"/admin"}},[t._v("Admin")]):t._e()],1)],1):t._e(),a("v-container",{staticClass:"col-lg-10 col-md-10 col-sm-12 col-xs-12",staticStyle:{padding:"0"}},[t._t("default",null,{width:t.width})],2),a("v-footer",{staticClass:"white--text",attrs:{padless:"",fixed:"",color:"primary"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("MyTasks-v1.0.0")])])],1)],1)},r=[],i=s(976),l={data(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,user:{firstName:"",lastName:"",email:"",admin:!1}}},mounted(){window.addEventListener("resize",this.getDimensions),this.account()},unmounted(){window.removeEventListener("resize",this.getDimensions)},methods:{logout(){localStorage.removeItem("token"),location.reload()},getDimensions(){this.width=document.documentElement.clientWidth,this.height=document.documentElement.clientHeight},async account(){var t=await i.Z.userAuth();this.user=t.data}},name:"AppLayout"},o=l,n=s(1001),c=s(3453),d=s.n(c),u=s(3888),v=s(2032),h=s(5528),m=s(4490),f=s(1111),p=s(8518),b=s(9564),g=s(3762),k=s(3308),w=s(2338),y=(0,n.Z)(o,a,r,!1,null,null,null),x=y.exports;d()(y,{VAppBar:u.Z,VBtn:v.Z,VCol:h.Z,VContainer:m.Z,VFooter:f.Z,VIcon:p.Z,VImg:b.Z,VSpacer:g.Z,VTab:k.Z,VTabs:w.Z})},6949:function(t,e,s){t.exports=s.p+"img/logo.a950155c.png"}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,i){if(!a){var l=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],i=t[d][2];for(var o=!0,n=0;n<a.length;n++)(!1&i||l>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[n])}))?a.splice(n--,1):(o=!1,i<l&&(l=i));if(o){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,r,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.ecf808ef.js"}}(),function(){s.miniCssF=function(t){return"css/about.56695522.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cfg_task:";s.l=function(a,r,i,l){if(t[a])t[a].push(r);else{var o,n;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+i){o=u;break}}o||(n=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+i),o.src=a),t[a]=[r];var v=function(e,s){o.onerror=o.onload=null,clearTimeout(h);var r=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(s)})),e)return e(s)},h=setTimeout(v.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=v.bind(null,o.onerror),o.onload=v.bind(null,o.onload),n&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t=function(t,e,s,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)s();else{var l=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||e,n=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");n.code="CSS_CHUNK_LOAD_FAILED",n.type=l,n.request=o,r.parentNode.removeChild(r),a(n)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var r=s[a],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){r=l[a],i=r.getAttribute("data-href");if(i===t||i===e)return r}},a=function(a){return new Promise((function(r,i){var l=s.miniCssF(a),o=s.p+l;if(e(l,o))return r();t(a,o,r,i)}))},r={143:0};s.f.miniCss=function(t,e){var s={443:1};r[t]?e.push(r[t]):0!==r[t]&&s[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,a){var r=s.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var i=new Promise((function(s,a){r=t[e]=[s,a]}));a.push(r[2]=i);var l=s.p+s.u(e),o=new Error,n=function(a){if(s.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+l+")",o.name="ChunkLoadError",o.type=i,o.request=l,r[1](o)}};s.l(l,n,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,l=a[0],o=a[1],n=a[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(n)var d=n(s)}for(e&&e(a);c<l.length;c++)i=l[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},a=self["webpackChunkcfg_task"]=self["webpackChunkcfg_task"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(3263)}));a=s.O(a)})();
//# sourceMappingURL=app.cd6ebfbd.js.map