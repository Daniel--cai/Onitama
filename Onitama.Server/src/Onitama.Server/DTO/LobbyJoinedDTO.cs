using AutoMapper;
using Onitama.Application.Common.Mappings;
using Onitama.Application.Events;

namespace Onitama.Server.DTO
{
    public class LobbyJoinedDTO : INotificationDTO, IMapFrom<LobbyJoinedEvent>
    {
        public int PlayerId { get; set; }
        public string Player { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<LobbyJoinedEvent, LobbyJoinedDTO>()
                .ForMember(dest => dest.PlayerId, opt => opt.MapFrom(s => s.Player.PlayerId))
                .ForMember(dest => dest.Player, opt => opt.MapFrom(s => s.Player.Name));
        }
    }
}
