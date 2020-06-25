using System;
using Onitama.Domain.Exceptions;
using Onitama.Domain.ValueObjects;
using Xunit;
using System.Linq;

namespace Onitama.Domain.Tests
{
    public class BoardTests
    {
        [Theory]
        [InlineData("-bBbb-------rb------r-Rrr", 5, 5)]
        public void ShouldHaveCorrectPieces(string configuration, int blues, int reds)
        {
            // arrange
            var board = Board.For(configuration);

            // act
            var bluePieces = board.Pieces.Where(piece => piece.Colour == (int)Colour.Blue);
            var redPieces = board.Pieces.Where(piece => piece.Colour == (int)Colour.Red);

            // assert

            Assert.Equal(blues, bluePieces.Count());
            Assert.Equal(reds, redPieces.Count());

        }

        [Theory]
        // [InlineData("--b-b-bB-r-----------rrRr", 2, 1, 3, 4 )]
        [InlineData("-R--b----r---r-r--B-----r", 3, 3, 1, 0)]
        public void ShouldBeCorrectCoordinates(string configuration, int blueX, int blueY, int redX, int redY)
        {
            // arrange
            var board = Board.For(configuration);

            // act
            var blueMaster = board.Pieces.FirstOrDefault(piece => piece.Colour == (int)Colour.Blue && piece.Master);
            var redMaster = board.Pieces.FirstOrDefault(piece => piece.Colour == (int)Colour.Red && piece.Master);

            // assert
            Assert.Equal(blueX, blueMaster.X);
            Assert.Equal(blueY, blueMaster.Y);
            Assert.Equal(redX, redMaster.X);
            Assert.Equal(redY, redMaster.Y);

        }

        [Fact]
        public void ImplicitConversionToStringResultsInCorrectString()
        {
            // arrange
            const string value = "bbBbb---------------rrRrr";
            var board = Board.For(value);

            // act
            string result = board;

            // assert
            Assert.Equal(value, result);
        }

        [Fact]
        public void ExplicitConversionFromStringSetsDomainAndName()
        {
            // arrange
            var configuration = "bbBbb---------------rrRrr";
            var board = (Board)configuration;

            // act
            string result = board;

            // assert
            Assert.Equal(configuration, result);

        }
        [Theory]
        [InlineData("----b----r---rRr--------r")]
        [InlineData("")]
        [InlineData("----b----R---rRr--B-----r")]
        [InlineData("bbbbbbbbR---rRr--B---r--r")]
        public void ShouldThrowBoardInvalidConfigurationExceptionForInvalidConfiguration(string configuration)
            => Assert.Throws<BoardInvalidConfigurationInException>(() => (Board)configuration);
    }
}
