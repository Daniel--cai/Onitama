using MediatR;

namespace Onitama.Application.Game.Events
{
    public class TurnPlayedEvent : INotification
    {
        public string Code { get; set; }
    }
}
