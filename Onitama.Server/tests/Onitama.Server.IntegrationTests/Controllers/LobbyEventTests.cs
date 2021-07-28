using System;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;
using Onitama.Server.IntegrationTests.Fixtures;
using Microsoft.AspNetCore.SignalR.Client;

namespace Onitama.Server.IntegrationTests.Controllers
{
    public class LobbyEventTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly HttpClient _client;

        public LobbyEventTests(CustomWebApplicationFactory<Startup> customWebApplicationFactory)
        {
            _client = customWebApplicationFactory.CreateClient();
        }

        public async Task PlayerConnectedEvent_WhenNewPlayerJoins_ShouldCreateConnection()
        {
            await using var playerOne = HubConnectionFactory.Create();
            await using var playerTwo = HubConnectionFactory.Create();
            await playerOne.StartAsync();
            await playerTwo.StartAsync();
        }
    }
}
