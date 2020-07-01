using MediatR;

namespace Onitama.Application.Player.Events
{
    public class PlayerDisconnectedEvent : INotification
    {
        public string Identifier { get; set; }
    }
}
