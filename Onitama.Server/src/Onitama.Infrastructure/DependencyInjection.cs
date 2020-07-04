using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Onitama.Infrastructure.Mapper;
using Onitama.Domain;
using Onitama.Infrastructure.Profiles;

namespace Onitama.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {

            //mapper
            services.AddAutoMapper(typeof(LobbyProfile), typeof(PlayerConnectionProfile));

            services.AddTransient<ILobbyMapper, LobbyMapper>();
            services.AddTransient<IMapper<Domain.Entities.Lobby, Infrastructure.Data.Model.Lobby>, LobbyMapper>();
            return services;
        }
    }
}
