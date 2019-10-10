using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onitama.Server.DTO
{
    public class StoryToldDTO : INotificationDTO
    {
        public string StoryTeller { get; set; }
        public string Story { get; set; }
    }
}
