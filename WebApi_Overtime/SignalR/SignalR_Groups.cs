using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi_Overtime.SignalR
{
    public static class SignalR_Groups
    {
        public static Dictionary<string, string> UsersGroups = new Dictionary<string, string>();

        public static void AddConnectionToGroup(string userID, string connectionID)
        {
            if(userID!=null)
            {
                if (!UsersGroups.Keys.Contains(userID))
                {
                    UsersGroups.Add(userID, connectionID);
                }
                else
                {
                    UsersGroups[userID] = connectionID;
                }
            }
           
        }

        public static void RemoveConnectionToGroup(string connectionID)
        {
            string userID = UsersGroups.Where(x => x.Value == connectionID).Select(u => u.Key).FirstOrDefault();
            if(userID!=null)
            {
                if (UsersGroups.ContainsKey(userID))
                {
                    UsersGroups.Remove(userID);
                }
            }
            
 
        }

        public static string GetConnectionForUSer(string UserID)
        {
           return  UsersGroups.Where(x => x.Key == UserID).Select(u => u.Value).FirstOrDefault();
           


        }

    }
}