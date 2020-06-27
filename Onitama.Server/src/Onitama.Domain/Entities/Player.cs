using System;
using Onitama.Domain.Common;
using Onitama.Domain.ValueObjects;

namespace Onitama.Domain.Entities
{
    public class Player : AuditableEntity, IEquatable<Player>
    {
        public int PlayerId { get; set; }
        public string Name { get; set; }
        public string Identifier { get; set; }
        public bool Connected { get; set; }
        public Colour Colour { get; set; }
        public int LobbyId { get; set; }
        public Lobby Lobby { get; set; }
     
        public override bool Equals(object obj)
        {
            return Equals(obj as Player);
        }

        public bool Equals(Player other)
        {
            return PlayerId == other?.PlayerId;
        }

        public override int GetHashCode()
        {
            return PlayerId.GetHashCode();
        }

        public static bool operator ==(Player lhs, Player rhs)
        {
            if (lhs is null && rhs is null) return true;
            if (lhs is null || rhs is null) return false;

            return lhs.Equals(rhs);
        }

        public static bool operator !=(Player lhs, Player rhs)
        {
            return !(lhs == rhs);
        }

    }
}
