﻿using Microsoft.EntityFrameworkCore;

namespace Entities
{
  public class RepositoryContext : DbContext
  {
    public RepositoryContext(DbContextOptions options) : base(options) { }
  }
}
