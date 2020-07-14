using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Onitama.Application.Lobby.Commands;
using Onitama.Application.Game.Commands;

namespace Onitama.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LobbyController : ControllerBase
    {

        private readonly IMediator _mediator;

        public LobbyController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("joinLobby")]
        public async Task<ActionResult> JoinLobby(JoinLobbyCommand command)
        {
            var lobby = await _mediator.Send(command);
            return Ok();
        }

        [HttpPost("startGame")]
        public async Task<ActionResult> StartGame(StartGameCommand command)
        {
            var lobby = await _mediator.Send(command);
            return Ok();
        }
    }
}
