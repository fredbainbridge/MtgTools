using System.Collections.Generic;

namespace MtgTools.Models {
    public interface ICardRepository {
        IList<Card> GetAll();
        IList<Set> GetAvailableSets();
    }
}