using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onitama.Server.DTO
{
    public class StoryRevealedDTO : INotificationDTO
    {
        public List<int> Cards { get; set; }
    }
}
