using System.ComponentModel.DataAnnotations;

namespace OneToMany.Models
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }
        public string Content { get; set; }
        // defining a Foreign Key by matching the Primary Key of User
        public int UserId { get; set; }
        // Navigation property for related User object
        public User Creator { get; set; }
    }
}