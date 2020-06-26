using System;
namespace Onitama.Domain.Exceptions
{
    public class CardInvalidIdException : Exception
    {
        public CardInvalidIdException(string message, Exception ex)
            : base(message, ex)
        {
        }

        public CardInvalidIdException(string message)
            : base(message)
        {
        }
    }
}
