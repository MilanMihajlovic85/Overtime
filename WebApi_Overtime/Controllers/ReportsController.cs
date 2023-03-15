using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using CRUD_overtime;
using ViewModel_Overtime;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API/Reports")]
    public class ReportsController : ApiController
    {
        Report_CTL ReportCTL = new Report_CTL();

        [HttpGet]
        [Route("MyRequestsFromHistory/{StartDate}/{EndDate}/{Rows}/{Pages}")]
        public HttpResponseMessage GetAllMyRequestsFromHistory(DateTime StartDate, DateTime EndDate, int Rows,int Pages)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetAllMyOvertimesFromHistory(ActualUser, Rows, Pages,StartDate, EndDate));
        }

        [HttpGet]
        [Route("DepartmentFromHistory/{DepartmentName}/{StartDate}/{EndDate}/{Rows}/{Pages}")]
        public HttpResponseMessage GetAllDepartmentRequestsFromHistory(string DepartmentName,DateTime StartDate, DateTime EndDate, int Rows, int Pages)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetOvertimesFromHistoryForDepartment(ActualUser,DepartmentName,Rows,Pages,StartDate, EndDate));
        }

        [HttpGet]
        [Route("WOFromHistory/{WOName}/{StartDate}/{EndDate}/{Rows}/{Pages}")]
        public HttpResponseMessage GetAllWORequestsFromHistory(string WOName, DateTime StartDate, DateTime EndDate, int Rows, int Pages)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetOvertimesFromHistoryForWO(ActualUser,WOName,Rows,Pages,StartDate,EndDate));
        }

        [HttpGet]
        [Route("ProjectFromHistory/{ProjectName}/{StartDate}/{EndDate}/{Rows}/{Pages}")]
        public HttpResponseMessage GetAllProjectRequestsFromHistory(string ProjectName ,DateTime StartDate, DateTime EndDate, int Rows, int Pages)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetOvertimesFromHistoryForProject(ActualUser,ProjectName, Rows,Pages,StartDate, EndDate));
        }
    }
}
