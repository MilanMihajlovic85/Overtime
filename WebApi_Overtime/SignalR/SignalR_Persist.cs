using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApi_Overtime.HelperClasses;
using WebApi_Overtime.SignalR;
using CRUD_overtime;
using System.Text.Json;

namespace WebApi_Overtime
{
    public class SignalR_Persist : PersistentConnection
    {
        CRUD_overtime.Employee_CTL EmployeCTL = new Employee_CTL();
        [Microsoft.AspNet.SignalR.Authorize]

        protected override Task OnConnected(IRequest request, string connectionId)
        {
            string ApiKey = request.QueryString["ApiKey"];
            string UserId="";

            if (ApiKey != null)
            {
                UserId = SessionState.AllSessions.Where(u => u.ApiKey == ApiKey).Select(k => k.EmployeeID).FirstOrDefault();
                if(UserId!=null)
                {
                    SignalR_Groups.AddConnectionToGroup(UserId, connectionId);
                  return  this.Connection.Send(connectionId, EmployeCTL.GetAllWaitings(UserId));

                }    
                else
                {
                    return this.OnConnected(request, connectionId);
                }
            }
            else
            {
                return this.OnConnected(request, connectionId);
            }

        
            
        }
        protected override Task OnDisconnected(IRequest request, string connectionId, bool stopCalled)
        {
           SignalR.SignalR_Groups.RemoveConnectionToGroup(connectionId);

            return base.OnDisconnected(request, connectionId, stopCalled);
        }

        protected override Task OnReconnected(IRequest request, string connectionId)
        {
            string ApiKey = request.QueryString["ApiKey"];
            string UserId = SessionState.AllSessions.Where(u => u.ApiKey == ApiKey).Select(k => k.EmployeeID).FirstOrDefault();


            SignalR.SignalR_Groups.AddConnectionToGroup(ApiKey, connectionId);
            return base.OnReconnected(request, connectionId);
        }

        public void SendNotification(string UserId, ViewModel_Overtime.WaitingApprovals_ViewModel msg)
        {

            string SerMsg = System.Text.Json.JsonSerializer.Serialize(msg);

            string connectionID = SignalR_Groups.UsersGroups[UserId];
            if(UserId!=null)
            {
                this.Connection.Send(connectionID, SerMsg);
            }
            
        }

        protected override bool AuthorizeRequest(IRequest request)
        {
            string ApiKey = request.QueryString["ApiKey"];
            if(ApiKey!=null)
            {
                var User = SessionState.AllSessions.Where(x => x.ApiKey == ApiKey).FirstOrDefault();

                if (User!=null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
         
        }
    }
}