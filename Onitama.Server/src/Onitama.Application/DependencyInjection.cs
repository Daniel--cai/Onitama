using System;
using System.Reflection;
using AutoMapper;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Onitama.Application.Infrastructure;
using Onitama.Application.Interfaces.Infrastructure;

namespace Onitama.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {

            services.AddTransient<ITurnLogic, TurnLogic>();
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());


            return services;
        }
    }
}
