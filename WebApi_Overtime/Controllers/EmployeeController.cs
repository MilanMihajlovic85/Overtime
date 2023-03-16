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
using Microsoft.AspNet.SignalR;
using WebApi_Overtime.SignalR;
using System.Text.Json;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API")]
    public class EmployeeController : ApiController
    {
        Employee_CTL EmployeeCTL = new Employee_CTL();
        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();
        DbRsponseSignalR_ViewModel DbResponseSignalR = new DbRsponseSignalR_ViewModel();

        [HttpGet]
        [Route("Employee/GetMyRequests")]
        public HttpResponseMessage GetMyRequestedApprovals()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();




            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetMyRequestedApprovals(ActualUser));
        }

        [HttpGet]
        [Route("Employee/GetMyPendingApprovals")]
        public HttpResponseMessage GetMyPendingApprovals()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;


            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetApprovalsPendingOnMe(ActualUser));
        }

        [HttpPost]
        [Route("Employee/UpdateRequestStatus")]
        public HttpResponseMessage UpdateRequestStatus (ChangeRequest_ViewModel Req)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();


            DbResponseSignalR = EmployeeCTL.ChangeRequestStatus(Req, ActualUser );

            DbResponse.ReturnInt = DbResponseSignalR.ReturnInt;
            DbResponse.ReturnText = DbResponseSignalR.ReturnText;

            if (DbResponse.ReturnInt==0)
            {
                var ConContext = GlobalHost.ConnectionManager.GetConnectionContext<SignalR_Persist>();

                if (DbResponseSignalR.ReturnEmployeeID != null)
                {
                    string ConnectionID = SignalR_Groups.GetConnectionForUSer(DbResponseSignalR.ReturnEmployeeID);

                    if (ConnectionID != null)
                    {
                        ConContext.Connection.Send(ConnectionID, EmployeeCTL.GetAllWaitings(DbResponseSignalR.ReturnEmployeeID));
                    }

                }
                if (DbResponseSignalR.ReturnMangerID != null)
                {
                    string ConnectionID = SignalR_Groups.GetConnectionForUSer(DbResponseSignalR.ReturnMangerID);
                    if (ConnectionID != null)
                    {
                        ConContext.Connection.Send(ConnectionID, EmployeeCTL.GetAllWaitings(DbResponseSignalR.ReturnMangerID));

                    }

                }


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



            DbResponseSignalR = EmployeeCTL.CreateRequest(ActualUser,request);

            DbResponse.ReturnInt = DbResponseSignalR.ReturnInt;
            DbResponse.ReturnText = DbResponseSignalR.ReturnText;

            if (DbResponse.ReturnInt == 0)
            {
                var ConContext = GlobalHost.ConnectionManager.GetConnectionContext<SignalR_Persist>();

                if (DbResponseSignalR.ReturnEmployeeID != null)
                {
                    string ConnectionID = SignalR_Groups.GetConnectionForUSer(DbResponseSignalR.ReturnEmployeeID);

                    if(ConnectionID!=null)
                    {
                        ConContext.Connection.Send(ConnectionID, EmployeeCTL.GetAllWaitings(DbResponseSignalR.ReturnEmployeeID));
                    }
 
                }
                if (DbResponseSignalR.ReturnMangerID != null)
                {
                    string ConnectionID = SignalR_Groups.GetConnectionForUSer(DbResponseSignalR.ReturnMangerID);
                    if(ConnectionID!=null)
                    {
                        ConContext.Connection.Send(ConnectionID, EmployeeCTL.GetAllWaitings(DbResponseSignalR.ReturnMangerID));

                    }

                }

                return Request.CreateResponse(HttpStatusCode.Created,EmployeeCTL.GetLastCreatedRequestyEmpployee(ActualUser));
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, DbResponse.ReturnText);
            }
        }

        [HttpDelete]
        [Route("Employee/DeleteRequest/{RequestID}")]
        public HttpResponseMessage DeleteRequest(int RequestID)
        {
         

            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();


           DbResponseSignalR = EmployeeCTL.DeleteRequest(RequestID,ActualUser);

            DbResponse.ReturnInt = DbResponseSignalR.ReturnInt;
            DbResponse.ReturnText = DbResponseSignalR.ReturnText;


            if (DbResponse.ReturnInt == 0)
            {
                var ConContext = GlobalHost.ConnectionManager.GetConnectionContext<SignalR_Persist>();

                if (DbResponseSignalR.ReturnEmployeeID != null)
                {
                    string ConnectionID = SignalR_Groups.GetConnectionForUSer(DbResponseSignalR.ReturnEmployeeID);

                    if (ConnectionID != null)
                    {
                        ConContext.Connection.Send(ConnectionID, EmployeeCTL.GetAllWaitings(DbResponseSignalR.ReturnEmployeeID));
                    }

                }
                if (DbResponseSignalR.ReturnMangerID != null)
                {
                    string ConnectionID = SignalR_Groups.GetConnectionForUSer(DbResponseSignalR.ReturnMangerID);
                    if (ConnectionID != null)
                    {
                        ConContext.Connection.Send(ConnectionID, EmployeeCTL.GetAllWaitings(DbResponseSignalR.ReturnMangerID));

                    }

                }


                return Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotAcceptable, DbResponse.ReturnText);
            }
        }

        [HttpGet]
        [Route("Employee/GetAllPendingsCount")]
        public HttpResponseMessage GetCountApprovalRequests()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();

            return Request.CreateResponse(HttpStatusCode.OK, EmployeeCTL.GetAllWaitings(ActualUser));
        }

    }
}


