﻿using MediatR;

namespace Onitama.Application.Commands
{
    public class PlayCardCommand : IRequest
    {
        public string Code { get; set; }
        public string Player { get; set; }
        public int Card { get; set; }
    }
}
