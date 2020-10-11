using AutoMapper;
using Onitama.Application.Common.Mappings;
using Onitama.Application.Lobby.Events;

namespace Onitama.Server.DTO
{
    public class LobbyLeftDTO : IMapFrom<LobbyLeaveEvent>
    {
        public int LobbyId { get; set; }
        public string Player { get; set; }
        public string PlayerId { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<LobbyLeaveEvent, LobbyLeftDTO>()
                .ForMember(dest => dest.PlayerId, opt => opt.MapFrom(s => s.Player.PlayerId))
                .ForMember(dest => dest.Player, opt => opt.MapFrom(s => s.Player.Name))
                .ForMember(dest => dest.LobbyId, opt => opt.MapFrom(s => s.LobbyId));
        }
    }
}
