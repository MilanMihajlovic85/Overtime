//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Entity_Overtime
{
    using System;
    
    public partial class GetLastCreatedRequestByEmployee_Result
    {
        public int ID { get; set; }
        public string Requestor_ID { get; set; }
        public string Requestor_WO { get; set; }
        public string Requestor_FullName { get; set; }
        public string Requestor_WO_Manager { get; set; }
        public string Requestor_Manager { get; set; }
        public string Requestor_Department { get; set; }
        public string Requestor_For_WO { get; set; }
        public string Requestor_For_Project { get; set; }
        public string Reason { get; set; }
        public Nullable<System.DateTime> Start_Time { get; set; }
        public Nullable<System.DateTime> End_Time { get; set; }
        public Nullable<int> Minutes { get; set; }
        public string Status { get; set; }
        public Nullable<System.DateTime> ResponseDate { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
    }
}
