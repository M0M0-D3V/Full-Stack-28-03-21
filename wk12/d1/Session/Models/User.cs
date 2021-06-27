using System;
using System.ComponentModel.DataAnnotations;

namespace Session.Models
{
    public class User
    {
        // 1. properties
        public string ID { get { return CreateID(); } set { } } // change get to call the private method CreateID()
        [Required(ErrorMessage = "Username is Required")]
        [MinLength(3)]
        public string Username { get; set; }
        [Required(ErrorMessage = "Email is Required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Age is Required")]
        [Range(0, 100,
        ErrorMessage = "Age must be between 13 and 100")]
        public int Age { get; set; }
        [Required(ErrorMessage = "Password is Required")]
        [MinLength(3)]

        public string Password { get; set; }
        // 2. constructor
        public User() { }

        // 3. methods
        // build an alphanumeric 8 char long
        private string CreateID() // only access from within this class!
        // public string CreateID()
        {
            Random rand = new Random();
            // create strings and use shuffle to concatenate
            string source = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            string id = "";
            for (int i = 0; i < 8; i++)
            {
                // concatenate a random char into string
                id += source[rand.Next(0, source.Length)];
                Console.WriteLine($"id: {id}");
            }
            return id;
        }

    }
}