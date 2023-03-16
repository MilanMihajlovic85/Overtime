using CRUD_overtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web;
using System.Web.Http;
using ViewModel_Overtime;
using WebApi_Overtime.HelperClasses;

namespace WebApi_Overtime.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("API")]
    public class WebLoginController : ApiController
    {
        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();
        LogedUser_ViewModel LogedUser = new LogedUser_ViewModel();
        WEBLogin_CTL WEBLoginCTL = new WEBLogin_CTL();
        Login_ViewModel LoginModel = new Login_ViewModel();

        [HttpGet]
        [Route("WebPreLogin/{EmployeeID}")]
        public HttpResponseMessage PreLogin(string EmployeeID)
        {
         
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();

            DbResponse = WEBLoginCTL.W_PreLogin(EmployeeID, EmployeeID, AppName);

            if (DbResponse.ReturnInt == 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, DbResponse.ReturnText);
            }


        }

        [HttpGet]
        [Route("WebLogin/{LoginCode}")]
        public HttpResponseMessage Login(int LoginCode)
        {

            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();


            LogedUser = WEBLoginCTL.W_Login(LoginCode, "Anonymous", AppName);

            WEBSessionState.RefreshSessions();

            var x = WEBSessionState.AllWebSessions;

            if (LogedUser.ReturnInt == 0)
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
        [Route("WebPreLogin/Logout")]
        public HttpResponseMessage Logout()
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();
            string ApiKey = string.Empty;

            IEnumerable<string> ApiKeyHeader = HttpContext.Current.Request.Headers.GetValues("ApiKey");

            if (ApiKeyHeader == null || ApiKeyHeader.Count() == 0)
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, "ApiKey not proided");
            }
            else
            {
                ApiKey = ApiKeyHeader.FirstOrDefault();
            }

            DbResponse = WEBLoginCTL.W_Logout(ApiKey, ActualUser, AppName);

            if (DbResponse.ReturnInt == 0)
            {
                SessionUser_ViewModel SessionUser = new SessionUser_ViewModel();

                SessionUser = WEBSessionState.AllWebSessions.Where(s => s.ApiKey == ApiKey).FirstOrDefault();

                WEBSessionState.AllWebSessions.Remove(SessionUser);
                return Request.CreateResponse(HttpStatusCode.OK, DbResponse.ReturnText);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.Forbidden, DbResponse.ReturnText);
            }


        }
    }
}
