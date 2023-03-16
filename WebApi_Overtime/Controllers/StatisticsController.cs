using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web;
using System.Web.Http;
using CRUD_overtime;
using ViewModel_Overtime;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API/Statistics")]
    public class StatisticsController : ApiController
    {
        Statistics_CTL StatisticsCTL = new Statistics_CTL();

        [HttpGet]
        [Route("GetCumulativeStatisticsForWO/{WorkOrganization}/{StartDate}/{EndDate}")]
        public HttpResponseMessage GetCumulativeStatisticsForWO(string WorkOrganization,DateTime StartDate, DateTime EndDate)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
    
           return Request.CreateResponse(HttpStatusCode.OK, StatisticsCTL.GetCumuativeStatisticsForWO(ActualUser,WorkOrganization, StartDate, EndDate));
        }

        [HttpGet]
        [Route("GetCumulativeStatisticsForDepartment/{DepartmentName}/{StartDate}/{EndDate}")]
        public HttpResponseMessage GetCumulativeStatisticsForDepartment(string DepartmentName,DateTime StartDate, DateTime EndDate)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();

            return Request.CreateResponse(HttpStatusCode.OK, StatisticsCTL.GetCumuativeStatisticsForDept(ActualUser,DepartmentName, StartDate, EndDate));
        }
    }
}
