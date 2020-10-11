using System;
using MediatR;

namespace Onitama.Application.Game.Events
{
    public class GameJoinedEvent : INotification
    {
        public Domain.Entities.Player Player { get; set; }
        public Domain.Entities.Lobby Lobby { get; set; }
    }
}
