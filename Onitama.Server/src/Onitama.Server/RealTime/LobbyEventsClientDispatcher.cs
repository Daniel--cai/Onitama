using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Threading;
using System.Threading.Tasks;
using Onitama.Application.Events;
using Onitama.Server.RealTime.Interface;
using Onitama.Server.DTO;
using System.Linq;
using AutoMapper;
using Onitama.Application.Lobby.Events;

namespace Onitama.Server.RealTime
{
    public class LobbyEventsClientDispatcher : INotificationHandler<LobbyJoinedEvent>, INotificationHandler<LobbyLeaveEvent>
    {
        private readonly IMapper _mapper;
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public LobbyEventsClientDispatcher (IHubContext<LobbyEventsClientHub, IEventsClient> hubContext, IMapper mapper)
        {
            _hubContext = hubContext;
            _mapper = mapper;
        }
            
        public Task Handle(LobbyJoinedEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyJoined(_mapper.Map<LobbyJoinedDTO>(notification));
        }

        public Task Handle(LobbyLeaveEvent notification, CancellationToken cancellationToken)
        {
            return _hubContext.Clients.All.LobbyLeft(_mapper.Map<LobbyLeftDTO>(notification));
        }
    }
}
