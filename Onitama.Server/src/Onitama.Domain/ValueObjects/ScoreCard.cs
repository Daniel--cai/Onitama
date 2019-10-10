using Onitama.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Domain.ValueObjects
{
    public class ScoreCard
    {
        public Player Player { get; set; }
        public int Score { get; set; }

        public ScoreCard(Player player, int score)
        {
            Player = player;
            Score = score;
        }
    }
}
