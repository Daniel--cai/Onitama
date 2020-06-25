using System;
using System.Linq;
using AutoMapper;
using Onitama.Infrastructure;
using Onitama.Domain;

namespace Onitama.Infrastructure.Profiles
{
    public class PlayerConnectionProfile : Profile
    {
        public PlayerConnectionProfile()
        {
            CreateMap<Onitama.Domain.Entities.Player, Onitama.Infrastructure.Data.Model.PlayerConnection>().ReverseMap();
        }
    }
}
