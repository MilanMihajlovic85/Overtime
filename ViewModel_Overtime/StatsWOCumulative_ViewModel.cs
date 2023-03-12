using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel_Overtime
{
   public class StatsWOCumulative_ViewModel
    {
        public int? NumberOfRequests { get; set; }
        public string WorkOrganization { get; set; }

        public string Status { get; set; }
        public decimal? Hours { get; set; }
    }
}
