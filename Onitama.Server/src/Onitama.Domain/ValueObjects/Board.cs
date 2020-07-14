using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Onitama.Domain.Common;
using Onitama.Domain.Constants;
using Onitama.Domain.Enumerations;
using Onitama.Domain.Exceptions;

namespace Onitama.Domain.ValueObjects
{
    public class Board : ValueObject
    {
        public int BoardId { get; set; }
        public string Configuration { get; set; }
        public string Blue { get; set; }
        public IList<Piece> Pieces { get; private set; }

        

        public Board()
        {
            Pieces = new List<Piece>();
        }

        public static Board For(string configuration)
        {
            var board = new Board();
            var configurations = configuration.ToCharArray();
            if (configuration.Count() != BoardConstants.BoardSize * BoardConstants.BoardSize)
            {
                throw new BoardInvalidConfigurationInException($"Invalid number of characters {configuration.Count()} in configuration {configuration}", null);
            }
            foreach (var item in configurations.Select((value, index) => new { Index = index, Value = value.ToString() }))
            {
                var piece = (Piece)item.Value;
                if (piece != null)
                {
                    piece.Coordinate = new Coordinate(item.Index);
                    board.Pieces.Add(piece);
                }
            }

            ValidateBoard(board);
            return board;
        }

        private static void ValidateBoard(Board board)
        {
            var correctNumberOfBluePieces = board.Pieces.Where(piece => piece.Colour == (int)Colour.Blue).Count();
            if (!(correctNumberOfBluePieces <= 5))
                throw new BoardInvalidConfigurationInException($"Number of blue pieces {correctNumberOfBluePieces} is invalid ", null);
            var correctNumberOfRedPieces = board.Pieces.Where(piece => piece.Colour == Colour.Red).Count();
            if (!(correctNumberOfRedPieces <= 5))
                throw new BoardInvalidConfigurationInException($"Number of red pieces {correctNumberOfRedPieces} is invalid ", null);

            var blueMaster = board.Pieces.Where(piece => piece.Colour == Colour.Blue && piece.Master).Count();
            var redMaster = board.Pieces.Where(piece => piece.Colour == Colour.Red && piece.Master).Count();

            if (blueMaster != 1)
                throw new BoardInvalidConfigurationInException($"Number of blue master pieces {blueMaster} is invalid ", null);
            if (redMaster != 1)
                throw new BoardInvalidConfigurationInException($"Number of red master pieces {redMaster} is invalid ", null);

        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return BoardId;
            yield return Pieces;
            yield return Blue;
            yield return Configuration;
        }

        public static explicit operator Board(string configuration)
        {
            return For(configuration);
        }

        public static implicit operator string(Board board)
        {
            var configuration = new StringBuilder(25);
            for(var i = 0; i < 25; i++)
            {
                var piece = board.Pieces.FirstOrDefault(piece =>
                {
                    var coordinate = new Coordinate(i);
                    return piece.Coordinate == coordinate;
                });
                configuration.Append(piece);
            }
            return configuration.ToString();
        }

    }
}
