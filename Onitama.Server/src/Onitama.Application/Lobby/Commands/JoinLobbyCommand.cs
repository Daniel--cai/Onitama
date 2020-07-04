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
using AutoMapper;

namespace Onitama.Application.Handlers
{
    public class JoinLobbyCommand : IRequest
    {
        public string Identifier { get; set; }
        public string Code { get; set; }

        public class JoinLobbyCommandHandler : IRequestHandler<JoinLobbyCommand>
        {
            private readonly IMediator _mediator;
            private readonly IOnitamaDbContext _dbContext;
            private readonly IMapper _mapper;

            public JoinLobbyCommandHandler(IMediator mediator, IOnitamaDbContext dbContext, IMapper mapper)
            {
                _mediator = mediator;
                _dbContext = dbContext;
                _mapper = mapper;
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
}
