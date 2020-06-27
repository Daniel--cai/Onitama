using System;
using Microsoft.EntityFrameworkCore;
using Moq;
using Shouldly;
using Xunit;
using Onitama.Common;
using Onitama.Domain.Entities;
using System.Threading.Tasks;
using System.Linq;
using Onitama.Domain.ValueObjects;
using System.Collections.Generic;

namespace Onitama.Persistence.IntegrationTests
{
    public class OnitamaDbContextTests : IDisposable
    {
        private readonly OnitamaDbContext _sut;
        private readonly DateTime _dateTime;
        private readonly Mock<IDateTime> _dateTimeMock;

        public OnitamaDbContextTests()
        {

            _dateTime = new DateTime(3001, 1, 1);
            _dateTimeMock = new Mock<IDateTime>();
            _dateTimeMock.Setup(m => m.Now).Returns(_dateTime);

            var options = new DbContextOptionsBuilder<OnitamaDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;

            _sut = new OnitamaDbContext(options, _dateTimeMock.Object);
        }

        [Fact]
        public async Task SaveChangesAsync_GivenNewLobby_ShouldCreateInDb()
        {
            var expected = new Lobby
            {
                Code = "abcd",
                NeutralCard = new Card(0),
                Board = (Board)"bbBbb--------r------rRrr-"
            };

            expected.BlueCards.Add(new Card(1));
            expected.BlueCards.Add(new Card(2));
            expected.RedCards.Add(new Card(3));
            expected.RedCards.Add(new Card(4));
     

            _sut.Lobby.Add(expected);

            await _sut.SaveChangesAsync();

            var expectedRoundOne = new Round
            {
                LobbyId = expected.LobbyId,
                Card = new Card(0),
                Previous = new Coordinate(0),
                Next = new Coordinate(24),
            };

            var expectedRoundTwo = new Round
            {
                LobbyId = expected.LobbyId,
                Card = new Card(1),
                Previous = new Coordinate(1),
                Next = new Coordinate(23),
            };

            _sut.Round.Add(expectedRoundOne);
            _sut.Round.Add(expectedRoundTwo);

            await _sut.SaveChangesAsync();

            var result = await _sut.Lobby.Include(l => l.Rounds).FirstOrDefaultAsync();

            result.ShouldBe(expected);
            result.BlueCards.ShouldBe(expected.BlueCards);
            result.RedCards.ShouldBe(expected.RedCards);
            result.Rounds.ShouldBe(expected.Rounds);
            result.DateCreated.ShouldBe(_dateTime);
        }

        [Fact]
        public async Task SaveChangesAsync_GivenNewPlayer_ShouldCreateInDb()
        {
            var expected = new Player
            {
                Name = "player",
                Identifier = "12345678910",
                Connected = true,
                Colour = Colour.Blue,
            };
            
            _sut.Player.Add(expected);

            await _sut.SaveChangesAsync();

            var result = await _sut.Player.FirstOrDefaultAsync(p => p.Name == expected.Name);

            result.ShouldBe(expected);
            result.DateCreated.ShouldBe(_dateTime);

        }

        [Fact]
        public async Task SaveChangesAsync_GivenNewRound_ShouldCreateInDb()
        {
            var lobbyId = 1;

            var expectedRoundOne = new Round
            {
                LobbyId = lobbyId,
                Card = new Card(0),
                Previous = new Coordinate(0),
                Next = new Coordinate(24),
            };

            var expectedRoundTwo = new Round
            {
                LobbyId = lobbyId,
                Card = new Card(1),
                Previous = new Coordinate(1),
                Next = new Coordinate(23),
            };

            _sut.Round.Add(expectedRoundOne);
            _sut.Round.Add(expectedRoundTwo);

            await _sut.SaveChangesAsync();

            var result = await _sut.Round.Where(r => r.LobbyId == lobbyId).ToListAsync();
            result.ShouldBe(new List<Round> { expectedRoundOne, expectedRoundTwo });
            result[0].RoundId.ShouldNotBe(0);
            result[1].RoundId.ShouldNotBe(0);
            expectedRoundOne.DateCreated.ShouldBe(_dateTime);
            expectedRoundTwo.DateCreated.ShouldBe(_dateTime);
        }


        public void Dispose()
        {
            _sut?.Dispose();
        }
    }
}
