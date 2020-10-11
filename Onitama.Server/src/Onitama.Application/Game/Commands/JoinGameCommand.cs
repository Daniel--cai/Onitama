using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Common.Interfaces;
using AutoMapper;

namespace Onitama.Application.Handlers
{
    public class JoinGameCommand : IRequest
    {
        public string Identifier { get; set; }
        public int LobbyId { get; set; }
        public int PlayerId { get; set; }

        public class JoinGameCommandHandler : IRequestHandler<JoinGameCommand>
        {
            private readonly IMediator _mediator;
            private readonly IOnitamaDbContext _dbContext;
            private readonly IMapper _mapper;

            public JoinGameCommandHandler(IMediator mediator, IOnitamaDbContext dbContext, IMapper mapper)
            {
                _mediator = mediator;
                _dbContext = dbContext;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(JoinGameCommand request, CancellationToken cancellationToken)
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
}
