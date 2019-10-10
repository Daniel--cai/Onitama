using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Domain.Interfaces
{
    public interface IScoreService
    {
        List<ScoreCard> VallyVotes(List<Vote> votes, Player storyTeller, Card storyCard);
    }
}
