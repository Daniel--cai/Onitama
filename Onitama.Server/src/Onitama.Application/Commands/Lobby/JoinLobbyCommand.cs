using MediatR;

namespace Onitama.Application.Commands
{
    public class JoinLobbyCommand : IRequest
    {
        public string Identifier { get; set; }
        public string Code { get; set; }
    }
}
