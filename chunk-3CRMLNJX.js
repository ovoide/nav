import{b as ie}from"./chunk-7NUWQWGJ.js";import{c as oe}from"./chunk-AYCWW53F.js";import{b as G}from"./chunk-7G574DSW.js";import{a as K,b as Q,c as U,d as Y,e as Z,f as ee,g as te}from"./chunk-U6VT2GUG.js";import{b as O}from"./chunk-G5CETXB5.js";import{a as L}from"./chunk-5JZXSYDO.js";import{c as H,l as W}from"./chunk-6AFFTMH3.js";import{d as J,f as q}from"./chunk-U7MKMHCA.js";import{k as R,m as X}from"./chunk-TUBD32DO.js";import"./chunk-CLULJUSU.js";import"./chunk-3LNK4CKH.js";import{a as T,f as V,i as k}from"./chunk-KT3GW27R.js";import"./chunk-RJ6LDFR6.js";import"./chunk-XLXQECO3.js";import{Cb as x,Eb as D,Fb as _,Gb as A,Kb as j,hb as h,ib as y,kb as b,lb as F,pb as M,sb as I,tb as w,wb as E,zb as P}from"./chunk-QGSXAI7I.js";import{Jb as t,Ne as $,Oe as B,Xb as i,Yb as o,Zb as s,a as u,b as z,ec as N,f as v,lb as e,le as d,qb as l,sc as m,sd as C,tc as p,uc as S,xb as g}from"./chunk-L4CTJA4O.js";var f=class c{constructor(a,r,n){this.fb=a;this.notification=r;this.message=n;this.validateForm=this.fb.group({password:[""],address:[""],XFAPIPassword:[""],mailConfig:[""],hashMode:[!1]})}$t=d;textareaSize={minRows:5,maxRows:20};validateForm;submitting=!1;ngOnInit(){this.getConfigInfo()}getConfigInfo(){this.submitting=!0,$().then(a=>{let{data:r}=a;this.validateForm.get("password").setValue(r.password||""),this.validateForm.get("address").setValue(r.address||""),this.validateForm.get("mailConfig").setValue(JSON.stringify(r.mailConfig,null,2)||""),this.validateForm.get("XFAPIPassword").setValue(r.XFAPIPassword||""),this.validateForm.get("hashMode").setValue(r.hashMode||!1)}).finally(()=>{this.submitting=!1})}handleSubmit(){return v(this,null,function*(){if(!this.submitting)try{this.submitting=!0;let a=z(u({},this.validateForm.value),{mailConfig:JSON.parse(this.validateForm.get("mailConfig")?.value||"{}")});yield B(a),this.message.success(d("_saveSuccess")),setTimeout(()=>{location.reload()},2e3)}catch(a){this.notification.error("Error",a.message)}finally{this.submitting=!1}})}static \u0275fac=function(r){return new(r||c)(l(D),l(L),l(j))};static \u0275cmp=g({type:c,selectors:[["system-config"]],decls:28,vars:18,consts:[["nz-form","",3,"formGroup"],["nzRequired","",3,"nzSpan"],[3,"nzSpan"],["nz-input","","formControlName","address"],["nz-input","","formControlName","password"],[3,"nzSpan","nzNoColon"],["nz-checkbox","","formControlName","hashMode"],["nz-input","","formControlName","XFAPIPassword"],["nz-input","","formControlName","mailConfig",3,"nzAutosize"],["nz-button","","nzType","primary",3,"click","nzLoading"]],template:function(r,n){r&1&&(i(0,"form",0)(1,"nz-form-item")(2,"nz-form-label",1),m(3),o(),i(4,"nz-form-control",2),s(5,"input",3),o()(),i(6,"nz-form-item")(7,"nz-form-label",1),m(8),o(),i(9,"nz-form-control",2),s(10,"input",4),o()(),i(11,"nz-form-item")(12,"nz-form-label",5),m(13,"Hash Mode"),o(),i(14,"nz-form-control",2),s(15,"label",6),o()(),i(16,"nz-form-item")(17,"nz-form-label",2),m(18),o(),i(19,"nz-form-control",2),s(20,"input",7),o()(),i(21,"nz-form-item")(22,"nz-form-label",2),m(23,"Email"),o(),i(24,"nz-form-control",2),s(25,"textarea",8),o()(),i(26,"button",9),N("click",function(){return n.handleSubmit()}),m(27),o()()),r&2&&(t("formGroup",n.validateForm),e(2),t("nzSpan",4),e(),p(n.$t("_address")),e(),t("nzSpan",10),e(3),t("nzSpan",4),e(),p(n.$t("_password")),e(),t("nzSpan",10),e(3),t("nzSpan",4)("nzNoColon",!0),e(2),t("nzSpan",10),e(3),t("nzSpan",4),e(),p(n.$t("_apiPass")),e(),t("nzSpan",10),e(3),t("nzSpan",4),e(2),t("nzSpan",10),e(),t("nzAutosize",n.textareaSize),e(),t("nzLoading",n.submitting),e(),S(" ",n.$t("_save")," "))},dependencies:[_,E,M,I,w,A,P,x,C,R,G,oe,F,b,h,y,te,Q,K,Y,U,ee,Z,ie,k,V,T,O,W,H,q,J,X],encapsulation:2})};export{f as default};
