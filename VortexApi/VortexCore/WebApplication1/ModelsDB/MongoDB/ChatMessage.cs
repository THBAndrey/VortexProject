using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace VortexCore.ModelsDB.MongoDB
{
    public class ChatMessage
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public BsonString MessageText { get; set; }
        public BsonTimestamp Timestamp { get; set; }
        public int UserId { get; set; }
    }
}
