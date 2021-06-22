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
            Student ranaStudent = new Student("Rana", "Alotaibi", 789);
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
            codingDojo.AddStudent(ranaStudent);
            codingDojo.DisplayStudents();

            // add course to student
            ranaStudent.AddCourse(dsCourse);
            ranaStudent.AddCourse(software);
            ranaStudent.DisplayCourses();
            dsCourse.DisplayStudents();
            samaherStudent.AddCourse(software);
            samaherStudent.DisplayCourses();
            software.DisplayStudents();

            // kid decides to drop class
            ranaStudent.DropCourse(dsCourse);
            ranaStudent.DisplayCourses();
            codingDojo.GraduateStudent(ranaStudent);
        }
    }
}
