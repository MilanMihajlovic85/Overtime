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
   public class Employee_CTL
    {
        WorkingTable_ViewModel Result = new WorkingTable_ViewModel();

        DBResponse_ViewModel DbResponse = new DBResponse_ViewModel();

        // SQL Params
        ObjectParameter ReturnInt = new ObjectParameter("ReturnInt", typeof(int));
        ObjectParameter ReturnText = new ObjectParameter("ReturnText", typeof(string));

        public List<WorkingTable_ViewModel> GetMyRequestedApprovals(string EmployeeID)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
             return   baza.PendingMyOvertimeRequests(EmployeeID).Select(w => new WorkingTable_ViewModel()
                {
                    ID = w.ID,
                    CreateDate = w.CreateDate,
                    Requestor_ID = w.Requestor_ID,
                    Requestor_For_Project = w.Requestor_For_Project,
                    Requestor_Department = w.Requestor_Department,
                    Requestor_For_WO = w.Requestor_For_WO,
                    Requestor_Manager = w.Requestor_Manager,
                    Requestor_FullName = w.Requestor_FullName,
                    Requestor_WO = w.Requestor_WO,
                    Requestor_WO_Manager = w.Requestor_WO_Manager,
                    Reason = w.Reason,
                    Start_Time = w.Start_Time,
                    End_Time = w.End_Time,
                    Minutes = w.Minutes,
                    Status = w.Status

                }).ToList();
            }
        }

        public List<WorkingTable_ViewModel> GetApprovalsPendingOnMe(string EmployeeID)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.PendingApprovalsForMyApprove(EmployeeID).Select(w => new WorkingTable_ViewModel()
                {
                    ID = w.ID,
                    CreateDate = w.CreateDate,
                    Requestor_ID = w.Requestor_ID,
                    Requestor_For_Project = w.Requestor_For_Project,
                    Requestor_Department = w.Requestor_Department,
                    Requestor_For_WO = w.Requestor_For_WO,
                    Requestor_Manager = w.Requestor_Manager,
                    Requestor_FullName = w.Requestor_FullName,
                    Requestor_WO = w.Requestor_WO,
                    Requestor_WO_Manager = w.Requestor_WO_Manager,
                    Reason = w.Reason,
                    Start_Time = w.Start_Time,
                    End_Time = w.End_Time,
                    Minutes = w.Minutes,
                    Status = w.Status

                }).ToList();
            }
        }

        public WorkingTable_ViewModel GetLastCreatedRequestyEmpployee(string EmployeeID)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                return baza.GetLastCreatedRequestByEmployee(EmployeeID).Select(w => new WorkingTable_ViewModel()
                {
                    ID = w.ID,
                    CreateDate = w.CreateDate,
                    Requestor_ID = w.Requestor_ID,
                    Requestor_For_Project = w.Requestor_For_Project,
                    Requestor_Department = w.Requestor_Department,
                    Requestor_For_WO = w.Requestor_For_WO,
                    Requestor_Manager = w.Requestor_Manager,
                    Requestor_FullName = w.Requestor_FullName,
                    Requestor_WO = w.Requestor_WO,
                    Requestor_WO_Manager = w.Requestor_WO_Manager,
                    Reason = w.Reason,
                    Start_Time = w.Start_Time,
                    End_Time = w.End_Time,
                    Minutes = w.Minutes,
                    Status=w.Status

                }).OrderByDescending(e=> e.ID).FirstOrDefault();
            }
        }

        public DBResponse_ViewModel ChangeRequestStatus(ChangeRequest_ViewModel Request, string EmpployeID)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                baza.ChangeRequestStatus( Request.RequestID,Request.RequestStatus,Request.Minutes,EmpployeID, ReturnInt, ReturnText);

                DbResponse.ReturnText = ReturnText.Value.ToString();
                DbResponse.ReturnInt = (int)ReturnInt.Value;

                return DbResponse;
                    
            }
        }

        public DBResponse_ViewModel DeleteRequest(int RequestID, string EmployeeID)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                baza.DeleteRequest(EmployeeID, RequestID,ReturnInt, ReturnText);

                DbResponse.ReturnText = ReturnText.Value.ToString();
                DbResponse.ReturnInt = (int)ReturnInt.Value;

                return DbResponse;

            }
        }

        public DBResponse_ViewModel CreateRequest(string EmployeeID, OvertimeRequest_ViewModel Request)
        {
            using (OvertimeEntities baza = new OvertimeEntities())
            {
                baza.CreateOverTimeRequest(EmployeeID,Request.Reason,Request.Project_ID, Request.StartTime, Request.EndTime, ReturnInt,ReturnText);

                DbResponse.ReturnText = ReturnText.Value.ToString();
                DbResponse.ReturnInt = (int)ReturnInt.Value;

                return DbResponse;

            }
        }

        public WaitingApprovals_ViewModel GetAllWaitings(string EmployeeID)
        {
            ObjectParameter Approvals = new ObjectParameter("Approvals", typeof(int));
            ObjectParameter Requests = new ObjectParameter("Requests", typeof(int));
            WaitingApprovals_ViewModel Response = new WaitingApprovals_ViewModel();

            using (OvertimeEntities baza = new OvertimeEntities())
            {
                 baza.CountAllPendingRequests(EmployeeID, Approvals, Requests);
                Response.NumberOfApprovals =(int) Approvals.Value;
                Response.NumberOfRequests = (int)Requests.Value;

                return Response;
            }
        }

    }
}
