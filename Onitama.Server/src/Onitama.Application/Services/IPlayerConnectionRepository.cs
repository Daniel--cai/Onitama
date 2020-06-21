using System;
using System.Threading.Tasks;
using Onitama.Domain.Aggregates;

namespace Onitama.Application.Services
{
    public interface IPlayerConnectionRepository
    {
        Task<PlayerConnection> GetPlayerConnectionByIdentifier(string identifier);
        Task<string> AddPlayerConnection(string name, string identifier, string code);
        Task RemovePlayerConnection(string identifier);
    }
}
