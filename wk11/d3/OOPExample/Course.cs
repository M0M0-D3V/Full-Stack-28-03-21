using System;
using System.Collections.Generic;

namespace OOPExample
{
    public class Course
    {
        // 1. fields/properties
        public string Name { get; set; }
        public Teacher Teacher { get; set; }
        public List<Student> students = new List<Student>();
        // constructor for course
        public Course(string name, Teacher teacher)
        {
            Name = name;
            Teacher = teacher;
        }
        // 3. method
        public void AddStudent(Student student)
        {
            students.Add(student);
        }

        public void DisplayStudents()
        {
            Console.WriteLine($"Students in {Name} are:");
            foreach (Student student in students)
            {
                Console.WriteLine(student.FullName());
            }
        }
    }
}