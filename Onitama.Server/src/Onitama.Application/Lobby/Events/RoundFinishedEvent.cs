using System;
using MediatR;

namespace Onitama.Application.Lobby.Events
{
    public class RoundFinishedEvent : ILobbyEvent, INotification
    {
        public int LobbyId { get; set; }
    }
}
