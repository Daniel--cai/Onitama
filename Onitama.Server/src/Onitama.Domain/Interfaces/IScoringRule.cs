using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Domain.Interfaces
{
    public interface IScoringRule
    {
        List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard);
    }
}
