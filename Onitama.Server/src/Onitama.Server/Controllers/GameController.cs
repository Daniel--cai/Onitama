using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Onitama.Domain.Entities;
using Onitama.Server.DTO;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Onitama.Application.Lobby.Queries;

namespace Onitama.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {

        private readonly IMediator _mediator;

        public GameController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<LobbyDTO>> GetByCode([FromQuery] GetLobbyByCodeQuery query)
        {
            var lobby = await _mediator.Send(query);
            //var reconnect = lobby.Players.Find(player => player.Name == query.Player);
            //var response = new LobbyDTO
            //{
            //    Players = lobby.ActivePlayers?.Select(player => new PlayerDTO { Name = player.Name, Score = player.Score }).ToList(),
            //    RoundNumber = lobby.RoundNumber,
            //    GameState = lobby.GameState.DisplayName,
            //    CurrentStoryTeller = lobby.CurrentStoryTeller?.Name,
            //    StoryCard = lobby.CurrentStoryCard?.Id ?? 0,
            //    Story = lobby.CurrentStory,
            //    Cards = lobby.CurrentPlayedCards?.Select(card => card.Id).ToList(),
            //    Votes = lobby.CurrentVotes?.Select(vote => new VoteDTO { Card = vote.Card.Id, Player = vote.Player.Name }).ToList(),
            //    Hand = lobby.Deck.Hand(reconnect)?.Select(card => card.Id).ToList()
            //};
            return null;
        }

        //[HttpPost("createGame")]
        //public async Task<ActionResult<int>> CreateGame(CreateLobbyCommand command)
        //{
        //    var lobby = await _mediator.Send(command);
        //    return lobby.LobbyId;
        //}

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
