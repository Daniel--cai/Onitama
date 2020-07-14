using MediatR;
using System;
using System.Threading.Tasks;
using System.Threading;


namespace Onitama.Application.Lobby.Queries
{
    public partial class GetLobbyByCodeQuery : IRequest<LobbyDto>
    {
        public string Code { get; set; }
        public string Player { get; set; }
        

        public class GetLobbyByCodeQueryHandler : IRequestHandler<GetLobbyByCodeQuery, LobbyDto>
        {
            public Task<LobbyDto> Handle(GetLobbyByCodeQuery request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }
        }
    }
}
