using Onitama.Domain.Entities;
using MediatR;

namespace Onitama.Application.Events
{
    public class StoryToldEvent : INotification
    {
        public string Story { get; set; }
        public Card Card { get; set; }
        public string StoryTeller { get; set; }
        public string Code { get; set; }
    }
}
