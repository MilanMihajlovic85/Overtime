using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel_Overtime
{
    public class AuthorizedUser
    {
        public string ApiKey { get; set; }
        public string FullName { get; set; }

        public string EmployeeID { get; set; }

        public DateTime? ExpireDate { get; set; }

    }
}
