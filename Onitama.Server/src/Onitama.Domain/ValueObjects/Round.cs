using Onitama.Domain.Entities;
using System;
using System.Collections.Generic;

namespace Onitama.Domain.ValueObjects
{
    public class Round
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int Card { get; set; }
        public Piece Piece { get; set; }
    }
}
