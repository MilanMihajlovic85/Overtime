using CRUD_overtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ViewModel_Overtime;

namespace WebApi_Overtime.HelperClasses
{
    public static class WEBSessionState
    {
        private static WEBSessionHelper_CRUD WEBSessionHelper = new WEBSessionHelper_CRUD();
        public static List<SessionUser_ViewModel> AllWebSessions = new List<SessionUser_ViewModel>();
        public static void RefreshSessions()
        {
            AllWebSessions.Clear();

            WEBSessionHelper.GetAllSessionsFromDatabase().ForEach(x => AllWebSessions.Add(new SessionUser_ViewModel() { ApiKey = x.ApiKey, EmployeeID = x.EmployeeID }));

        }

        public static void AddConnectionSignalR(string ConnectionID, string ApiKey)
        {
            if (AllWebSessions.Where(x => x.ConnectionID == ConnectionID).Count() == 0)
            {
                var user = AllWebSessions.Where(s => s.ApiKey == ApiKey).FirstOrDefault();
                AllWebSessions.Remove(user);

                user.ConnectionID = ConnectionID;

                AllWebSessions.Add(user);
            }
        }

        public static void RemoveConnectionSignalR(string ConnectionID)
        {
            if (AllWebSessions.Where(x => x.ConnectionID == ConnectionID).Count() == 0)
            {
                var user = AllWebSessions.Where(s => s.ConnectionID == ConnectionID).FirstOrDefault();
                AllWebSessions.Remove(user);

                user.ConnectionID = null;

                AllWebSessions.Add(user);
            }
        }
    }
}