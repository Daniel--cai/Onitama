using Onitama.Domain.Entities;
using MediatR;

namespace Onitama.Application.Events
{
    public class LobbyLeaveEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }
    }
}
