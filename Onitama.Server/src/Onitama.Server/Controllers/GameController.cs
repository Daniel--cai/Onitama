using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Onitama.Domain.Entities;
using Onitama.Server.DTO;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Onitama.Application.Lobby.Queries;
using Microsoft.AspNetCore.Http;
using Onitama.Application.Game.Commands;

namespace Onitama.Server.Controllers
{
    public class GameController : BaseController
    {
        [HttpGet]
        [Produces(typeof(LobbyDTO))]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByCode([FromQuery] GetLobbyByCodeQuery query)
        {
            var lobby = await Mediator.Send(query);
        
            return Ok(lobby);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<int>> CreateGame(CreateGameCommand command)
        {
            var lobby = await Mediator.Send(command);
            return Created(new Uri(Url.Action(nameof(GetByCode), nameof(GameController), new { Code = lobby.LobbyId }, Request.Scheme)), lobby);
        }

        //[HttpPost("joinLobby")]
        //public async Task<ActionResult> JoinGame(JoinLobbyCommand command)
        //{
        //    var lobby = await _mediator.Send(command);
        //    return Ok();
        //}

        //[HttpPost("startGame")]
        //public async Task<ActionResult> StartGame(StartLobbyCommand command)
        //{
        //    var lobby = await _mediator.Send(command);
        //    return Ok();
        //}
    }
}
