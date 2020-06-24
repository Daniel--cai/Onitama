using System;
using System.Threading.Tasks;
using Onitama.Application.Services;
using Onitama.Domain.Entities;
using Onitama.Infrastructure.Mapper;

namespace Onitama.Infrastructure.Services
{
    public class LobbyRepository : ILobbyRepository
    {
        private readonly INoSqlClient<Data.Model.Lobby> _client;
        private readonly ILobbyMapper _mapper;


        public LobbyRepository(INoSqlClient<Data.Model.Lobby> client, ILobbyMapper mapper)
        {
            _client = client;
            _mapper = mapper;
        }

        public async Task<string> AddLobby(Lobby lobby)
        {
            var lobbyDto = _mapper.Map(lobby);
            var id = await _client.CreateDocument(lobbyDto);
            return id;
        }


        public async Task<Lobby> GetLobbyByCode(string code)
        {
            var lobby = await _client.GetDocumentById(code);

            if (lobby == null)
            {
                throw new Exception($"Lobby {code} not found");
            }
            lobby.Code = code;
            lobby.Id = code;

            return _mapper.Map(lobby);
        }

        public async Task SaveLobby(Lobby lobby)
        {
            var lobbyDto = _mapper.Map(lobby);
            lobbyDto.Id = lobby.Code;
            await _client.UpdateDocument(lobbyDto);
        }
    }
}