using System;
using System.Collections.Generic;

namespace OOPExample
{
    public class School
    {
        // 1. fields / properties
        public string Name { get; }
        public string Location { get; set; }
        public int Capacity { get; set; }
        public List<Student> students = new List<Student>();
        public List<Teacher> teachers = new List<Teacher>();
        public List<Course> courses = new List<Course>();
        // 3. constructor
        public School(string name, List<Student> kids, List<Teacher> teachers, List<Course> courses)
        {
            Name = name;
            students = kids;
            this.teachers = teachers;
            this.courses = courses;
        }
        // 4. methods
        public void AddStudent(Student kid)
        {
            students.Add(kid);
        }
        public void GraduateStudent(Student kid)
        {
            students.Remove(kid);
            Console.WriteLine($"Congratulations! You have graduated from {Name}, {kid.FullName()}");
        }
        public void DisplayStudents()
        {
            // Console.WriteLine(string.Join(", ", students));
            foreach (Student student in students)
            {
                Console.WriteLine(student.FullName());
            }
        }

    }
}