using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Onitama.Application.Common.Interfaces;
using Onitama.Application.Events;

namespace Onitama.Application.Player.Events
{
    public class PlayerConnectedEventHandler : INotificationHandler<PlayerConnectedEvent>
    {
        private readonly IOnitamaDbContext _onitamaDbContext;
        private readonly IMediator _mediator;

        public PlayerConnectedEventHandler(IOnitamaDbContext onitamaDbContext, IMediator mediator)
        {
            _onitamaDbContext = onitamaDbContext;
            _mediator = mediator;
        }

        public async Task Handle(PlayerConnectedEvent notification, CancellationToken cancellationToken)
        {
            var player = new Domain.Entities.Player
            {
                Connected = true,
                Identifier = notification.Identifier,
                Name = notification.Player
            };

            _onitamaDbContext.Player.Add(player);
            await _onitamaDbContext.SaveChangesAsync();

            await _mediator.Publish(new LobbyJoinedEvent { Player = player });
        }
    }
}
