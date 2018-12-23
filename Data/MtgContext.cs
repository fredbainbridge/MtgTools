using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MtgTools.Models;
using Microsoft.EntityFrameworkCore;

namespace MtgTools.Data {
    public class MtgContext : DbContext {
        public MtgContext(DbContextOptions<MtgContext> options) : base(options) {

        }
        public DbSet<Set> Sets {get; set;}
        public DbSet<Card> Cards {get; set;}
    }
}