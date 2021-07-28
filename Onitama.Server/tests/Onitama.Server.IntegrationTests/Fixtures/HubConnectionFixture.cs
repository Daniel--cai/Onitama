using System;
using Microsoft.AspNetCore.SignalR.Client;

namespace Onitama.Server.IntegrationTests.Fixtures
{
    public static class HubConnectionFactory
    {
        public static HubConnection Create()
        {
            var connection = new HubConnectionBuilder()
               .WithUrl($"{UrlHelper.BaseUrl}/lobbyevents")
               .Build();

            return connection;
        }
    }
}
