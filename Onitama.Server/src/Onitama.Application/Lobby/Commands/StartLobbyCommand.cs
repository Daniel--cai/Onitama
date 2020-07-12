using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Domain.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Common.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Onitama.Application.Handlers
{
    public class StartLobbyCommandHandler : IRequestHandler<StartLobbyCommand>
    {
        private readonly IMediator _mediator;
        private readonly IOnitamaDbContext _onitamaDbContext;

        public StartLobbyCommandHandler(IMediator mediator, IOnitamaDbContext onitamaDbContext)
        {
            _onitamaDbContext = onitamaDbContext;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(StartLobbyCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _onitamaDbContext.Lobby.Where(lobby => lobby.LobbyId == request.LobbyId).FirstOrDefaultAsync();
            //lobby.DealDeck();
            //await _mediator.Publish(
            //    new LobbyStartedEvent
            //    {
            //        Code = request.Code,
            //        StoryTeller = lobby.CurrentStoryTeller,
            //        Players = lobby.ActivePlayers
            //    });

            //foreach  (var player in lobby.ActivePlayers)
            //{
            //    await _mediator.Publish(new CardDrawnEvent { Code = request.Code, Player = player, Hand = lobby.Deck.Hand(player) });
            //}

            return Unit.Value;
        }
    }
}
