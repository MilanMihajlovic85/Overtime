using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CRUD_overtime;
using ViewModel_Overtime;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API/RequestData")]
    public class RequestDataController : ApiController
    {
        
        RequestData_CTL RequestDataCTL = new RequestData_CTL();

        [Route("GetAllOvertimeReasons")]
        public HttpResponseMessage GetAllOvertimeReasons()
            {
                 return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllOvertimeReasons());
            }


        [Route("GetAllProjectsForWO")]
        public HttpResponseMessage GetAllProjectsForWO()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllProjectsWO());
        }

        [Route("GetAllReportRoles")]
        public HttpResponseMessage GetAllReportRoles()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllReportRoles());
        }

        [Route("GetAllRequestStatuses")]
        public HttpResponseMessage GetAllRequestStatuses()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllRequestStatus());
        }

        [Route("GetAllWorkOrganizations")]
        public HttpResponseMessage GetAllWorkOrganizations()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllWorkOrganizations());
        }
    }
}
