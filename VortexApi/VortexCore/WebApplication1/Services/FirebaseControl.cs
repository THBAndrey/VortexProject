using FirebaseAdmin;
using FirebaseAdmin.Messaging;
using Google.Apis.Auth.OAuth2;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace VortexCore.Services
{
    public class FirebaseControl
    {
        public static FirebaseApp firebaseApp { get; set; }
        public static FirebaseMessaging messaging { get; set; }

        public static async Task SendMessage()
        {
            var messageData = new Dictionary<string, string>()
            {
                { "title", "Uhuuu" },
                { "message", "Message from .net server" }
            };
            var message = new Message()
            {
                Data = messageData,
                Token = "cWInGw208aY:APA91bHP2THZL1FztHjZcwhYPIITx9cuFZBfgiQ58x0qfkjAwcfoIbBgRRNVdygq2aKumGar9sKa3aUzdLSu3LoS7waMuid_C8aVGS5U_9LklMb6Z25g2lKRF_r0elzJUsGQVJCtA8Yx"
            };
            await messaging.SendAsync(message);
        }

        public FirebaseControl()
        {
            firebaseApp = FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromFile("FireBaseCredential.json"),
            });
            messaging = FirebaseMessaging.GetMessaging(firebaseApp);
        }
    }
}
