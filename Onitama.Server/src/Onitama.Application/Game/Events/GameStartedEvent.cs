using System;
using System.Collections.Generic;
using Onitama.Domain.Enumerations;

namespace Onitama.Application.Game.Events
{
    public class GameStartedEvent
    {
        public int LobbyId { get; set; }
        public IEnumerable<Domain.Entities.Player> Players { get; set; }
        public Colour PlayerTurn { get; set; }
    }
}
