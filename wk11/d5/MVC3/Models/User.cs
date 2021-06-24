using System;

namespace MVC3.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        // constructor
        public User()
        { }

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