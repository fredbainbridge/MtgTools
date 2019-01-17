using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MtgTools.Models;
namespace MtgTools.Controllers {
    public class SealedController : Controller {
        private ISealedGameRepository _sealedGameRepo;
        public SealedController(ISealedGameRepository sealedGameRepo) {
            _sealedGameRepo = sealedGameRepo;
        }
        public int New([FromBody] Set[] sets) {
            return _sealedGameRepo.New(sets);
        }
        public List<BoosterCard> Index(int id) {
            return _sealedGameRepo.GetCardPool(id);
        }
    }
}
