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
        private readonly ILobbyRepository _lobbyRepository;

        public JoinLobbyCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
        }

        public async Task<Unit> Handle(JoinLobbyCommand request, CancellationToken cancellationToken)
        {
            //var lobby = await _lobbyRepository.GetLobbyByCode(request.Code);
            //var connected = lobby.PlayerConnected(knotification.Player, request.Identifier);
            //var player = _lobbyRepository.GetPlayerConnectionByIdentifier(notification.Identifier);
            //await _lobbyRepository.SaveLobby(lobby);
            //await _lobbyRepository.AddPlayerConnection(notification.Player, notification.Identifier);
            //await _mediator.Publish(new LobbyJoinedEvent { Player = connected, Code = notification.Code });
            return Unit.Value; 
        }
    }
}
