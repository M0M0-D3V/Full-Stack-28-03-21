using System.Collections.Generic;

namespace OneToMany.Models
{
    public class Container
    {
        public Message Message { get; set; }
        public List<Message> Messages { get; set; }
        public User User { get; set; }
        public List<User> Users { get; set; }
        public int LoggedUserId { get; set; }
    }
}