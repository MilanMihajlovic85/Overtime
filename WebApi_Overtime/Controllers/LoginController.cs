using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ViewModel_Overtime;
using CRUD_overtime;
using System.Threading;
using WebApi_Overtime.HelperClasses;
using System.Web;

namespace WebApi_Overtime.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("API")]
    public class LoginController : ApiController
    {
        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();
        LogedUser_ViewModel LogedUser = new LogedUser_ViewModel();
        Login_CTL LoginCTL = new Login_CTL();
        Login_ViewModel LoginModel = new Login_ViewModel();

        [HttpGet]
        [Route("PreLogin/{EmployeeID}")]
        public HttpResponseMessage PreLogin(string EmployeeID)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();

            DbResponse = LoginCTL.PreLogin(EmployeeID, EmployeeID, AppName);

            if(DbResponse.ReturnInt==0)
            {
             return   Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, DbResponse.ReturnText);
            }


        }

        [HttpGet]
        [Route("Login/{LoginCode}")]
        public HttpResponseMessage Login(int LoginCode)
        {

            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();


            LogedUser = LoginCTL.Login( LoginCode,"Anonymous", AppName);

            SessionState.RefreshSessions();

            var x = SessionState.AllSessions;

            if(LogedUser.ReturnInt==0)
            {
                AuthorizedUser AuthUser = new AuthorizedUser();

                AuthUser.ApiKey = LogedUser.ApiKey;
                AuthUser.EmployeeID = LogedUser.EmployeeID;
                AuthUser.FullName = LogedUser.FullName;

                return Request.CreateResponse(HttpStatusCode.OK, AuthUser);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.Unauthorized, LogedUser.ReturnText);
            } 



        }

        [HttpGet]
        [Route("Logout")]
        public HttpResponseMessage Logout()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
            string ApiKey = string.Empty;

            IEnumerable<string> ApiKeyHeader =  HttpContext.Current.Request.Headers.GetValues("ApiKey");

            if (ApiKeyHeader == null || ApiKeyHeader.Count() == 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "ApiKey not proided");
            }
            else
            {
                ApiKey = ApiKeyHeader.FirstOrDefault();
            }

                DbResponse = LoginCTL.Logout(ApiKey, ActualUser, AppName);

            if (DbResponse.ReturnInt == 0)
            {
                SessionUser_ViewModel SessionUser = new SessionUser_ViewModel();

                SessionUser = SessionState.AllSessions.Where(s => s.ApiKey == ApiKey).FirstOrDefault();

                SessionState.AllSessions.Remove(SessionUser);
                return Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, DbResponse.ReturnText);
            }


        }
    }
}
