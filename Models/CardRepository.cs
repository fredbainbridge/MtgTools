using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MtgTools.Data;
using MtgTools.Models;

namespace MtgTools.Models
{
    public class CardRepository : ICardRepository {
        private MtgContext _context;
        public CardRepository(MtgContext context) {
            _context = context;
        }
        public IList<Card> GetAll() {
            return _context.Cards.Include(c => c.Set).ToList();
        }

        public IList<Set> GetAvailableSets() {
            IList<String> availableSets = (from dbo in _context.Sets select dbo.Name).Distinct().ToList();
            List<Set> sets = new List<Set>();
            foreach (string s in availableSets)
            {
                Set set = new Set(s);
                sets.Add(set);
            }
            return sets;
        }
    }
}