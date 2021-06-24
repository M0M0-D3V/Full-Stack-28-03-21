using System;
using System.ComponentModel.DataAnnotations;

namespace MVC3.Models
{
    public class User
    {
        // in the background the framework does this for us:
        // private string firstName;
        // public string FirstName
        // {
        //     get
        //     {
        //         return firstName;
        //     }
        //     set { firstName = value}
        // }
        // annotations can stack and will apply to the next property
        [Required(ErrorMessage = "Must have First Name")]
        [Display(Name = "First Name")]
        [MinLength(3)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Must have Last Name")]
        [Display(Name = "Last Name")]
        [MinLength(3)]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(3)]
        public string Password { get; set; }

        // constructor
        public User() { }

        public User(string fName = "", string lName = "", string e = "", string pass = "")
        {
            FirstName = fName;
            LastName = lName;
            Email = e;
            Password = pass;
        }

        public string FullName()
        {
            return FirstName + " " + LastName;
        }
    }
}