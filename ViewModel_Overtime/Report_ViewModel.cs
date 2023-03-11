using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel_Overtime
{
    public class Report_ViewModel
    {
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
    }
}
