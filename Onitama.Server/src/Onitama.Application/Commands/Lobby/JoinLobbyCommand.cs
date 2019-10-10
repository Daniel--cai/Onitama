using MediatR;

namespace Onitama.Application.Commands
{
    public class JoinLobbyCommand : IRequest
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
