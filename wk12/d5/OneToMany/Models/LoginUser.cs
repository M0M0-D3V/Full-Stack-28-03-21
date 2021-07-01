using System.ComponentModel.DataAnnotations;

namespace OneToMany.Models
{
    public class LoginUser
    {
        // No other fields!
        [Required]
        [Display(Name = "Login Email")]
        public string LoginEmail { get; set; }

        [Required]
        [Display(Name = "Login Password")]
        [MinLength(8, ErrorMessage = "Password must be 8 characters or longer!")]
        [DataType(DataType.Password)]
        public string LoginPassword { get; set; }
    }
}