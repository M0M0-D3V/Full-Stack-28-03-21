using System.ComponentModel.DataAnnotations;

namespace ManyToMany.Models
{
    public class Like
    {
        [Key]
        public int LikeId { get; set; }
        // foreign keys for userId and messageId
        public int UserId { get; set; }
        // navigation properties for both User class and Message class objects
        public User LikedByUser { get; set; }
        public int MessageId { get; set; }
        public Message MessageLiked { get; set; }
    }
}