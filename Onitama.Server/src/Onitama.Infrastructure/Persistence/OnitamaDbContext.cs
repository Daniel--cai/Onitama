using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Onitama.Application.Common.Interfaces;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;
using Onitama.Common;
using Onitama.Domain.Common;

namespace Onitama.Infrastructure.Persistence
{
    public class OnitamaDbContext : DbContext, IOnitamaDbContext
    {
        private readonly IDateTime _dateTime;

        public OnitamaDbContext(DbContextOptions<OnitamaDbContext> options)
            : base(options)
        {
        }

        public OnitamaDbContext(DbContextOptions<OnitamaDbContext> options, IDateTime dateTime)
          : base(options)
        {
            _dateTime = dateTime;
        }

        public DbSet<Player> Player { get; set; }
        public DbSet<Lobby> Lobby { get; set; }
        public DbSet<Round> Round { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var dateCreated = _dateTime.Now;
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(OnitamaDbContext).Assembly);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            foreach (var entry in ChangeTracker.Entries<AuditableEntity>())
            {
                if (entry.State == EntityState.Added)
                {
                        entry.Entity.DateCreated = _dateTime.Now;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }

    }
}
