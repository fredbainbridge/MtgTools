using System.Collections.Generic;
namespace MtgTools.Models {
    public interface ISealedGameRepository {
        int New(Set[] sets);
        List<BoosterCard> GetCardPool(int ID);
    }
}