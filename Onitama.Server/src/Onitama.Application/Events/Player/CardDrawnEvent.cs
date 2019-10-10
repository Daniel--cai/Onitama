﻿using Onitama.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Onitama.Application.Events
{
    public class CardDrawnEvent : INotification
    {
        public string Code { get; set; }
        public Player Player { get; set; }
        public List<Card> Hand { get; set; }
    }
}
