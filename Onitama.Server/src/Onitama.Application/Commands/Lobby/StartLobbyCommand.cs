﻿
using Onitama.Application.Responses;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Application.Commands
{
    public class StartLobbyCommand : IRequest
    {
        public int LobbyId { get; set; }
    }
}
