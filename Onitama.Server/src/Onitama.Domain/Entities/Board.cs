using System;
namespace Onitama.Domain.Entities
{
    public class Board
    {
        public int BoardId { get; set; }
        public string Configuration { get; set; }
        public string Blue { get; set; }
        public string Red { get; set; }
        public string Neutral { get; set; }
    }
}
