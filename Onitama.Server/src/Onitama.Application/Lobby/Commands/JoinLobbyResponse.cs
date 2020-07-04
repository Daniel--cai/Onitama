using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Application.Responses
{
    public class JoinLobbyResponse
    {
        public State State { get; set; }
        public IEnumerable<Domain.Entities.Player> Players { get; set; }
    }
}
