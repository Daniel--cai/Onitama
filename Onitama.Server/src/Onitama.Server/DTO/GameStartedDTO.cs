﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onitama.Server.DTO
{
    public class GameStartedDTO : INotificationDTO
    {
        public string StoryTeller { get; set; }
        public List<string> Players { get; set; }
    }
}
