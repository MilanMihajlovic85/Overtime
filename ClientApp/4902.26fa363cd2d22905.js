"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4902],{4902:(M,p,o)=>{o.r(p),o.d(p,{HomePageModule:()=>b});var e=o(6895),t=o(4006),s=o(603),n=o(4650),a=o(9586),c=o(3852),u=o(529),d=o(9299),v=o(245),l=o(7610),_=o(9427),r=o(7785),f=o(9383);function O(i,m){1&i&&(n.TgZ(0,"ion-buttons",7),n._UZ(1,"app-account")(2,"app-logout"),n.qZA())}function P(i,m){if(1&i&&(n.TgZ(0,"ion-badge",11),n._uU(1),n.qZA()),2&i){const g=n.oxw().ngIf;n.xp6(1),n.Oqu(g.requests)}}function C(i,m){if(1&i&&(n.TgZ(0,"ion-badge",11),n._uU(1),n.qZA()),2&i){const g=n.oxw().ngIf;n.xp6(1),n.Oqu(g.approvals)}}const x=function(){return["/","new-request"]},E=function(){return["/","my-requests","pending"]},T=function(){return["/","approvals"]};function Z(i,m){if(1&i&&(n.TgZ(0,"div",8)(1,"ion-button",9),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"ion-button",9),n._uU(5),n.ALo(6,"translate"),n.YNc(7,P,2,1,"ion-badge",10),n.qZA(),n.TgZ(8,"ion-button",9),n._uU(9),n.ALo(10,"translate"),n.YNc(11,C,2,1,"ion-badge",10),n.qZA()()),2&i){const g=m.ngIf;n.xp6(1),n.Q6J("routerLink",n.DdM(14,x)),n.xp6(1),n.hij(" ",n.lcZ(3,8,"btn.newRequest")," "),n.xp6(2),n.Q6J("routerLink",n.DdM(15,E)),n.xp6(1),n.hij(" ",n.lcZ(6,10,"btn.myRequests")," "),n.xp6(2),n.Q6J("ngIf",g.requests>0),n.xp6(1),n.Q6J("routerLink",n.DdM(16,T)),n.xp6(1),n.hij(" ",n.lcZ(10,12,"btn.myApprovals")," "),n.xp6(2),n.Q6J("ngIf",g.approvals>0)}}let A=(()=>{class i{constructor(g,h,U){this.screenSizeSrv=g,this.signalrSrv=h,this.http=U,this.isDesktop$=this.screenSizeSrv.isDesktopView(),this.counts$=this.signalrSrv.reqAppCount}ngOnInit(){this.http.get("http://trening.vdsystem.rs:92/api/SginalRconnections").subscribe(g=>{})}}return i.\u0275fac=function(g){return new(g||i)(n.Y36(a.j),n.Y36(c.Y),n.Y36(u.eN))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-home"]],decls:17,vars:12,consts:[[3,"translucent"],["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding",3,"fullscreen"],[3,"fixed"],["size","12","size-lg","6","push-lg","3"],["class","requests-buttons",4,"ngIf"],["slot","end"],[1,"requests-buttons"],["fill","outline","color","medium","routerDirection","root",1,"dashboard-buttons",3,"routerLink"],["color","secondary",4,"ngIf"],["color","secondary"]],template:function(g,h){1&g&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5),n.ALo(6,"translate"),n.qZA(),n.YNc(7,O,3,0,"ion-buttons",2),n.ALo(8,"async"),n.qZA()(),n._UZ(9,"app-loading"),n.TgZ(10,"ion-content",3)(11,"ion-grid",4),n._UZ(12,"app-messages"),n.TgZ(13,"ion-row")(14,"ion-col",5),n.YNc(15,Z,12,17,"div",6),n.ALo(16,"async"),n.qZA()()()()),2&g&&(n.Q6J("translucent",!0),n.xp6(5),n.Oqu(n.lcZ(6,6,"pageTitles.dashboard")),n.xp6(2),n.Q6J("ngIf",n.lcZ(8,8,h.isDesktop$)),n.xp6(3),n.Q6J("fullscreen",!0),n.xp6(1),n.Q6J("fixed",!0),n.xp6(4),n.Q6J("ngIf",n.lcZ(16,10,h.counts$)))},dependencies:[e.O5,d.rH,s.yp,s.YG,s.Sm,s.wI,s.W2,s.jY,s.Gu,s.fG,s.Nd,s.wd,s.sr,s.YI,v.N,l.d,_.P,r.t,e.Ov,f.X$],styles:["ion-badge[_ngcontent-%COMP%]{position:absolute;font-size:8pt;right:-20px;top:-7px}.requests-buttons[_ngcontent-%COMP%]{text-align:center;margin-top:5rem}ion-button[_ngcontent-%COMP%]{margin:5px auto 1rem;width:65%;height:40px;position:relative}ion-button.dashboard-buttons[_ngcontent-%COMP%]::part(native){overflow:visible;--border-width: 1px}"]}),i})();var I=o(1227),L=o(591),D=o(3627),y=o(714);let b=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[e.ez,d.Bz.forChild([{path:"",component:A}]),t.u5,s.Pc,L.I,I.$,y.Y,f.aw,D.I]}),i})()},245:(M,p,o)=>{o.d(p,{N:()=>a});var e=o(4650),t=o(8529),s=o(6895);function n(c,u){1&c&&(e.TgZ(0,"div",1),e._UZ(1,"div")(2,"div")(3,"div"),e.qZA())}let a=(()=>{class c{constructor(d){this.loadingSrv=d}ngOnInit(){}}return c.\u0275fac=function(d){return new(d||c)(e.Y36(t.b))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-loading"]],decls:2,vars:3,consts:[["class","lds-facebook",4,"ngIf"],[1,"lds-facebook"]],template:function(d,v){1&d&&(e.YNc(0,n,4,0,"div",0),e.ALo(1,"async")),2&d&&e.Q6J("ngIf",e.lcZ(1,1,v.loadingSrv.loading$))},dependencies:[s.O5,s.Ov],styles:[".lds-facebook[_ngcontent-%COMP%]{width:75px;position:relative;margin:0 auto;top:25vh;z-index:1000}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:8px;width:10px;background:var(--ion-color-tertiary);animation:_ngcontent-%COMP%_lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:14px;animation-delay:-.06s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:32px;animation-delay:-.03s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:50px;animation-delay:0}@keyframes _ngcontent-%COMP%_lds-facebook{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}"]}),c})()},7785:(M,p,o)=>{o.d(p,{t:()=>n});var e=o(4650),t=o(3746),s=o(603);let n=(()=>{class a{constructor(u){this.authSrv=u}ngOnInit(){}onLogout(){this.authSrv.logout()}}return a.\u0275fac=function(u){return new(u||a)(e.Y36(t.e))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-logout"]],decls:2,vars:0,consts:[[3,"click"],["slot","icon-only","name","log-out-outline"]],template:function(u,d){1&u&&(e.TgZ(0,"ion-button",0),e.NdJ("click",function(){return d.onLogout()}),e._UZ(1,"ion-icon",1),e.qZA())},dependencies:[s.YG,s.gu]}),a})()},3627:(M,p,o)=>{o.d(p,{I:()=>n});var e=o(6895),t=o(603),s=o(4650);let n=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[e.ez,t.Pc]}),a})()},7610:(M,p,o)=>{o.d(p,{d:()=>v});var e=o(8505),t=o(4650),s=o(6832),n=o(6895),a=o(603);function c(l,_){if(1&l&&(t.TgZ(0,"ion-item",6)(1,"ion-label"),t._uU(2),t.qZA()()),2&l){const r=_.$implicit;t.xp6(2),t.Oqu(r)}}function u(l,_){if(1&l){const r=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,c,3,1,"ion-item",4),t.qZA(),t.TgZ(3,"ion-icon",5),t.NdJ("click",function(){t.CHM(r);const O=t.oxw(2);return t.KtG(O.onClose())}),t.qZA()()}if(2&l){const r=t.oxw().ngIf;t.xp6(2),t.Q6J("ngForOf",r)}}function d(l,_){if(1&l&&(t.ynx(0),t.YNc(1,u,4,1,"div",1),t.BQk()),2&l){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.showMessages)}}let v=(()=>{class l{constructor(r){this.messagesSrv=r,this.showMessages=!1,this.errors$=this.messagesSrv.errors$.pipe((0,e.b)(f=>this.showMessages=f.length>0))}ngOnInit(){}onClose(){this.showMessages=!1,this.messagesSrv.deleteErrors()}}return l.\u0275fac=function(r){return new(r||l)(t.Y36(s.K))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-messages"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","message-container",4,"ngIf"],[1,"message-container"],[1,"message"],["lines","none",4,"ngFor","ngForOf"],["name","close-outline",1,"close",3,"click"],["lines","none"]],template:function(r,f){1&r&&(t.YNc(0,d,2,1,"ng-container",0),t.ALo(1,"async")),2&r&&t.Q6J("ngIf",t.lcZ(1,1,f.errors$))},dependencies:[n.sg,n.O5,a.gu,a.Ie,a.Q$,n.Ov],styles:[".message-container[_ngcontent-%COMP%]{display:flex;color:#a94442;background-color:#f2dede;border:1px solid #ebccd1;padding:10px;position:relative;margin-bottom:1.5rem}.message[_ngcontent-%COMP%]{width:90%}ion-label[_ngcontent-%COMP%]{white-space:normal!important}ion-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;cursor:pointer}ion-item[_ngcontent-%COMP%]::part(native){background-color:#f2dede;color:#a94442}"]}),l})()}}]);