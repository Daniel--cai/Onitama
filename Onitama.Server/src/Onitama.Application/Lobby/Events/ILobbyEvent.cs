using System;
namespace Onitama.Application.Lobby.Events
{
    public interface ILobbyEvent
    {
        int LobbyId { get; set; }
    }
}
