using Onitama.Application.Events;
using Onitama.Server.DTO;
using Onitama.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Lobby.Events;
using Onitama.Application.Game.Events;

namespace Onitama.Server.RealTime
{
    public class GameEventsClientDispatcher : INotificationHandler<RoundFinishedEvent>, INotificationHandler<GameJoinedEvent>
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public GameEventsClientDispatcher(IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public Task Handle(RoundFinishedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.Group(notification.LobbyId.ToString()).RoundFinished(
                new RoundFinishedDTO
                {
                });
        }

        public async Task Handle(GameJoinedEvent notification, CancellationToken cancellationToken)
        {
            await _hubContext.Groups.AddToGroupAsync(notification.Player.Identifier, notification.Lobby.LobbyId.ToString());
        }
    }
}
 