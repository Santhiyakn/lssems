import{a as b,b as O}from"./chunk-EJDH7DDO.js";import{a as M}from"./chunk-62Y5HVUV.js";import"./chunk-TWOJGJXD.js";import{D as f,F as u,H as i,I as r,J as v,O as d,P as C,ca as x,ea as h,l as n,o as l,p as s,pa as m,y as p,z as g}from"./chunk-XDOW7T3A.js";function P(t,e){if(t&1&&(i(0,"div",3)(1,"td"),d(2),r()()),t&2){let o=e.$implicit;p(2),C(o.name)}}var c=class t{constructor(e){this.apiService=e}services=[];ngOnInit(){try{this.getServices()}catch(e){console.log(e)}}getServices(){try{this.apiService.getServices().subscribe(e=>{this.services=e.data},e=>{console.log(e)})}catch(e){console.log(e)}}static \u0275fac=function(o){return new(o||t)(g(M))};static \u0275cmp=l({type:t,selectors:[["app-user-categories-list"]],decls:10,vars:1,consts:[[1,"user-Categories"],[1,"user-categories-page"],["class","service",4,"ngFor","ngForOf"],[1,"service"]],template:function(o,y){o&1&&(i(0,"div",0)(1,"div"),v(2,"app-userside-nav"),r(),i(3,"div",1)(4,"table")(5,"tr")(6,"th"),d(7,"Category"),r()(),i(8,"tr"),f(9,P,3,1,"div",2),r()()()()),o&2&&(p(9),u("ngForOf",y.services))},dependencies:[x,b],styles:[".admin-btn[_ngcontent-%COMP%]{background-color:#fff;color:#0078d4;border:none;padding:8px 16px;font-size:14px;font-weight:700;border-radius:5px;cursor:pointer;transition:background-color .3s ease,color .3s ease}.admin-btn[_ngcontent-%COMP%]:hover{background-color:#005a9e;color:#fff}.user-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:200px;background-color:#0078d4;height:100vh;position:fixed;top:50px;left:0;padding-top:20px;box-shadow:2px 0 5px #0000001a}.user-categories-page[_ngcontent-%COMP%]{margin-left:200px;padding-top:70px;padding-left:20px}table[_ngcontent-%COMP%]{width:50%;border-collapse:collapse;font-size:16px;text-align:center;margin:20px 0 20px 20%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px;border:1px solid #f7f1f1}.service[_ngcontent-%COMP%]{margin-left:38%}td[_ngcontent-%COMP%]{margin-left:50%}th[_ngcontent-%COMP%]{background-color:#0078d4;color:#fff}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}"]})};var N=[{path:"",component:c}],a=class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=s({type:t});static \u0275inj=n({imports:[m.forChild(N),m]})};var _=class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=s({type:t});static \u0275inj=n({imports:[h,a,O]})};export{_ as UserCategoriesListModule};
