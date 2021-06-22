using System;

namespace OOPPart2
{
    public class Animal : INameable
    {
        public string name;

        public Animal(string n)
        {
            name = n;
        }
        public void MyNameIs()
        {
            Console.WriteLine($"**makes {name} noises**");
        }
    }
}