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
    using System.Collections.Generic;
    
    public partial class W_AuthenticationCode
    {
        public string EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string EmployeeMobile { get; set; }
        public Nullable<int> LoginCode { get; set; }
        public Nullable<System.DateTime> LoginCodeActivityStart { get; set; }
        public Nullable<System.DateTime> LoginCodeActivityEnd { get; set; }
        public Nullable<bool> LoginCodeUsed { get; set; }
        public string ApiKey { get; set; }
        public Nullable<System.DateTime> UpdateTime { get; set; }
    }
}
