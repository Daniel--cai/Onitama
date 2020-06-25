using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Onitama.Domain.Common;
using Onitama.Domain.Exceptions;

namespace Onitama.Domain.ValueObjects
{
    public class Board : ValueObject
    {
        public int BoardId { get; set; }
        public string Configuration { get; set; }
        public string Blue { get; set; }
        public string Red { get; set; }
        public string Neutral { get; set; }
        public IList<Piece> Pieces { get; private set; }

        private const int BOARD_SIZE = 5;

        public Board()
        {
            Pieces = new List<Piece>();
        }

        public static Board For(string configuration)
        {
            var board = new Board();
            var configurations = configuration.ToCharArray();
            if (configuration.Count() != BOARD_SIZE * BOARD_SIZE)
            {
                throw new BoardInvalidConfigurationInException($"Invalid number of characters {configuration.Count()} in configuration {configuration}", null);
            }
            foreach (var item in configurations.Select((value, index) => new { Index = index, Value = value.ToString() }))
            {
                var (x, y) = CoordinateToXY(item.Index);
                var piece = new Piece
                {
                    Active = true,
                    X = x,
                    Y = y
                };

                switch (item.Value)
                {
                    case "b":
                        piece.Colour = (int)Colour.Blue;
                        break;
                    case "B":
                        piece.Colour = (int)Colour.Blue;
                        piece.Master = true;
                        break;
                    case "r":
                        piece.Colour = (int)Colour.Red;
                        break;
                    case "R":
                        piece.Colour = (int)Colour.Red;
                        piece.Master = true;
                        break;
                    case "-":
                        continue;
                    default:
                        throw new BoardInvalidConfigurationInException($"Invalid character {item.Value} in configuration {configuration}", null);
                }
                board.Pieces.Add(piece);
            }

            ValidateBoard(board);
            return board;
        }

        private static void ValidateBoard(Board board)
        {
            var correctNumberOfBluePieces = board.Pieces.Where(piece => piece.Colour == (int)Colour.Blue).Count();
            if (!(correctNumberOfBluePieces <= 5))
                throw new BoardInvalidConfigurationInException($"Number of blue pieces {correctNumberOfBluePieces} is invalid ", null);
            var correctNumberOfRedPieces = board.Pieces.Where(piece => piece.Colour == (int)Colour.Red).Count();
            if (!(correctNumberOfRedPieces <= 5))
                throw new BoardInvalidConfigurationInException($"Number of red pieces {correctNumberOfRedPieces} is invalid ", null);

            var blueMaster = board.Pieces.Where(piece => piece.Colour == (int)Colour.Blue && piece.Master).Count();
            var redMaster = board.Pieces.Where(piece => piece.Colour == (int)Colour.Red && piece.Master).Count();

            if (blueMaster != 1)
                throw new BoardInvalidConfigurationInException($"Number of blue master pieces {blueMaster} is invalid ", null);
            if (redMaster != 1)
                throw new BoardInvalidConfigurationInException($"Number of red master pieces {redMaster} is invalid ", null);

        }

        private static Tuple<int,int> CoordinateToXY(int coordinate)
        {
            var x = coordinate % BOARD_SIZE; 
            var y = coordinate / BOARD_SIZE; 
            return new Tuple<int, int>(x, y);
        }

        private static string PieceToNotation(Piece piece)
        {
            if (piece == null)
                return "-";

            string notation;
            if (piece.Colour == (int)Colour.Blue)
            {
                notation = "b";
            }
            else
            {
                notation = "r";
            }

            if (piece.Master)
            {
                notation = notation.ToUpper();
            }

            return notation;
        }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return BoardId;
            yield return Pieces;
            yield return Blue;
            yield return BoardId;
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
                    var (x, y) = CoordinateToXY(i);
                    return piece.X == x && piece.Y == y;
                });
                configuration.Append(PieceToNotation(piece));
            }
            return configuration.ToString();
        }

    }
}
