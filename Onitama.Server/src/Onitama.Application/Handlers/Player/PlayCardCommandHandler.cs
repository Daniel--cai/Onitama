using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Application.Services;
using Onitama.Domain.ValueObjects;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Onitama.Application.Handlers
{
    public class PlayCardCommandHandler : IRequestHandler<PlayCardCommand>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public PlayCardCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task<Unit> Handle(PlayCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);

            var player = lobby.GetPlayerByName(request.Player);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerPlayCard(player, card);

            await _awsDynamodbService.SaveLobby(lobby);

            if (lobby.GameState == State.Voting)
            {
                await _mediator.Publish(new StoryRevealedEvent
                {
                    Cards = lobby.CurrentPlayedCards
                });
            }
        
            return Unit.Value;
        }
    }
}
