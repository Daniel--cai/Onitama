using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Onitama.Domain.Entities;

namespace Onitama.Application.Common.Interfaces
{
    public interface IOnitamaDbContext
    {
        DbSet<Player> Player { get; set; }
        DbSet<Lobby> Lobby { get; set; }
        DbSet<Round> Round { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken());
    }
}
