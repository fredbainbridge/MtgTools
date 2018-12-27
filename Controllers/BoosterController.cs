using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MtgTools.Models;

namespace MTGDrafter.Controllers
{
    public class BoosterController : Controller
    {
        private IBoosterRepository _BoosterRepository;

        public BoosterController(IBoosterRepository BoosterRepository)
        {
            _BoosterRepository = BoosterRepository;
        }
        public IActionResult New(string set)
        {
            Set mtgset = new Set(set);            
            return View(_BoosterRepository.New(mtgset));
        }
    }
}