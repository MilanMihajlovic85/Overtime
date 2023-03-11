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
        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();

        [HttpGet]
        [Route("Employee/GetMyRequests")]
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



            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetMyRequestedApprovals(ActualUser));
        }

        [HttpGet]
        [Route("Employee/GetMyPendingApprovals")]
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



            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetApprovalsPendingOnMe(ActualUser));
        }

        [HttpPost]
        [Route("Employee/UpdateRequestStatus/{RequestID:int}/{Status:int}")]
        public HttpResponseMessage UpdateRequestStatus (ChangeRequest_ViewModel Req)
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


            DbResponse = EmployeeCTL.ChangeRequestStatus(Req, ActualUser );


            if(DbResponse.ReturnInt==0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, DbResponse.ReturnText);
            }
        }

        [HttpPost]
        [Route("Employee/CreateRequest")]
        public HttpResponseMessage UpdateRequestStatus(OvertimeRequest_ViewModel request)
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


            DbResponse = EmployeeCTL.CreateRequest(ActualUser,request);


            if (DbResponse.ReturnInt == 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, DbResponse.ReturnText);
            }
        }
        }
}


