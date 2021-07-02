using Microsoft.EntityFrameworkCore;
namespace FavoriteMovies.Models
{
    // the MyContext class representing a session with our MySQL
    // database allowing us to query for or save data
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        // the "FavoriteMoviess" table name will come from the DbSet variable name
        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Like> Likes { get; set; }
    }
}