using System;
using Microsoft.EntityFrameworkCore;

namespace Onitama.Infrastructure.Persistence
{
    public class OnitamaDbContextFactory : DesignTimeDbContextFactoryBase<OnitamaDbContext>
    {
        protected override OnitamaDbContext CreateNewInstance(DbContextOptions<OnitamaDbContext> options)
        {
            return new OnitamaDbContext(options);
        }
    }
}
