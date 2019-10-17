using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VortexCore.ModelsDB.MongoDB
{
    public interface IChatDatabaseSettings
    {
        string ChatCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class ChatDatabaseSettings : IChatDatabaseSettings
    {
        string IChatDatabaseSettings.ChatCollectionName { get; set; }
        string IChatDatabaseSettings.ConnectionString { get; set; }
        string IChatDatabaseSettings.DatabaseName { get; set; }
    }
}
