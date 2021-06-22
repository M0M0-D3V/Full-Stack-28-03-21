using System;

namespace OOPPart2
{
    // this is the Parent class!
    abstract public class Person : INameable
    {
        // 1. fields
        public string firstName;
        public string lastName;
        private int energy = 100;
        // 2. properties
        // properties will have a hidden private field that only they can access
        public int Energy
        {
            get { return energy; }
            set { energy = value; }
        }

        // 3. constructor
        public Person()
        {
            firstName = "default";
            lastName = "name";
            // energy = 100;
        }
        // overloading means that we are using a same method with different params
        public Person(string fName, string lName, int energy = 100)
        {
            firstName = fName;
            lastName = lName;
            this.energy = energy;
        }

        // 4. methods
        public void MyNameIs()
        {
            Console.WriteLine($"Hi, my name is {FullName()}");
        }
        public virtual string FullName()
        {
            return $"{firstName} {lastName}";
        }
        public virtual int useEnergy(int amount)
        {
            Console.WriteLine($"New energy for {FullName()} is: {energy}");
            return energy -= amount;
        }
    }
}