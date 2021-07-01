using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ManyToMany.Models
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }
        [Required]
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // defining a Foreign Key by matching the Primary Key of User
        public int UserId { get; set; }
        // Navigation property for related User object
        public User Creator { get; set; }
        public List<Like> LikedBy { get; set; }
    }
}