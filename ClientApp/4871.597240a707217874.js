"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4871],{4871:(q,f,n)=>{n.r(f),n.d(f,{DepartmentsPageModule:()=>X});var m=n(6895),r=n(4006),i=n(603),D=n(671),t=n(4650),Z=n(9586),v=n(2886),x=n(8529),T=n(6764),A=n(7632),P=n(7408),d=n(9549),c=n(9602),g=n(4385),S=n(3238),I=n(245),J=n(7610),y=n(7785),u=n(9383);function z(e,s){1&e&&(t.TgZ(0,"ion-buttons",7),t._UZ(1,"app-logout"),t.qZA())}function U(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please insert start and end date "),t.qZA())}function Y(e,s){if(1&e&&(t.TgZ(0,"mat-option",23),t._uU(1),t.qZA()),2&e){const a=s.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.description," ")}}function N(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Please select department"),t.qZA())}function Q(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"ion-row")(1,"ion-col",8),t._UZ(2,"app-messages"),t.TgZ(3,"form",9)(4,"ion-row")(5,"ion-col",10)(6,"mat-form-field",11)(7,"mat-label"),t._uU(8,"Period"),t.qZA(),t.TgZ(9,"mat-date-range-input",12),t._UZ(10,"input",13),t.ALo(11,"translate"),t._UZ(12,"input",14),t.ALo(13,"translate"),t.qZA(),t._UZ(14,"mat-datepicker-toggle",15)(15,"mat-date-range-picker",null,16),t.YNc(17,U,2,0,"mat-error",4),t.qZA()(),t.TgZ(18,"ion-col",17)(19,"mat-form-field",11)(20,"mat-label"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"mat-select",18),t.YNc(24,Y,2,2,"mat-option",19),t.ALo(25,"async"),t.qZA(),t.YNc(26,N,2,0,"mat-error",4),t.qZA()(),t.TgZ(27,"ion-col",20)(28,"ion-button",21),t.NdJ("click",function(){t.CHM(a);const l=t.oxw();return t.KtG(l.onFormSubmit())}),t._UZ(29,"ion-icon",22),t.qZA()()()()()()}if(2&e){const a=t.MAs(16),o=t.oxw();t.xp6(3),t.Q6J("formGroup",o.form),t.xp6(6),t.Q6J("rangePicker",a),t.xp6(1),t.s9C("placeholder",t.lcZ(11,12,"startTime")),t.xp6(2),t.s9C("placeholder",t.lcZ(13,14,"endTime")),t.xp6(2),t.Q6J("for",a),t.xp6(3),t.Q6J("ngIf",(null==o.form.get("startDate").errors?null:o.form.get("startDate").errors.required)||(null==o.form.get("endDate").errors?null:o.form.get("endDate").errors.required)),t.xp6(4),t.Oqu(t.lcZ(22,16,"department")),t.xp6(3),t.Q6J("ngForOf",t.lcZ(25,18,o.departments$)),t.xp6(2),t.Q6J("ngIf",null==o.form.get("department").errors?null:o.form.get("department").errors.required),t.xp6(2),t.Q6J("disabled",!o.form.valid),t.xp6(1),t.Q6J("ios","search-outline")("md","search-sharp")}}const h=function(){return{}};function L(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"app-list",27),t.NdJ("elementSelected",function(l){t.CHM(a);const p=t.oxw(3);return t.KtG(p.onElementSelected(l))}),t.qZA()}if(2&e){const a=t.oxw(3);t.Q6J("data",a.statisticsData.data)("schema",a.schema)("buttons",t.DdM(5,h))("hideSearch",!0)("showDetail",!1)}}function M(e,s){1&e&&(t.TgZ(0,"p",28),t._uU(1,"No Data"),t.qZA(),t._UZ(2,"ion-icon",29))}function F(e,s){if(1&e&&(t.ynx(0),t.YNc(1,L,1,6,"app-list",25),t.YNc(2,M,3,0,"ng-template",null,26,t.W1O),t.BQk()),2&e){const a=t.MAs(3),o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.statisticsData.data.length>0)("ngIfElse",a)}}function _(e,s){if(1&e&&(t.TgZ(0,"ion-col",24),t.YNc(1,F,4,2,"ng-container",4),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",!a.firstLoad)}}function C(e,s){if(1&e&&t._UZ(0,"app-table",31),2&e){const a=t.oxw(2);t.Q6J("data",a.statisticsData)("schema",a.schema)("buttons",t.DdM(3,h))}}function E(e,s){if(1&e&&(t.TgZ(0,"ion-col"),t.YNc(1,C,1,4,"app-table",30),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",!a.firstLoad)}}let $=(()=>{class e{constructor(a,o,l,p,H,R){this.screenSizeSrv=a,this.formBuilder=o,this.statisticSrv=l,this.loadingSrv=p,this.datePipe=H,this.dropdownsDataSrv=R,this.isDesktop$=this.screenSizeSrv.isDesktopView(),this.firstLoad=!0,this.statisticsData=new D.by,this.showForm=!0,this.departments$=this.dropdownsDataSrv.getData("Departments"),this.schema={properties:["organization","hours","requestsNum","status"],noSearch:!0,title:["department"],subtitle:["organization"]}}ngOnInit(){this.form=this.formBuilder.group({department:["",{validators:[r.kI.compose([r.kI.required])]}],startDate:["",{validators:[r.kI.compose([r.kI.required])]}],endDate:["",{validators:[r.kI.compose([r.kI.required])]}]})}onFormSubmit(){if(!this.form.valid)return;const a=this.datePipe.transform(this.form.value.startDate,"yyyy-MM-dd"),o=this.datePipe.transform(this.form.value.endDate,"yyyy-MM-dd");this.loadingSrv.showLoaderUntilCompleted(this.statisticSrv.getStatistics(`/Statistics/GetCumulativeStatisticsForDepartment/${this.form.value.department}/${a}/${o}`)).subscribe(l=>{this.statisticsData.data=l,this.firstLoad=!1})}onElementSelected(a){this.showForm=a}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(Z.j),t.Y36(r.qu),t.Y36(v._),t.Y36(x.b),t.Y36(m.uU),t.Y36(T.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-departments"]],decls:19,vars:16,consts:[[3,"translucent"],["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding",3,"fullscreen"],[4,"ngIf"],["size","12","size-md","8","offset-md","2",4,"ngIf","ngIfElse"],["table",""],["slot","end"],["size","12","size-md","8","offset-md","2","size-lg","8.5","offset-lg","1.5","size-xl","8","offset-xl","0"],[1,"filter-form",3,"formGroup"],["size","12","size-lg","5.5"],["appearance","outline","floatLabel","always","hideRequiredMarker","true"],["calendarLabel","Kalendar",3,"rangePicker"],["matStartDate","","formControlName","startDate",3,"placeholder"],["matEndDate","","formControlName","endDate",3,"placeholder"],["matIconSuffix","",3,"for"],["picker",""],["size","10","size-lg","5"],["formControlName","department"],[3,"value",4,"ngFor","ngForOf"],["size","2","size-lg","1.5"],["fill","solid","color","secondary",3,"disabled","click"],["slot","icon-only",3,"ios","md"],[3,"value"],["size","12","size-md","8","offset-md","2"],[3,"data","schema","buttons","hideSearch","showDetail","elementSelected",4,"ngIf","ngIfElse"],["noData",""],[3,"data","schema","buttons","hideSearch","showDetail","elementSelected"],[1,"no-data"],["name","alert-circle-outline",1,"no-data"],[3,"data","schema","buttons",4,"ngIf"],[3,"data","schema","buttons"]],template:function(a,o){if(1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"translate"),t.qZA(),t.YNc(8,z,2,0,"ion-buttons",2),t.ALo(9,"async"),t.qZA()(),t._UZ(10,"app-loading"),t.TgZ(11,"ion-content",3)(12,"ion-grid"),t.YNc(13,Q,30,20,"ion-row",4),t.TgZ(14,"ion-row"),t.YNc(15,_,2,1,"ion-col",5),t.ALo(16,"async"),t.YNc(17,E,2,1,"ng-template",null,6,t.W1O),t.qZA()()()),2&a){const l=t.MAs(18);t.Q6J("translucent",!0),t.xp6(5),t.AsE("",t.lcZ(6,8,"menuSections.statistics")," / ",t.lcZ(7,10,"pageTitles.departments"),""),t.xp6(3),t.Q6J("ngIf",t.lcZ(9,12,o.isDesktop$)),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngIf",o.showForm),t.xp6(2),t.Q6J("ngIf",!1===t.lcZ(16,14,o.isDesktop$))("ngIfElse",l)}},dependencies:[m.sg,m.O5,r._Y,r.Fj,r.JJ,r.JL,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.gu,i.fG,i.Nd,i.wd,i.sr,A.n,P.a,d.KE,d.hX,d.TO,d.R9,c.nW,c.wx,c.zY,c.By,c._g,r.sg,r.u,g.gD,S.ey,I.N,J.d,y.t,m.Ov,u.X$]}),e})();var w=n(1227),O=n(591),b=n(9299),G=n(4212),B=n(7392),j=n(284),K=n(6516),W=n(3627);let X=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,b.Bz.forChild([{path:"",component:$}]),r.u5,i.Pc,G.p,K.U,B.Ps,j.c,c.FA,r.UX,u.aw,g.LD,O.I,w.$,W.I]}),e})()}}]);