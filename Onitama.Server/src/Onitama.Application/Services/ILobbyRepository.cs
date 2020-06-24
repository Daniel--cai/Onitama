using Onitama.Domain.Entities;
using System.Threading.Tasks;

namespace Onitama.Application.Services
{
    public interface ILobbyRepository
    {
        Task<string> AddLobby(Lobby lobby);
        Task<Lobby> GetLobbyByCode(string code);
        Task SaveLobby(Lobby lobby);
    }
}