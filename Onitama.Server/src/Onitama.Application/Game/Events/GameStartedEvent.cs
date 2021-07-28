using System;
using System.Collections.Generic;
using MediatR;
using Onitama.Domain.Enumerations;

namespace Onitama.Application.Game.Events
{
    public class GameStartedEvent : INotification
    {
        public int LobbyId { get; set; }
        public IEnumerable<Domain.Entities.Player> Players { get; set; }
        public Colour PlayerTurn { get; set; }
    }
}
