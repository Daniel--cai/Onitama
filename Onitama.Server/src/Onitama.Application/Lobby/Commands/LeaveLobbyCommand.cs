using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Common.Interfaces;

namespace Onitama.Application.Handlers
{
    public class LeaveLobbyCommandHandler : INotificationHandler<LobbyLeaveEvent>
    {
        private readonly IMediator _mediator;
        private readonly IOnitamaDbContext _onitamaDbContext;

        public LeaveLobbyCommandHandler(IMediator mediator, IOnitamaDbContext onitamaDbContext)
        {
            _mediator = mediator;
            _onitamaDbContext = onitamaDbContext;
        }

        public async Task Handle(LobbyLeaveEvent notification, CancellationToken cancellationToken)
        {
            //var connection = await _playerConnectionRepository.GetPlayerConnectionByIdentifier(notification.Identifier);
            //var lobby = await _lobbyRepository.GetLobbyByCode("1234");
            // var disconnected = lobby.PlayerDisconnected(connection.Name);
            //await _lobbyRepository.SaveLobby(lobby);
            //await _playerConnectionRepository.RemovePlayerConnection(notification.Identifier);
            // await _mediator.Publish(new LobbyLeaveEvent { Player = disconnected, Code = lobby.Code });
            
        }
    }
}
