import{a as O,b as S}from"./chunk-OGUYSRXO.js";import{a as M}from"./chunk-62Y5HVUV.js";import"./chunk-TWOJGJXD.js";import{D as f,F as u,H as o,I as r,J as v,O as m,P as C,ca as x,ea as h,l as n,o as l,p as s,pa as d,y as p,z as g}from"./chunk-XDOW7T3A.js";function P(t,e){if(t&1&&(o(0,"div",3)(1,"td"),m(2),r()()),t&2){let i=e.$implicit;p(2),C(i.name)}}var c=class t{constructor(e){this.apiService=e}services=[];ngOnInit(){try{this.getServices()}catch(e){console.log(e)}}getServices(){try{this.apiService.getServices().subscribe(e=>{this.services=e.data},e=>{console.log(e)})}catch(e){console.log(e)}}static \u0275fac=function(i){return new(i||t)(g(M))};static \u0275cmp=l({type:t,selectors:[["app-user-categories-list"]],decls:10,vars:1,consts:[[1,"user-Categories"],[1,"user-categories-page"],["class","service",4,"ngFor","ngForOf"],[1,"service"]],template:function(i,_){i&1&&(o(0,"div",0)(1,"div"),v(2,"app-userside-nav"),r(),o(3,"div",1)(4,"table")(5,"tr")(6,"th"),m(7,"Category"),r()(),o(8,"tr"),f(9,P,3,1,"div",2),r()()()()),i&2&&(p(9),u("ngForOf",_.services))},dependencies:[x,O],styles:[".user-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:200px;background-color:#0078d4;height:100vh;position:fixed;top:50px;left:0;padding-top:20px;box-shadow:2px 0 5px #0000001a}.user-categories-page[_ngcontent-%COMP%]{margin-left:20%;padding-top:70px}table[_ngcontent-%COMP%]{width:300px;border-collapse:collapse;font-size:16px;text-align:center;margin:20px 0 20px 25%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;border:1px solid #f7f1f1;text-align:center}.service[_ngcontent-%COMP%]{text-align:center;margin-left:23%}th[_ngcontent-%COMP%]{background-color:#0078d4;color:#fff}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}"]})};var N=[{path:"",component:c}],a=class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=s({type:t});static \u0275inj=n({imports:[d.forChild(N),d]})};var b=class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=s({type:t});static \u0275inj=n({imports:[h,a,S]})};export{b as UserCategoriesListModule};
