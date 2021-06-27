using System.ComponentModel.DataAnnotations;

namespace Session.Models
{
    public class User
    {
        // 1. properties
        [Required(ErrorMessage = "Username is Required")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Email is Required")]
        [EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage = "Age is Required")]

        public int Age { get; set; }
        [Required(ErrorMessage = "Password is Required")]
        public string Password { get; set; }
        // 2. constructor
        public User() { }
        // 3. methods
    }
}