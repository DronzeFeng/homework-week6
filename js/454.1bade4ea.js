"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[454],{8454:function(a,t,e){e.r(t),e.d(t,{default:function(){return f}});var n=e(3396),s=e(9242);const o={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r={class:"container-fluid"},l=(0,n._)("div",{class:"navbar-brand"},"後台",-1),c=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},h={class:"nav-item"},p=(0,n.Uk)("產品列表"),d={class:"nav-item"},v=(0,n.Uk)("優惠券"),k={class:"nav-item"};function g(a,t,e,g,b,m){const _=(0,n.up)("router-link"),f=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",o,[(0,n._)("div",r,[l,c,(0,n._)("div",i,[(0,n._)("ul",u,[(0,n._)("li",h,[(0,n.Wm)(_,{class:"nav-link",to:"/admin/products"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n._)("li",d,[(0,n.Wm)(_,{class:"nav-link",to:"/admin/coupon"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n._)("li",k,[(0,n._)("a",{href:"#",class:"nav-link",onClick:t[0]||(t[0]=(0,s.iM)(((...a)=>m.signOut&&m.signOut(...a)),["prevent"]))},"登出")])])])])]),b.checkStatus?((0,n.wg)(),(0,n.j4)(f,{key:0})):(0,n.kq)("",!0)],64)}var b={data(){return{checkStatus:!1}},methods:{checkLogin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexschoolToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(a){const t="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.defaults.headers.common.Authorization=a,this.$http.post(t,{api_token:a}).then((()=>{this.checkStatus=!0})).catch((a=>{alert(a.data.message),this.$router.push("/login")}))}else alert("您尚未登入，請登入！"),this.$router.push("/login")},signOut(){document.cookie="hexschoolToken=;expires=;",alert("您已成功登出"),this.$router.push("/login")}},mounted(){this.checkLogin()}},m=e(89);const _=(0,m.Z)(b,[["render",g]]);var f=_}}]);
//# sourceMappingURL=454.1bade4ea.js.map