
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using Onitama.Domain.Entities;

namespace Onitama.Application.Events
{
    public class CardVotedEvent : INotification
    {
        public Player Player { get; set; }
        public Card Card  {get;set;}
        public string Code { get; set; }
    }
}
