using Microsoft.AspNetCore.Mvc;
using MtgTools.Models;
using System.Collections.Generic;

namespace MtgTools.Controllers
{
    public class CardController : Controller
    {
        private ICardRepository _CardRepository;

        public CardController(ICardRepository CardRepository)
        {
            _CardRepository = CardRepository;
        }
        [HttpGet]
        public IList<Card> Index()
        {
            return _CardRepository.GetAll();
        }
    }
}
