"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[455],{7455:function(t,s,c){c.r(s),c.d(s,{default:function(){return m}});var r=c(3396),a=c(7139);const o=(0,r._)("h2",null,"產品列表",-1),l={class:"container"},e={class:"row row-cols-1 row-cols-lg-3 g-3"},i={class:"card h-100"},d=["src"],u={class:"card-body"},n={class:"card-title"},p={class:"card-text"},h=(0,r.Uk)("選我吧");function g(t,s,c,g,w,v){const k=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r._)("div",l,[(0,r._)("div",e,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.products,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"col",key:t.id},[(0,r._)("div",i,[(0,r._)("img",{src:t.imageUrl,class:"card-img-top img-fluid",alt:"..."},null,8,d),(0,r._)("div",u,[(0,r._)("h5",n,(0,a.zw)(t.title),1),(0,r._)("p",p,(0,a.zw)(t.description),1),(0,r.Wm)(k,{to:`/product/${t.id}`,class:"btn btn-primary"},{default:(0,r.w5)((()=>[h])),_:2},1032,["to"])])])])))),128))])])],64)}var w={data(){return{products:[]}},methods:{getProducts(){this.$http("https://vue3-course-api.hexschool.io/v2/api/cadiis/products/all").then((t=>{this.products=t.data.products})).catch((t=>{console.log(t.data.message)}))}},mounted(){this.getProducts()}},v=c(89);const k=(0,v.Z)(w,[["render",g]]);var m=k}}]);
//# sourceMappingURL=455.95df2d2b.js.map