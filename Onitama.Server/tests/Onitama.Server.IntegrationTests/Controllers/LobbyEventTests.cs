using System;
using System.Net.Http;
using System.Threading.Tasks;
using Onitama.Api.IntegrationTests;
using Xunit;

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
            // var connection = new HubConnectionBuilder();
        }

    }
}
