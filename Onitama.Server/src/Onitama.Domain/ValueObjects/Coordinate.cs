using System;
using System.Diagnostics.CodeAnalysis;
using Onitama.Domain.Constants;

namespace Onitama.Domain.ValueObjects
{
    public class Coordinate : IEquatable<Coordinate>
    {
        public int X { get; set; }
        public int Y { get; set; }

        public Coordinate(int arrayNotation)
        {
            var x = arrayNotation % BoardConstants.BoardSize;
            var y = arrayNotation / BoardConstants.BoardSize;
            X = x;
            Y = y;
        }

        public Coordinate(int x, int y)
        {
            X = x;
            Y = y;
        }

        public static explicit operator Coordinate(int notation)
        {
            return new Coordinate(notation);
        }

        public static implicit operator int(Coordinate coordinate)
        {
            var notation = coordinate.X * BoardConstants.BoardSize + coordinate.Y;
            return notation;
        }


        public override bool Equals(object obj)
        {
            return Equals(obj as Coordinate);
        }

        public bool Equals([AllowNull] Coordinate other)
        {
            return X == other?.X && Y == other?.Y;
        }

        public override int GetHashCode()
        {
            return 0;
        }

        public static bool operator ==(Coordinate lhs, Coordinate rhs)
        {
            if (lhs is null && rhs is null) return true;
            if (lhs is null || rhs is null) return false;

            return lhs.Equals(rhs);
        }

        public static bool operator !=(Coordinate lhs, Coordinate rhs)
        {
            return !(lhs == rhs);
        }

    }
}
