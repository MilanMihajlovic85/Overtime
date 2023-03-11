using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebApi_Overtime.HelperClasses;
using System.Net.Http.Headers;
using System.Web.Http.Cors;

namespace WebApi_Overtime
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Filters.Add(new SecurityHelper());
            config.MessageHandlers.Add(new StartHandler());
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);


            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/json"));
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));
            config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
        }
    }
}
