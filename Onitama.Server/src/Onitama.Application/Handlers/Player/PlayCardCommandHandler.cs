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
        private readonly ILobbyRepository _lobbyRepository;

        public PlayCardCommandHandler(IMediator mediator, ILobbyRepository lobbyRepository)
        {
            _mediator = mediator;
            _lobbyRepository = lobbyRepository;
        }

        public async Task<Unit> Handle(PlayCardCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _lobbyRepository.GetLobbyByCode(request.Code);

            var player = lobby.GetPlayerByName(request.Player);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerPlayCard(player, card);

            await _lobbyRepository.SaveLobby(lobby);

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
