using Onitama.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Application.Events
{
    public class LobbyJoinedEvent : INotification
    {
        public Domain.Entities.Player Player { get; set; }
    }
}
