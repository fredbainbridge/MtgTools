using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MtgTools.Models
{
    public class BoosterCard 
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
        public bool Active {get; set;}
        public int PickNumber {get; set;}

        public BoosterCard(){}
        public BoosterCard(Card card) {
            MultiVerseID = card.MultiVerseID;
            Name = card.Name;
            Cost = card.Cost;
            Type = card.Type;
            Power = card.Power;
            Toughness = card.Toughness;
            Text = card.Text;
            Set = card.Set;
            Rarity = card.Rarity;
            Ctype = card.Ctype;
            ConvertedManaCost = card.ConvertedManaCost;
            ImageURL = card.ImageURL;
            ColorIdentity = card.ColorIdentity;
            Active = true;
            PickNumber = 0;
        }
    }
}