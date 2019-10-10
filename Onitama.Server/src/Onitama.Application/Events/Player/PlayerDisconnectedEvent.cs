using MediatR;

namespace Onitama.Application.Events
{
    public class PlayerDisconnectedEvent : INotification
    {
        public string Identifier { get; set; }
    }
}
