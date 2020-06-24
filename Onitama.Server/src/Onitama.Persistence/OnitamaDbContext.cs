using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Onitama.Application.Common.Interfaces;
using Onitama.Domain.Entities;

namespace Onitama.Persistence
{
    public class OnitamaDbContext : DbContext, IOnitamaContext
    {
        public OnitamaDbContext(DbContextOptions<OnitamaDbContext> options)
          : base(options)
        {
        }

        public DbSet<Player> Player { get; set; }
        public DbSet<Lobby> Lobby { get; set; }
        public DbSet<Board> Board { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(OnitamaDbContext).Assembly);
        }
    }
}
