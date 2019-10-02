using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using VortexCore.ManagersDB;
using VortexCore.ModelsDB;
using VortexCore.Services.Authentication;

namespace VortexCore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<VortexBDContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();

            //services.AddAuthentication(FirebaseAuthenticationOptions.Scheme)
            //    .AddScheme<FirebaseAuthenticationOptions, FirebaseAuthenticationHandler>(FirebaseAuthenticationOptions.Scheme, options =>
            //    {
            //        /* configure options */
            //    });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.Authority = "https://securetoken.google.com/" + Configuration["FirebaseAppId"];
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidIssuer = "https://securetoken.google.com/" + Configuration["FirebaseAppId"],
                            ValidateAudience = true,
                            ValidAudience = Configuration["FirebaseAppId"],
                            ValidateLifetime = true,
                            //NameClaimType = 
                        };
                        //            options.Events = new JwtBearerEvents
                        //            {
                        //                OnMessageReceived = async (context) =>
                        //                {
                        //                    try
                        //                    {

                        //                    }
                        //                    catch (Exception ex)
                        //                    {
                        //                        context.Fail(ex);
                        //                    }



                        //                    var ctx = context;
                        //                }
                        //            };

                    });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();


            new Services.FirebaseControl();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
