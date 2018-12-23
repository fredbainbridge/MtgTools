namespace MtgTools.Models
{
    public class Set
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public Set() { }
        public Set(string set)
        {
            this.Name = set;
        }
    }
}
