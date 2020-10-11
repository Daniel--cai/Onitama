using MediatR;
using System;

namespace Onitama.Application.Player.Events
{
    public class PlayerLeftGameEvent : INotification
    {
        public string Player { get; set; }
        public string Identifier { get; set; }
    }
}
