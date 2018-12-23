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
            return _context.Cards.ToList();
        }
    }
}