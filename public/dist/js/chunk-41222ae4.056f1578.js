(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41222ae4"],{"0798":function(t,e,s){"use strict";s("caad"),s("0c18");var r=s("10d2"),i=s("afdd"),o=s("9d26"),a=s("f2e7"),n=s("7560"),l=s("2b0e"),d=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),c=s("58df"),h=s("d9bd");e["a"]=Object(c["a"])(r["a"],a["a"],d).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...r["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,s){},"2f80":function(t){t.exports=JSON.parse('[{"user":"Marcus","password":"marcus123"},{"user":"Vincent","password":"vin456"},{"user":"Donna","password":"don789"},{"user":"Felix","password":"felix123"},{"user":"Davina","password":"dav456"},{"user":"Marc","password":"marc789"},{"user":"Alexandre","password":"alex123"}]')},"4bd4":function(t,e,s){"use strict";s("caad");var r=s("58df"),i=s("7e2b"),o=s("3206");e["a"]=Object(r["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",r=>{r&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},a55b:function(t,e,s){"use strict";s.r(e);var r=s("0798"),i=s("8336"),o=s("b0af"),a=s("99d9"),n=s("a523"),l=(s("20f6"),s("e8f2")),d=Object(l["a"])("flex"),c=s("4bd4"),h=Object(l["a"])("layout"),u=s("b974"),p=s("2fa4"),m=s("8654"),f=s("71d9"),g=s("2a7f"),v=function(){var t=this,e=t._self._c;return e(n["a"],{attrs:{fluid:"","fill-height":""}},[e(h,{attrs:{"align-center":"","justify-center":""}},[e(d,{attrs:{xs12:"",sm8:"",md4:""}},[e(o["a"],{staticClass:"elevation-12"},[t.error?e(r["a"],{attrs:{shaped:"",type:"error"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),e(f["a"],{attrs:{dark:"",color:"primary"}},[e(g["a"],[t._v("Login form")])],1),e(a["c"],[e(c["a"],[e(u["a"],{attrs:{"prepend-icon":"mdi-account",items:t.users,label:"Utilisateur"},model:{value:t.login.user,callback:function(e){t.$set(t.login,"user",e)},expression:"login.user"}}),e(m["a"],{attrs:{"prepend-icon":"mdi-lock",label:"Password",type:"password"},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}})],1)],1),e(a["a"],[e(p["a"]),e(i["a"],{attrs:{color:"primary"},on:{click:function(e){return t.connect()}}},[t._v("Login")])],1)],1)],1)],1)],1)},b=[],_=s("2f80"),w={methods:{connect(){this.error="";const t=_.find(t=>t.user==this.login.user);return t?t.password!=this.login.password?this.error="mot de passe erroné":(this.$store.state.login=!0,this.$store.state.user=this.login.user,this.login={user:"",password:""},void this.$router.push({name:"Caisse"})):this.error="utilisateur non identifié"}},data:()=>({users:["Marcus","Vincent","Donna","Felix","Davina","Marc","Alexandre"],login:{user:"",password:""},error:""})},B=w,$=s("2877"),y=Object($["a"])(B,v,b,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-41222ae4.056f1578.js.map