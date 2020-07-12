using System;
using MediatR;

namespace Onitama.Application.Lobby.Events
{
    public class LobbyCreatedEvent : INotification
    {
        public int LobbyId { get; set; }
    }
}
