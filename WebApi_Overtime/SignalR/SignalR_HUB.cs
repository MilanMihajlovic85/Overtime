using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApi_Overtime.HelperClasses;
using CRUD_overtime;

namespace WebApi_Overtime.SignalR
{
    [SignalR_Authorize]
    public class SignalR_HUB : Hub
    {
        Employee_CTL EmployeeCTL = new Employee_CTL();
        public override Task OnConnected()
        {
           
            string ApiKey = this.Context.QueryString["ApiKey"];
            string UserId = "";
            string connectionId = Context.ConnectionId;

            if (ApiKey != null)
            {
                UserId = SessionState.AllSessions.Where(u => u.ApiKey == ApiKey).Select(k => k.EmployeeID).FirstOrDefault();
                if (UserId != null)
                {
                    SignalR_Groups.AddConnectionToGroup(UserId, connectionId);
                    SendNotification(UserId);

                }
            }

            return base.OnConnected();
        }

        public void SendNotification(string UserId)
        {
            ViewModel_Overtime.WaitingApprovals_ViewModel msg = EmployeeCTL.GetAllWaitings(UserId);
            string SerMsg = System.Text.Json.JsonSerializer.Serialize(msg);

            string connectionID = SignalR_Groups.UsersGroups[UserId];
            if (connectionID != null)
            {
                Clients.Client(connectionID).Notify(SerMsg);
                
            }

        }
    }
}