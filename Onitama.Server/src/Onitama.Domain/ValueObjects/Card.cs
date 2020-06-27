using System;
using Onitama.Domain.Exceptions;

namespace Onitama.Domain.ValueObjects
{
    public class Card
    {
        public int Name { get; private set; }

        public Card(int name)
        {
            Name = name;
        }

        public static implicit operator int(Card card)
        {
            return card.Name;
        }

        public static explicit operator Card(int result)
        {
            if (result < 0 || result > 15)
            {
                throw new CardInvalidIdException($"Id {result} is not a valid card");
            }

            return new Card(result);
        }
    }
}
