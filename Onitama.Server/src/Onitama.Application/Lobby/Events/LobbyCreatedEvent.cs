using System;
using MediatR;

namespace Onitama.Application.Lobby.Events
{
    public class LobbyCreatedEvent : INotification
    {
        public string Code { get; set; }
    }
}
