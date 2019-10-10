using Onitama.Domain.Entities;
using Onitama.Domain.Interfaces;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Onitama.Domain.Services.Rules
{
    public class BonusRule : IScoringRule
    {
        public List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            return votes.Where(vote=>vote.Card.Id != storyCard.Id)
                        .Select(vote => new ScoreCard(vote.Card.Owner, 1)).ToList();
        }
    }
}
