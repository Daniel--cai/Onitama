using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;

namespace Onitama.Persistence.Configurations
{
    public class LobbyConfiguration: IEntityTypeConfiguration<Lobby>
    {
        public void Configure(EntityTypeBuilder<Lobby> builder)
        {
            builder.Property(e => e.LobbyId).HasColumnName("LobbyId");
            builder.Property(e => e.Board)
                .HasColumnName("Board")
                .HasMaxLength(25)
                .HasConversion(
                     v => (string)v,
                     v => (Board)v
                );

            builder.Property(e => e.NeutralCard)
                .HasColumnName("NeutralCard")
                .HasConversion(
                     v => (int)v,
                     v => (Card)v
                );

            builder.Property(e => e.BlueCards)
                .HasColumnName("BlueCards")
                .HasConversion(
                     v => string.Join(" ", v.Select(c => c.Name)),
                     v => v.Split(" ", StringSplitOptions.None).Select(c => (Card)int.Parse(c)).ToList()
                );

            builder.Property(e => e.RedCards)
                .HasColumnName("RedCards")
                .HasConversion(
                     v => string.Join(" ", v.Select(c => c.Name)),
                     v => v.Split(" ", StringSplitOptions.None).Select(c => (Card)int.Parse(c)).ToList()
                );

            builder.Property(e => e.DateCreated)
                .HasColumnName("DateCreated");

            builder.Property(e => e.GameState).HasColumnName("GameState");
            builder.HasMany(y => y.Players)
                .WithOne(x => x.Lobby)
                .HasForeignKey(x => x.LobbyId);

            builder.HasMany(y => y.Rounds)
                .WithOne(x => x.Lobby)
                .HasForeignKey(x => x.LobbyId);
        }
    }
}
