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
        [Route("MyRequestsFromHistory/{StartDate}/{EndDate}/{Rows}")]
        public HttpResponseMessage GetAllMyRequestsFromHistory(DateTime StartDate, DateTime EndDate, int Rows=100)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetAllMyOvertimesFromHistory(ActualUser, Rows,StartDate, EndDate));
        }

        [HttpGet]
        [Route("DepartmentFromHistory/{DepartmentName}/{StartDate}/{EndDate}/{Rows}")]
        public HttpResponseMessage GetAllDepartmentRequestsFromHistory(string DepartmentName,DateTime StartDate, DateTime EndDate, int Rows=100)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetOvertimesFromHistoryForDepartment(ActualUser,DepartmentName,Rows,StartDate, EndDate));
        }

        [HttpGet]
        [Route("WOFromHistory/{WOName}/{StartDate}/{EndDate}/{Rows}")]
        public HttpResponseMessage GetAllWORequestsFromHistory(string WOName, DateTime StartDate, DateTime EndDate, int Rows=100)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetOvertimesFromHistoryForWO(ActualUser,WOName,Rows,StartDate,EndDate));
        }

        [HttpGet]
        [Route("ProjectFromHistory/{ProjectName}/{StartDate}/{EndDate}/{Rows}")]
        public HttpResponseMessage GetAllProjectRequestsFromHistory(string ProjectName ,DateTime StartDate, DateTime EndDate, int Rows=100)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;

            return Request.CreateResponse(HttpStatusCode.OK, ReportCTL.GetOvertimesFromHistoryForProject(ActualUser,ProjectName, Rows,StartDate, EndDate));
        }
    }
}
