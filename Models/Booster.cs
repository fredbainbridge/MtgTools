using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MtgTools.Models
{
    public class Booster {
        public int ID { get; set; }
        public Set Set { get; set; }
        public ICollection<BoosterCard> Cards {get; set;}
    }
}


