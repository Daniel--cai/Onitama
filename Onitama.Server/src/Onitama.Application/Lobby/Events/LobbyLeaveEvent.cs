using Onitama.Domain.Entities;
using MediatR;

namespace Onitama.Application.Events
{
    public class PlayerDisconnectedEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }

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
                var lobby = await _lobbyRepository.GetLobbyByCode("1234");
                // var disconnected = lobby.PlayerDisconnecteddsgsg
                object z = await _playerConnectionRepository.RemovePlayerConnection(notification.Identifier);
                // await _mediator.Publish(new LobbyLeaveEvent { Player = disconnected, Code = lobby.Code });

            }
        }

    }
}
