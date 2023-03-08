using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ViewModel_Overtime;
using CRUD_overtime;
using System.Threading;

namespace WebApi_Overtime.Controllers
{
    [RoutePrefix("API")]
    public class LoginController : ApiController
    {
        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();
        LogedUser_ViewModel LogedUser = new LogedUser_ViewModel();
        Login_CTL LoginCTL = new Login_CTL();
        Login_ViewModel LoginModel = new Login_ViewModel();

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

        [Route("Login")]
        public HttpResponseMessage Login(Login_ViewModel LoginModel)
        {
            string ActualUser = Thread.CurrentPrincipal.Identity.Name;
            string AppName = Request.Headers.UserAgent.FirstOrDefault().Product.Name.FirstOrDefault().ToString();

            LogedUser = LoginCTL.Login(LoginModel.EmployeeID, LoginModel.LoginCode, LoginModel.EmployeeID, AppName);

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
    }
}
