using Onitama.Domain.Interfaces;
using System.Collections.Generic;

namespace Onitama.Application.SharedKernel
{
    public abstract class BaseEntity: IEntity
    {
        public int Id { get; set; }
    }
}
