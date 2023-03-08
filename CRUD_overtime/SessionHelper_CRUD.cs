using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel_Overtime;
using Entity_Overtime;

namespace CRUD_overtime
{
   public  class SessionHelper_CRUD
    {
        public List<SessionUser_ViewModel> GetAllSessionsFromDatabase()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.GetAllSessions().Select(s => new SessionUser_ViewModel()
                {
                    ApiKey = s.ApiKey,
                    EmployeeID = s.EmployeeID
                }).ToList();
            }
        }
    }
}
