using System;
using System.Linq;
using AutoMapper;
using Onitama.Infrastructure;
using Onitama.Domain;

namespace Dixit.Infrastructure.Profiles
{
    public class PlayerConnectionProfile : Profile
    {
        public PlayerConnectionProfile()
        {
            CreateMap<Onitama.Domain.Aggregates.PlayerConnection, Onitama.Infrastructure.Data.Model.PlayerConnection>().ReverseMap();
        }
    }
}
