using System.ComponentModel.DataAnnotations;

namespace FavoriteMovies.Models
{
    public class Like
    {
        [Key]
        public int LikeId { get; set; }
        // bring in Foreign Keys for both User and Movies
        public int UserId { get; set; }
        public User Fan { get; set; }
        public int MovieId { get; set; }
        public Movie FanOf { get; set; }
    }
}