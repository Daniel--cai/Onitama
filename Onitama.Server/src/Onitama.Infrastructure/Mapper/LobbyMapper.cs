using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using Onitama.Infrastructure.Data.Model;
using Newtonsoft.Json;

namespace Onitama.Infrastructure.Mapper
{
    public interface ILobbyMapper : IMapper<Domain.Entities.Lobby, Data.Model.Lobby> { }

    public class LobbyMapper : ILobbyMapper
    {
        private readonly IMapper _mapper;

        public LobbyMapper(IMapper mapper)
        {
            _mapper = mapper;
        }

        public Data.Model.Lobby Map(Domain.Entities.Lobby domain)
        {
            var data = _mapper.Map<Data.Model.Lobby>(domain);
            return data;
        }

        public Domain.Entities.Lobby Map(Data.Model.Lobby data)
        {
            var rounds = data.Rounds != null ? JsonConvert.DeserializeObject<List<Data.Model.Round>>(data.Rounds) : new List<Data.Model.Round>();
            var players = data.Players != null ? JsonConvert.DeserializeObject<List<Data.Model.Player>>(data.Players) : new List<Data.Model.Player>();

            var domain = new Domain.Entities.Lobby
            {
            };

            domain.Players = players.Select(player =>
                  new Domain.Entities.Player
                  {
                      Name = player.PlayerName,
                      Identifier = player.ConnectionId,
                      PlayerId = 0,
                      Connected = true
                  }).ToList();

            return domain;
        }
    }
}
