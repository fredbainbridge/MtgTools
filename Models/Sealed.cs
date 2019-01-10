using System.Collections.Generic;

namespace MtgTools.Models {
    public class SealedGame {
        public int ID {get; set;}
        public ICollection<BoosterCard> CardPool {get; set;}

        public SealedGame() {
            this.CardPool = new List<BoosterCard>();
        }
    }
}