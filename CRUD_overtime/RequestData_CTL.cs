using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entity_Overtime;
using ViewModel_Overtime;

namespace CRUD_overtime
{
  public  class RequestData_CTL
    {
        public List<string> GetAllOvertimeReasons()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.OvertimeReasons.Select(r => r.Reason).ToList();
            }
        }

        public List<String> GetAllUniqueProjects()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.Projects.Select(p => p.ProjectName).Distinct().ToList();
            }
        }

        public List<ProjectWO_ViewModel> GetAllProjectsWO()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.Projects.Select(p => new ProjectWO_ViewModel()
                {
                    Id=p.ID,
                    Project = p.ProjectName,
                    WorkOrganization = p.WO_Name,
                    Description = p.Description,
                }).ToList();
            }
        }

        public List<string> GetAllReportRoles()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.ReportViewRoles.Select(r => r.ReportViewRole1).ToList();
            }
        }

        public List<RequestStatus_ViewModel> GetAllRequestStatus()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.RequestStatus.Select(r => new RequestStatus_ViewModel() {
                     Description=r.Status,
                     Status=r.ID
                }).ToList();
            }
        }

        public List<WorkOrganizations_ViewModel> GetAllWorkOrganizations()
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.WorkOrganizations.Select(w => new WorkOrganizations_ViewModel() {
                     ID=w.ID,
                      WO_Name=w.WO_Name,
                     WO_Location=w.WO_Location,
                     WO_Manager_UserName=w.WO_Manager_UserName,
                     WO_Manager_FullName=w.WO_Manager_FullName,
                     WO_Description=w.WO_Description,
                     CreateDate=w.CreateDate
                }).ToList();
            }
        }
    }
}
