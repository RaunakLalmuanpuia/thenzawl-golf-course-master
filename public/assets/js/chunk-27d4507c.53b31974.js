(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27d4507c"],{"0fd9":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),r=i("d9f7"),n=i("80d2");const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce((i,s)=>(i[t+Object(n["G"])(s)]=e(),i),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),h=t=>[...o,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:h})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),m=l("alignContent",()=>({type:String,default:null,validator:p})),f={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,i){let s=g[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const b=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:i,children:s}){let n="";for(const r in e)n+=String(e[r]);let a=b.get(n);if(!a){let t;for(t in a=[],f)f[t].forEach(i=>{const s=e[i],r=v(t,i,s);r&&a.push(r)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(n,a)}return t(e.tag,Object(r["a"])(i,{staticClass:"row",class:a}),s)}})},"10d2":function(t,e,i){"use strict";var s=i("8dd9");e["a"]=s["a"]},"1c87":function(t,e,i){"use strict";var s=i("2b0e"),r=i("5607"),n=i("80d2");e["a"]=s["a"].extend({name:"routable",directives:{Ripple:r["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,r=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick(()=>{!Object(n["p"])(this.$refs.link,i)===this.isActive&&this.toggle()})},toggle(){this.isActive=!this.isActive}}})},"22da":function(t,e,i){"use strict";var s=i("490a");e["a"]=s["a"]},"22f1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAACWCAIAAACn/+04AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9btVUqDnYQcchQxcGCqIijVqEIFUKt0KqDyaVf0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QNzcnRRcp8X9JoUWMB8f9eHfvcfcO8NfLTDU7xgFVs4xUIi5ksqtC8BXdCKELo4DETH1OFJPwHF/38PH1LsazvM/9OXqVnMkAn0A8y3TDIt4gnt60dM77xBFWlBTic+Ixgy5I/Mh12eU3zgWH/TwzYqRT88QRYqHQxnIbs6KhEk8RRxVVo3x/xmWF8xZntVxlzXvyF4Zz2soy12kOIYFFLEGEABlVlFCGhRitGikmUrQf9/APOn6RXDK5SmDkWEAFKiTHD/4Hv7s185MTblI4DnS+2PbHMBDcBRo12/4+tu3GCRB4Bq60lr9SB2Y+Sa+1tOgR0LcNXFy3NHkPuNwBBp50yZAcKUDTn88D72f0TVmg/xboWXN7a+7j9AFIU1fJG+DgEBgpUPa6x7tD7b39e6bZ3w8KSXJ9qJfV2AAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UJCAY0ONVcXdQAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAABs0lEQVR42u3UMQ0AAAgEMcC/3w8bPkgr4YbrbAqAX0YCAHMHwNwBMHcAzB0AcwcwdwDMHQBzB8DcATB3AHMHwNwBMHcAzB0AcwfA3AHMHQBzB8DcATB3AMwdwNwBMHcAzB0AcwfA3AEwdwBzB8DcATB3AMwdAHMHMHcAzB0AcwfA3AEwdwDMHcDcATB3AMwdAHMHwNwBzB0AcwfA3AEwdwDMHQBzBzB3AMwdAHMHwNwBMHcAcwfA3AEwdwDMHQBzB8DcAcwdAHMHwNwBMHcAzB3A3AEwdwDMHQBzB8DcATB3AHMHwNwBMHcAzB0AcwcwdwDMHQBzB8DcATB3AMwdwNwBMHcAzB0AcwfA3AHMHQBzB8DcATB3AMwdAHMHMHcAzB0AcwfA3AEwdwBzB8DcATB3AMwdAHMHwNwBzB0AcwfA3AEwdwDMHcDcATB3AMwdAHMHwNwBMHcAcwfA3AEwdwDMHQBzBzB3AMwdAHMHwNwBMHcAzB3A3AEwdwDMHQBzB8DcAcwdAHMHwNwBMHcAzB0AcwcwdwDMHQBzB8DcATB3AHMHwNwBMHcAzB0AcwfA3AE+Owg2BBPOymI+AAAAAElFTkSuQmCC"},"24b2":function(t,e,i){"use strict";var s=i("80d2"),r=i("2b0e");e["a"]=r["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=Object(s["h"])(this.height),i=Object(s["h"])(this.minHeight),r=Object(s["h"])(this.minWidth),n=Object(s["h"])(this.maxHeight),a=Object(s["h"])(this.maxWidth),o=Object(s["h"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),r&&(t.minWidth=r),n&&(t.maxHeight=n),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},"25a8":function(t,e,i){},3206:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o}));var s=i("2b0e"),r=i("d9bd");function n(t,e){return()=>Object(r["c"])(`The ${t} component must be used inside a ${e}`)}function a(t,e,i){const r=e&&i?{register:n(e,i),unregister:n(e,i)}:null;return s["a"].extend({name:"registrable-inject",inject:{[t]:{default:r}}})}function o(t,e=!1){return s["a"].extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},"338d":function(t,e,i){t.exports=i.p+"img/golf_cart.caac1f4c.jpg"},"36a7":function(t,e,i){},"490a":function(t,e,i){"use strict";i("8d4f");var s=i("90a2"),r=i("a9ad"),n=i("80d2");e["a"]=r["a"].extend({name:"v-progress-circular",directives:{intersect:s["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:Object(n["h"])(this.calculatedSize),width:Object(n["h"])(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:"v-progress-circular__"+t,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4e82":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("3206");function r(t,e,i){return Object(s["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},5607:function(t,e,i){"use strict";i("7435");var s=i("80d2");const r=80;function n(t,e){t.style.transform=e,t.style.webkitTransform=e}function a(t){return"TouchEvent"===t.constructor.name}function o(t){return"KeyboardEvent"===t.constructor.name}const l=(t,e,i={})=>{let s=0,r=0;if(!o(t)){const i=e.getBoundingClientRect(),n=a(t)?t.touches[t.touches.length-1]:t;s=n.clientX-i.left,r=n.clientY-i.top}let n=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,n=e.clientWidth/2,n=i.center?n:n+Math.sqrt((s-n)**2+(r-n)**2)/4):n=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const c=(e.clientWidth-2*n)/2+"px",d=(e.clientHeight-2*n)/2+"px",h=i.center?c:s-n+"px",u=i.center?d:r-n+"px";return{radius:n,scale:l,x:h,y:u,centerX:c,centerY:d}},c={show(t,e,i={}){if(!e._ripple||!e._ripple.enabled)return;const s=document.createElement("span"),r=document.createElement("span");s.appendChild(r),s.className="v-ripple__container",i.class&&(s.className+=" "+i.class);const{radius:a,scale:o,x:c,y:d,centerX:h,centerY:u}=l(t,e,i),p=2*a+"px";r.className="v-ripple__animation",r.style.width=p,r.style.height=p,e.appendChild(s);const m=window.getComputedStyle(e);m&&"static"===m.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),n(r,`translate(${c}, ${d}) scale3d(${o},${o},${o})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),n(r,`translate(${h}, ${u}) scale3d(1,1,1)`)},0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const i=e[e.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const s=performance.now()-Number(i.dataset.activated),r=Math.max(250-s,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout(()=>{var e;const s=t.getElementsByClassName("v-ripple__animation");1===s.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),(null===(e=i.parentNode)||void 0===e?void 0:e.parentNode)===t&&t.removeChild(i.parentNode)},300)},r)}};function d(t){return"undefined"===typeof t||!!t}function h(t){const e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,a(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||o(t),i._ripple.class&&(e.class=i._ripple.class),a(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{c.show(t,i,e)},i._ripple.showTimer=window.setTimeout(()=>{i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)},r)}else c.show(t,i,e)}}function u(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout(()=>{u(t)}));window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),c.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let m=!1;function f(t){m||t.keyCode!==s["y"].enter&&t.keyCode!==s["y"].space||(m=!0,h(t))}function g(t){m=!1,u(t)}function v(t){!0===m&&(m=!1,u(t))}function b(t,e,i){const s=d(e.value);s||c.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=s;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),s&&!i?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",u,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",u),t.addEventListener("mousedown",h),t.addEventListener("mouseup",u),t.addEventListener("mouseleave",u),t.addEventListener("keydown",f),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",u,{passive:!0})):!s&&i&&w(t)}function w(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",u),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",u),t.removeEventListener("mouseup",u),t.removeEventListener("mouseleave",u),t.removeEventListener("keydown",f),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",u),t.removeEventListener("blur",v)}function y(t,e,i){b(t,e,!1)}function A(t){delete t._ripple,w(t)}function B(t,e){if(e.value===e.oldValue)return;const i=d(e.oldValue);b(t,e,i)}const S={bind:y,unbind:A,update:B};e["a"]=S},"58df":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("2b0e");function r(...t){return s["a"].extend({mixins:t})}},"62ad":function(t,e,i){"use strict";i("4b85");var s=i("2b0e"),r=i("d9f7"),n=i("80d2");const a=["sm","md","lg","xl"],o=(()=>a.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>a.reduce((t,e)=>(t["offset"+Object(n["G"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>a.reduce((t,e)=>(t["order"+Object(n["G"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function h(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const u=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:n}){let a="";for(const r in e)a+=String(e[r]);let o=u.get(a);if(!o){let t;for(t in o=[],d)d[t].forEach(i=>{const s=e[i],r=h(t,i,s);r&&o.push(r)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(a,o)}return t(e.tag,Object(r["a"])(i,{class:o}),s)}})},"69dc":function(t,e,i){"use strict";i.r(e);var s=i("8336"),r=i("62ad"),n=i("a523"),a=i("adda"),o=i("0fd9"),l=function(){var t=this,e=t._self._c;return e("div",[e(n["a"],{staticClass:"header",attrs:{fluid:""}},[e(a["a"],{staticClass:"d-none d-md-flex d-lg-flex",attrs:{height:"300",src:i("df8b")}},[e(o["a"],[e("div",{staticClass:"title-container"},[e(r["a"],{attrs:{"md-4":"",offset:"2"}},[e("div",{staticClass:"my-title-2"},[t._v("Club Member")])])],1)])],1),e("div",{staticClass:"d-flex d-md-none"},[e(a["a"],{attrs:{height:"150",src:i("22f1")}}),e("div",{staticClass:"pageTitle"},[t._v("Club Member")])],1),e("br")],1),e(n["a"],{staticClass:"memberContainer"},[e("h2",{staticStyle:{"text-align":"center"}},[t._v("MEMBERSHIP CATEGORY")]),e("br"),e(o["a"],[e(r["a"],{staticStyle:{"font-size":"14px"},attrs:{cols:"12","order-md":"1",order:"2",md:"6"}},[e("p",[e("ol",{attrs:{type:"none"}},[e("li",[e("b",[t._v("INDIVIDUAL MEMBER")]),e("ol",{attrs:{type:"none"}},[e("li",[t._v("Permanent residents of India")]),e("li",[t._v("Non-Resident Indians (NRI)")]),e("li",[t._v("Foreign nationals, residing in or visiting India i.e., expatriates")]),e("li",[e("a",{attrs:{href:"/documents/Individual Membership Agreement.pdf"}},[t._v("Download Membership Agreement Here")])])])]),e("br"),e("li",[e("b",[t._v("CORPORATE MEMBER")]),e("ul",{attrs:{type:"none"}},[e("li",[t._v('The Corporate Members shall be Companies incorporated in India or abroad, partnership firms or any other body incorporated under any national jurisdiction. Such Corporate Members may nominate their directors, partners or employees, as the case may be ("Corporate Nominee"), to use the facilities in Thenzawl Golf Course & Resort subject to the Terms and Conditions and the Rules and Regulations made in this regard. A Corporate Member may request for more than one nomination for a period of time and the fee as specified in the Fee Structure attached there under.')]),e("li",[e("a",{attrs:{href:"/documents/Corporate Membership Agreement.pdf"}},[t._v("Download Membership Agreement Here")])])])])])])]),e(r["a"],{staticStyle:{margin:"auto"},attrs:{cols:"12","order-md":"2",order:"1",md:"6"}},[e(n["a"],{staticClass:"membership-card"},[e("div",{staticClass:"justify-center mb-2"},[e("center",[e(a["a"],{attrs:{height:"50",width:"50",src:i("97d1")}})],1)],1),e("p",{staticClass:"membership-card-content mb-6"},[t._v(" Want to be a Club Member? ")]),e(s["a"],{staticStyle:{color:"white"},attrs:{to:"/membership",rounded:"",color:"#04d39b"}},[t._v(" Join Now ")])],1)],1)],1),e(o["a"],{staticClass:"mb-3"},[e(r["a"],{attrs:{md:"6","order-md":"1",order:"2"}},[e(a["a"],{staticStyle:{"border-radius":"20px"},attrs:{height:"300",src:i("338d")}})],1),e(r["a"],{staticStyle:{"font-size":"14px"},attrs:{md:"6","order-md":"2",order:"1"}},[e("h3",[t._v("SUB CATEGORIES: (INDIVIDUAL & CORPORATE MEMBERSHIP)")]),e("br"),t._v(" The club is offering two sub categories of membership as below: "),e("ol",{attrs:{type:"A"}},[e("li",[e("h5",[e("b",[t._v(" GOLF MEMBERSHIP")])]),t._v(" This membership entitles the member to use all sports facilities including Golf course/Practice Range. ")]),e("li",[e("h5",[e("b",[t._v("CLUB MEMBERSHIP")])]),t._v(" This membership entitles the applicant to use all sports except for Golf and Golf Course/Practice Range. ")])]),e("br"),e("p",[t._v(" A CLUB MEMBERSHIP can be switched to a GOLF MEMBERSHIP by paying the difference of applicable fee for the duration of his/her membership tenure on a pro-rata basis. However a GOLF MEMBERSHIP cannot be switched to a CLUB MEMBERSHIP. ")])])],1)],1)],1)},c=[],d={},h=d,u=(i("fb99"),i("2877")),p=Object(u["a"])(h,l,c,!1,null,"c0430f7c",null);e["default"]=p.exports},7435:function(t,e,i){},7560:function(t,e,i){"use strict";i.d(e,"b",(function(){return n}));var s=i("2b0e");const r=s["a"].extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function n(t){const e={...t.props,...t.injections},i=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:i})}e["a"]=r},"7e2b":function(t,e,i){"use strict";var s=i("2b0e");function r(t){return function(e,i){for(const s in i)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["a"]=s["a"].extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},8336:function(t,e,i){"use strict";i("86cc");var s=i("10d2"),r=i("22da"),n=i("4e82"),a=i("f2e7"),o=i("c995"),l=i("fe6c"),c=i("1c87"),d=i("af2b"),h=i("58df"),u=i("d9bd");const p=Object(h["a"])(s["a"],c["a"],l["a"],d["a"],Object(n["a"])("btnToggle"),Object(a["b"])("inputValue"));e["a"]=p.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...c["a"].options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return o["a"].options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(r["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:i,data:s}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(i,this.disabled?s:r(this.color,s),e)}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"8dd9":function(t,e,i){"use strict";i("25a8");var s=i("7e2b"),r=i("a9ad"),n=i("c995"),a=i("24b2"),o=i("a236"),l=i("7560"),c=i("58df");e["a"]=Object(c["a"])(s["a"],r["a"],n["a"],a["a"],o["a"],l["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},n=e.value,{handler:a,options:o}="object"===typeof n?n:{handler:n,options:{}},l=new IntersectionObserver((n=[],o)=>{var l;const c=null===(l=t._observe)||void 0===l?void 0:l[i.context._uid];if(!c)return;const d=n.some(t=>t.isIntersecting);!a||s.quiet&&!c.init||s.once&&!d&&!c.init||a(n,o,d),d&&s.once?r(t,e,i):c.init=!0},o);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:l},l.observe(t)}function r(t,e,i){var s;const r=null===(s=t._observe)||void 0===s?void 0:s[i.context._uid];r&&(r.observer.unobserve(t),delete t._observe[i.context._uid])}const n={inserted:s,unbind:r};e["a"]=n},"97d1":function(t,e,i){t.exports=i.p+"img/tgr_logo_white.8d9fff56.svg"},a236:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push("rounded-"+e)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var s=i("e8f2"),r=i("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let n;const{attrs:a}=i;return a&&(i.attrs={},n=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),s)}})},a9ad:function(t,e,i){"use strict";var s=i("2b0e"),r=i("d9bd"),n=i("7bc6");e["a"]=s["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(r["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(r["b"])("class must be an object",this),e):(Object(n["d"])(t)?e.style={...e.style,"background-color":""+t,"border-color":""+t}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(r["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(r["b"])("class must be an object",this),e;if(Object(n["d"])(t))e.style={...e.style,color:""+t,"caret-color":""+t};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},adda:function(t,e,i){"use strict";i("8efc");var s=i("90a2"),r=(i("36a7"),i("24b2")),n=i("58df"),a=i("80d2"),o=Object(n["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(a["s"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=o,c=i("7560"),d=i("d9f7"),h=i("d9bd");const u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(l,c["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(h["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(a["s"])(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},af2b:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c995:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{["elevation-"+this.elevation]:!0}}}})},df8b:function(t,e,i){t.exports=i.p+"img/club_member.12c5c6da.jpg"},e4d0:function(t,e,i){},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("2b0e");function r(t){return s["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:r}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:n}=s;if(n){s.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=" "+t.join(" "))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,r)}})}},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));var s=i("2b0e");function r(t="value",e="input"){return s["a"].extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const n=r();e["a"]=n},fb99:function(t,e,i){"use strict";i("e4d0")},fe6c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a}));var s=i("2b0e"),r=i("80d2");const n={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(t=[]){return s["a"].extend({name:"positionable",props:t.length?Object(r["n"])(n,t):n})}e["a"]=a()}}]);