﻿using Onitama.Application.Queries;
using Onitama.Application.Services;
using Onitama.Domain.Aggregates;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Onitama.Application.Handlers
{
    public class GetLobbyByCodeQueryHandler : IRequestHandler<GetLobbyByCodeQuery, Lobby>
    {
        private readonly IAwsDynamodbService _awsDynamodbService;

        public GetLobbyByCodeQueryHandler(IAwsDynamodbService awsDynamodbService)
        {
            _awsDynamodbService = awsDynamodbService;
        }
        public async Task<Lobby> Handle(GetLobbyByCodeQuery request, CancellationToken cancellationToken)
        {
            return await _awsDynamodbService.GetLobbyByCode(request.Code);
        }
    }
}
