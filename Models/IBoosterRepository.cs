using System.Collections.Generic;

namespace MtgTools.Models {
    public interface IBoosterRepository {
        Booster New(Set set);
    }
}