using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Common.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Onitama.Application.Game.Commands
{
    public class StartGameCommand : IRequest<StartGameResponse>
    {
        public int LobbyId { get; set; }

        public class StartGameCommandHandler : IRequestHandler<StartGameCommand, StartGameResponse>
        {
            private readonly IMediator _mediator;
            private readonly IOnitamaDbContext _onitamaDbContext;

            public StartGameCommandHandler(IMediator mediator, IOnitamaDbContext onitamaDbContext)
            {
                _onitamaDbContext = onitamaDbContext;
                _mediator = mediator;
            }

            public async Task<StartGameResponse> Handle(StartGameCommand request, CancellationToken cancellationToken)
            {
                var lobby = await _onitamaDbContext.Lobby.Where(lobby => lobby.LobbyId == request.LobbyId).FirstOrDefaultAsync();

                return new StartGameResponse();
            }
        }
    }
    
}
