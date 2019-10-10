using Onitama.Application.Commands;
using Onitama.Application.Events;
using Onitama.Application.Services;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Onitama.Application.Handlers
{
    public class TellStoryCommandHandler : IRequestHandler<TellStoryCommand>
    {
        private readonly IMediator _mediator;
        private readonly IAwsDynamodbService _awsDynamodbService;

        public TellStoryCommandHandler(IMediator mediator, IAwsDynamodbService awsDynamodbService)
        {
            _mediator = mediator;
            _awsDynamodbService = awsDynamodbService;
        }

        public async Task<Unit> Handle(TellStoryCommand request, CancellationToken cancellationToken)
        {
            var lobby = await _awsDynamodbService.GetLobbyByCode(request.Code);
           
            var player = lobby.GetPlayerByName(request.StoryTeller);
            var card = lobby.GetCard(request.Card);
            lobby.PlayerTellStory(player, request.Story, card);
           
            await _awsDynamodbService.SaveLobby(lobby);
            await _mediator.Publish(new StoryToldEvent
            {
                Story = request.Story,
                StoryTeller = player.Name,
                Code = request.Code
            });
            return Unit.Value;
        }
    }
}
