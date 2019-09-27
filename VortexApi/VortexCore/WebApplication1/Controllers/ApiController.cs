using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VortexCore.Services;

namespace VortexCore.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        //get: api/SendMessage
        public ActionResult SendMessage()
        {
            FirebaseControl.SendMessage().ContinueWith((task) =>
            {
                Console.WriteLine("Message sent");
            });
            return new OkResult();
        }
    }
}
