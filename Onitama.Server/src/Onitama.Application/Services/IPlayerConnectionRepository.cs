using System;
using System.Threading.Tasks;
using Onitama.Domain.Entities;

namespace Onitama.Application.Services
{
    public interface IPlayerConnectionRepository
    {
        Task<Player> GetPlayerConnectionByIdentifier(string identifier);
        Task<string> AddPlayerConnection(string name, string identifier, string code);
        Task RemovePlayerConnection(string identifier);
    }
}
