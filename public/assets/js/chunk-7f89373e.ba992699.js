(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f89373e","chunk-0d53c846"],{"0fd9":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((i,s)=>(i[t+Object(a["G"])(s)]=e(),i),{})}const c=t=>[...r,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),v=t=>[...r,"space-between","space-around","stretch"].includes(t),f=l("alignContent",()=>({type:String,default:null,validator:v})),m={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(f)},p={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,i){let s=p[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const y=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:v},...f},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let o=y.get(a);if(!o){let t;for(t in o=[],m)m[t].forEach(i=>{const s=e[i],n=g(t,i,s);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),y.set(a,o)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:o}),s)}})},"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),n=i("4ad4"),a=i("b848"),o=i("75eb"),r=i("e707"),l=i("e4d3"),c=i("21be"),d=i("a293"),h=i("58df"),u=i("d9bd"),v=i("80d2");const f=Object(h["a"])(a["a"],o["a"],r["a"],l["a"],c["a"],n["a"]);e["a"]=f.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(u["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]'));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(v["h"])(this.maxWidth),width:Object(v["h"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const i=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),i)}}})},"1abc":function(t,e,i){"use strict";var s=i("a797");e["a"]=s["a"]},"21be":function(t,e,i){"use strict";var s=i("2b0e"),n=i("80d2");e["a"]=s["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(n["u"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,Object(n["u"])(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let a=0;a<s.length;a++)t.includes(s[a])||i.push(Object(n["u"])(s[a]));return Math.max(...i)}}})},"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["j"])("spacer","div","v-spacer")},"368e":function(t,e,i){},"480e":function(t,e,i){"use strict";var s=i("7560");e["a"]=s["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:s["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},"4ad4":function(t,e,i){"use strict";var s=i("16b7"),n=i("f2e7"),a=i("58df"),o=i("80d2"),r=i("d9bd");const l=Object(a["a"])(s["a"],n["a"]);e["a"]=l.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(o["t"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(r["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(o["s"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return Object(o["s"])(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4bd4":function(t,e,i){"use strict";var s=i("58df"),n=i("7e2b"),a=i("3206");e["a"]=Object(s["a"])(n["a"],Object(a["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"615b":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),n=i("d9f7"),a=i("80d2");const o=["sm","md","lg","xl"],r=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>o.reduce((t,e)=>(t["offset"+Object(a["G"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(a["G"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(r),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let o="";for(const n in e)o+=String(e[n]);let r=u.get(o);if(!r){let t;for(t in r=[],d)d[t].forEach(i=>{const s=e[i],n=h(t,i,s);n&&r.push(n)});const i=r.some(t=>t.startsWith("col-"));r.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(o,r)}return t(e.tag,Object(n["a"])(i,{class:r}),s)}})},"75eb":function(t,e,i){"use strict";var s=i("9d65"),n=i("80d2"),a=i("58df"),o=i("d9bd");function r(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function l(t){t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}e["a"]=Object(a["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:r},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver(i=>{i.some(t=>Array.from(t.removedNodes).includes(this.$el))&&(e.disconnect(),l(t))});e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else l(t)}},methods:{getScopeIdAttrs(){const t=Object(n["p"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(o["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}})},7871:function(t,e,i){},"8ce9":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return l}));var s=i("b0af"),n=i("80d2");const a=Object(n["j"])("v-card__actions"),o=Object(n["j"])("v-card__subtitle"),r=Object(n["j"])("v-card__text"),l=Object(n["j"])("v-card__title");s["a"]},"9d65":function(t,e,i){"use strict";var s=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(s["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a293:function(t,e,i){"use strict";var s=i("dd89");function n(){return!0}function a(t,e,i){if(!t||!1===o(t,i))return!1;const n=Object(s["a"])(e);if("undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&n.host===t.target)return!1;const a=("object"===typeof i.value&&i.value.include||(()=>[]))();return a.push(e),!a.some(e=>e.contains(t.target))}function o(t,e){const i="object"===typeof e.value&&e.value.closeConditional||n;return i(t)}function r(t,e,i){const s="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,i)&&setTimeout(()=>{o(t,i)&&s&&s(t)},0)}function l(t,e){const i=Object(s["a"])(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}const c={inserted(t,e,i){const s=i=>r(i,t,e),n=i=>{t._clickOutside.lastMousedownWasOutside=a(i,t,e)};l(t,t=>{t.addEventListener("click",s,!0),t.addEventListener("mousedown",n,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:s,onMousedown:n}},unbind(t,e,i){t._clickOutside&&(l(t,e=>{var s;if(!e||!(null===(s=t._clickOutside)||void 0===s?void 0:s[i.context._uid]))return;const{onClick:n,onMousedown:a}=t._clickOutside[i.context._uid];e.removeEventListener("click",n,!0),e.removeEventListener("mousedown",a,!0)}),delete t._clickOutside[i.context._uid])}};e["a"]=c},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),a=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b848:function(t,e,i){"use strict";var s=i("58df");function n(t){const e=[];for(let i=0;i<t.length;i++){const s=t[i];s.isActive&&s.isDependent?e.push(s):e.push(...n(s.$children))}return e}e["a"]=Object(s["a"])().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?n(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let i=0;i<e.length;i++)t.push(...e[i].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},b856:function(t,e,i){"use strict";i.r(e);var s=i("8336"),n=i("b0af"),a=i("99d9"),o=i("62ad"),r=i("a523"),l=i("169a"),c=i("ce7e"),d=i("4bd4"),h=i("132d"),u=i("24c9"),v=i("a797"),f=i("490a"),m=i("0fd9"),p=i("2fa4"),g=i("8654"),y=function(){var t=this,e=t._self._c;return e(r["a"],{attrs:{fluid:"","ml-6":"","mt-6":"","ml-4":"","pr-10":""}},[e(v["a"],{attrs:{value:t.show}},[e(f["a"],{attrs:{indeterminate:"",size:"64"}})],1),e(n["a"],[e(a["d"],[e("h2",[t._v("Videos")]),e(p["a"]),e(s["a"],{attrs:{icon:""},on:{click:function(e){t.dialog=!t.dialog}}},[e(h["a"],[t._v("mdi-plus")])],1)],1),e(a["c"],[e(m["a"],t._l(t.videos,(function(i,r){return e(o["a"],{key:r,attrs:{md:"6",sm:"12",cols:"12"}},[e(n["a"],[e(a["b"],[e(s["a"],{attrs:{icon:"","x-small":""},on:{click:function(e){return t.deleteVideo(i.id)}}},[e(h["a"],[t._v("mdi-delete")])],1)],1),e(a["c"],[e("youtube",{ref:"youtube",refInFor:!0,attrs:{width:"100%","video-id":i.video_id}})],1),e(a["d"],{staticStyle:{height:"5rem","padding-bottom":"100px"}},[t._v(" "+t._s(i.title)+" ")])],1)],1)})),1)],1)],1),e(l["a"],{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(d["a"],{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(n["a"],[e(a["d"],{staticClass:"text-h5 grey lighten-2"},[t._v(" Add Video ")]),e(a["c"],[e(u["a"],[t._v("Title")]),e(g["a"],{staticClass:"my-input",attrs:{rules:[t=>!!t||"Title is required"],solo:"","mb-3":""},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),e(u["a"],[t._v("Youtube Video ID")]),e(g["a"],{staticClass:"my-input",attrs:{rules:[t=>!!t||"Video ID is required"],solo:"","mb-3":""},model:{value:t.data.videoId,callback:function(e){t.$set(t.data,"videoId",e)},expression:"data.videoId"}})],1),e(c["a"]),e(a["a"],[e(p["a"]),e(s["a"],{attrs:{color:"primary",text:""},on:{click:t.validate}},[t._v(" Add ")])],1)],1)],1)],1),e(l["a"],{attrs:{"max-width":"290"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(n["a"],[e(a["d"],{staticClass:"text-h5"},[t._v(" Are you sure you want to delete this video? ")]),e(a["a"],[e(p["a"]),e(s["a"],{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v(" No ")]),e(s["a"],{attrs:{color:"green darken-1",text:""},on:{click:t.confirmDelete}},[t._v(" Yes ")])],1)],1)],1)],1)},b=[],w={data(){return{show:!1,deleteDialog:!1,deleteId:"",valid:!0,dialog:!1,videos:[],data:{title:"",videoId:""}}},mounted(){this.initializeData()},methods:{initializeData(){let t=this;t.show=!0,t.$axios.get("/video").then((function(e){t.show=!1,t.videos=e.data.videos})).catch((function(e){throw t.show=!1,e}))},validate(){this.$refs.form.validate(),1==this.$refs.form.validate()&&this.addVideo()},addVideo(){let t=this;t.$axios.post("/add-video",t.data).then((function(e){t.$refs.form.reset(),t.dialog=!1,t.initializeData(),t.$emit("show-snackbar",{message:e.data.success,color:"success"})})).catch((function(e){throw t.$emit("show-snackbar",{message:"Oops! Something Went Wrong",color:"red"}),e}))},deleteVideo(t){this.deleteId=t,this.deleteDialog=!0},confirmDelete(){let t=this;this.$axios.post("delete-video/"+t.deleteId).then((function(e){t.deleteDialog=!1,t.initializeData(),t.$emit("show-snackbar",{message:e.data.success,color:"success"})})).catch((function(e){throw t.$emit("show-snackbar",{message:"Oops! Something Went Wrong",color:"red"}),e}))}}},O=w,k=(i("fe78"),i("2877")),$=Object(k["a"])(O,y,b,!1,null,null,null);e["default"]=$.exports},ce7e:function(t,e,i){"use strict";i("8ce9");var s=i("7560");e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},e4d3:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})},e707:function(t,e,i){"use strict";var s=i("1abc"),n=i("80d2"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new s["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(n["u"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(n["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[n["y"].up,n["y"].pageup],i=[n["y"].down,n["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s="y"===i?e.deltaY:e.deltaX||e.deltaY;let n,a;"y"===i?(n=0===t.scrollTop,a=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,a=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=s<0,r=s>0;return!(n||!o)||(!(a||!r)||!(!n&&!a)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(n["g"])(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e))||!this.shouldScroll(e,t)}for(let i=0;i<e.length;i++){const s=e[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},fe78:function(t,e,i){"use strict";i("7871")}}]);