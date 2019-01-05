using System.Collections.Generic;
using System;
using MtgTools.Data;
using System.Linq;
//using Microsoft.EntityFrameworkCore;

namespace MtgTools.Models
{
    public class BoosterRepository : IBoosterRepository
    {
        private MtgContext _context;
        public BoosterRepository(MtgContext context) {
            _context = context;
        }
        private Pack GetPackDefinition(Set set)
        {
            Pack pack = new Pack();
            if (set.Name == "Masters 25" || set.Name == "Ultimate Masters")
            {
                Option option1 = new Option();
                option1.Probability = 0.125;
                option1.Qty = 1;
                option1.Rarity = "Mythic Rare";

                Option option2 = new Option();
                option2.Probability = 0.875;
                option2.Qty = 1;
                option2.Rarity = "Rare";

                Option[] options;
                options = new Option[2];
                options[0] = option1;
                options[1] = option2;
                pack.Options.Add(options);

                Pick UncommonPick = new Pick();
                UncommonPick.Qty = 3;
                UncommonPick.Rarity = "Uncommon";

                Pick CommonPick = new Pick();
                CommonPick.Qty = 11;
                CommonPick.Rarity = "Common";

                Pick[] picks;
                picks = new Pick[2];
                picks[0] = UncommonPick;
                picks[1] = CommonPick;
                pack.Pick = picks;
            }
            return pack;
        }
        private BoosterCard AddCard(string SetName, string Rarity, List<string> CardIDsInPack, string CType = "na") {
            IEnumerable<Card> optionCards;
            if(CType != "na") {
                optionCards = _context.Cards.Where(c => c.Set.Name == SetName && c.Rarity == Rarity && c.Ctype == CType && c.Name != "Forest" && c.Name != "Mountain" && c.Name != "Swamp" && c.Name != "Island" && c.Name != "Plains");
            }
            else {
                optionCards = _context.Cards.Where(c => c.Set.Name == SetName && c.Rarity == Rarity && c.Name != "Forest" && c.Name != "Mountain" && c.Name != "Swamp" && c.Name != "Island" && c.Name != "Plains");
            }
            bool GettingCardForBooster = true;
            BoosterCard tmpBoosterCard;
            Card tmpCard;
            Random r = new Random();
            while(GettingCardForBooster) {
                tmpCard = optionCards.ElementAt(r.Next(0, optionCards.Count()));
                tmpBoosterCard = new BoosterCard(tmpCard);
                if(CardIDsInPack.Contains(tmpBoosterCard.MultiVerseID)) {
                    GettingCardForBooster = true;
                }
                else {
                    GettingCardForBooster = false;
                    return tmpBoosterCard;
                }
            }
            return null;
        }
        public Booster New(Set set)
        {
            Pack pack = GetPackDefinition(set);
            bool foundCard = false;
            List<BoosterCard> cardsInPack = new List<BoosterCard>();
            List<string> CardIDsInPack = new List<string>(); //used to prevent duplicates.
            double totalProbability = 0.00;
            BoosterCard tmpBoosterCard;
            //roll for your options
            Random r = new Random();
            double roll;
            foreach (Option[] options in pack.Options)
            {
                foundCard = false;
                roll = r.NextDouble();
                foreach(Option o in options) {
                    totalProbability += o.Probability;
                    if (!foundCard)
                    {
                        if (roll <= totalProbability)
                        {
                            foundCard = true;
                            for(int i = 0; i < o.Qty; i++)
                            {
                                tmpBoosterCard = AddCard(set.Name, o.Rarity, CardIDsInPack, o.Type);
                                CardIDsInPack.Add(tmpBoosterCard.MultiVerseID);
                                cardsInPack.Add(tmpBoosterCard);                             
                            }
                        }
                    }
                }
                totalProbability = 0.00;
            }
            foreach (Pick p in pack.Pick)
            {
                for(int i = 0; i < p.Qty; i++)
                {
                    tmpBoosterCard = AddCard(set.Name, p.Rarity, CardIDsInPack);
                    CardIDsInPack.Add(tmpBoosterCard.MultiVerseID);
                    cardsInPack.Add(tmpBoosterCard);
                }
            }

            Booster booster = new Booster();
            booster.Cards = cardsInPack;
            booster.Set = set;
            return booster;
        }
    }
    public class Pack
    {
        public string Set { get; set; }
        public List<Option[]> Options { get; set; }
        public Pick[] Pick { get; set; }
        public Pack()
        {
            this.Options = new List<Option[]>();
        }
    }

    public class Option
    {
        public double Probability { get; set; }
        public int Qty { get; set; }
        public string Rarity { get; set; }
        public string Type { get; set; }

        public Option()
        {
            this.Type = "na";
        }
    }

    public class Pick
    {
        public int Qty { get; set; }
        public string Rarity { get; set; }
    }
}