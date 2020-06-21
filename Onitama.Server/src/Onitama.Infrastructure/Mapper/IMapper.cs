using System;
namespace Onitama.Infrastructure.Mapper
{
    public interface IMapper<T, U>
    {
        U Map(T t);
        T Map(U u);
    }
}
