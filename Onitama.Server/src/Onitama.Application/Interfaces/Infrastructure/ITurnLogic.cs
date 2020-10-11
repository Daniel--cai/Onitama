using System;
using Onitama.Domain.Enumerations;

namespace Onitama.Application.Interfaces.Infrastructure
{
    public interface ITurnLogic
    {
        Colour GetPlayerTurn(Domain.Entities.Lobby lobby);
    }
}
