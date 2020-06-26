using System;
using System.Linq;
using Onitama.Domain.Constants;
using Onitama.Domain.Exceptions;

namespace Onitama.Domain.ValueObjects
{
    public class Piece
    {
        public Colour Colour { get; set; }
        public Coordinate Coordinate { get; set; }
        public bool Active { get; set; }
        public bool Master { get; set; }

        private Piece() { }

        public Piece(Coordinate coordinate, Colour colour, bool master = false)
        {
            Coordinate = coordinate;
            Colour = colour;
            Master = master;
        }

        public static explicit operator Piece(string configuration)
        {
            if (configuration == "-")
            {
                return null;
            }

            var piece = new Piece();

            if (configuration.ToLower() == "b")
            {
                piece.Colour = Colour.Blue;
            }
            else if (configuration.ToLower() == "r")
            {
                piece.Colour = Colour.Red;
            }
            else
            {
                throw new BoardInvalidConfigurationInException($"Invalid character {configuration} for Piece");
            }

            if (configuration.ToLower() != configuration)
            {
                piece.Master = true;
            }

            return piece;
        }

        public static implicit operator string(Piece piece)
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

    }
}
