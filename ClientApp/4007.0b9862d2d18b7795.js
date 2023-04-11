"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4007],{4007:(O,_,o)=>{o.r(_),o.d(_,{AuthPageModule:()=>I});var l=o(6895),e=o(4006),a=o(603),u=o(262),m=o(2843),d=o(8529),h=o(6832),n=o(4650),M=o(3746),c=o(9299),p=o(9383),r=o(8373),v=o(245),C=o(7610);function T(i,f){1&i&&(n.O4$(),n.TgZ(0,"svg",13),n._UZ(1,"path",14),n.qZA())}function Z(i,f){if(1&i){const s=n.EpF();n.TgZ(0,"form",15,16),n.NdJ("ngSubmit",function(){n.CHM(s);const g=n.MAs(1),x=n.oxw();return n.KtG(x.onPreLoginFormSubmit(g))}),n.TgZ(2,"ion-item",17)(3,"ion-label",18),n._uU(4),n.ALo(5,"translate"),n.qZA(),n._UZ(6,"ion-input",19,20),n.qZA(),n.TgZ(8,"ion-button",21),n._uU(9),n.ALo(10,"translate"),n.qZA()()}if(2&i){const s=n.MAs(1);n.xp6(4),n.Oqu(n.lcZ(5,3,"labels.employeeId")),n.xp6(4),n.Q6J("disabled",!s.valid),n.xp6(1),n.Oqu(n.lcZ(10,5,"btn.sendEmployeeId"))}}function y(i,f){if(1&i){const s=n.EpF();n.ynx(0),n.TgZ(1,"form",15,22),n.NdJ("ngSubmit",function(){n.CHM(s);const g=n.MAs(2),x=n.oxw();return n.KtG(x.onSubmit(g))}),n.TgZ(3,"ion-item",17)(4,"ion-label",18),n._uU(5),n.ALo(6,"translate"),n.qZA(),n._UZ(7,"ion-input",23,24),n.qZA(),n.TgZ(9,"ion-button",21),n._uU(10),n.ALo(11,"translate"),n.qZA()(),n.TgZ(12,"ion-button",25),n.NdJ("click",function(){n.CHM(s);const g=n.oxw();return n.KtG(g.readyToLogin=!1)}),n._UZ(13,"ion-icon",26),n._uU(14),n.ALo(15,"translate"),n.qZA(),n.BQk()}if(2&i){const s=n.MAs(2);n.xp6(5),n.Oqu(n.lcZ(6,6,"labels.smsCode")),n.xp6(4),n.Q6J("disabled",!s.valid),n.xp6(1),n.Oqu(n.lcZ(11,8,"btn.login")),n.xp6(3),n.Q6J("ios","arrow-back-outline")("md","arrow-back-sharp"),n.xp6(1),n.hij(" ",n.lcZ(15,10,"btn.resendId")," ")}}let k=(()=>{class i{constructor(s,t,g,x,L,b,A){this.platform=s,this.loadingSrv=t,this.authService=g,this.messagesSrv=x,this.router=L,this.translate=b,this.i18n=A,this.checked=!0,this.readyToLogin=!1,A.language().subscribe(P=>{this.checked="en"===P,b.use(P),this.languageSelected=P})}ngOnInit(){}onPreLoginFormSubmit(s){s.valid&&this.loadingSrv.showLoaderUntilCompleted(this.authService.preLogin(s.value.employeeId).pipe((0,u.K)(t=>(t.error.Message?t.error.Message.includes("no exists in database")?this.messagesSrv.showErrors(this.translate.instant("errors.wrongId")):this.messagesSrv.showErrors(t.error.Message):this.messagesSrv.showErrors(t.status&&t.statusText?t.status+" "+t.statusText:t.message),(0,m._)(()=>t))))).subscribe(t=>{this.readyToLogin=!0,this.messagesSrv.deleteErrors()})}onSubmit(s){s.valid&&this.loadingSrv.showLoaderUntilCompleted(this.authService.login(s.value.code).pipe((0,u.K)(t=>{let g;return t.error&&t.error.Message?g=t.error.Message:t.name&&t.status&&t.statusText&&(g=t.status+" "+t.statusText),this.messagesSrv.showErrors(g),(0,m._)(()=>t)}))).subscribe(()=>{this.router.navigateByUrl("/"),s.reset()})}changeLanguage(){this.checked=!this.checked;const s=this.checked?"en":"sr";this.i18n.setLanguage(s),this.translate.use(s)}}return i.\u0275fac=function(s){return new(s||i)(n.Y36(a.t4),n.Y36(d.b),n.Y36(M.e),n.Y36(h.K),n.Y36(c.F0),n.Y36(p.sK),n.Y36(r.D))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-auth"]],features:[n._Bn([d.b,h.K])],decls:19,vars:5,consts:[[1,"ion-padding",3,"fullscreen"],[1,"auth-page"],[1,"ion-align-items-center"],["size","12","size-md","6","push-md","3","size-lg","4","push-lg","4","size-xl","3","push-xl","4.5","size-xxl","2.5","push-xxl","4.75"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 158 37.74","fill","#0f3b89",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"footer"],[1,"switch"],["id","language-toggle","type","checkbox",1,"check-toggle","check-toggle-round-flat",3,"checked","change"],["for","language-toggle"],[1,"on"],[1,"off"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 158 37.74","fill","#0f3b89"],["d","M0 37.14h25.05v-8.18H10.3V.59H0v36.55m55.01-22.66H41.23V8.57h14.63V.59H30.92v36.55h25.74v-8.02H41.23v-6.73h13.78v-7.91m25.63 23.26c11.78 0 19.18-7.48 19.18-19.25C99.82 8.73 93.56 0 81.21 0 69.42 0 62.14 8.46 62.14 19.09c0 10.14 6.55 18.65 18.45 18.65zm.36-7.76c-5 0-8-4.61-8-11.11 0-6.34 3-11.11 8-11.11s7.91 4.77 7.91 11.06c0 6.61-2.9 11.17-7.91 11.17zm34.28 7.16v-9c0-5.91-.11-11.44-.4-16.37h.23A145.88 145.88 0 0 0 121.6 25l6.49 12.15h10.82V.59h-9.39v8.63a131.74 131.74 0 0 0 .8 15.4h-.17a129.71 129.71 0 0 0-6-12.79L118 .59h-12.11v36.55zM147.7.59v36.55H158V.59h-10.3"],[3,"ngSubmit"],["pf","ngForm"],["fill","outline"],["position","floating"],["type","text","ngModel","","name","employeeId","required","","minlength","1","text","","inputmode","numeric"],["employeeIdCtrl","ngModel"],["type","submit","expand","block",3,"disabled"],["f","ngForm"],["type","text","ngModel","","name","code","required","","minlength","4","text","","inputmode","numeric"],["codeCtrl","ngModel"],["fill","clear","expand","block","size","small",1,"resendCode",3,"click"],["slot","start",3,"ios","md"]],template:function(s,t){1&s&&(n.TgZ(0,"ion-content",0),n._UZ(1,"app-loading"),n.TgZ(2,"ion-grid",1)(3,"ion-row",2)(4,"ion-col",3),n.YNc(5,T,2,0,"svg",4),n._UZ(6,"app-messages"),n.YNc(7,Z,11,7,"form",5),n.YNc(8,y,16,12,"ng-container",6),n.qZA()()()(),n.TgZ(9,"div",7)(10,"div",8)(11,"input",9),n.NdJ("change",function(){return t.changeLanguage()}),n.qZA(),n._UZ(12,"label",10),n.TgZ(13,"span",11),n._uU(14,"EN"),n.qZA(),n.TgZ(15,"span",12),n._uU(16,"SR"),n.qZA()(),n.TgZ(17,"p"),n._uU(18,"\xa9 2023 Powered by VDSystem"),n.qZA()()),2&s&&(n.Q6J("fullscreen",!0),n.xp6(5),n.Q6J("ngIf",t.platform.is("desktop")),n.xp6(2),n.Q6J("ngIf",!t.readyToLogin),n.xp6(1),n.Q6J("ngIf",t.readyToLogin),n.xp6(3),n.Q6J("checked",t.checked))},dependencies:[l.O5,e._Y,e.JJ,e.JL,e.Q7,e.wO,e.On,e.F,a.YG,a.wI,a.W2,a.jY,a.gu,a.pK,a.Ie,a.Q$,a.Nd,a.j9,v.N,C.d,p.X$],styles:['ion-row[_ngcontent-%COMP%]{margin-top:20vh}ion-col[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}svg[_ngcontent-%COMP%]{margin-bottom:3rem}ion-item[_ngcontent-%COMP%]{margin-bottom:2rem}ion-button.resendCode[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:1rem auto 0}.footer[_ngcontent-%COMP%]{background-color:#fff}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;color:var(--ion-color-primary);width:100%;text-align:center}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:0 5px;bottom:5vh;left:calc(50vw - 50px)}.switch[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:absolute;top:10px;pointer-events:none;font-size:12px;text-transform:uppercase;text-shadow:0 1px 0 rgba(0,0,0,.06);width:50%;text-align:center}input.check-toggle-round-flat[_ngcontent-%COMP%]:checked ~ .off[_ngcontent-%COMP%]{color:var(--ion-color-primary)}input.check-toggle-round-flat[_ngcontent-%COMP%]:checked ~ .on[_ngcontent-%COMP%]{color:#fff}.switch[_ngcontent-%COMP%] > span.on[_ngcontent-%COMP%]{left:0;padding-left:2px;color:var(--ion-color-primary)}.switch[_ngcontent-%COMP%] > span.off[_ngcontent-%COMP%]{right:0;padding-right:4px;color:#fff}.check-toggle[_ngcontent-%COMP%]{position:absolute;margin-left:-9999px;visibility:hidden}.check-toggle[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{display:block;position:relative;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}input.check-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{padding:2px;width:100px;height:35px;background-color:var(--ion-color-primary);border-radius:60px}input.check-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before, input.check-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{display:block;position:absolute;content:""}input.check-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{top:2px;left:2px;bottom:2px;right:2px;background-color:var(--ion-color-primary);-webkit--moz-border-radius:60px;border-radius:60px}input.check-toggle-round-flat[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:after{top:4px;left:4px;bottom:4px;width:48px;background-color:#fff;border-radius:52px;transition:margin .2s}input.check-toggle-round-flat[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{margin-left:44px}']}),i})();var w=o(1227),E=o(591);let I=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[l.ez,c.Bz.forChild([{path:"",component:k}]),e.u5,a.Pc,E.I,w.$,p.aw]}),i})()},245:(O,_,o)=>{o.d(_,{N:()=>m});var l=o(4650),e=o(8529),a=o(6895);function u(d,h){1&d&&(l.TgZ(0,"div",1),l._UZ(1,"div")(2,"div")(3,"div"),l.qZA())}let m=(()=>{class d{constructor(n){this.loadingSrv=n}ngOnInit(){}}return d.\u0275fac=function(n){return new(n||d)(l.Y36(e.b))},d.\u0275cmp=l.Xpm({type:d,selectors:[["app-loading"]],decls:2,vars:3,consts:[["class","lds-facebook",4,"ngIf"],[1,"lds-facebook"]],template:function(n,M){1&n&&(l.YNc(0,u,4,0,"div",0),l.ALo(1,"async")),2&n&&l.Q6J("ngIf",l.lcZ(1,1,M.loadingSrv.loading$))},dependencies:[a.O5,a.Ov],styles:[".lds-facebook[_ngcontent-%COMP%]{width:75px;position:relative;margin:0 auto;top:25vh;z-index:1000}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:8px;width:10px;background:var(--ion-color-tertiary);animation:_ngcontent-%COMP%_lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:14px;animation-delay:-.06s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:32px;animation-delay:-.03s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:50px;animation-delay:0}@keyframes _ngcontent-%COMP%_lds-facebook{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}"]}),d})()},7610:(O,_,o)=>{o.d(_,{d:()=>M});var l=o(8505),e=o(4650),a=o(6832),u=o(6895),m=o(603);function d(c,p){if(1&c&&(e.TgZ(0,"ion-item",6)(1,"ion-label"),e._uU(2),e.qZA()()),2&c){const r=p.$implicit;e.xp6(2),e.Oqu(r)}}function h(c,p){if(1&c){const r=e.EpF();e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,d,3,1,"ion-item",4),e.qZA(),e.TgZ(3,"ion-icon",5),e.NdJ("click",function(){e.CHM(r);const C=e.oxw(2);return e.KtG(C.onClose())}),e.qZA()()}if(2&c){const r=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",r)}}function n(c,p){if(1&c&&(e.ynx(0),e.YNc(1,h,4,1,"div",1),e.BQk()),2&c){const r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.showMessages)}}let M=(()=>{class c{constructor(r){this.messagesSrv=r,this.showMessages=!1,this.errors$=this.messagesSrv.errors$.pipe((0,l.b)(v=>this.showMessages=v.length>0))}ngOnInit(){}onClose(){this.showMessages=!1,this.messagesSrv.deleteErrors()}}return c.\u0275fac=function(r){return new(r||c)(e.Y36(a.K))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-messages"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","message-container",4,"ngIf"],[1,"message-container"],[1,"message"],["lines","none",4,"ngFor","ngForOf"],["name","close-outline",1,"close",3,"click"],["lines","none"]],template:function(r,v){1&r&&(e.YNc(0,n,2,1,"ng-container",0),e.ALo(1,"async")),2&r&&e.Q6J("ngIf",e.lcZ(1,1,v.errors$))},dependencies:[u.sg,u.O5,m.gu,m.Ie,m.Q$,u.Ov],styles:[".message-container[_ngcontent-%COMP%]{display:flex;color:#a94442;background-color:#f2dede;border:1px solid #ebccd1;padding:10px;position:relative;margin-bottom:1.5rem}.message[_ngcontent-%COMP%]{width:90%}ion-label[_ngcontent-%COMP%]{white-space:normal!important}ion-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;cursor:pointer}ion-item[_ngcontent-%COMP%]::part(native){background-color:#f2dede;color:#a94442}"]}),c})()}}]);