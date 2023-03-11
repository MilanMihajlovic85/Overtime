using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel_Overtime
{
   public class WorkOrganizations_ViewModel
    {
        public int ID { get; set; }
        public string WO_Name { get; set; }
        public string WO_Manager_UserName { get; set; }
        public string WO_Manager_FullName { get; set; }
        public string WO_Location { get; set; }
        public string WO_Description { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
    }
}
