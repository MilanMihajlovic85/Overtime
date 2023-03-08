using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ViewModel_Overtime;
using CRUD_overtime;

namespace WebApi_Overtime.HelperClasses
{
    public static class SessionState
    {
        private static SessionHelper_CRUD SessionHelper = new SessionHelper_CRUD();
        public static List<SessionUser_ViewModel> AllSessions = new List<SessionUser_ViewModel>();
        public static void RefreshSessions()
        {
            AllSessions.Clear();

            SessionHelper.GetAllSessionsFromDatabase().ForEach(x => AllSessions.Add(new SessionUser_ViewModel() { ApiKey = x.ApiKey, EmployeeID = x.EmployeeID }));

        }

    }
}