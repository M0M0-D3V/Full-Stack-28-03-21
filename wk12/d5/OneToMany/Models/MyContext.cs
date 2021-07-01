using Microsoft.EntityFrameworkCore;
namespace OneToMany.Models
{
    // the MyContext class representing a session with our MySQL
    // database allowing us to query for or save data
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        // each line of DbSet will create a new table in the database by it's Name!
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}