(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(e,t,r){var o=r("d039"),a=r("b622"),n=r("2d00"),c=a("species");e.exports=function(e){return n>=51||!o((function(){var t=[],r=t.constructor={};return r[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,r){"use strict";var o=r("c04e"),a=r("9bf2"),n=r("5c6c");e.exports=function(e,t,r){var c=o(t);c in e?a.f(e,c,n(0,r)):e[c]=r}},"99af":function(e,t,r){"use strict";var o=r("23e7"),a=r("d039"),n=r("e8b5"),c=r("861d"),s=r("7b0b"),i=r("50c4"),l=r("8418"),d=r("65f0"),u=r("1dde"),m=r("b622"),f=r("2d00"),b=m("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",h=f>=51||!a((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),w=u("concat"),j=function(e){if(!c(e))return!1;var t=e[b];return void 0!==t?!!t:n(e)},O=!h||!w;o({target:"Array",proto:!0,forced:O},{concat:function(e){var t,r,o,a,n,c=s(this),u=d(c,0),m=0;for(t=-1,o=arguments.length;t<o;t++)if(n=-1===t?c:arguments[t],j(n)){if(a=i(n.length),m+a>p)throw TypeError(v);for(r=0;r<a;r++,m++)r in n&&l(u,m,n[r])}else{if(m>=p)throw TypeError(v);l(u,m++,n)}return u.length=m,u}})},a55b:function(e,t,r){"use strict";r.r(t);var o=r("7a23"),a={class:"container"},n={class:"row justify-content-center"},c=Object(o["createVNode"])("h1",{class:"h3 mt-3 mb-3 font-weight-normal"}," 登入 ",-1),s={class:"col-8"},i={class:"mb-3"},l=Object(o["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),d={class:"mb-3"},u=Object(o["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),m=Object(o["createVNode"])("p",{class:"mt-5 mb-3 text-muted"}," © 1999-2021 鞋頭物語 All rights reserved. ",-1);function f(e,t,r,f,b,p){var v=Object(o["resolveComponent"])("Field"),h=Object(o["resolveComponent"])("error-message"),w=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("div",n,[c,Object(o["createVNode"])("div",s,[Object(o["createVNode"])(w,{ref:"form",id:"form",class:"form-signin"},{default:Object(o["withCtx"])((function(e){var r=e.errors;return[Object(o["createVNode"])("div",i,[l,Object(o["createVNode"])(v,{id:"email",name:"信箱",type:"email",rules:"email|required",class:["form-control",{"is-invalid":r["信箱"]}],placeholder:"請輸入 Email",modelValue:b.user.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.user.username=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(h,{name:"信箱",class:"invalid-feedback"})]),Object(o["createVNode"])("div",d,[u,Object(o["createVNode"])(v,{id:"password",name:"密碼",type:"password",rules:"required",class:["form-control",{"is-invalid":r["密碼"]}],modelValue:b.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.user.password=e}),placeholder:"請輸入 Email"},null,8,["class","modelValue"]),Object(o["createVNode"])(h,{name:"密碼",class:"invalid-feedback"})]),Object(o["createVNode"])("button",{class:"btn btn-lg btn-primary w-100 mt-3",id:"loginBtn",type:"button",onClick:t[3]||(t[3]=function(){return p.login&&p.login.apply(p,arguments)})}," 登入 ")]})),_:1},512)])]),m])}r("99af");var b={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var r=t.data,o=r.token,a=r.expired;document.cookie="huaToken=".concat(o,"; expires=").concat(new Date(a)),e.$swal({icon:"success",text:"".concat(t.data.message)}),setTimeout((function(){e.$router.push("/dashboard")}),100)}else e.$swal({icon:"error",text:"".concat(t.data.message)})})).catch((function(t){e.$swal(t.data.message)}))}}};b.render=f;t["default"]=b}}]);
//# sourceMappingURL=chunk-4bec8d34.2425c165.js.map