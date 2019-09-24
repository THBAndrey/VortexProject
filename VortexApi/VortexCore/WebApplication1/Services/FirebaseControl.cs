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
                Token = "fGAB6Qdn13A:APA91bFx12LswYRDAz2Awsfm1ek5aqc7VrybMpBveAKYEXxnPMUIaUB0PQaRHiapTNIhevisWWBinrrS6f7SVzUgXRF4frrs2XCn4d2clPBTqKwd8wVoDc8loi7vSxfdVcPCjSO8Bos4"
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
