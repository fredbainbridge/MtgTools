using MtgTools.Models;
using MtgTools.Data;
using System.Collections.Generic;
using System.Linq;

namespace MtgTools.Models {
    public class SealedGameRepository : ISealedGameRepository {
        private IBoosterRepository _boosterRepository;
        private MtgContext _context;

        public SealedGameRepository(IBoosterRepository boosterRepository, MtgContext context) {
            _boosterRepository = boosterRepository;
            _context = context;
        } 
        public int New( Set[] sets) {
            SealedGame sealedGame = new SealedGame();

            foreach (Set set in sets) {
                Booster b = _boosterRepository.New(set);
                foreach(BoosterCard card in b.Cards) {
                    sealedGame.CardPool.Add(card);
                }
            }
            _context.SealedGames.Add(sealedGame);
            _context.SaveChanges();
            return sealedGame.ID;
        }

        public List<BoosterCard> GetCardPool(int ID) {
            return _context.SealedGames
                    .Where(g => g.ID == ID)
                    .Select(g => g.CardPool)
                    .FirstOrDefault()
                    .ToList();
            
        }
    }
}