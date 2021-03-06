﻿using Onitama.Application.Events;
using Onitama.Domain.Entities;
using Onitama.Server.RealTime.Interface;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;
using Onitama.Application.Player.Events;

namespace Onitama.Server.RealTime
{
    public class LobbyEventsClientHub : Hub<IEventsClient>
    {
        private readonly IMediator _mediator;

        public LobbyEventsClientHub(IMediator mediator)
        {
            _mediator = mediator;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            var name = Context.GetHttpContext().Request.Query["name"].ToString();
            var connectionId = Context.ConnectionId;
            await _mediator.Publish(new PlayerConnectedEvent { Player = name, Identifier = connectionId });
            
        }
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await _mediator.Publish(new PlayerDisconnectedEvent { Identifier = Context.ConnectionId });
            await base.OnDisconnectedAsync(exception);
        }
    }
}
