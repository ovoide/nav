import{b as E,c as R}from"./chunk-7ZPW5Z45.js";import{c as v,g as f,n as x,o as y,t as g}from"./chunk-QWW3S55J.js";import{e as I,g as p}from"./chunk-3LNK4CKH.js";import{Wd as u,Xd as m,Yd as h,de as i,ha as d,ie as r,ma as a,ne as o}from"./chunk-L4CTJA4O.js";var b=class s{constructor(e,t){this.router=e;this.activatedRoute=t;let c=()=>{let{id:w,q:n}=f(),{oneIndex:N,twoIndex:A,threeIndex:_}=g(w);this.oneIndex=N,this.twoIndex=A,this.selectedThreeIndex=_,this.searchKeyword=n,n?this.currentList=v(r,n):this.currentList=x()},l=()=>{this.activatedRoute.queryParams.subscribe(()=>{this.sliceMax=0,c(),setTimeout(()=>{this.sliceMax=Number.MAX_SAFE_INTEGER},100)})};window.__FINISHED__?l():o.on("WEB_FINISH",()=>{l()}),o.on("WEB_REFRESH",()=>{c()})}isLogin=u;settings=i;permissions=m(i);title=i.title.trim().split(/\s/)[0];websiteList=r;currentList=[];twoIndex=0;oneIndex=0;sliceMax=0;selectedThreeIndex=0;searchKeyword="";overIndex=Number.MAX_SAFE_INTEGER;handleClickClass(e){this.router.navigate([this.router.url.split("?")[0]],{queryParams:{id:e,_:Date.now()}}),o.emit("SEARCH_FOCUS")}onCollapseAll=e=>{e?.stopPropagation(),R(r)};trackByItem(e,t){return t.title}trackByItemWeb(e,t){return t.id}get collapsed(){try{return!!r[this.oneIndex].nav[this.twoIndex].collapsed}catch{return!1}}onCollapse=e=>{e.collapsed=!e.collapsed,h||E(this.websiteList)};getOverIndex(e){queueMicrotask(()=>{let t=y(e);this.overIndex!==t&&(this.overIndex=t)})}setOverIndex(){this.overIndex=Number.MAX_SAFE_INTEGER}static \u0275fac=function(t){return new(t||s)(a(p),a(I))};static \u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"})};export{b as a};
