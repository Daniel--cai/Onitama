using System;
using System.Collections.Generic;
using Onitama.Application.Infrastructure;
using Onitama.Domain.Entities;
using Shouldly;

namespace Onitama.Application.UnitTests.Infrastructure
{

    public class TurnLogicTests
    {
        public void GetPlayerTurn_GivenNewGame_ShouldReturnBlue()
        {
            // arrange
            var lobby = new Domain.Entities.Lobby();
            // action
            var playerTurn = new TurnLogic().GetPlayerTurn(lobby);
            // assert

            playerTurn.ShouldBe(Domain.Enumerations.Colour.Blue);
        }

        public void GetPlayerTurn_AfterOneRound_ShouldReturnRed()
        {
            // arrange
            var lobby = new Domain.Entities.Lobby();
            lobby.Rounds = new List<Round> { new Round() };

            // action
            var playerTurn = new TurnLogic().GetPlayerTurn(lobby);

            // assert
            playerTurn.ShouldBe(Domain.Enumerations.Colour.Red);
        }
    }
}
