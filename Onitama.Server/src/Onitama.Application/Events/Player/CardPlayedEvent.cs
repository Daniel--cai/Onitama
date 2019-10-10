using Onitama.Domain.Entities;
using MediatR;

namespace Onitama.Application.Events
{
    public class CardSubmittedEvent : INotification
    {
        public Player Player { get; set; }
        public Card Card { get; set; }
        public string Code { get; set; }
    }
}
