using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Onitama.Application.Common.Interfaces;
using Onitama.Application.Events;
using Onitama.Application.Lobby.Events;

namespace Onitama.Application.Player.Events
{
    public class PlayerDisconnectedEventHandler : INotificationHandler<PlayerDisconnectedEvent>
    {
        private readonly IOnitamaDbContext _onitamaDbContext;
        private readonly IMediator _mediator;

        public PlayerDisconnectedEventHandler(IOnitamaDbContext onitamaDbContext, IMediator mediator)
        {
            _onitamaDbContext = onitamaDbContext;
            _mediator = mediator;
        }

        public async Task Handle(PlayerDisconnectedEvent notification, CancellationToken cancellationToken)
        {

            var disconnectedPlayer = _onitamaDbContext.Player.FirstOrDefault(player => player.Identifier == notification.Identifier);
            if (disconnectedPlayer != null)
            {
                disconnectedPlayer.Connected = false;
                var lobby = await _onitamaDbContext.Lobby
                    .Include(l => l.Players)
                    .Where(lobby => lobby.Players.Any(player => player.PlayerId == disconnectedPlayer.PlayerId))
                    .FirstOrDefaultAsync();
                
                await _onitamaDbContext.SaveChangesAsync();

                await _mediator.Publish(new LobbyLeaveEvent { Player = disconnectedPlayer, LobbyId = lobby?.LobbyId ?? -1 });
            }

        }
    }
}
