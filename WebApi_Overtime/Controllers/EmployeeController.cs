using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API")]
    public class EmployeeController : ApiController
    {
        [Route("Employee/{EmployeeID}")]
        public HttpResponseMessage GetMyPendingApprovals(string EmployeeID)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();


            return Request.CreateResponse(HttpStatusCode.OK, "radi");
        }
    }
}
