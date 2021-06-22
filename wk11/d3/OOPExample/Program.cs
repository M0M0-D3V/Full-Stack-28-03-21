using System;
using System.Collections.Generic;

namespace OOPExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Student asrarStudent = new Student("Asrar", "Alqarni", 123);
            Student abeerStudent = new Student("Abeer", "Alqeleti", 777);
            Student amalStudent = new Student("Amal", "Almaymuni", 333);
            Student samaherStudent = new Student("Samaher", "Almalki", 444);
            Student amaniStudent = new Student("Amani", "Elhussien", 45678);
            Student hussainStudent = new Student("Hussain", "Alhadab", 666);
            Student reemStudent = new Student("Reem", "Alotaibi", 789);
            // let's build!
            // [] School class
            School codingDojo = new School("Coding Dojo", new List<Student>(){
                abeerStudent,
                amalStudent,
                samaherStudent,
                amaniStudent,
                hussainStudent
            }, new List<Teacher>(), new List<Course>());
            Console.WriteLine(codingDojo.Name);
            Teacher laylaTeacher = new Teacher("Layla", "Alharbi");
            Teacher yaraTeacher = new Teacher("Yara", "Al Humaidhi");
            // [] Course class
            Course dsCourse = new Course("Data Science", laylaTeacher);
            Course software = new Course("Software", yaraTeacher);

            // [] Person class
            // [] Student class
            codingDojo.AddStudent(asrarStudent);
            codingDojo.AddStudent(reemStudent);
            codingDojo.DisplayStudents();

            // add course to student
            reemStudent.AddCourse(dsCourse);
            reemStudent.AddCourse(software);
            reemStudent.DisplayCourses();
            dsCourse.DisplayStudents();
            samaherStudent.AddCourse(software);
            samaherStudent.DisplayCourses();
            software.DisplayStudents();

            // kid decides to drop class
            reemStudent.DropCourse(dsCourse);
            reemStudent.DisplayCourses();
            codingDojo.GraduateStudent(reemStudent);
        }
    }
}
