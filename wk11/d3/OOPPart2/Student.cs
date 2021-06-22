using System;
namespace OOPPart2
{
    // this is Student class that Inherits from Person
    public class Student : Person
    {
        // 1. fields
        public int iD;
        private double gPa;
        // private int socialSecurityNum;

        // 2. properties
        public double MyGPA
        {
            get
            {
                return gPa;
            }
            set
            {
                if (value > 3)
                {
                    gPa = value;
                }
                else
                {
                    Console.WriteLine("Need a bigger number!");
                }
            }
        }
        // 3. constructor!
        public Student(string fName, string lName, int id, int energy = 9001, double gpa = 5.0) : base(fName, lName, energy)
        {
            iD = id;
            gPa = gpa;
        }
        // 4. methods
        public override string FullName()
        {
            // base is a reference to the parent class to access available functions
            // return base.FullName();
            return $"The Greatest! {firstName} {lastName}";
        }
        // make method called StudyBuddy()
        public void StudyBuddy(Student friend)
        {
            // both student and friend use up energy
            int diff = this.Energy / 2;
            int friendDiff = friend.Energy / 2;
            this.useEnergy(diff);
            friend.useEnergy(friendDiff);
            Console.WriteLine($"{FullName()} is studying with {friend.FullName()} and lost {diff} and {friendDiff}");
        }
    }
}