using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Onitama.Domain.Entities;

namespace Onitama.Persistence.Configurations 
{
    public class PlayerConfiguration : IEntityTypeConfiguration<Player>
    {
        public void Configure(EntityTypeBuilder<Player> builder)
        {
            builder.Property(e => e.PlayerId).HasColumnName("PlayerId");
            builder.Property(e => e.Name).HasColumnName("Name");
            builder.Property(e => e.Identifier).HasColumnName("Identifier");
            builder.Property(e => e.Connected).HasColumnName("Connected");
        }
    }
}
