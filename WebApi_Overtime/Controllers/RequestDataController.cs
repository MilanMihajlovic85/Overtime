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
    [RoutePrefix("API/RequestData")]
    public class RequestDataController : ApiController
    {
        
        RequestData_CTL RequestDataCTL = new RequestData_CTL();

        [HttpGet]
        [Route("GetAllOvertimeReasons")]
        public HttpResponseMessage GetAllOvertimeReasons()
            {
                 return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllOvertimeReasons());
            }

        [HttpGet]
        [Route("GetAllProjectsForWO")]
        public HttpResponseMessage GetAllProjectsForWO()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllProjectsWO());
        }

        [HttpGet]
        [Route("GetAllReportRoles")]
        public HttpResponseMessage GetAllReportRoles()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllReportRoles());
        }

        [HttpGet]
        [Route("GetAllRequestStatuses")]
        public HttpResponseMessage GetAllRequestStatuses()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllRequestStatus());
        }

        [HttpGet]
        [Route("GetAllWorkOrganizations")]
        public HttpResponseMessage GetAllWorkOrganizations()
        {
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.GetAllWorkOrganizations());
        }

        [HttpGet]
        [Route("DataDriven_DDL_WorkOrganizations")]
        public HttpResponseMessage DDL_WorkOrganizations()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.DDLWorkOrganization(ActualUser));
        }

        [HttpGet]
        [Route("DataDriven_DDL_Projects")]
        public HttpResponseMessage DDL_Projects()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.DDLProject(ActualUser));
        }

        [HttpGet]
        [Route("DataDriven_DDL_Departments")]
        public HttpResponseMessage DDL_Departments()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            return Request.CreateResponse(HttpStatusCode.OK, RequestDataCTL.DDLDepartment(ActualUser));
        }

    }
}
