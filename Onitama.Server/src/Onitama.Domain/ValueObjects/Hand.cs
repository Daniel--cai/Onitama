﻿using Onitama.Domain.Entities;

namespace Onitama.Domain.ValueObjects
{
    public class Hand
    {
        public Card Card { get; set; }
        public Player Player { get; set; }
    }
}
