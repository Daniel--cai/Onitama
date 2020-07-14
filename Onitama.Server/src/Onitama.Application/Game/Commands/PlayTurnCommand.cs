using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Onitama.Application.Common.Interfaces;
using Onitama.Application.Game.Events;
using Onitama.Application.Interfaces.Infrastructure;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;

namespace Onitama.Application.Game.Commands
{
    public class PlayTurnCommand : IRequest
    {
        public int LobbyId { get; set; }
        public string Configuration { get; set; }
        public int PreviousAnnotation { get; set; }
        public int NextAnnotation {get;set;}
        public int Card { get; set; }

        public class PlayTurnCommandHandler : IRequestHandler<PlayTurnCommand>
        {

            private readonly IOnitamaDbContext _onitamaDbContext;
            private readonly IMediator _mediator;
            private readonly ITurnLogic _turnLogic;

            public PlayTurnCommandHandler(IOnitamaDbContext onitamaDbContext, IMediator mediator, ITurnLogic turnLogic)
            {
                _onitamaDbContext = onitamaDbContext;
                _mediator = mediator;
                _turnLogic = turnLogic;
            }

            public async Task<Unit> Handle(PlayTurnCommand request, CancellationToken cancellationToken)
            {
                var round = new Round
                {
                    Card = (Card)request.Card,
                    Next = (Coordinate)request.NextAnnotation,
                    Previous = (Coordinate)request.PreviousAnnotation,
                    LobbyId = request.LobbyId
                };
                _onitamaDbContext.Round.Add(round);

                var lobby = await _onitamaDbContext.Lobby.FirstOrDefaultAsync(lobby => lobby.LobbyId == request.LobbyId);

                await _onitamaDbContext.SaveChangesAsync();
                var turnPlayedEvent = new TurnPlayedEvent
                {
                    Round = round,
                    LobbyId = request.LobbyId,
                    PlayerTurn = _turnLogic.GetPlayerTurn(lobby)
                };

                await _mediator.Publish(turnPlayedEvent);
                return Unit.Value;
            }
        }
    }
}
