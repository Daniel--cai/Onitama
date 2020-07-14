using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Onitama.Application.Game.Commands;

namespace Onitama.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PlayerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("playTurn")]
        public async Task<ActionResult> PlayTurn(PlayTurnCommand command)
        {
            await _mediator.Send(command);
            return Ok();
        }
    }
}
