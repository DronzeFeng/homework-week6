"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[704],{422:function(a,t,n){function e(a){return{all:a=a||new Map,on:function(t,n){var e=a.get(t);e?e.push(n):a.set(t,[n])},off:function(t,n){var e=a.get(t);e&&(n?e.splice(e.indexOf(n)>>>0,1):a.set(t,[]))},emit:function(t,n){var e=a.get(t);e&&e.slice().map((function(a){a(n)})),(e=a.get("*"))&&e.slice().map((function(a){a(t,n)}))}}}n.d(t,{Z:function(){return s}});const r=e();var s=r},7704:function(a,t,n){n.r(t),n.d(t,{default:function(){return S}});var e=n(3396);function r(a,t,n,r,s,o){const l=(0,e.up)("FrontNavbar"),c=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(l),(0,e.Wm)(c)],64)}var s=n(7139);const o={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},c=(0,e._)("div",{class:"navbar-brand"},"前台",-1),i=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},v={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},p=(0,e.Uk)("首頁"),b={class:"nav-item"},g=(0,e.Uk)("產品列表"),f={class:"nav-item"},m=(0,e.Uk)("購物車"),h={type:"button",class:"btn btn-primary"},k=(0,e.Uk)(" 結帳 "),_={class:"badge rounded-pill bg-danger"};function w(a,t,n,r,w,C){const D=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",o,[(0,e._)("div",l,[c,i,(0,e._)("div",u,[(0,e._)("ul",v,[(0,e._)("li",d,[(0,e.Wm)(D,{class:"nav-link",to:"/"},{default:(0,e.w5)((()=>[p])),_:1})]),(0,e._)("li",b,[(0,e.Wm)(D,{class:"nav-link",to:"products"},{default:(0,e.w5)((()=>[g])),_:1})]),(0,e._)("li",f,[(0,e.Wm)(D,{class:"nav-link",to:"cart"},{default:(0,e.w5)((()=>[m])),_:1})])])]),(0,e._)("button",h,[k,(0,e._)("span",_,(0,s.zw)(w.cartData.carts.length),1)])])])}var C=n(422),D={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/cadiis/cart").then((a=>{this.cartData=a.data.data}))}},mounted(){this.getCart(),C.Z.on("get-cart",(()=>{this.getCart()}))}},W=n(89);const x=(0,W.Z)(D,[["render",w]]);var U=x,Z={components:{FrontNavbar:U}};const y=(0,W.Z)(Z,[["render",r]]);var S=y}}]);
//# sourceMappingURL=704.4466d6cf.js.map