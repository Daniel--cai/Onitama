using System;
using AutoMapper;
using Onitama.Application.Common.Mappings;
using Onitama.Domain;

namespace Onitama.Application.Lobby.Commands
{
    public class LobbyDto : IMapFrom<Domain.Entities.Lobby>
    {
        public string LobbyId { get; set; }
    }
}
