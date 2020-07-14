using Onitama.Domain.Enumerations;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Application.Lobby.Commands
{
    public class JoinLobbyResponse
    {
        public State State { get; set; }
        public IEnumerable<Domain.Entities.Player> Players { get; set; }
    }
}
