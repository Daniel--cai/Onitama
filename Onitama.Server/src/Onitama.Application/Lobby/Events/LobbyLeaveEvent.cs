using Onitama.Domain.Entities;
using MediatR;
using Onitama.Application.Common.Interfaces;
using System.Threading;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Onitama.Application.Lobby.Events
{
    public class LobbyLeaveEvent : INotification
    {
        public string Code { get; set; }
        public Domain.Entities.Player Player { get; set; }
    }
}
