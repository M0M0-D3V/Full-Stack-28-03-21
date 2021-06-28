using System;
using System.Collections.Generic;
using System.Linq;
using LINQ.Models;

namespace LINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Student> students = new List<Student>() {
                new Student("Abeer", "Alqeleti", "abeer@alqeti.com", 21),
                new Student("Aldanah", "Aldohayan", "aldanah@aldohayan.com", 13),
                new Student("Amaal", "Almehmadi", "amaal@almehmadi.com", 21),
                new Student("Amal", "Almaymuni", "amal@almaymuni.com", 64),
                new Student("Amani", "Elhussien", "amani@elhussien.com", 18),
                new Student("Asrar", "Alqarni", "asrar@alqarni.com", 99),
                new Student("Badr", "Albalawi", "badr@albalawi.com", 50),
                new Student("Hissah", "Alduhaim", "hissah@alduhaim.com", 35),
                new Student("Hussain", "Alhadab", "hussain@alhadab.com", 42),
                new Student("Lama", "Alsulaiman", "lama@alsulaiman.com", 73),
                new Student("Layla", "Alharbi", "layla@alharbi.com", 4),
                new Student("Maha", "Aljohani", "maha@aljohani.com", 81),
                new Student("Maram", "Alqhtani", "maram@alqhtani.com", 11),
                new Student("Norah", "Alothman", "norah@alothman.com", 10),
                new Student("Nouf", "Albogmi", "nouf@albogmi.com", 56),
                new Student("Rahaf", "Alsukhaiber", "rahaf@alsukhaiber.com", 92),
                new Student("Rana", "Alotaibi", "rana@alotaibi.com", 7),
                new Student("Rawan", "Alhazmi", "rawan@alhazmi.com", 27),
                new Student("Rawan", "Alsabbah", "rawan@alsabbah.com", 72),
                new Student("Reem", "Almabadi", "reem@almabadi.com", 85),
                new Student("Samaher", "Almalki", "samaher@almalki.com", 63),
                new Student("Samaher", "Almutairi", "samaher@almutairi.com", 44),
                new Student ("Wafa", "Salem", "wafa@salem.com", 49),
                new Student("Yara", "Alhumaidhi", "yara@alhumaidhi.com", 3)
            };
            // queries below
            // [x] sort query by last name in reverse
            IEnumerable<Student> sortedLastNameRev = students
            .OrderByDescending(s => s.LastName);
            // .ToList();
            // this is returning a List of students
            // List<Student> sortedLastNameRev2 = students
            // .OrderByDescending(s => s.LastName)
            // .ToList();
            // foreach (var student in sortedLastNameRev)
            // {
            //     Console.WriteLine(student);
            // }
            // ascending is A -> Z and descending is Z -> A

            // [x] query in order by favorite number
            var orderFavNum = students
            .OrderBy(n => n.FavoriteNumber)
            .ToList();
            // foreach (var student in orderFavNum)
            // {
            //     Console.WriteLine(student);
            // }

            // [x] query where students first name start with "R" and > 50
            var rStudents = students
            .Where(any => any.FirstName.StartsWith("R") && any.FavoriteNumber > 50)
            .ToList();
            // foreach (var student in rStudents)
            // {
            //     Console.WriteLine(student);
            // }

            // [x] query if lastname contains "AL"
            var studentsWithAL = students
            // can use ! to declare NOT as part of the boolean expression
            .Where(lname => !lname.LastName.Contains("al"))
            .ToList();
            // foreach (var student in studentsWithAL)
            // {
            //     Console.WriteLine(student);
            // }

            // query for firstordefault of 0
            var studentWith0 = students
            .FirstOrDefault(s => s.FavoriteNumber == 0);
            // Console.WriteLine(studentWith0);
            var studentWith21 = students
            .FirstOrDefault(s => s.FavoriteNumber == 21);
            // Console.WriteLine(studentWith21);

            // [x] query select by email address
            var studentEmails = students
            .Select(e => e.Email)
            .ToList();
            // foreach (var student in studentEmails)
            // {
            //     Console.WriteLine(student);
            // }

            // get min of all student favnums
            var minFavNum = students.Min(s => s.FavoriteNumber);
            Console.WriteLine(minFavNum);
            // get max of all student favnums
            var maxFavNum = students.Max(s => s.FavoriteNumber);
            Console.WriteLine(maxFavNum);
            // get sum of all student favnums
            var sumFavNum = students.Sum(s => s.FavoriteNumber);
            Console.WriteLine(sumFavNum);


            // queries above this line
        }
    }
}
