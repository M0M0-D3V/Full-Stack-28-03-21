using System;
using System.Collections.Generic;

namespace OOPIntro
{
    class Program
    {
        static void Main(string[] args)
        {
            Student abeerStudent = new Student("Abeer", "Alqeleti", 777);
            Student amalStudent = new Student("Amal", "Almaymuni", 333);
            Student samaherStudent = new Student("Samaher", "Almalki", 444);
            Student amaniStudent = new Student("Amani", "Elhussien", 45678);

            // call specific fields for each student
            // Console.WriteLine($"{abeerStudent.FullName()}");
            // Console.WriteLine($"{amalStudent.FullName()}");
            // Console.WriteLine($"{samaherStudent.FullName()}");
            // Console.WriteLine($"{amaniStudent.FullName()}");

            // manipulating data!
            Console.WriteLine($"{abeerStudent.MyGPA}");
            Console.WriteLine($"{amalStudent.MyGPA}");
            Console.WriteLine($"{samaherStudent.MyGPA}");
            Console.WriteLine($"{amaniStudent.MyGPA}");

            // have people study!
            amalStudent.StudyBuddy(samaherStudent);
            amaniStudent.StudyBuddy(abeerStudent);

            // make list of all students!
            List<Student> coolStudents = new List<Student>() {
                abeerStudent,
                amalStudent,
                samaherStudent,
                amaniStudent
            };
            // var is called type inference
            foreach (Student student in coolStudents)
            {
                Console.WriteLine(student.FullName());
            }
        }
    }

    public class Student
    {
        // 1. fields
        public string firstName;
        public string lastName;
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
        public Student(string fName, string lName, int id, double gpa = 5.0)
        {
            firstName = fName;
            lastName = lName;
            iD = id;
            gPa = gpa;
        }
        // 4. methods
        public string FullName()
        {
            return $"{firstName} {lastName}";
        }
        // make method called StudyBuddy()
        public void StudyBuddy(Student friend)
        {
            Console.WriteLine($"{FullName()} is studying with {friend.FullName()}");
        }

    }
}
