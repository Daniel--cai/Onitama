using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Onitama.Domain.Entities;
using Onitama.Domain.ValueObjects;

namespace Onitama.Persistence.Configurations 
{
    public class RoundConfiguration : IEntityTypeConfiguration<Round>
    {
        public void Configure(EntityTypeBuilder<Round> builder)
        {
            builder.Property(e => e.RoundId).HasColumnName("RoundId");
            builder.Property(e => e.DateCreated).HasColumnName("DateCreated");
            builder.Property(e => e.Previous)
                .HasColumnName("Previous")
                .HasConversion(
                v => (int)v,
                v => (Coordinate)v
            );

            builder.Property(e => e.Next)
                .HasColumnName("Next")
                .HasConversion(
                    v => (int)v,
                    v => (Coordinate)v
                );

            builder.Property(e => e.Card)
                .HasColumnName("Card")
                .HasConversion(
                    v => (int)v,
                    v => (Card)v
                );

            builder.HasOne(y => y.Lobby)
               .WithMany(x => x.Rounds)
               .HasForeignKey(x => x.LobbyId);
        }
    }
}
