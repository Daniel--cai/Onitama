using System;
using Onitama.Domain.Exceptions;

namespace Onitama.Domain.ValueObjects
{
    public class Card
    {
        public int Id { get; private set; }

        public Card(int id)
        {
            Id = id;
        }

        public static implicit operator string(Card card)
        {
            return card.Id.ToString();
        }

        public static explicit operator Card(string id)
        {
            if (!int.TryParse(id, out var result))
            {
                throw new CardInvalidIdException($"Cannot infer card from id {id}");
            }

            if (result < 0 || result > 15)
            {
                throw new CardInvalidIdException($"Id {id} is not a valid card");
            }

            return new Card(result);
        }
    }
}
