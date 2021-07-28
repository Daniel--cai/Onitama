using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Onitama.Domain.Entities;

namespace Onitama.Infrastructure.Persistence.Configurations 
{
    public class PlayerConfiguration : IEntityTypeConfiguration<Player>
    {
        public void Configure(EntityTypeBuilder<Player> builder)
        {
            builder.Property(e => e.PlayerId).HasColumnName("PlayerId");
            builder.Property(e => e.Name).HasColumnName("Name");
            builder.Property(e => e.Identifier).HasColumnName("Identifier");
            builder.Property(e => e.Connected).HasColumnName("Connected");
            builder.Property(e => e.DateCreated).HasColumnName("DateCreated");

            builder.HasOne(y => y.Lobby)
               .WithMany(x => x.Players)
               .HasForeignKey(x => x.LobbyId);
        }
    }
}
