using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VortexCore.Services;
using VortexCore.ManagersDB;
using VortexCore.ModelsDB;
using Microsoft.AspNetCore.Authorization;

namespace VortexCore.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private VortexManager ManagerDB { get; set; }
        public ApiController(VortexBDContext context)
        {
            ManagerDB = new VortexManager(context);
        }
        //get: api/SendMessage
        public ActionResult SendMessage()
        {
            FirebaseControl.SendMessage().ContinueWith((task) =>
            {
                Console.WriteLine("Message sent");
            });
            return new OkResult();
        }

        public ActionResult AddNotificationToken(string token)
        {
            var isSuccess = ManagerDB.AddNotificationToken(token);
            return isSuccess ? new OkResult() : StatusCode(500);
        }

        public ActionResult SetUserNotificationToken(int id, string token)
        {
            var isSuccess = ManagerDB.SetNotificationToken(id, token);
            return isSuccess ? new OkResult() : StatusCode(500);
        }

        public ActionResult GetUserNotificationToken(int id)
        {
            var token = ManagerDB.GetNotificationToken(id);
            if(token != null)
            {
                return new JsonResult(token);
            }
            else
            {
                return new NotFoundObjectResult(token);
            }
        }

        public async Task<ActionResult> SecureResource()
        {
            //var jwtToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI5NGNlMzNhNWQ3MmI0NjYyNzI3ZGFiYmRhNzVjZjg4Y2Y5OTg4MGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdm9ydGV4LTRiNmRiIiwiYXVkIjoidm9ydGV4LTRiNmRiIiwiYXV0aF90aW1lIjoxNTY5ODcyNjQxLCJ1c2VyX2lkIjoiRnBvQmdST0VwMlZmQzZmUmtJRHI0SjZUVzNtMiIsInN1YiI6IkZwb0JnUk9FcDJWZkM2ZlJrSURyNEo2VFczbTIiLCJpYXQiOjE1Njk4NzM3NTEsImV4cCI6MTU2OTg3NzM1MSwiZW1haWwiOiJsYXphcmV2YW5kLjIwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJsYXphcmV2YW5kLjIwQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KcwWFBP7JHWEtyxdIYO-jWGbWbqn2a92upL2M6UeNDUjgQivM9ppd-cKp82k76yIAshXIh6ihgIjYIG4Bg21c6BqOCkj9LD3Mr9diU3dW8pb_mpaOLjIwRIlSIR8dIZldBerY3ZpgiAxHXfW2lnl_MKa3J9kepHYJQrGBK-stBNyPfm2-wl8bUCUs8YgM6ThCViSPZUadtLn-FvmjFscvwIJ1LDz7kvMSTNu52N5FUOE9K5KJKWgrZfrsBF3zASp0zpnoNSLf5I6AEAHUW1rWbDIbGZrMfWoX2i218WcNCr7LzyAtdIAipLH9W6lRktVo1BnonUP0uYj_W8u4CcpEg";
            //var fireBaseUser = await FirebaseAdmin.Auth.FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(jwtToken);
            //var uuser = await FirebaseAdmin.Auth.FirebaseAuth.DefaultInstance.GetUserAsync(fireBaseUser.Uid);
            //var user = User.Claims;
            return new JsonResult("SecureResource");
        }
    }
}
