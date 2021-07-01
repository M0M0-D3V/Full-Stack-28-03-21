using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace OneToMany.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        // Navigation property for related Message objects
        public List<Message> CreatedMessages { get; set; }
    }
}