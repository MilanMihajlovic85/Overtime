using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace WebApi_Overtime.HelperClasses
{
    public class StartHandler : DelegatingHandler
    {
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {

            if (request.Method.Method.ToString().Contains("OPTIONS") && request.Headers.Contains("Origin"))
            {
                string Orig = request.Headers.FirstOrDefault(h => h.Key.Contains("Origin")).Value.FirstOrDefault();
                var response = new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
                // Define and add values to variables: origins, headers, methods (can be global)               
                response.Headers.Add("Access-Control-Allow-Origin", Orig);
                response.Headers.Add("Access-Control-Allow-Headers", "*");
                response.Headers.Add("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
                var tsc = new TaskCompletionSource<HttpResponseMessage>();
                tsc.SetResult(response);

                return tsc.Task;
            }

            return base.SendAsync(request, cancellationToken);
        }
    }
}