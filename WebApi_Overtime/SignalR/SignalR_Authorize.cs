using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi_Overtime.HelperClasses;

namespace WebApi_Overtime.SignalR
{
    public class SignalR_Authorize : AuthorizeAttribute
    {
        public override bool AuthorizeHubConnection(HubDescriptor hubDescriptor, IRequest request)
        {
            var x = HttpContext.Current.Request.QueryString["ApiKey"];
            string ApiKey = request.QueryString["ApiKey"];
            string UserId = "";
           

            if (ApiKey != null)
            {
                UserId = SessionState.AllSessions.Where(u => u.ApiKey == ApiKey).Select(k => k.EmployeeID).FirstOrDefault();
                if (UserId != null)
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
        public override bool AuthorizeHubMethodInvocation(IHubIncomingInvokerContext hubIncomingInvokerContext, bool appliesToMethod)
        {
            string ApiKey = hubIncomingInvokerContext.Hub.Context.QueryString["ApiKey"];
            string UserId = "";


            if (ApiKey != null)
            {
                UserId = SessionState.AllSessions.Where(u => u.ApiKey == ApiKey).Select(k => k.EmployeeID).FirstOrDefault();
                if (UserId != null)
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