(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3620b741"],{"057f":function(e,t,r){var o=r("fc6a"),a=r("241c").f,c={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return a(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==c.call(e)?i(e):a(o(e))}},1799:function(e,t,r){"use strict";var o=r("7a23"),a={"aria-label":"Page navigation example"},c={class:"pagination"},n=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function l(e,t,r,l,d,s){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",c,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!r.page.has_pre}]},[Object(o["createVNode"])("a",{onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("page-change",r.page.current_page-1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},[n])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.page.total_pages,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:[{active:t===r.page.current_page},"page-item"],key:t},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(r){return e.$emit("page-change",t)}),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!r.page.has_next}]},[Object(o["createVNode"])("a",{onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("page-change",r.page.current_page+1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},[i])],2)])])}var d={props:["page"]};d.render=l;t["a"]=d},"2c04":function(e,t,r){"use strict";r.r(t);r("b0c0");var o=r("7a23"),a=Object(o["createVNode"])("h1",{class:"mt-3 mb-3"},"訂單管理",-1),c={class:"container"},n={class:"table table-hover align-middle"},i=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"訂單日期"),Object(o["createVNode"])("th",{width:"50"},"訂購人"),Object(o["createVNode"])("th",{width:"50"},"電話"),Object(o["createVNode"])("th",{width:"50"},"信箱"),Object(o["createVNode"])("th",{width:"100"},"地址"),Object(o["createVNode"])("th",{width:"120"},"備註"),Object(o["createVNode"])("th",{width:"50"},"付款狀態"),Object(o["createVNode"])("th",{width:"50"})])],-1),l={class:"text-truncate",style:{"max-width":"120px"}},d={class:"d-flex justify-content-center mt-5"};function s(e,t,r,s,u,b){var f=Object(o["resolveComponent"])("Pagination"),p=Object(o["resolveComponent"])("EditOrder");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[a,Object(o["createVNode"])("div",c,[Object(o["createVNode"])("table",n,[i,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(u.orderList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(new Date(1e3*e.create_at).toLocaleDateString("zh-TW"))+" "+Object(o["toDisplayString"])(new Date(e.create_at).toLocaleTimeString("zh-TW")),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.name),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.tel),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.email),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.address),1),Object(o["createVNode"])("td",l,Object(o["toDisplayString"])(e.message),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.is_paid?"已付款":"未付款"),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-info",onClick:function(t){return b.openModal(e)}}," 修改訂單 ",8,["onClick"])])])})),128))])])]),Object(o["createVNode"])("div",d,[Object(o["createVNode"])(f,{page:u.pagination,onPageChange:b.getOrderList},null,8,["page","onPageChange"])]),Object(o["createVNode"])(p,{ref:"editModal",onReget:b.getOrderList},null,8,["onReget"])],64)}var u=r("5530"),b=(r("99af"),r("1799")),f={class:"modal  fade",ref:"modal",tabindex:"-1"},p={class:"modal-dialog modal-lg"},O={class:"modal-content"},m=Object(o["createVNode"])("div",{class:"modal-header justify-content-center bg-info text-light"},[Object(o["createVNode"])("h3",{class:"modal-title w-100"},"修改訂單"),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},j={class:"mb-3 row"},g=Object(o["createVNode"])("label",{for:"orderDate",class:"col-sm-2 col-form-label"},"訂單日期",-1),v={class:"form-group col-sm-4"},y=Object(o["createVNode"])("label",{for:"orderpaid",class:"col-sm-2 col-form-label"},"付款狀態",-1),N={class:"form-group col-sm-4"},V=Object(o["createVNode"])("option",{value:"0"},"未付款",-1),w=Object(o["createVNode"])("option",{value:"1"},"已付款",-1),k=Object(o["createVNode"])("h2",{class:"mb-4"},"訂購人資訊",-1),_={class:"row mb-3"},S=Object(o["createVNode"])("label",{for:"name",class:"col-sm-2 col-form-label"},"姓名",-1),x={class:"col-sm-4"},D=Object(o["createVNode"])("label",{for:"name",class:"col-sm-2 col-form-label"},"電話",-1),P={class:"col-sm-4"},$={class:"row mb-3"},M=Object(o["createVNode"])("label",{for:"name",class:"col-sm-2 col-form-label"},"電子信箱",-1),C={class:"col-sm-4"},B=Object(o["createVNode"])("label",{for:"name",class:"col-sm-2 col-form-label"},"地址",-1),T={class:"col-sm-4"},L={class:"row mb-3"},E=Object(o["createVNode"])("label",{for:"name",class:"col-sm-2 col-form-label"},"備註",-1),F={class:"col-sm"},U={class:"row mb-3"},W=Object(o["createVNode"])("label",{for:"name",class:"col-sm-2 col-form-label"},"付款方式",-1),z={class:"col-sm"},J={class:"btn-group w-100",role:"group","aria-label":"Basic radio toggle button group"},A=Object(o["createVNode"])("label",{class:"btn btn-outline-primary",for:"btnradio1"},"貨到付款",-1),R=Object(o["createVNode"])("label",{class:"btn btn-outline-primary",for:"btnradio2"},"信用卡",-1),I=Object(o["createVNode"])("label",{class:"btn btn-outline-primary",for:"btnradio3"},"銀行匯款",-1),Q={class:"modal-footer container-fluid"},q=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," Close ",-1);function G(e,t,r,a,c,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",f,[Object(o["createVNode"])("div",p,[Object(o["createVNode"])("div",O,[m,Object(o["createVNode"])("div",h,[Object(o["createVNode"])("form",null,[Object(o["createVNode"])("div",j,[g,Object(o["createVNode"])("div",v,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",readonly:"",class:"form-control-plaintext",id:"orderDate","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.unix=e})},null,512),[[o["vModelText"],c.unix]])]),y,Object(o["createVNode"])("div",N,[Object(o["createVNode"])("select",{class:"form-select",id:"orderpaid",value:c.orderObj.is_paid?1:0,onChange:t[2]||(t[2]=function(e){return n.change(e)})},[V,w],40,["value"])])]),k,Object(o["createVNode"])("div",_,[S,Object(o["createVNode"])("div",x,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.orderObj.user.name=e})},null,512),[[o["vModelText"],c.orderObj.user.name,void 0,{trim:!0}]])]),D,Object(o["createVNode"])("div",P,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.orderObj.user.tel=e})},null,512),[[o["vModelText"],c.orderObj.user.tel,void 0,{number:!0}]])])]),Object(o["createVNode"])("div",$,[M,Object(o["createVNode"])("div",C,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.orderObj.user.email=e})},null,512),[[o["vModelText"],c.orderObj.user.email,void 0,{trim:!0}]])]),B,Object(o["createVNode"])("div",T,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.orderObj.user.address=e})},null,512),[[o["vModelText"],c.orderObj.user.address,void 0,{trim:!0}]])])]),Object(o["createVNode"])("div",L,[E,Object(o["createVNode"])("div",F,[Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.orderObj.message=e})},null,512),[[o["vModelText"],c.orderObj.message,void 0,{trim:!0}]])])]),Object(o["createVNode"])("div",U,[W,Object(o["createVNode"])("div",z,[Object(o["createVNode"])("div",J,[Object(o["createVNode"])("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:1==c.pay_methods,onClick:t[8]||(t[8]=function(e){return n.payment(e)}),value:"1"},null,8,["checked"]),A,Object(o["createVNode"])("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off",checked:2==c.pay_methods,onClick:t[9]||(t[9]=function(e){return n.payment(e)}),value:"2"},null,8,["checked"]),R,Object(o["createVNode"])("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",checked:3==c.pay_methods,autocomplete:"off",onClick:t[10]||(t[10]=function(e){return n.payment(e)}),value:"3"},null,8,["checked"]),I])])])])]),Object(o["createVNode"])("div",Q,[Object(o["createVNode"])("button",{onClick:t[11]||(t[11]=function(){return n.deleteOne&&n.deleteOne.apply(n,arguments)}),class:"btn btn-danger mr-auto"}," 刪除訂單 "),q,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=function(){return n.edit&&n.edit.apply(n,arguments)})},"Save changes")])])])],512)}var H=r("7c2b"),K=r.n(H),X={data:function(){return{modal:"",orderObj:{is_paid:"",user:{},payment_method:""},unix:"",pay_methods:""}},methods:{edit:function(){var e=this,t=this.orderObj.id;this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/order/").concat(t),{data:this.orderObj}).then((function(t){e.$swal(t.data.message),e.$emit("reget"),e.modal.hide()}))},deleteAll:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/orders/all")).then((function(t){e.$swal(t.data.message),e.$emit("reget"),e.modal.hide()}))},deleteOne:function(){var e=this,t=this.orderObj.id;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/order/").concat(t)).then((function(t){e.$swal(t.data.message),e.$emit("reget"),e.modal.hide()}))},change:function(e){var t=e.target.value;this.orderObj.is_paid="1"===t,console.log(this.orderObj.is_paid)},payment:function(e){var t=e.target.value;this.orderObj.payment_method="1"===t?"cash_on_delivery":"2"===t?"credit_card":"bank_transfer"}},created:function(){},mounted:function(){this.modal=new K.a(this.$refs.modal)}};X.render=G;var Y=X,Z={data:function(){return{orderList:[],pagination:{}}},methods:{getOrderList:function(e){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/orders?page=").concat(e)).then((function(e){e.data.success&&(t.orderList=e.data.orders,t.pagination=e.data.pagination)}))},openModal:function(e){this.$refs.editModal.modal.show(),this.$refs.editModal.orderObj=Object(u["a"])({},e),this.$refs.editModal.unix="".concat(new Date(1e3*e.create_at).toLocaleDateString("zh-TW"),"  ").concat(new Date(e.create_at).toLocaleTimeString("zh-TW")),"bank_transfer"===this.$refs.editModal.orderObj.payment_method?this.$refs.editModal.pay_methods="3":"cash_on_delivery"===this.$refs.editModal.orderObj.payment_method?this.$refs.editModal.pay_methods="1":"credit_card"===this.$refs.editModal.orderObj.payment_method&&(this.$refs.editModal.pay_methods="2"),console.log(e)}},components:{Pagination:b["a"],EditOrder:Y},created:function(){this.getOrderList()}};Z.render=s;t["default"]=Z},"4de4":function(e,t,r){"use strict";var o=r("23e7"),a=r("b727").filter,c=r("1dde"),n=c("filter");o({target:"Array",proto:!0,forced:!n},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"746f":function(e,t,r){var o=r("428f"),a=r("5135"),c=r("e538"),n=r("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});a(t,e)||n(t,e,{value:c.f(e)})}},a4d3:function(e,t,r){"use strict";var o=r("23e7"),a=r("da84"),c=r("d066"),n=r("c430"),i=r("83ab"),l=r("4930"),d=r("fdbf"),s=r("d039"),u=r("5135"),b=r("e8b5"),f=r("861d"),p=r("825a"),O=r("7b0b"),m=r("fc6a"),h=r("c04e"),j=r("5c6c"),g=r("7c73"),v=r("df75"),y=r("241c"),N=r("057f"),V=r("7418"),w=r("06cf"),k=r("9bf2"),_=r("d1e7"),S=r("9112"),x=r("6eeb"),D=r("5692"),P=r("f772"),$=r("d012"),M=r("90e3"),C=r("b622"),B=r("e538"),T=r("746f"),L=r("d44e"),E=r("69f3"),F=r("b727").forEach,U=P("hidden"),W="Symbol",z="prototype",J=C("toPrimitive"),A=E.set,R=E.getterFor(W),I=Object[z],Q=a.Symbol,q=c("JSON","stringify"),G=w.f,H=k.f,K=N.f,X=_.f,Y=D("symbols"),Z=D("op-symbols"),ee=D("string-to-symbol-registry"),te=D("symbol-to-string-registry"),re=D("wks"),oe=a.QObject,ae=!oe||!oe[z]||!oe[z].findChild,ce=i&&s((function(){return 7!=g(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,r){var o=G(I,t);o&&delete I[t],H(e,t,r),o&&e!==I&&H(I,t,o)}:H,ne=function(e,t){var r=Y[e]=g(Q[z]);return A(r,{type:W,tag:e,description:t}),i||(r.description=t),r},ie=d?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Q},le=function(e,t,r){e===I&&le(Z,t,r),p(e);var o=h(t,!0);return p(r),u(Y,o)?(r.enumerable?(u(e,U)&&e[U][o]&&(e[U][o]=!1),r=g(r,{enumerable:j(0,!1)})):(u(e,U)||H(e,U,j(1,{})),e[U][o]=!0),ce(e,o,r)):H(e,o,r)},de=function(e,t){p(e);var r=m(t),o=v(r).concat(pe(r));return F(o,(function(t){i&&!ue.call(r,t)||le(e,t,r[t])})),e},se=function(e,t){return void 0===t?g(e):de(g(e),t)},ue=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===I&&u(Y,t)&&!u(Z,t))&&(!(r||!u(this,t)||!u(Y,t)||u(this,U)&&this[U][t])||r)},be=function(e,t){var r=m(e),o=h(t,!0);if(r!==I||!u(Y,o)||u(Z,o)){var a=G(r,o);return!a||!u(Y,o)||u(r,U)&&r[U][o]||(a.enumerable=!0),a}},fe=function(e){var t=K(m(e)),r=[];return F(t,(function(e){u(Y,e)||u($,e)||r.push(e)})),r},pe=function(e){var t=e===I,r=K(t?Z:m(e)),o=[];return F(r,(function(e){!u(Y,e)||t&&!u(I,e)||o.push(Y[e])})),o};if(l||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=M(e),r=function(e){this===I&&r.call(Z,e),u(this,U)&&u(this[U],t)&&(this[U][t]=!1),ce(this,t,j(1,e))};return i&&ae&&ce(I,t,{configurable:!0,set:r}),ne(t,e)},x(Q[z],"toString",(function(){return R(this).tag})),x(Q,"withoutSetter",(function(e){return ne(M(e),e)})),_.f=ue,k.f=le,w.f=be,y.f=N.f=fe,V.f=pe,B.f=function(e){return ne(C(e),e)},i&&(H(Q[z],"description",{configurable:!0,get:function(){return R(this).description}}),n||x(I,"propertyIsEnumerable",ue,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Q}),F(v(re),(function(e){T(e)})),o({target:W,stat:!0,forced:!l},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var r=Q(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!i},{create:se,defineProperty:le,defineProperties:de,getOwnPropertyDescriptor:be}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),o({target:"Object",stat:!0,forced:s((function(){V.f(1)}))},{getOwnPropertySymbols:function(e){return V.f(O(e))}}),q){var Oe=!l||s((function(){var e=Q();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}));o({target:"JSON",stat:!0,forced:Oe},{stringify:function(e,t,r){var o,a=[e],c=1;while(arguments.length>c)a.push(arguments[c++]);if(o=t,(f(t)||void 0!==e)&&!ie(e))return b(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!ie(t))return t}),a[1]=t,q.apply(null,a)}})}Q[z][J]||S(Q[z],J,Q[z].valueOf),L(Q,W),$[U]=!0},b0c0:function(e,t,r){var o=r("83ab"),a=r("9bf2").f,c=Function.prototype,n=c.toString,i=/^\s*function ([^ (]*)/,l="name";o&&!(l in c)&&a(c,l,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})},dbb4:function(e,t,r){var o=r("23e7"),a=r("83ab"),c=r("56ef"),n=r("fc6a"),i=r("06cf"),l=r("8418");o({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,o=n(e),a=i.f,d=c(o),s={},u=0;while(d.length>u)r=a(o,t=d[u++]),void 0!==r&&l(s,t,r);return s}})},e439:function(e,t,r){var o=r("23e7"),a=r("d039"),c=r("fc6a"),n=r("06cf").f,i=r("83ab"),l=a((function(){n(1)})),d=!i||l;o({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(e,t){return n(c(e),t)}})},e538:function(e,t,r){var o=r("b622");t.f=o}}]);
//# sourceMappingURL=chunk-3620b741.35b62709.js.map