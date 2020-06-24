using System;
using Microsoft.EntityFrameworkCore;
using Onitama.Domain.Entities;

namespace Onitama.Application.Common.Interfaces
{
    public interface IOnitamaContext
    {
        DbSet<Player> Player { get; set; }
        DbSet<Lobby> Lobby { get; set; }
        DbSet<Board> Board { get; set; }
    }
}
