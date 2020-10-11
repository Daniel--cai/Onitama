using System;
using System.Net.Http;
using System.Reflection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Onitama.Api.IntegrationTests
{
    public class CustomWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureAppConfiguration(config =>
            {
                var integrationConfig = new ConfigurationBuilder()
                .AddJsonFile("integrationsettings.json")
                .AddUserSecrets(Assembly.GetExecutingAssembly())
                .AddEnvironmentVariables()
                .Build();

                config.AddConfiguration(integrationConfig);
            })
            .ConfigureServices(services =>
            {
                // Register test services
                AddTestServices(services);
            })
            .UseEnvironment("Development");
        }

        public HttpClient CreateClientWithoutCookie()
        {
            return CreateClient(new WebApplicationFactoryClientOptions { HandleCookies = false });
        }

        public HttpClient GetAnonymousClient()
        {
            return CreateClient();
        }
      
        private static void AddTestServices(IServiceCollection services)
        {
            // Configure test services here.
        }
    }
}