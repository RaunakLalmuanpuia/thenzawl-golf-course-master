(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22dc91a6","chunk-22b1b094"],{"0798":function(t,e,i){"use strict";i("0c18");var s=i("10d2"),a=i("afdd"),r=i("9d26"),n=i("f2e7"),o=i("7560"),l=i("2b0e"),c=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=i("58df"),h=i("d9bd");e["a"]=Object(d["a"])(s["a"],n["a"],c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||o["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"0fd9":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),a=i("d9f7"),r=i("80d2");const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce((i,s)=>(i[t+Object(r["G"])(s)]=e(),i),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),m=l("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},v={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=v[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const b=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let r="";for(const a in e)r+=String(e[a]);let n=b.get(r);if(!n){let t;for(t in n=[],g)g[t].forEach(i=>{const s=e[i],a=f(t,i,s);a&&n.push(a)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(r,n)}return t(e.tag,Object(a["a"])(i,{staticClass:"row",class:n}),s)}})},"166a":function(t,e,i){},"169f":function(t,e,i){t.exports=i.p+"img/tourism_logo.d04ef0f5.png"},1800:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?"v-list-item__action "+e.staticClass:"v-list-item__action";const s=i.filter(t=>!1===t.isComment&&" "!==t.text);return s.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}})},2333:function(t,e,i){t.exports=i.p+"img/Glimpseoftz2.50eb5f6e.jpg"},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["j"])("spacer","div","v-spacer")},3408:function(t,e,i){},"34c3":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=("v-list-item__icon "+(e.staticClass||"")).trim(),t("div",e,i)}})},"36a2":function(t,e,i){t.exports=i.p+"img/msegs_logo.2c2eb3df.png"},"36a7":function(t,e,i){},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("fe6c"),a=i("58df");function r(t,e=[]){return Object(a["a"])(Object(s["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"3ad0":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var s=i("58df"),a=i("7e2b"),r=i("3206");e["a"]=Object(s["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5326:function(t,e,i){"use strict";i.r(e);var s=i("0798"),a=i("7496"),r=i("8336"),n=i("b0af"),o=i("99d9"),l=i("62ad"),c=i("a523"),d=i("553a"),h=i("4bd4"),u=i("132d"),p=i("adda"),m=i("24c9"),g=i("8860"),v=i("da13"),f=i("8270"),b=i("5d23"),y=i("f6c4"),_=i("a797"),S=i("490a"),C=i("0fd9"),x=i("2fa4"),$=i("8654"),w=function(){var t=this,e=t._self._c;return e(a["a"],{attrs:{id:"inspire"}},[e(_["a"],{attrs:{value:t.show}},[e(S["a"],{attrs:{indeterminate:"",size:"64"}})],1),e(y["a"],{staticStyle:{padding:"unset"}},[e(c["a"],{attrs:{fluid:""}},[e(C["a"],[e(l["a"],{staticClass:"hidden-sm-and-down",attrs:{md:"9"}},[e(p["a"],{attrs:{"aspect-ratio":"1.45",src:i("2333")}})],1),e(l["a"],{staticClass:"login-area",attrs:{md:"3",sm:"12"}},[e("br"),e("div",{staticClass:"mt-15"},[e(p["a"],{attrs:{height:"50",width:"150",src:i("f6db")}}),e("br"),e("h2",[t._v("Login to Admin Pannel")])],1),e("br"),e("br"),e(h["a"],{on:{prevent:t.submit}},[e(m["a"],[t._v("Email Id")]),e($["a"],{attrs:{outlined:""},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email",e)},expression:"credentials.email"}}),e(m["a"],[t._v("Password")]),e($["a"],{attrs:{type:"password",outlined:""},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}}),t.error?e(s["a"],{attrs:{type:"error",align:"center",dense:""}},[t._v(t._s(t.error))]):t._e(),e(r["a"],{staticClass:"login-button mb-5",attrs:{block:"",color:"#04d39b"},on:{click:t.submit}},[t._v("Login "),e(x["a"]),e(u["a"],[t._v("mdi-arrow-right-circle")])],1)],1)],1)],1)],1)],1),e(d["a"],{staticStyle:{width:"100%","background-color":"#f5f5f5","border-top":"#cccccc 1px solid"},attrs:{padless:""}},[e(c["a"],[e(n["a"],{staticClass:"text-center",staticStyle:{"background-color":"#f5f5f5",width:"100%"},attrs:{flat:"",tile:""}},[e(o["c"],{staticClass:"black--text"},[e("ShortLogo"),e("br"),t._v(" "+t._s((new Date).getFullYear())+" "),e("strong",[t._v("© Thenzawl Golf Resort")])],1),e(o["c"],{staticClass:"black--text pt-0",attrs:{cols:"12"}},[e(C["a"],{staticClass:"justify-space-between"},[e(l["a"],{attrs:{md:"3",sm:"12",cols:"12"}},[e(g["a"],{attrs:{color:"#f5f5f5"}},[e(v["a"],{staticClass:"text-left"},[e(f["a"],[e(p["a"],{attrs:{src:i("36a2")}})],1),e(b["a"],[e(b["b"],[t._v("Designed & Developed by")]),e(b["c"],{staticStyle:{"font-size":"12px"}},[e("a",{staticClass:"link",staticStyle:{"text-decoration":"none",color:"#343434"},attrs:{href:"https://msegs.in/",target:"blank"}},[t._v(" Mizoram State e-Governance Society")])])],1)],1)],1)],1),e(l["a"],{attrs:{md:"3",sm:"12",cols:"12"}},[e(g["a"],{attrs:{color:"#f5f5f5"}},[e(v["a"],{staticClass:"text-left"},[e(f["a"],[e(p["a"],{attrs:{src:i("169f")}})],1),e(b["a"],[e(b["b"],[t._v("Initiative of")]),e(b["c"],{staticStyle:{"font-size":"12px"}},[t._v("Mizoram Tourism Development Authority")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},B=[],j=i("5d9d"),I={components:{ShortLogo:j["a"]},data(){return{credentials:{email:"",password:""},show:!1,error:"",source:"https://app.zeplin.io/project/6049dda810ef2e9f677b1381/screen/60654843628bdb0577091955",dialog:!1,drawer:null,items:[{icon:"mdi-contacts",text:"Contacts"},{icon:"mdi-history",text:"Frequently contacted"},{icon:"mdi-content-copy",text:"Duplicates"},{icon:"mdi-chevron-up","icon-alt":"mdi-chevron-down",text:"Labels",model:!0,children:[{icon:"mdi-plus",text:"Create label"}]},{icon:"mdi-chevron-up","icon-alt":"mdi-chevron-down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"},{text:"Print"},{text:"Undo changes"},{text:"Other contacts"}]},{icon:"mdi-cog",text:"Settings"},{icon:"mdi-message",text:"Send feedback"},{icon:"mdi-help-circle",text:"Help"},{icon:"mdi-cellphone-link",text:"App downloads"},{icon:"mdi-keyboard",text:"Go to the old version"}]}},methods:{submit(){let t=this.validate();t?this.login():this.error="Please enter email and password"},validate(){return""!=this.credentials.email&&""!=this.credentials.password},login(){this.show=!0,this.$auth.login(this.credentials).then(t=>{this.response=t.data,this.$router.push(this.$route.query.redirect||"/admin")}).catch(t=>{throw this.show=!1,this.error="Invalid Email or Password",t})}}},O=I,k=(i("bb39"),i("2877")),A=Object(k["a"])(O,w,B,!1,null,"ac302810",null);e["default"]=A.exports},"553a":function(t,e,i){"use strict";i("b5b6");var s=i("8dd9"),a=i("3a66"),r=i("d10f"),n=i("58df"),o=i("80d2");e["a"]=Object(n["a"])(s["a"],Object(a["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...s["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...s["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(o["h"])(t),left:Object(o["h"])(this.computedLeft),right:Object(o["h"])(this.computedRight),bottom:Object(o["h"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},"56b0":function(t,e,i){"use strict";i("db42");var s=i("9d26"),a=i("da13"),r=i("34c3"),n=i("7e2b"),o=i("9d65"),l=i("a9ad"),c=i("f2e7"),d=i("3206"),h=i("5607"),u=i("0789"),p=i("58df"),m=i("80d2");const g=Object(p["a"])(n["a"],o["a"],l["a"],Object(d["a"])("list"),c["a"]);e["a"]=g.extend().extend({name:"v-list-group",directives:{ripple:h["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(s["a"],t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(r["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(a["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent(()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},Object(m["s"])(this))])},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(r["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(u["a"],this.genItems())])}})},"5d23":function(t,e,i){"use strict";i.d(e,"a",(function(){return g})),i.d(e,"c",(function(){return v})),i.d(e,"b",(function(){return f}));var s=i("80d2"),a=i("8860"),r=i("56b0"),n=i("da13"),o=(i("899c"),i("604c")),l=i("a9ad"),c=i("58df"),d=Object(c["a"])(o["a"],l["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...o["a"].options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...o["a"].options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),h=i("1800"),u=i("8270"),p=i("34c3");const m=Object(s["j"])("v-list-item__action-text","span"),g=Object(s["j"])("v-list-item__content","div"),v=Object(s["j"])("v-list-item__title","div"),f=Object(s["j"])("v-list-item__subtitle","div");a["a"],r["a"],n["a"],h["a"],u["a"],p["a"]},"5d9d":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("img",{attrs:{height:"60",src:t.short_logo,alt:"short_logo"}})},a=[],r={name:"ShortLogo",data(){return{short_logo:i("df2b")}}},n=r,o=i("2877"),l=Object(o["a"])(n,s,a,!1,null,null,null);e["a"]=l.exports},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("166a");var s=i("8547"),a=i("a452"),r=i("7560"),n=i("58df"),o=i("d9bd");const l=Object(n["a"])(s["a"],a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some(t=>this.valueComparator(t,e)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==i):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find(t=>!t.disabled);if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex(e=>this.valueComparator(e,t));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},"615b":function(t,e,i){},"61d2":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),a=i("d9f7"),r=i("80d2");const n=["sm","md","lg","xl"],o=(()=>n.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>n.reduce((t,e)=>(t["offset"+Object(r["G"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>n.reduce((t,e)=>(t["order"+Object(r["G"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let n="";for(const a in e)n+=String(e[a]);let o=u.get(n);if(!o){let t;for(t in o=[],d)d[t].forEach(i=>{const s=e[i],a=h(t,i,s);a&&o.push(a)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(n,o)}return t(e.tag,Object(a["a"])(i,{class:o}),s)}})},6545:function(t,e,i){},7496:function(t,e,i){"use strict";i("df86");var s=i("7560"),a=i("58df");e["a"]=Object(a["a"])(s["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://v2.vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},8270:function(t,e,i){"use strict";i("3408");var s=i("a9ad"),a=i("24b2"),r=i("a236"),n=i("80d2"),o=i("58df"),l=Object(o["a"])(s["a"],a["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:Object(n["h"])(this.size),minWidth:Object(n["h"])(this.size),width:Object(n["h"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),c=l;e["a"]=c.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...c.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=c.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},8547:function(t,e,i){"use strict";var s=i("2b0e"),a=i("80d2");e["a"]=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["k"]}}})},8860:function(t,e,i){"use strict";i("3ad0");var s=i("8dd9");e["a"]=s["a"].extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex(e=>e._uid===t._uid);e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},"899c":function(t,e,i){},"8efc":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return l}));var s=i("b0af"),a=i("80d2");const r=Object(a["j"])("v-card__actions"),n=Object(a["j"])("v-card__subtitle"),o=Object(a["j"])("v-card__text"),l=Object(a["j"])("v-card__title");s["a"]},"9d65":function(t,e,i){"use strict";var s=i("d9bd"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(s["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},adda:function(t,e,i){"use strict";i("8efc");var s=i("90a2"),a=(i("36a7"),i("24b2")),r=i("58df"),n=i("80d2"),o=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(n["s"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=o,c=i("7560"),d=i("d9f7"),h=i("d9bd");const u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(l,c["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(h["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:a}=t;s||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(n["s"])(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),a=i("297c"),r=i("1c87"),n=i("58df");e["a"]=Object(n["a"])(a["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b5b6:function(t,e,i){},bb39:function(t,e,i){"use strict";i("6545")},bd0c:function(t,e,i){},d10f:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},da13:function(t,e,i){"use strict";i("61d2");var s=i("a9ad"),a=i("1c87"),r=i("4e82"),n=i("7560"),o=i("f2e7"),l=i("5607"),c=i("80d2"),d=i("d9bd"),h=i("58df");const u=Object(h["a"])(s["a"],a["a"],n["a"],Object(r["a"])("listItemGroup"),Object(o["b"])("inputValue"));e["a"]=u.extend().extend({name:"v-list-item",directives:{Ripple:l["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...a["a"].options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(a["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&Object(d["e"])("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-"+this._uid):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i[this.to?"nativeOn":"on"]={...i[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===c["y"].enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);const s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,i):i,s)}})},db42:function(t,e,i){},df2b:function(t,e,i){t.exports=i.p+"img/tgr_logo.8b3e4ee0.svg"},df86:function(t,e,i){},f6c4:function(t,e,i){"use strict";i("bd0c");var s=i("d10f");e["a"]=s["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:s,insetFooter:a,bottom:r,left:n}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:i+"px",paddingBottom:s+a+r+"px",paddingLeft:n+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},f6db:function(t,e,i){t.exports=i.p+"img/tgrlogo-margin.e2354b78.svg"}}]);