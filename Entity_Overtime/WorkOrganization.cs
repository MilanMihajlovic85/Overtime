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
    
    public partial class WorkOrganization
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public WorkOrganization()
        {
            this.Projects = new HashSet<Project>();
        }
    
        public int ID { get; set; }
        public string WO_Name { get; set; }
        public string WO_Manager_UserName { get; set; }
        public string WO_Manager_FullName { get; set; }
        public string WO_Location { get; set; }
        public string WO_Description { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public string WO_Manager_EmployeeID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Project> Projects { get; set; }
    }
}
