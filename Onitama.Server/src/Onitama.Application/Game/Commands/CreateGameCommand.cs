using Onitama.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Common.Interfaces;
using Onitama.Application.Lobby.Events;
using System.Collections.Generic;
using System.Linq;
using Onitama.Domain.ValueObjects;

namespace Onitama.Application.Game.Commands
{
    public class CreateGameCommand : IRequest<CreateGameResponse>
    {
        public List<int> RedCard { get; set; }
        public List<int> BlueCard { get; set; }
        public int NeutralCard { get; set; }

        public class CreateLobbyCommandHandler : IRequestHandler<CreateGameCommand, CreateGameResponse>
        {
            private readonly IMediator _mediator;
            private readonly IOnitamaDbContext _onitamaDbContext;

            public CreateLobbyCommandHandler(IMediator mediator, IOnitamaDbContext onitamaDbContext)
            {
                _mediator = mediator;
                _onitamaDbContext = onitamaDbContext;
            }

            public async Task<CreateGameResponse> Handle(CreateGameCommand request, CancellationToken cancellationToken)
            {
                var lobby = new Domain.Entities.Lobby();
                _onitamaDbContext.Lobby.Add(lobby);

                lobby.RedCards = request?.RedCard.Select(card => (Card)card).ToList();
                lobby.BlueCards = request?.BlueCard.Select(card => (Card)card).ToList();
                lobby.NeutralCard = (Card)request.NeutralCard;
                await _onitamaDbContext.SaveChangesAsync();

                var notification = new LobbyCreatedEvent
                {
                    LobbyId = lobby.LobbyId
                };

                await _mediator.Publish(notification);

                return new CreateGameResponse
                {
                    LobbyId = lobby.LobbyId
                };
            }
        }
    }
}
