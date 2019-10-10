using Onitama.Domain.Entities;
using Onitama.Domain.Interfaces;
using Onitama.Domain.Services.Rules;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Onitama.Domain.Services
{
    public class ScoreService : IScoreService
    {
        private readonly IEnumerable<IScoringRule> _rules;

        public ScoreService(IEnumerable<IScoringRule> rules)
        {
            _rules = rules;
        }

        public List<ScoreCard> VallyVotes(List<Vote> votes, Player storyTeller, Card storyCard)
        {
            var scoreBoards = _rules.SelectMany(rule => rule.CalculateScore(votes, storyTeller, storyCard));

            scoreBoards = scoreBoards.GroupBy(scoreBoard => scoreBoard.Player).Select(scorer =>
                new ScoreCard(scorer.First().Player, scorer.Sum(score => score.Score)));

            return scoreBoards.ToList();
        }
    }
}
