using System;
using Onitama.Domain.Enumerations;
using Onitama.Domain.Entities;

namespace Onitama.Application.Interfaces.Infrastructure
{
    public interface ITurnLogic
    {
        Colour GetPlayerTurn(Domain.Entities.Lobby lobby);
    }
}
