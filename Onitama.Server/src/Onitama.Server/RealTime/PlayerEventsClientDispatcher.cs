using Onitama.Application.Events;
using Onitama.Server.DTO;
using Onitama.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Onitama.Server.RealTime
{
    public class PlayerEventsClientDispatcher 
    {
        private readonly IHubContext<LobbyEventsClientHub, IEventsClient> _hubContext;

        public PlayerEventsClientDispatcher(IHubContext<LobbyEventsClientHub, IEventsClient> hubContext)
        {
            _hubContext = hubContext;
        }
       
    }
}
