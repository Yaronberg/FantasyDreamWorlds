﻿using Entities.Repositories;
using Entities.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebAPI.Services;
using WebAPI.Services.Interfaces;

namespace WebAPI.Installers
{
  public class DependenciesInstaller : IInstaller
  {

    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {

      services.AddTransient<IAuthService, AuthService>();
      services.AddTransient<IUserRepository, UserRepository>();
    }

  }
}
