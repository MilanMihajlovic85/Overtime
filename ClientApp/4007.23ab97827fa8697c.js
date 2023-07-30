"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4007],{4007:(V,m,i)=>{i.r(m),i.d(m,{AuthPageModule:()=>Q});var c=i(6895),a=i(4006),r=i(603),u=i(262),h=i(2843),p=i(8529),f=i(6832),t=i(4650),T=i(3746),v=i(9299),d=i(9383),y=i(8373),C=i(284),M=i(9549),P=i(7392),w=i(245),S=i(7610);const L=["inputs"],A=function(o){return{error:o}};function U(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"form",12,13),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.MAs(1),g=t.oxw();return t.KtG(g.onPreLoginFormSubmit(s))}),t.TgZ(2,"mat-form-field",14),t._UZ(3,"input",15,16),t.ALo(6,"translate"),t.TgZ(7,"mat-icon",17),t._uU(8,"lock"),t.qZA()(),t.TgZ(9,"ion-button",18),t._uU(10),t.ALo(11,"translate"),t.qZA()()}if(2&o){const e=t.MAs(5);t.xp6(3),t.s9C("placeholder",t.lcZ(6,3,"labels.employeeId")),t.Q6J("ngClass",t.VKq(7,A,!e.valid&&e.touched)),t.xp6(7),t.Oqu(t.lcZ(11,5,"btn.sendEmployeeId"))}}function J(o,l){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"form",12,19),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.MAs(2),g=t.oxw();return t.KtG(g.onSubmit(s))}),t.TgZ(3,"mat-form-field",14),t._UZ(4,"input",20,21),t.ALo(7,"translate"),t.TgZ(8,"mat-icon",17),t._uU(9,"lock"),t.qZA()(),t.TgZ(10,"ion-button",18),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"ion-button",22),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.resendCode())}),t._UZ(14,"ion-icon",23),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.BQk()}if(2&o){const e=t.MAs(6);t.xp6(4),t.s9C("placeholder",t.lcZ(7,6,"labels.smsCode")),t.Q6J("ngClass",t.VKq(12,A,!e.valid&&e.touched)),t.xp6(7),t.Oqu(t.lcZ(12,8,"btn.login")),t.xp6(3),t.Q6J("ios","arrow-back-outline")("md","arrow-back-sharp"),t.xp6(1),t.hij(" ",t.lcZ(16,10,"btn.resendId")," ")}}const I=function(o){return{ios:o}},x=function(o){return{selected:o}};let E=(()=>{class o{constructor(e,n,s,g,Y,b,Z,z){this.platform=e,this.loadingSrv=n,this.authService=s,this.messagesSrv=g,this.router=Y,this.translate=b,this.i18n=Z,this.changeDetector=z,this.readyToLogin=!1,Z.language().subscribe(O=>{b.use(O),this.language=O})}ngOnInit(){}ngAfterViewInit(){this.inputs.changes.subscribe(e=>{this.inputs.first.nativeElement.focus(),this.changeDetector.detectChanges()})}onPreLoginFormSubmit(e){e.valid&&this.loadingSrv.showLoaderUntilCompleted(this.authService.preLogin(e.value.employeeId).pipe((0,u.K)(n=>(n.error.Message?n.error.Message.includes("no exists in database")?this.messagesSrv.showErrors(this.translate.instant("errors.wrongId")):this.messagesSrv.showErrors(n.error.Message):this.messagesSrv.showErrors(n.status&&n.statusText?n.status+" "+n.statusText:n.message),(0,h._)(()=>n))))).subscribe(n=>{this.readyToLogin=!0,this.messagesSrv.deleteErrors(),this.inputs.last.nativeElement.focus()})}onSubmit(e){e.valid&&this.loadingSrv.showLoaderUntilCompleted(this.authService.login(e.value.code).pipe((0,u.K)(n=>{let s;return n.error&&n.error.Message?s=n.error.Message:n.name&&n.status&&n.statusText&&(s=n.status+" "+n.statusText),this.messagesSrv.showErrors(s),(0,h._)(()=>n)}))).subscribe(()=>{this.router.navigateByUrl("/"),e.reset()})}resendCode(){this.readyToLogin=!1,this.messagesSrv.deleteErrors()}changeLanguage(e){this.language=e,this.i18n.setLanguage(e),this.translate.use(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.t4),t.Y36(p.b),t.Y36(T.e),t.Y36(f.K),t.Y36(v.F0),t.Y36(d.sK),t.Y36(y.D),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],viewQuery:function(e,n){if(1&e&&t.Gf(L,5),2&e){let s;t.iGM(s=t.CRH())&&(n.inputs=s)}},features:[t._Bn([p.b,f.K])],decls:23,vars:12,consts:[[1,"ion-padding-top",3,"fullscreen"],[1,"ion-padding","auth-page"],[3,"ngClass"],["size","12","size-md","6","push-md","3","size-lg","4","push-lg","4","size-xl","2.75","push-xl","4.625"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 158 37.74","fill","#0f3b89"],["d","M0 37.14h25.05v-8.18H10.3V.59H0v36.55m55.01-22.66H41.23V8.57h14.63V.59H30.92v36.55h25.74v-8.02H41.23v-6.73h13.78v-7.91m25.63 23.26c11.78 0 19.18-7.48 19.18-19.25C99.82 8.73 93.56 0 81.21 0 69.42 0 62.14 8.46 62.14 19.09c0 10.14 6.55 18.65 18.45 18.65zm.36-7.76c-5 0-8-4.61-8-11.11 0-6.34 3-11.11 8-11.11s7.91 4.77 7.91 11.06c0 6.61-2.9 11.17-7.91 11.17zm34.28 7.16v-9c0-5.91-.11-11.44-.4-16.37h.23A145.88 145.88 0 0 0 121.6 25l6.49 12.15h10.82V.59h-9.39v8.63a131.74 131.74 0 0 0 .8 15.4h-.17a129.71 129.71 0 0 0-6-12.79L118 .59h-12.11v36.55zM147.7.59v36.55H158V.59h-10.3"],[1,"switch"],[3,"ngClass","click"],[1,"ion-align-items-center"],[3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"footer"],[3,"ngSubmit"],["pf","ngForm"],["appearance","fill","hideRequiredMarker","true"],["type","text","matInput","","ngModel","","name","employeeId","required","","minlength","1","text","","inputmode","numeric",3,"ngClass","placeholder"],["inputs","","employeeIdCtrl","ngModel"],["matSuffix",""],["color","medium","type","submit","expand","block"],["f","ngForm"],["type","text","matInput","","ngModel","","name","code","required","","minlength","4","text","","inputmode","numeric",3,"ngClass","placeholder"],["inputs","","codeCtrl","ngModel"],["fill","clear","expand","block","size","small",1,"resendCode",3,"click"],["slot","start",3,"ios","md"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-content",0),t._UZ(1,"app-loading"),t.TgZ(2,"ion-grid",1)(3,"ion-row",2)(4,"ion-col",3),t.O4$(),t.TgZ(5,"svg",4),t._UZ(6,"path",5),t.qZA(),t.kcU(),t.TgZ(7,"div",6)(8,"ul")(9,"li",7),t.NdJ("click",function(){return n.changeLanguage("en")}),t._uU(10,"en"),t.qZA(),t.TgZ(11,"li",7),t.NdJ("click",function(){return n.changeLanguage("sr")}),t._uU(12,"sr"),t.qZA()()()()(),t.TgZ(13,"ion-row",8)(14,"ion-col",3)(15,"h1"),t._uU(16,"Overtime"),t.qZA(),t._UZ(17,"app-messages"),t.YNc(18,U,12,9,"form",9),t.YNc(19,J,17,14,"ng-container",10),t.qZA()()(),t.TgZ(20,"div",11)(21,"p"),t._uU(22,"\xa9 2023 Powered by VDSystem"),t.qZA()()()),2&e&&(t.Q6J("fullscreen",!0),t.xp6(3),t.Q6J("ngClass",t.VKq(6,I,n.platform.is("ios"))),t.xp6(6),t.Q6J("ngClass",t.VKq(8,x,"en"===n.language)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,x,"sr"===n.language)),t.xp6(7),t.Q6J("ngIf",!n.readyToLogin),t.xp6(1),t.Q6J("ngIf",n.readyToLogin))},dependencies:[c.mk,c.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.wO,a.On,a.F,r.YG,r.wI,r.W2,r.jY,r.gu,r.Nd,C.Nt,M.KE,M.R9,P.Hw,w.N,S.d,d.X$],styles:["ion-grid[_ngcontent-%COMP%]{height:90vh}ion-row[_ngcontent-%COMP%]:first-child{margin-bottom:13vh}ion-row.ios[_ngcontent-%COMP%]{margin-top:2rem}ion-col[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}svg[_ngcontent-%COMP%]{margin-bottom:3rem;width:55%}ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;overflow:hidden}li[_ngcontent-%COMP%]{float:left;cursor:pointer;display:block;text-align:center;padding:0;text-decoration:none}li[_ngcontent-%COMP%]:first-child{padding-right:8px;border-right:1px solid black}li[_ngcontent-%COMP%]:nth-child(2){padding-left:8px}li.selected[_ngcontent-%COMP%]{color:#b1b1b1}h1[_ngcontent-%COMP%]{margin-left:.5rem;margin-top:-1rem;margin-bottom:2rem;letter-spacing:1px}ion-item[_ngcontent-%COMP%]{margin-bottom:2rem}.mat-mdc-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:1.2rem}.mat-icon[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}ion-button.resendCode[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:1rem auto 0}.footer[_ngcontent-%COMP%]{background-color:#fff;font-size:.9rem}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;color:var(--ion-color-primary);width:100%;text-align:center}.switch[_ngcontent-%COMP%]{position:absolute;display:inline-block;margin:0 5px;right:1rem}@media only screen and (min-width: 768px){ion-grid[_ngcontent-%COMP%]{height:initial}ion-row[_ngcontent-%COMP%]:first-child{margin-top:20vh;margin-bottom:0;bottom:0}ion-col[_ngcontent-%COMP%]{padding-left:initial;padding-right:initial}svg[_ngcontent-%COMP%]{width:40%}.footer[_ngcontent-%COMP%]{margin-top:2rem}}"]}),o})();var K=i(1227),_=i(591);let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,v.Bz.forChild([{path:"",component:E}]),a.u5,r.Pc,C.c,P.Ps,_.I,K.$,d.aw]}),o})()}}]);