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
    public class LeaveLobbyCommandHandler : INotificationHandler<PlayerDisconnectedEvent>
    {
        private readonly IMediator _mediator;
        private readonly IPlayerConnectionRepository _playerConnectionRepository;
        private readonly ILobbyRepository _lobbyRepository;

        public LeaveLobbyCommandHandler(IMediator mediator, IPlayerConnectionRepository playerConnectionRepository, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _playerConnectionRepository = playerConnectionRepository;
            _lobbyRepository = lobbyRepository;
        }

        public async Task Handle(PlayerDisconnectedEvent notification, CancellationToken cancellationToken)
        {
            var connection = await _playerConnectionRepository.GetPlayerConnectionByIdentifier(notification.Identifier);
            var lobby = await _lobbyRepository.GetLobbyByCode(connection.Code);
            var disconnected = lobby.PlayerDisconnected(connection.Name);
            await _lobbyRepository.SaveLobby(lobby);
            await _playerConnectionRepository.RemovePlayerConnection(notification.Identifier);
            await _mediator.Publish(new LobbyLeaveEvent { Player = disconnected, Code = lobby.Code });
            
        }
    }
}
