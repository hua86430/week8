(function(e){function n(n){for(var c,r,a=n[0],i=n[1],d=n[2],l=0,h=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(n);while(h.length)h.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==o[a]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1f093cac":"9c1d1319","chunk-28645ca0":"32803b95","chunk-2be128ec":"4523e1d7","chunk-3620b741":"712247db","chunk-3b004169":"d71f3f8f","chunk-e1d3e41c":"c6a2d1a1","chunk-3137a6a3":"a5d10d0b","chunk-4bec8d34":"2425c165","chunk-60483722":"619f2f2b","chunk-cf50293c":"ca1a85c3"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1f093cac":1,"chunk-28645ca0":1,"chunk-3137a6a3":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-1f093cac":"68205a0f","chunk-28645ca0":"99d0c47a","chunk-2be128ec":"31d6cfe0","chunk-3620b741":"31d6cfe0","chunk-3b004169":"31d6cfe0","chunk-e1d3e41c":"31d6cfe0","chunk-3137a6a3":"8582d385","chunk-4bec8d34":"31d6cfe0","chunk-60483722":"31d6cfe0","chunk-cf50293c":"31d6cfe0"}[e]+".css",o=i.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===o))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){d=h[a],l=d.getAttribute("data-href");if(l===c||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var h=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}o[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/week8/dist/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=t("bc3a"),o=t.n(r),u=t("2106"),a=t.n(u),i=t("f9d5"),d=t.n(i),l=t("f5af"),h=t.n(l),f=(t("e829"),t("77ed"),t("4989"),t("9062")),s=t.n(f),p=(t("e40d"),t("7bb1")),b=t("3aa8"),m=t("cbdf"),k=t("9457"),v=Object(c["createVNode"])("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"},null,-1);function g(e,n){var t=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[v,Object(c["createVNode"])(t)],64)}t("93b2");const y={};y.render=g;var O=y,j=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),w=[{path:"/",component:function(){return t.e("chunk-3137a6a3").then(t.bind(null,"d504"))},children:[{path:"",component:function(){return t.e("chunk-1f093cac").then(t.bind(null,"bb51"))}},{path:"products",component:function(){return t.e("chunk-28645ca0").then(t.bind(null,"e6dc"))}},{path:"carts",component:function(){return Promise.all([t.e("chunk-2be128ec"),t.e("chunk-e1d3e41c")]).then(t.bind(null,"395d"))}},{path:"product/:id",component:function(){return t.e("chunk-cf50293c").then(t.bind(null,"d2f1"))}}]},{path:"/login",component:function(){return t.e("chunk-4bec8d34").then(t.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return t.e("chunk-60483722").then(t.bind(null,"7277"))},children:[{path:"",component:function(){return Promise.all([t.e("chunk-2be128ec"),t.e("chunk-3b004169")]).then(t.bind(null,"d536"))}},{path:"ordermanage",component:function(){return Promise.all([t.e("chunk-2be128ec"),t.e("chunk-3620b741")]).then(t.bind(null,"2c04"))}}]}],P=Object(j["a"])({history:Object(j["b"])(),routes:w}),E=P;Object(p["d"])({generateMessage:Object(m["a"])({zh_TW:k}),validateOnInput:!0}),Object(m["b"])("zh_TW"),Object.keys(b["a"]).forEach((function(e){Object(p["e"])(e,b["a"][e])}));var _=Object(c["createApp"])(O);_.use(E),_.component("Loading",s.a),_.use(d.a),_.use(a.a,o.a),_.component("Form",p["c"]),_.component("Field",p["b"]),_.component("ErrorMessage",p["a"]),_.use(h.a),h.a.init(),_.mount("#app")},"8b3e":function(e,n,t){},"93b2":function(e,n,t){"use strict";t("8b3e")}});
//# sourceMappingURL=app.c7257908.js.map