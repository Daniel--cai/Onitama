namespace Onitama.Infrastructure.Data.Model
{
    public class Turn
    {
        public Colour Colour { get; set; }
        public int Id { get; set; }
        public Coordindate Coordindate { get; set; }
    }

    public class Coordindate
    {
        public int X { get; set; }
        public int Y { get; set; }
    }

}
