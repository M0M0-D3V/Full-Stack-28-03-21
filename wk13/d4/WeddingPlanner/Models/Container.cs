using System.Collections.Generic;

namespace WeddingPlanner.Models
{
    public class Container
    {
        public User LoggedUser { get; set; }
        public Wedding Wedding { get; set; }
        public List<User> AllUsers { get; set; }
        public List<Wedding> AllWeddings { get; set; }
        public List<RSVP> AllRSVPs { get; set; }
    }
}