using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace WebApi_Overtime.HelperClasses
{
    public class SecurityHelper : AuthorizeAttribute
    {
        protected override bool IsAuthorized(HttpActionContext actionContext)
        {
      
            IEnumerable<string> ApiKey = null;
            actionContext.Request.Headers.TryGetValues("ApiKey",out ApiKey );

            if(ApiKey==null || ApiKey.Count()==0)
            {
                return false;
            }
            else
            {
                string Key = ApiKey.FirstOrDefault().ToString();

                if (SessionState.AllSessions.Count() == 0)
                {
                    SessionState.RefreshSessions();
                }

                if (SessionState.AllSessions.Where(s => s.ApiKey == Key).Count() > 0)
                {
                    string EmployeeID = SessionState.AllSessions.Where(s => s.ApiKey == Key).FirstOrDefault().ToString();

                    if (EmployeeID != null && EmployeeID.Length > 0)
                    {
                        var User = new GenericPrincipal(new GenericIdentity(EmployeeID), new string[] { });
                        Thread.CurrentPrincipal = User;
                        HttpContext.Current.User = User;

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


            //return base.IsAuthorized(actionContext);
        }
    }
}