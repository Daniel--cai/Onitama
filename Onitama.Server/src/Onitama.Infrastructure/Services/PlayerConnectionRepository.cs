﻿using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Onitama.Application.Services;

namespace Onitama.Infrastructure.Services
{
    public class PlayerConnectionRepository : IPlayerConnectionRepository
    {
        private readonly INoSqlClient<Data.Model.PlayerConnection> _client;
        private readonly IMapper _mapper;


        public PlayerConnectionRepository(INoSqlClient<Data.Model.PlayerConnection> client, IMapper mapper)
        {
            _client = client;
            _mapper = mapper;
        }

        public async Task<string> AddPlayerConnection(string name, string identifier, string code)
        {
            var playerConnection = new Data.Model.PlayerConnection
            {
                Name = name,
                Identifier = identifier,
                Code = code
            };
            var id = await _client.CreateDocument(playerConnection);
            return id;
        }

        public async Task<Domain.Entities.PlayerConnection> GetPlayerConnectionByIdentifier(string identifier)
        {
            var connection = await _client.GetDocumentsByField("Identifier", identifier);
            var playerConnection = connection.FirstOrDefault();
            return _mapper.Map<Domain.Entities.PlayerConnection>(playerConnection);
        }

        public async Task RemovePlayerConnection(string identifier)
        {
            var connection = await _client.GetDocumentsByField("Identifier", identifier);
            await _client.DeleteDocument(connection.FirstOrDefault());
        }

    }
}
