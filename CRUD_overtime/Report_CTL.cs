using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity_Overtime;
using ViewModel_Overtime;

namespace CRUD_overtime
{
    public class Report_CTL
    {
        public List<Report_ViewModel> GetAllMyOvertimesFromHistory(string EmployeeID, DateTime StartDate , DateTime EndDate)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.MyOvertimesRequestsFromHistory(EmployeeID,StartDate,EndDate).Select(e => new Report_ViewModel()
                {
                    Requestor_ID = e.Requestor_ID,
                    Requestor_Department = e.Requestor_Department,
                    Requestor_FullName = e.Requestor_FullName,
                    Requestor_WO = e.Requestor_WO,
                    Requestor_Manager = e.Requestor_Manager,
                    Requestor_For_Project = e.Requestor_For_Project,
                    Requestor_For_WO = e.Requestor_For_WO,
                    Requestor_WO_Manager = e.Requestor_WO_Manager,
                    Reason = e.Reason,
                    Start_Time = e.Start_Time,
                    End_Time = e.End_Time,
                    Minutes = e.Minutes,
                    Status = e.Status

                }).ToList();
            }
        }
        public List<Report_ViewModel> GetOvertimesFromHistoryForDepartment(string EmployeeID,string Department, DateTime StartDate, DateTime EndDate)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.DepartmentAprrovalsFromHistory(EmployeeID,Department,StartDate,EndDate).Select(e => new Report_ViewModel()
                {
                    Requestor_ID = e.Requestor_ID,
                    Requestor_Department = e.Requestor_Department,
                    Requestor_FullName = e.Requestor_FullName,
                    Requestor_WO = e.Requestor_WO,
                    Requestor_Manager = e.Requestor_Manager,
                    Requestor_For_Project = e.Requestor_For_Project,
                    Requestor_For_WO = e.Requestor_For_WO,
                    Requestor_WO_Manager = e.Requestor_WO_Manager,
                    Reason = e.Reason,
                    Start_Time = e.Start_Time,
                    End_Time = e.End_Time,
                    Minutes = e.Minutes,
                    Status = e.Status

                }).ToList();
            }
        }

        public List<Report_ViewModel> GetOvertimesFromHistoryForProject(string EmployeeID, string ProjectName, DateTime StartDate, DateTime EndDate)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.ProjectAprrovalsFromHistory(EmployeeID,ProjectName, StartDate, EndDate).Select(e => new Report_ViewModel()
                {
                    Requestor_ID = e.Requestor_ID,
                    Requestor_Department = e.Requestor_Department,
                    Requestor_FullName = e.Requestor_FullName,
                    Requestor_WO = e.Requestor_WO,
                    Requestor_Manager = e.Requestor_Manager,
                    Requestor_For_Project = e.Requestor_For_Project,
                    Requestor_For_WO = e.Requestor_For_WO,
                    Requestor_WO_Manager = e.Requestor_WO_Manager,
                    Reason = e.Reason,
                    Start_Time = e.Start_Time,
                    End_Time = e.End_Time,
                    Minutes = e.Minutes,
                    Status = e.Status

                }).ToList();
            }
        }

        public List<Report_ViewModel> GetOvertimesFromHistoryForWO(string EmployeeID, string WO_Name, DateTime StartDate, DateTime EndDate)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.WOAprrovalsFromHistory(EmployeeID,WO_Name, StartDate, EndDate).Select(e => new Report_ViewModel()
                {
                    Requestor_ID = e.Requestor_ID,
                    Requestor_Department = e.Requestor_Department,
                    Requestor_FullName = e.Requestor_FullName,
                    Requestor_WO = e.Requestor_WO,
                    Requestor_Manager = e.Requestor_Manager,
                    Requestor_For_Project = e.Requestor_For_Project,
                    Requestor_For_WO = e.Requestor_For_WO,
                    Requestor_WO_Manager = e.Requestor_WO_Manager,
                    Reason = e.Reason,
                    Start_Time = e.Start_Time,
                    End_Time = e.End_Time,
                    Minutes = e.Minutes,
                    Status = e.Status

                }).ToList();
            }
        }

    }
}
