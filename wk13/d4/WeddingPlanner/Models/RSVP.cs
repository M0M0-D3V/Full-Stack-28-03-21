using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class RSVP
    {
        [Key]
        public int RSVPId { get; set; }
        // bring in all the foreign keys
        public int UserId { get; set; }
        public User Attendee { get; set; }
        public int WeddingId { get; set; }
        public Wedding AttendeeOf { get; set; }
    }
}