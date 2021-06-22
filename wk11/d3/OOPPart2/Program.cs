using System;

namespace OOPPart2
{
    class Program
    {
        static void Main(string[] args)
        {
            Animal dog = new Animal("dog");
            dog.MyNameIs();

            Student student1 = new Student("Asrar", "Alqarni", 123);
            student1.MyNameIs();

            // below will not work if Person class is abstract
            // Person newPerson = new Person();
        }
    }
}
