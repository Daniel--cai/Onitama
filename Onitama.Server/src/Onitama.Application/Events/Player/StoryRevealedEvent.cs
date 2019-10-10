using Onitama.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Application.Events
{
    public class StoryRevealedEvent : INotification
    {
        public List<Card> Cards { get; set; }
    }
}
