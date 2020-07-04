using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using MediatR;
using System.Collections.Generic;

namespace Onitama.Application.Events
{
    public class LobbyStartedEvent : INotification
    {
        public string Code { get; set; }
        public Domain.Entities.Player StoryTeller { get; set; }
        public List<Domain.Entities.Player> Players { get; set; }
    }
}
