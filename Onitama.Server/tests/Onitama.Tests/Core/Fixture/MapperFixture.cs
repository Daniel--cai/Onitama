using System;
using AutoMapper;
using Onitama.Infrastructure.Profiles;

namespace Onitama.Tests.Core.Fixture
{
    public class MapperFixture : IDisposable
    {
        public IMapper GetLobbyMapper()
        {
            var config = new MapperConfiguration(opts =>
            {
                opts.AddProfile(new LobbyProfile());
            });

            return config.CreateMapper();
        }

        public void Dispose() { }
    }
}
