using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using WebApi_Overtime.HelperClasses;

[assembly: OwinStartup(typeof(WebApi_Overtime.Startup))]

namespace WebApi_Overtime
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();//("/API/Signalr", new Microsoft.AspNet.SignalR.HubConfiguration());
            

          
           
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
        }
    }
}
