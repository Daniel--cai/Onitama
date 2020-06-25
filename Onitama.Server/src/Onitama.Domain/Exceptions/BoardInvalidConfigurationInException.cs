using System;
namespace Onitama.Domain.Exceptions
{
    public class BoardInvalidConfigurationInException: Exception
    {
        public BoardInvalidConfigurationInException(string message, Exception ex)
            : base(message, ex)
        {
        }

        public BoardInvalidConfigurationInException(string message)
            : base(message)
        {
        }
    }
}
