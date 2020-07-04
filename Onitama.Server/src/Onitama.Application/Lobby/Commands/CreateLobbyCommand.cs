using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Application.Responses;
using Onitama.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Common.Interfaces;
using Onitama.Application.Lobby.Events;

namespace Onitama.Application.Handlers
{
    public class CreateLobbyCommand : IRequest<CreateLobbyResponse>
    {

        public class CreateLobbyCommandHandler : IRequestHandler<CreateLobbyCommand, CreateLobbyResponse>
        {
            private readonly IMediator _mediator;
            private readonly IOnitamaDbContext _onitamaDbContext;

            public CreateLobbyCommandHandler(IMediator mediator, IOnitamaDbContext onitamaDbContext)
            {
                _mediator = mediator;
                _onitamaDbContext = onitamaDbContext;
            }

            public async Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
            {
                var lobby = new Domain.Entities.Lobby();
                //var player = new Domain.Entities.Player(request.Name);
                //lobby.Players.Add(player);
                _onitamaDbContext.Lobby.Add(lobby);
                await _onitamaDbContext.SaveChangesAsync();
                var notification = new LobbyCreatedEvent();
                await _mediator.Publish(notification);
                return new CreateLobbyResponse
                {
                    Code = lobby.Code
                };
            }
        }
    }
}
