using System;
namespace Onitama.Domain.ValueObjects
{
    public class Piece
    {
        public int Id { get; set; }
        public int Colour { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public bool Active { get; set; }
        public bool Master { get; set; }
    }
}
