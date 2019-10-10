using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Application.Responses;
using Onitama.Application.Services;
using Onitama.Domain.Aggregates;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Onitama.Application.Handlers
{
    public class CreateLobbyCommandHandler : IRequestHandler<CreateLobbyCommand, CreateLobbyResponse>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public CreateLobbyCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public Task<CreateLobbyResponse> Handle(CreateLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = new Lobby();
            //var player = new Domain.Entities.Player(request.Name);
            //lobby.Players.Add(player);
            _awsDynamodbService.AddLobby(lobby);
            return Task.FromResult(new CreateLobbyResponse
            {
                Code = lobby.Code
            });
        }
    }
}
