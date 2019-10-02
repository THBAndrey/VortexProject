﻿using System;
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

        [Authorize]
        public async Task<ActionResult> SecureResource()
        {
            var user = User.Claims;
            return new JsonResult("SecureResource");
        }
    }
}
