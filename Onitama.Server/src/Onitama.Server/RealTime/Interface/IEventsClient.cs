﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Onitama.Server.RealTime.Interface
{
    public interface IEventsClient: IGameEventsClient, ILobbyEventsClient, IPlayerEventsClient
    {
    }
}
