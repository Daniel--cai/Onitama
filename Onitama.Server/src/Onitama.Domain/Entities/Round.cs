using Onitama.Domain.Common;
using Onitama.Domain.ValueObjects;

namespace Onitama.Domain.Entities
{
    public class Round : AuditableEntity
    {
        public int RoundId { get; set; }
        public Coordinate Previous { get; set; }
        public Coordinate Next { get; set; }
        public Card Card { get; set; }
        public int LobbyId { get; set; }
        public Lobby Lobby { get; set; }
    }
}
