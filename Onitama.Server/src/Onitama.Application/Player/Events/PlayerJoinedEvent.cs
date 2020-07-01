using MediatR;
using System;

namespace Onitama.Application.Player.Events
{
    public class PlayerJoinedEvent : INotification
    {
        public string Player { get; set; }
        public string Identifier { get; set; }
    }
}
