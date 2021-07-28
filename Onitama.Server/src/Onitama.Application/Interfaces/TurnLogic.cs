using System;
using Onitama.Application.Interfaces.Infrastructure;
using Onitama.Domain.Enumerations;

namespace Onitama.Application.Infrastructure
{
    public class TurnLogic : ITurnLogic
    {
        public Colour GetPlayerTurn(Domain.Entities.Lobby lobby)
        {
            if (lobby.Rounds.Count % 2 == 0)
            {
                return Colour.Blue;
            }

            return Colour.Red;
        }
    }
}
