using Onitama.Domain.Entities;
using Onitama.Domain.Interfaces;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Onitama.Domain.Services.Rules
{
    public class CorrectRule : IScoringRule
    {
        public List<ScoreCard> CalculateScore(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            var scoreBoard = new List<ScoreCard>();
            if (votes.FindAll(vote => vote.Card.Id == storyCard.Id).Count != votes.Count)
            {
                var scorers = votes.Where(vote => vote.Card.Id == storyCard.Id).Select(vote => vote.Player);
                scoreBoard = scorers.Select(scorer => new ScoreCard(scorer, 3)).ToList();
            }

            return scoreBoard;
        }
    }
}
