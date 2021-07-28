using Onitama.Server.DTO;
using System.Threading.Tasks;

namespace Onitama.Server.RealTime.Interface
{
    public interface ILobbyEventsClient
    {
        Task LobbyJoined(LobbyJoinedDTO notification);
        Task LobbyLeft(LobbyLeftDTO notification);
        // Task LobbyStarted(LobbyStartedDTO notification);
    }
}
