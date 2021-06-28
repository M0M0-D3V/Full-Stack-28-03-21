# :tada: WELCOME TO WEEK 12 DAY 3! :tada:

---

## :school_satchel: Entity Framework Core - ~10am

---

### Gettign Started 3.1

### - 0. Install one time

- `dotnet tool install --global dotnet-ef`

### - 1. Add packages to EACH PROJECT

- `dotnet add package Pomelo.EntityFrameworkCore.MySql --version 3.1.1`
- `dotnet add package Microsoft.EntityFrameworkCore.Design --version 3.1.5`

### - 2. Make Model Class

```csharp
using System;
using System.ComponentModel.DataAnnotations;
namespace Monsters.Models
{
    public class Monster
    {
        [Key]
        public int MonsterId { get; set; }
        public string Name { get; set; }
        public int Height { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
```

### - 3. Make Context Class

- `Models/MyContext.cs`

```csharp
using Microsoft.EntityFrameworkCore;
namespace Monster.Models
{
    // the MyContext class representing a session with our MySQL
    // database allowing us to query for or save data
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        // the "Monsters" table name will come from the DbSet variable name
        public DbSet<Monster> Monsters { get; set; }
    }
}
```

### - 4. Setup Connection String in `appsettings.json`

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
    "DBInfo":
    {
        "Name": "MySQLconnect",
        "ConnectionString": "server=localhost;userid=root;password=root;port=3306;database=monsterdb;SslMode=None"
    }
}
```
### 5. Add changes to `Startup.cs`
```csharp
// other using statements
using Monster.Models;
using Microsoft.EntityFrameworkCore;
namespace Monsters
{
    public class Startup
    {
        public Startup (IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigureServices (IServiceCollection services)
        {
            services.AddDbContext<MyContext>(options => options.UseMySql (Configuration["DBInfo:ConnectionString"]));
            services.AddMvc(options => options.EnableEndpointRouting = false);
        }
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
        }
    }
}

```
### 6. Add to `HomeController`
```csharp
using Microsoft.EntityFrameworkCore;
using Monsters.Models;
using System.Linq;
// Other using statements
namespace Monsters.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
     
        // here we can "inject" our context service into the constructor
        public HomeController(MyContext context)
        {
            _context = context;
        }
     
        [HttpGet"")]
        public IActionResult Index()
        {
            List<Monster> AllMonsters = _context.Monsters.ToList();
            
            return View();
        }
    }
 }
```
### 7. Migrations
- `dotnet ef migrations add NameOfMigration`
- `dotnet ef database update`
---

## Check in + Continue - 3pm

### - Bring questions for Q & A

### - Another build...

---

#### `gentle reminders...`

- 20 minute rule! - set a timer if you have to
- ask questions if you're not sure, chances are, your question will help another classmate
- schedule a :one: on :one: with me on calendly before the exam, let's get you prepared! :muscle:

---

### END OF DAY GOAL: :sparkler: CRUDelicious :sparkler:
