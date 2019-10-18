using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using VortexCore.ModelsDB.MongoDB;
using VortexCore.Services.MongoDB;
using MongoDB.Bson;

namespace VortexCore.Services.Hubs
{
    [Authorize]
    public class ChatHub : Hub
    {
        private readonly ChatService _chatService;

        public ChatHub(ChatService chatService)
        {
            _chatService = chatService;
        }

        public override async Task OnConnectedAsync() 
        {
            var allMessges = _chatService.GetMessages();
            await Clients.All.SendAsync("ReciveOldMessages", allMessges);
            
            await base.OnConnectedAsync();
        }

        public async Task SendMessage(string message)
        {
            var uid = Context.User.FindFirst("user_id").Value;
            await Clients.All.SendAsync("ReceiveMessage", uid, message);
            _chatService.AddMessage(new ChatMessage
            {
                MessageText = message,
                UserId = uid
            });
        }
    }
}
