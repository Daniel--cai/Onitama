using MediatR;

namespace Onitama.Application.Lobby.Events
{
    public class LobbyLeaveEvent : INotification
    {
        public int LobbyId { get; set; }
        public Domain.Entities.Player Player { get; set; }
    }
}
