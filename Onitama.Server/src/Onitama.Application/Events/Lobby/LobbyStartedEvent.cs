using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using MediatR;
using System.Collections.Generic;

namespace Onitama.Application.Events
{
    public class LobbyStartedEvent : INotification
    {
        public string Code { get; set; }
        public Player StoryTeller { get; set; }
        public List<Player> Players { get; set; }
    }
}
