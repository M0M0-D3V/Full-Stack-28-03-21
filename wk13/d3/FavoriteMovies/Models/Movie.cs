using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FavoriteMovies.Models
{
    public class Movie
    {
        [Key]
        [Required]
        public int MovieId { get; set; }
        [Required]
        [MinLength(3, ErrorMessage = "Must be at least 3 characters")]
        public string Title { get; set; }
        [Required]
        [MinLength(2, ErrorMessage = "Must be at least 2 characters")]
        [Display(Name = "Starring")]
        public string Star { get; set; }
        [Required]
        [MinLength(10, ErrorMessage = "Must be at least 10 characters")]
        [Display(Name = "Image URL")]
        public string ImgUrl { get; set; }
        [Required]
        [Display(Name = "Release Date")]
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        // Foreign Key for UserId has to match the property name in User class
        public int UserId { get; set; }
        public User PostedBy { get; set; }
        public List<Like> Fans { get; set; }
    }
}