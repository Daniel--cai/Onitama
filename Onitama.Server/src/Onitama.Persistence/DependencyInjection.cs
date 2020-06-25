using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Onitama.Application.Common.Interfaces;

namespace Onitama.Persistence
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<OnitamaDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("OnitamaDatabase")));

            services.AddScoped<IOnitamaDbContext>(provider => provider.GetService<OnitamaDbContext>());

            return services;
        }
    }
}
