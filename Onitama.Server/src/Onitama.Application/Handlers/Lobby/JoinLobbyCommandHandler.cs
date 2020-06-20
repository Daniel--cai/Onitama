using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Application.Responses;
using Onitama.Application.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Onitama.Application.Handlers
{
    public class JoinLobbyCommandHandler : IRequestHandler<JoinLobbyCommand>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public JoinLobbyCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task<Unit> Handle(JoinLobbyCommand request, CancellationToken cancellationToken)
        {
            //var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);
            //var connected = lobby.PlayerConnected(knotification.Player, request.Identifier);
            //var player = _awsDynamodbService.GetPlayerConnectionByIdentifier(notification.Identifier);
            //await _awsDynamodbService.SaveLobby(lobby);
            //await _awsDynamodbService.AddPlayerConnection(notification.Player, notification.Identifier);
            //await _mediator.Publish(new LobbyJoinedEvent { Player = connected, Code = notification.Code });
            return Unit.Value; 
        }
    }
}
