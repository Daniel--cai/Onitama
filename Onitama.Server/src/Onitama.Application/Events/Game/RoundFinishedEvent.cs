using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using MediatR;
using System.Collections.Generic;

namespace Onitama.Application.Events
{
    public class RoundFinishedEvent : INotification
    {
        public string Code { get; set; }
        public List<ScoreCard> PlayerScores { get; set; }
        public Player NextStoryTeller { get; set; }
    }
}
