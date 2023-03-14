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
        public HttpResponseMessage GetCumulativeStatisticsForWO(string WorOrganization,DateTime StartDate, DateTime EndDate)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
            string ApiKey = string.Empty;

            IEnumerable<string> ApiKeyHeader = HttpContext.Current.Request.Headers.GetValues("ApiKey");

            if (ApiKeyHeader == null || ApiKeyHeader.Count() == 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "ApiKey not provided");
            }
            else
            {
                ApiKey = ApiKeyHeader.FirstOrDefault();
            }

           return Request.CreateResponse(HttpStatusCode.OK, StatisticsCTL.GetCumuativeStatisticsForWO(ActualUser,WorOrganization, StartDate, EndDate));
        }

        [HttpGet]
        [Route("GetCumulativeStatisticsForDepartment/{DepartmentName}/{StartDate}/{EndDate}")]
        public HttpResponseMessage GetCumulativeStatisticsForDepartment(string DepartmentName,DateTime StartDate, DateTime EndDate)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
            string ApiKey = string.Empty;

            IEnumerable<string> ApiKeyHeader = HttpContext.Current.Request.Headers.GetValues("ApiKey");

            if (ApiKeyHeader == null || ApiKeyHeader.Count() == 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "ApiKey not provided");
            }
            else
            {
                ApiKey = ApiKeyHeader.FirstOrDefault();
            }

            return Request.CreateResponse(HttpStatusCode.OK, StatisticsCTL.GetCumuativeStatisticsForDept(ActualUser,DepartmentName, StartDate, EndDate));
        }
    }
}
