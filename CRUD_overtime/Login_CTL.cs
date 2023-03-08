using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel_Overtime;
using Entity_Overtime;
using System.Data.Entity.Core.Objects;

namespace CRUD_overtime
{
    public class Login_CTL
    {
        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();

        // SQL Params
        ObjectParameter ReturnInt = new ObjectParameter("ReturnInt", typeof(int));
        ObjectParameter ReturnText = new ObjectParameter("ReturnText", typeof(string));
        public DBResponse_ViewModel PreLogin(string EmployeeID, string ActualUser, string AppName)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                baza.PreLogin(ActualUser, EmployeeID, AppName, ReturnInt, ReturnText);

                DbResponse.ReturnInt = (int)ReturnInt.Value;
                DbResponse.ReturnText = ReturnText.Value.ToString();

                return DbResponse;
            }
        }

        public LogedUser_ViewModel Login( int LoginCode ,string ActualUser, string AppName)
        {
            LogedUser_ViewModel LogedUser = new LogedUser_ViewModel();

            ObjectParameter Loged_ApiKey = new ObjectParameter("Loged_ApiKey", typeof(string));
            ObjectParameter Loged_EmployeeID = new ObjectParameter("Loged_EmployeeID", typeof(string));
            ObjectParameter Loged_EmpoloyeeName = new ObjectParameter("Loged_EmployeeName", typeof(string));



            using (OvertimeEntities baza = new OvertimeEntities())
            {
                baza.Login(ActualUser,LoginCode, Loged_ApiKey,Loged_EmpoloyeeName,Loged_EmployeeID ,AppName, ReturnInt, ReturnText);

                LogedUser.ReturnInt = (int)ReturnInt.Value;
                LogedUser.ReturnText = ReturnText.Value.ToString();
                LogedUser.ApiKey = Loged_ApiKey.Value.ToString();
                LogedUser.EmployeeID = Loged_EmployeeID.Value.ToString();
                LogedUser.FullName = Loged_EmpoloyeeName.Value.ToString();

                return LogedUser;

            }
        }

        public DBResponse_ViewModel Logout(string EmployeeID, string ActualUser, string AppName)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                baza.Logout(ActualUser, EmployeeID, AppName, ReturnInt, ReturnText);

                DbResponse.ReturnInt = (int)ReturnInt.Value;
                DbResponse.ReturnText = ReturnText.Value.ToString();

                return DbResponse;
            }
        }



    }
}
