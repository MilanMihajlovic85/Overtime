using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity_Overtime;
using ViewModel_Overtime;

namespace CRUD_overtime
{
   public class Statistics_CTL
    {
        public List<StatsDEPTCumulative_ViewModel> GetCumuativeStatisticsForDept(string EmployeeID, DateTime StartDate, DateTime EndaDate)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
              return  baza.CumulativeOvertimeForDepartment(EmployeeID, StartDate, EndaDate).Select(x => new StatsDEPTCumulative_ViewModel()
                {
                    Department = x.Requestor_Department,
                    Hours = x.RequestedHours,
                    NumberOfRequests = x.NumberOfRequests,
                    Status = x.Status,
                    WorkOrganization = x.Requestor_WO
                }
                    ).ToList() ;
            }
        }

        public List<StatsWOCumulative_ViewModel> GetCumuativeStatisticsForWO(string EmployeeID, DateTime StartDate, DateTime EndaDate)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.CumulativeOvertimeForWO(EmployeeID, StartDate, EndaDate).Select(x => new StatsWOCumulative_ViewModel()
                {
                    NumberOfRequests=x.NumberOfRequests,
                    Hours=x.RequestedHours,
                    Status = x.Status,
                    WorkOrganization = x.Requestor_WO
                }
                      ).ToList();
            }
        }
    }
}
