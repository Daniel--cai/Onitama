using Microsoft.Extensions.DependencyInjection;
using Onitama.Domain.Interfaces;
using Onitama.Domain.Services;
using Onitama.Domain.Services.Rules;

namespace Onitama.Domain
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddTransient<IScoringRule, BonusRule>();
            services.AddTransient<IScoringRule, StoryTellerRule>();
            services.AddTransient<IScoringRule, CorrectRule>();
            services.AddTransient<IScoreService, ScoreService>();
            return services;
        }
    }
}
