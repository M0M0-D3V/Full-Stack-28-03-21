namespace LINQ.Models
{
    public class Student
    {
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Email {get;set;}
        public int FavoriteNumber {get;set;}

        // constructor
        public Student(string first, string last, string email, int favNumber)
        {
            FirstName = first;
            LastName = last;
            Email = email;
            FavoriteNumber = favNumber;
        }

        public override string ToString()
        {
            return $"{FirstName} {LastName}; {Email}; Favorite Number: {FavoriteNumber}";
        }
    }
}