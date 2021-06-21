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

            // more stuff!
            Person hussainStudent = new Student("Hussain", "Alhadab", 666);
            Console.WriteLine(hussainStudent.FullName());
        }
    }

}
