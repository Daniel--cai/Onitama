using System;
namespace Onitama.Domain.ValueObjects
{
    public class Colour : Enumeration
    {
        public static readonly Colour Blue = new Colour(0, "Blue");
        public static readonly Colour Red = new Colour(1, "Red");

        protected Colour() { }
        protected Colour(int value, string displayName) : base(value, displayName) { }
    }
}
