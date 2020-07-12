using Onitama.Domain.Common;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Onitama.Domain.Entities
{
    public class Lobby : AuditableEntity
    {
        public int LobbyId { get; set; }
        public List<Round> Rounds { get; set; }
        public Board Board { get; set; }
        public IList<Player> Players { get; set; }
        public State GameState { get; set; }
        public IList<Card> BlueCards { get; set; }
        public IList<Card> RedCards { get; set; }
        public Card NeutralCard { get; set; }

        public Lobby()
        {
            Rounds = new List<Round>();
            Players = new List<Player>();
            GameState = State.Lobby;
            Board = new Board();
            BlueCards = new List<Card>();
            RedCards = new List<Card>();
        }

        ////player actions
        //public void PlayerTellStory(Player player, string story, Card card)
        //{
        //    if (GameState != State.Story)
        //        throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for TellStory command");
        //    CurrentRound.PlayerTellStory(player, story, card);
        //    card.Played(RoundNumber);
        //    GameState = State.InProgress;
        //}

        //public void PlayerVoteCard(Player player, Card card)
        //{
        //    if (GameState != State.Voting)
        //        throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for PlayerVoteCard command");


        //    if (!CurrentPlayedCards.Contains(card))
        //        throw new InvalidOperationException($"Player {player.Name} cannot vote for a card that hasn't been played.");

        //    CurrentRound.PlayerVoteCard(player, card);
        //}

        //public void PlayerPlayCard(Player player, Card card)
        //{
        //    if (GameState != State.InProgress)
        //        throw new InvalidOperationException($"Invalid game state {GameState.DisplayName} for PlayerPlayCard command");
        //    var count = Deck.Hand(player).Count;
        //    if (Deck.Hand(player).Count < 6)
        //        throw new InvalidOperationException($"Player {player.Name} has already played a card");

        //    CurrentRound.PlayerPlayCard(player, card);
        //    if (HasAllPlayersPlayed())
        //    {
        //        GameState = State.Voting;
        //    }
        //}

        //public Player PlayerConnected(string name, string identifier)
        //{
        //    var existingPlayer = Players.Find(player => player.Name == name);
        //    if (existingPlayer != null)
        //    {
        //        existingPlayer.Identifier = identifier;
        //        existingPlayer.Connected = true;
        //    } 
        //    else
        //    {
        //        existingPlayer = new Player(name, identifier);
        //        Players.Add(existingPlayer);
        //    }
        //    return existingPlayer;
        //}

        //public Player PlayerDisconnected(string disconnected)
        //{
        //    var player = Players.Find(p => p.Name == disconnected);
        //    player.Connected = false;
        //    return player;
        //}
    }
}
