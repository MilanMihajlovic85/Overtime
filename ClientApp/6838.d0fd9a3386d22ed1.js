"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6838],{6838:(it,b,a)=>{a.r(b),a.d(b,{ApprovalsPageModule:()=>at});var d=a(6895),u=a(4006),i=a(603),h=a(5861),N=a(671),g=a(8505),_=a(3900),t=a(4650),T=a(9586),f=a(1948),y=a(284),D=a(9549),v=a(9383);function O(o,p){1&o&&t._UZ(0,"ion-icon",17),2&o&&t.Q6J("ios","close-outline")("md","close-sharp")}function M(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",1),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onFormSubmit())}),t._UZ(1,"ion-icon",17),t.qZA()}2&o&&(t.xp6(1),t.Q6J("ios","checkmark-outline")("md","checkmark-sharp"))}function q(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",1),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onCancel())}),t._UZ(1,"ion-icon",17),t.qZA()}2&o&&(t.xp6(1),t.Q6J("ios","close-outline")("md","close-sharp"))}function F(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"ion-button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onFormSubmit())}),t._uU(1),t.ALo(2,"translate"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("disabled",!e.form.valid),t.xp6(1),t.hij(" ",t.lcZ(2,2,"btn.save")," ")}}let P=(()=>{class o{constructor(e,s,n){this.modalCtrl=e,this.screenSizeSrv=s,this.formBuilder=n,this.minDisabled=!0,this.isDesktop$=this.screenSizeSrv.isDesktopView()}ngOnInit(){var e;this.form=this.formBuilder.group({status:["",{validators:[u.kI.compose([u.kI.required])]}],minutes:[this.request.minutes,{}]}),null===(e=this.form.get("minutes"))||void 0===e||e.disable()}onCancel(){this.modalCtrl.dismiss(null,"cancel")}onFormSubmit(){this.form.valid&&this.modalCtrl.dismiss({formValue:this.form.value},"confirm")}onKeyPress(e){let n=String.fromCharCode(e.charCode);8!=e.keyCode&&!/[0-9\+\-\ ]/.test(n)&&e.preventDefault()}onStatusChange(e){var s,n,r;if("3"===e.value)null===(s=this.form.get("minutes"))||void 0===s||s.clearValidators(),null===(n=this.form.get("minutes"))||void 0===n||n.updateValueAndValidity(),null===(r=this.form.get("minutes"))||void 0===r||r.disable();else if("2"===e.value){var c,l,m;null===(c=this.form.get("minutes"))||void 0===c||c.addValidators([u.kI.required,u.kI.pattern("^(0|[1-9][0-9]*)$")]),null===(l=this.form.get("minutes"))||void 0===l||l.updateValueAndValidity(),null===(m=this.form.get("minutes"))||void 0===m||m.enable()}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.IN),t.Y36(T.j),t.Y36(u.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-status"]],inputs:{request:"request"},decls:38,vars:23,consts:[["slot","start"],[3,"click"],["slot","icon-only",3,"ios","md",4,"ngIf"],["slot","end"],[3,"click",4,"ngIf","ngIfElse"],["closeButton",""],[1,"ion-padding"],["size","6","push","3"],[3,"formGroup"],["formControlName","status",3,"change"],["size","12"],["value","3"],["value","2"],[1,"ion-padding-top"],["appearance","outline","floatLabel","always","hideRequiredMarker","true"],["type","text","inputmode","numeric","pattern","[0-9]*","matInput","","formControlName","minutes",3,"keypress"],["fill","outline","expand","block",3,"disabled","click",4,"ngIf"],["slot","icon-only",3,"ios","md"],["fill","outline","expand","block",3,"disabled","click"]],template:function(e,s){if(1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),t.NdJ("click",function(){return s.onCancel()}),t.YNc(4,O,1,2,"ion-icon",2),t.ALo(5,"async"),t.qZA()(),t.TgZ(6,"ion-title"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"ion-buttons",3),t.YNc(10,M,2,2,"ion-button",4),t.ALo(11,"async"),t.YNc(12,q,2,2,"ng-template",null,5,t.W1O),t.qZA()()(),t.TgZ(14,"ion-content",6)(15,"ion-grid")(16,"ion-row")(17,"ion-col",7)(18,"form",8)(19,"mat-radio-group",9),t.NdJ("change",function(r){return s.onStatusChange(r)}),t.TgZ(20,"ion-row")(21,"ion-col",10)(22,"mat-radio-button",11),t._uU(23),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"ion-col",10)(26,"mat-radio-button",12),t._uU(27),t.ALo(28,"translate"),t.qZA()()()(),t.TgZ(29,"ion-row",13)(30,"ion-col")(31,"mat-form-field",14)(32,"mat-label"),t._uU(33),t.ALo(34,"translate"),t.qZA(),t.TgZ(35,"input",15),t.NdJ("keypress",function(r){return s.onKeyPress(r)}),t.qZA()()()(),t.YNc(36,F,3,4,"ion-button",16),t.ALo(37,"async"),t.qZA()()()()()),2&e){const n=t.MAs(13);t.xp6(4),t.Q6J("ngIf",!1===t.lcZ(5,9,s.isDesktop$)),t.xp6(3),t.Oqu(t.lcZ(8,11,"labels.changeStatus")),t.xp6(3),t.Q6J("ngIf",!1===t.lcZ(11,13,s.isDesktop$))("ngIfElse",n),t.xp6(8),t.Q6J("formGroup",s.form),t.xp6(5),t.hij(" ",t.lcZ(24,15,"btn.decline")," "),t.xp6(4),t.hij(" ",t.lcZ(28,17,"btn.approve")," "),t.xp6(6),t.Oqu(t.lcZ(34,19,"minutes")),t.xp6(3),t.Q6J("ngIf",t.lcZ(37,21,s.isDesktop$))}},dependencies:[d.O5,u._Y,u.Fj,u.JJ,u.JL,u.c5,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.Nd,i.wd,i.sr,u.sg,u.u,f.VQ,f.U0,y.Nt,D.KE,D.hX,d.Ov,v.X$],styles:["ion-grid[_ngcontent-%COMP%]{min-height:initial}"]}),o})();var I=a(1135),S=a(4004),A=a(262),Z=a(2843),J=a(3151),C=a(2340),w=a(529),E=a(6832);let U=(()=>{class o{constructor(e,s){this.http=e,this.messagesSrv=s,this.approvals$=new I.X([]),this.approvals=this.approvals$.asObservable(),this.statuses$=new I.X([]),this.statuses=this.statuses$.asObservable(),this.getStatuses().subscribe()}getMyApprovals(){return this.http.get(`${C.N.apiUrl}/Employee/GetMyPendingApprovals`).pipe((0,S.U)(e=>e.map(s=>({id:s.ID,requestorId:s.Requestor_ID,requestorWO:s.Requestor_WO,requestorFullName:s.Requestor_FullName,requestorWOManager:s.Requestor_WO_Manager,requestorDepartment:s.Requestor_Department,requestorForWO:s.Requestor_For_WO,requestorForProject:s.Requestor_For_Project,reason:s.Reason,startTime:new Date(s.Start_Time),endTime:new Date(s.End_Time),minutes:s.Minutes,status:s.Status,responseDate:s.ResponseDate?new Date(s.ResponseDate):null,createdAt:new Date(s.CreateDate)}))),(0,A.K)(e=>(this.messagesSrv.showErrors(e.error.Message?e.error.Message:e.status&&e.statusText?e.status+" "+e.statusText:e.message),(0,Z._)(()=>e))),(0,g.b)(e=>{this.approvals$.next(e.sort((s,n)=>s.createdAt<n.createdAt?1:s.createdAt>n.createdAt?-1:0))}),(0,J.d)())}updateStatus(e,s,n){const r=this.approvals$.getValue(),c=r.filter(l=>l.id!==e);return this.approvals$.next(c),this.http.post(`${C.N.apiUrl}/Employee/UpdateRequestStatus`,{RequestID:e,RequestStatus:s,Minutes:null!=n?n:null}).pipe((0,A.K)(l=>(this.messagesSrv.showErrors(l.error.Message?l.error.Message:l.status&&l.statusText?l.status+" "+l.statusText:l.message),this.approvals$.next(r),(0,Z._)(()=>l))),(0,S.U)(()=>c))}getStatuses(){return this.http.get(`${C.N.apiUrl}/RequestData/GetAllRequestStatuses`).pipe((0,A.K)(e=>(this.messagesSrv.showErrors(e.error.Message?e.error.Message:e.status&&e.statusText?e.status+" "+e.statusText:e.message),(0,Z._)(()=>e))),(0,S.U)(e=>e.map(s=>({status:s.Status,description:s.Description}))),(0,g.b)(e=>{this.statuses$.next(e)}))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(w.eN),t.LFG(E.K))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Y=a(8529),R=a(7632),Q=a(7408),W=a(245),L=a(7610),j=a(7785);function G(o,p){1&o&&(t.TgZ(0,"ion-buttons",7),t._UZ(1,"app-logout"),t.qZA())}function z(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"app-list",12),t.NdJ("modalOpen",function(n){t.CHM(e);const r=t.oxw(3);return t.KtG(r.openActionSheet(n))}),t.qZA()}if(2&o){const e=t.oxw(3);t.Q6J("data",e.approvalsData.data)("schema",e.schema)("buttons",e.buttons)}}function k(o,p){if(1&o&&(t.TgZ(0,"ion-col",10),t.YNc(1,z,1,3,"app-list",11),t.qZA()),2&o){const e=t.oxw(2),s=t.MAs(16);t.xp6(1),t.Q6J("ngIf",e.approvalsData.data.length>0)("ngIfElse",s)}}function K(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"app-table",12),t.NdJ("modalOpen",function(n){t.CHM(e);const r=t.oxw(3);return t.KtG(r.openActionSheet(n))}),t.qZA()}if(2&o){const e=t.oxw(3);t.Q6J("data",e.approvalsData)("schema",e.desktopSchema)("buttons",e.buttons)}}function V(o,p){if(1&o&&(t.TgZ(0,"ion-col"),t.YNc(1,K,1,3,"app-table",11),t.qZA()),2&o){const e=t.oxw(2),s=t.MAs(16);t.xp6(1),t.Q6J("ngIf",e.approvalsData.data.length>0)("ngIfElse",s)}}function X(o,p){if(1&o&&(t.TgZ(0,"ion-row"),t.YNc(1,k,2,2,"ion-col",8),t.ALo(2,"async"),t.YNc(3,V,2,2,"ng-template",null,9,t.W1O),t.qZA()),2&o){const e=t.MAs(4),s=t.oxw();t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(2,2,s.isDesktop$))("ngIfElse",e)}}function B(o,p){1&o&&(t.TgZ(0,"h1"),t._uU(1,"No Data"),t.qZA(),t._UZ(2,"ion-icon",13))}let H=(()=>{class o{constructor(e,s,n,r,c,l,m){this.screenSizeSrv=e,this.approvalSrv=s,this.loadingSrv=n,this.actionSheetCtrl=r,this.alertCtrl=c,this.translate=l,this.modalCtrl=m,this.isDesktop$=this.screenSizeSrv.isDesktopView().pipe((0,g.b)(x=>this.isDesktop=x)),this.approvalsData=new N.by([]),this.buttons={updateStatus:{modal:"updateStatus",icon:"task",color:"primary",mobileIcon:"create",mobileColor:"secondary",tooltip:"btn.updateStatus"}},this.desktopSchema={properties:["requestorFullName","requestorDepartment","requestorWO","requestorForWO","requestorForProject","requestorWOManager","minutes","startTime","endTime","createdAt","reason"],noSearch:!0},this.schema={properties:["requestorFullName","minutes","reason","startTime","endTime","requestorDepartment","requestorWO","requestorWOManager","requestorForWO","requestorForProject","createdAt"],title:["requestorFullName"],subtitle:["requestorDepartment","requestorForProject"]},this.approvals$=this.loadingSrv.showLoaderUntilCompleted(this.approvalSrv.getMyApprovals()).pipe((0,_.w)(()=>this.approvalSrv.approvals),(0,g.b)(x=>{this.approvalsData.data=x}))}ngOnInit(){}openActionSheet(e){this.isDesktop?this.openModal(e.data):this.presentAlert(e.data)}openModal(e){var s=this;return(0,h.Z)(function*(){const n=yield s.modalCtrl.create({component:P,cssClass:"change-status-modal",componentProps:{request:e}});yield n.present();const r=yield n.onWillDismiss();if("confirm"===r.role){const c=+r.data.formValue.status,l=r.data.formValue.status.minutes;l?s.approvalSrv.updateStatus(+e.id,c,l).subscribe():s.approvalSrv.updateStatus(+e.id,c).subscribe()}})()}presentAlert(e){var s=this;return(0,h.Z)(function*(){const n=yield s.presentActionSheet();if(n)if(2===n){const r=yield s.alertCtrl.create({header:s.translate.instant("messagess.setDurationHeader"),buttons:[s.translate.instant("btn.approve")],inputs:[{value:e.minutes}]});yield r.present();const c=yield r.onDidDismiss();if(c.data){const l=Object.values(c.data.values)[0];s.approvalSrv.updateStatus(+e.id,n,l).subscribe()}}else s.approvalSrv.updateStatus(+e.id,n).subscribe()})()}presentActionSheet(){var e=this;return(0,h.Z)(function*(){const s=yield e.actionSheetCtrl.create({header:e.translate.instant("messagess.changeRequestStatusHeader"),buttons:[{text:e.translate.instant("btn.decline"),role:"destructive",data:{action:3}},{text:e.translate.instant("btn.approve"),data:{action:2}},{text:"Cancel",role:"cancel"}]});yield s.present();const n=yield s.onDidDismiss();return n.data?n.data.action:null})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.j),t.Y36(U),t.Y36(Y.b),t.Y36(i.BX),t.Y36(i.Br),t.Y36(v.sK),t.Y36(i.IN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-approvals"]],decls:17,vars:11,consts:[[3,"translucent"],["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding",3,"fullscreen"],[1,"ion-padding-top"],[4,"ngIf"],["noData",""],["slot","end"],["size","12","size-md","8","push-md","2",4,"ngIf","ngIfElse"],["table",""],["size","12","size-md","8","push-md","2"],[3,"data","schema","buttons","modalOpen",4,"ngIf","ngIfElse"],[3,"data","schema","buttons","modalOpen"],["name","alert-circle-outline"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.YNc(7,G,2,0,"ion-buttons",2),t.ALo(8,"async"),t.qZA()(),t._UZ(9,"app-loading"),t.TgZ(10,"ion-content",3)(11,"ion-grid",4),t._UZ(12,"app-messages"),t.YNc(13,X,5,4,"ion-row",5),t.ALo(14,"async"),t.qZA(),t.YNc(15,B,3,0,"ng-template",null,6,t.W1O),t.qZA()),2&e&&(t.Q6J("translucent",!0),t.xp6(5),t.Oqu(t.lcZ(6,5,"pageTitles.myApprovals")),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,7,s.isDesktop$)),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(3),t.Q6J("ngIf",t.lcZ(14,9,s.approvals$)))},dependencies:[d.O5,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.fG,i.Nd,i.wd,i.sr,R.n,Q.a,W.N,L.d,j.t,d.Ov,v.X$],styles:["ion-icon[_ngcontent-%COMP%]{font-size:16rem;width:16rem;margin:0 auto;position:relative;top:0;left:calc(50% - 8rem);color:#a9aabc}h1[_ngcontent-%COMP%]{text-align:center;margin-top:5rem;color:#a9aabc}"]}),o})();var $=a(9299),tt=a(4212),et=a(1227),st=a(591),ot=a(3627),nt=a(6516);let at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,$.Bz.forChild([{path:"",component:H}]),u.u5,i.Pc,tt.p,nt.U,st.I,et.$,v.aw,ot.I,u.UX,f.Fk,y.c]}),o})()}}]);