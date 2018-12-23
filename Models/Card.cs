using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MtgTools.Models
{   
    public class Card
    {

        public int ID { get; set; }
        public string MultiVerseID { get; set;}
        public string Name { get; set; }
        public string Cost { get; set; }
        public string Type { get; set; }
        public string Power { get; set; }
        public string Toughness { get; set; }
        public string Text { get; set; }
        public Set Set { get; set; }
        public string Rarity { get; set; }
        public string Ctype {get; set;}
        public string ConvertedManaCost { get; set; }
        public string ImageURL { get; set; } 
        public string ColorIdentity {get; set;}
    }
}
