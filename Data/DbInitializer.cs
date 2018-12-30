using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MtgTools.Models;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace MtgTools.Data {
    public class DbInitializer {
        public static void Initialize(MtgContext context) {
            context.Database.EnsureCreated();
            
            Set mtgset;
            string[] lines;
            int counter = 0;
            if(!context.Cards.Where(c => c.Set.Name == "Masters 25").Any()) {
                lines = File.ReadAllLines(@"Data\Sets\a25.csv.json");
                mtgset = new Set("Masters 25");
                counter = 0;
                foreach(string line in lines) {
                    if(counter != 0) {
                        string[] CardProperties = line.Split(',');
                        Card card = new Card { MultiVerseID = CardProperties[0], Name = CardProperties[1].Replace("##COMMA##",","), Cost = CardProperties[2], Type = CardProperties[3], Power = CardProperties[4], Toughness = CardProperties[5], Text = CardProperties[6].Replace("##COMMA##",","), Set = mtgset, Rarity = CardProperties[8], Ctype = CardProperties[9],ConvertedManaCost = CardProperties[10], ImageURL = CardProperties[11], ColorIdentity = CardProperties[12] };
                        context.Cards.Add(card);
                    }
                    counter++;
                }
            }
            if(!context.Cards.Where(c => c.Set.Name == "Ultimate Masters").Any()) {
                lines = File.ReadAllLines(@"Data\Sets\uma.csv.json");
                mtgset = new Set("Ultimate Masters");
                counter = 0;
                foreach(string line in lines) {
                    if(counter != 0) {
                        string[] CardProperties = line.Split(',');
                        Card card = new Card { MultiVerseID = CardProperties[0], Name = CardProperties[1].Replace("##COMMA##",","), Cost = CardProperties[2], Type = CardProperties[3], Power = CardProperties[4], Toughness = CardProperties[5], Text = CardProperties[6].Replace("##COMMA##",","), Set = mtgset, Rarity = CardProperties[8], Ctype = CardProperties[9],ConvertedManaCost = CardProperties[10], ImageURL = CardProperties[11], ColorIdentity = CardProperties[12] };
                        context.Cards.Add(card);
                    }
                    counter++;
                }
            }
            context.SaveChanges();
        }
    }
    
}