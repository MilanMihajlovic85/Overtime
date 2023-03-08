using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading;
using ViewModel_Overtime;
using CRUD_overtime;
using System.Web;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API")]
    public class EmployeeController : ApiController
    {
        Employee_CTL EmployeeCTL = new Employee_CTL();

        [HttpGet]
        [Route("Employee/MyRequests")]
        public HttpResponseMessage GetMyRequestedApprovals()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
            string ApiKey = string.Empty;

            IEnumerable<string> ApiKeyHeader = HttpContext.Current.Request.Headers.GetValues("ApiKey");

            if (ApiKeyHeader == null || ApiKeyHeader.Count() == 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "ApiKey not proided");
            }
            else
            {
                ApiKey = ApiKeyHeader.FirstOrDefault();
            }



            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetMyRequestedApprovals(ApiKey));
        }

        [HttpGet]
        [Route("Employee/MyPendingApprovals")]
        public HttpResponseMessage GetMyPendingApprovals()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
            string ApiKey = string.Empty;

            IEnumerable<string> ApiKeyHeader = HttpContext.Current.Request.Headers.GetValues("ApiKey");

            if (ApiKeyHeader == null || ApiKeyHeader.Count() == 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "ApiKey not proided");
            }
            else
            {
                ApiKey = ApiKeyHeader.FirstOrDefault();
            }



            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetApprovalsPendingOnMe(ApiKey));
        }
    }
}


