FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

COPY src/Onitama.Application/Onitama.Application.csproj ./src/Onitama.Application/Onitama.Application.csproj
COPY src/Onitama.Domain/Onitama.Domain.csproj ./src/Onitama.Domain/Onitama.Domain.csproj
COPY src/Onitama.Infrastructure/Onitama.Infrastructure.csproj ./src/Onitama.Infrastructure/Onitama.Infrastructure.csproj
COPY src/Onitama.Server/Onitama.Server.csproj ./src/Onitama.Server/Onitama.Server.csproj
COPY tests/Onitama.Tests/Onitama.Tests.csproj ./tests/Onitama.Tests/Onitama.Tests.csproj
RUN ls
RUN ls src/
COPY Onitama.Server.sln ./

RUN dotnet restore

# Copy everything else and build
COPY . ./
WORKDIR /app/src/Onitama.Server
RUN dotnet publish /app/src/Onitama.Server -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
RUN ls 
COPY --from=build-env /app/src/Onitama.Server/out .
ENTRYPOINT ["dotnet", "Onitama.Server.dll"]