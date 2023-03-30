"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1659],{1659:(G,u,n)=>{n.r(u),n.d(u,{OrganizationsPageModule:()=>$});var g=n(6895),r=n(4006),i=n(603),t=n(4650),z=n(9586),Z=n(6764),v=n(481),m=n(9549),l=n(9602),p=n(4385),x=n(3238),T=n(245),O=n(7610),A=n(3711),D=n(7785),f=n(9383);function P(o,s){1&o&&(t.TgZ(0,"ion-buttons",5),t._UZ(1,"app-logout"),t.qZA())}function J(o,s){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Please insert start and end date "),t.qZA())}function I(o,s){if(1&o&&(t.TgZ(0,"mat-option",21),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.description," ")}}function F(o,s){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select organization"),t.qZA())}function S(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-row")(1,"ion-col",6)(2,"form",7)(3,"ion-row")(4,"ion-col",8)(5,"mat-form-field",9)(6,"mat-label"),t._uU(7,"Period"),t.qZA(),t.TgZ(8,"mat-date-range-input",10),t._UZ(9,"input",11),t.ALo(10,"translate"),t._UZ(11,"input",12),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"mat-datepicker-toggle",13)(14,"mat-date-range-picker",null,14),t.YNc(16,J,2,0,"mat-error",4),t.qZA()(),t.TgZ(17,"ion-col",15)(18,"mat-form-field",9)(19,"mat-label"),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"mat-select",16),t.YNc(23,I,2,2,"mat-option",17),t.ALo(24,"async"),t.qZA(),t.YNc(25,F,2,0,"mat-error",4),t.qZA()(),t.TgZ(26,"ion-col",18)(27,"ion-button",19),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.onFormSubmit())}),t._UZ(28,"ion-icon",20),t.qZA()()()()()()}if(2&o){const e=t.MAs(15),a=t.oxw();t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(6),t.Q6J("rangePicker",e),t.xp6(1),t.s9C("placeholder",t.lcZ(10,12,"startTime")),t.xp6(2),t.s9C("placeholder",t.lcZ(12,14,"endTime")),t.xp6(2),t.Q6J("for",e),t.xp6(3),t.Q6J("ngIf",(null==a.form.get("startDate").errors?null:a.form.get("startDate").errors.required)||(null==a.form.get("endDate").errors?null:a.form.get("endDate").errors.required)),t.xp6(4),t.Oqu(t.lcZ(21,16,"organization")),t.xp6(3),t.Q6J("ngForOf",t.lcZ(24,18,a.organizations$)),t.xp6(2),t.Q6J("ngIf",null==a.form.get("organization").errors?null:a.form.get("organization").errors.required),t.xp6(2),t.Q6J("disabled",!a.form.valid),t.xp6(1),t.Q6J("ios","search-outline")("md","search-sharp")}}const h=function(){return{}};function y(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"ion-col",24)(1,"app-paginated-list",25),t.NdJ("elementSelected",function(c){t.CHM(e);const d=t.oxw(2);return t.KtG(d.onElementSelected(c))}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("searchData",e.data)("schema",e.schema)("buttons",t.DdM(4,h))("category","organizations")}}function Q(o,s){if(1&o&&(t.TgZ(0,"ion-col"),t._UZ(1,"app-paginated-table",26),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("searchData",e.data)("schema",e.desktopSchema)("buttons",t.DdM(4,h))("category","organizations")}}function N(o,s){if(1&o&&(t.TgZ(0,"ion-row"),t.YNc(1,y,2,5,"ion-col",22),t.ALo(2,"async"),t.YNc(3,Q,2,5,"ng-template",null,23,t.W1O),t.qZA()),2&o){const e=t.MAs(4),a=t.oxw();t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(2,2,a.isDesktop$))("ngIfElse",e)}}let U=(()=>{class o{constructor(e,a,c,d){this.screenSizeSrv=e,this.changeDetector=a,this.formBuilder=c,this.dropdownsDataSrv=d,this.isDesktop$=this.screenSizeSrv.isDesktopView(),this.showForm=!0,this.desktopSchema={properties:["status","requestorDepartment","requestorForWO","requestorForProject","requestorWOManager","minutes","startTime","endTime","reason"]},this.schema={properties:["requestorFullName","status","minutes","reason","startTime","endTime","requestorDepartment","requestorWO","requestorWOManager","requestorForWO","requestorForProject"],title:["requestorForProject"],subtitle:["requestorDepartment"]},this.organizations$=this.dropdownsDataSrv.getData("WorkOrganizations")}ngOnInit(){this.form=this.formBuilder.group({organization:["",{validators:[r.kI.compose([r.kI.required])]}],startDate:["",{validators:[r.kI.compose([r.kI.required])]}],endDate:["",{validators:[r.kI.compose([r.kI.required])]}]})}onFormSubmit(){this.form.valid&&(this.data=this.form.value,this.changeDetector.detectChanges())}onElementSelected(e){this.showForm=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(z.j),t.Y36(t.sBO),t.Y36(r.qu),t.Y36(Z.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-organizations"]],decls:16,vars:13,consts:[[3,"translucent"],["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding",3,"fullscreen"],[4,"ngIf"],["slot","end"],["size","12","size-md","8","offset-md","2","size-lg","8.5","offset-lg","1.5","size-xl","8","offset-xl","0"],[1,"filter-form",3,"formGroup"],["size","12","size-lg","5.5"],["appearance","outline","floatLabel","always","hideRequiredMarker","true"],["calendarLabel","Kalendar",3,"rangePicker"],["matStartDate","","formControlName","startDate",3,"placeholder"],["matEndDate","","formControlName","endDate",3,"placeholder"],["matIconSuffix","",3,"for"],["picker",""],["size","10","size-lg","5"],["formControlName","organization"],[3,"value",4,"ngFor","ngForOf"],["size","2","size-lg","1.5"],["fill","solid","color","secondary",3,"disabled","click"],["slot","icon-only",3,"ios","md"],[3,"value"],["size","12","size-md","8","offset-md","2",4,"ngIf","ngIfElse"],["table",""],["size","12","size-md","8","offset-md","2"],[3,"searchData","schema","buttons","category","elementSelected"],[3,"searchData","schema","buttons","category"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"translate"),t.qZA(),t.YNc(8,P,2,0,"ion-buttons",2),t.ALo(9,"async"),t.qZA()(),t._UZ(10,"app-loading"),t.TgZ(11,"ion-content",3)(12,"ion-grid"),t._UZ(13,"app-messages"),t.YNc(14,S,29,20,"ion-row",4),t.YNc(15,N,5,4,"ion-row",4),t.qZA()()),2&e&&(t.Q6J("translucent",!0),t.xp6(5),t.AsE("",t.lcZ(6,7,"menuSections.reports")," / ",t.lcZ(7,9,"pageTitles.organizations"),""),t.xp6(3),t.Q6J("ngIf",t.lcZ(9,11,a.isDesktop$)),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(3),t.Q6J("ngIf",a.showForm),t.xp6(1),t.Q6J("ngIf",a.data))},dependencies:[g.sg,g.O5,r._Y,r.Fj,r.JJ,r.JL,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.fG,i.Nd,i.wd,i.sr,v.u,m.KE,m.hX,m.TO,m.R9,l.nW,l.wx,l.zY,l.By,l._g,r.sg,r.u,p.gD,x.ey,T.N,O.d,A.v,D.t,g.Ov,f.X$]}),o})();var Y=n(9299),q=n(4212),M=n(7392),L=n(284),C=n(1227),w=n(591),E=n(5459),W=n(871),j=n(3627);let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,Y.Bz.forChild([{path:"",component:U}]),r.u5,i.Pc,q.p,E.i,M.Ps,L.c,l.FA,r.UX,f.aw,p.LD,w.I,C.$,W.e,j.I]}),o})()}}]);