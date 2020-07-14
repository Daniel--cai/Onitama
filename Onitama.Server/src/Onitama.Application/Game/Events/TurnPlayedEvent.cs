using MediatR;
using Onitama.Domain.Entities;
using Onitama.Domain.Enumerations;

namespace Onitama.Application.Game.Events
{
    public class TurnPlayedEvent : INotification
    {
        public int LobbyId { get; set; }
        public Round Round { get; set; }
        public int CurrentRound { get; set; }
        public Colour PlayerTurn { get; set; }
    }
}
