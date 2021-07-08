using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class LoginUser
    {
        // No other fields!
        // this model is not mapped to the db
        //
        [Required]
        [EmailAddress]
        [Display(Name = "Login Email")]
        public string LoginEmail { get; set; }
        [Required]
        [Display(Name = "Login Password")]
        [MinLength(8, ErrorMessage = "Password must be 8 characters or longer!")]
        [DataType(DataType.Password)]
        public string LoginPassword { get; set; }
    }
}