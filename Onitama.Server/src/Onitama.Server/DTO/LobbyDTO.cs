using Onitama.Application.Common.Mappings;
using Onitama.Application.Lobby.Queries;
using System.Collections.Generic;

namespace Onitama.Server.DTO
{
    public class LobbyDTO : IMapFrom<LobbyDto>
    {
        public List<PlayerDTO> Players { get; set; } 
        public int RoundNumber { get; set; }
        public string GameState { get; set; }
        public string CurrentStoryTeller { get; set; }
        public int StoryCard { get; set; }
        public string Story { get; set; }
        public List<int> Cards { get; set; }
        public List<VoteDTO> Votes { get; set; }
        public List<int> Hand { get; set; }

    }
}
