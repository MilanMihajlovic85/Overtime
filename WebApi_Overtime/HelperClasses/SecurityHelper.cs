using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
                    string EmployeeID = SessionState.AllSessions.Where(s => s.ApiKey == Key).Select(u=>u.EmployeeID).FirstOrDefault().ToString();

                    if (EmployeeID != null && EmployeeID.Length > 0)
                    {
                        List<Claim> Claims = new List<Claim>()
                        {
                            new Claim(ClaimTypes.Name, EmployeeID)
                        };

                        ClaimsIdentity id = new ClaimsIdentity(Claims, "WEB");
                        ClaimsPrincipal CP = new ClaimsPrincipal(id);

                        Thread.CurrentPrincipal = CP;
                        HttpContext.Current.User = CP;

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