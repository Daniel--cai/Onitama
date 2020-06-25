using System;
using Microsoft.EntityFrameworkCore;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;

namespace Onitama.Application.Common.Interfaces
{
    public interface IOnitamaDbContext
    {
        DbSet<Player> Player { get; set; }
        DbSet<Lobby> Lobby { get; set; }
        DbSet<Board> Board { get; set; }
    }
}
