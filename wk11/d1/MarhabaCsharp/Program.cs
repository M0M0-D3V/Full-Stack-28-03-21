using System;  // like importing a library
using System.Collections.Generic; // to use the Collections List, Dictionary
namespace MarhabaCsharp
{
    class Program
    {
        // the main entry point of every c# program
        static void Main(string[] args)
        // because it's an array, we can know that it can be access by index: args[index]
        {
            Console.WriteLine("Marhaba World!");
            // below 2 will return first and second values of args array if there is 2 values in the exec command
            // Console.WriteLine(args[0]);
            // Console.WriteLine(args[1]);

            // create number
            int number = 9;
            int birthDate = 29;
            string text = "hello world today is beautiful";
            Console.WriteLine($"here is our text: {text}");

            // if else
            if (number >= 50)
            {
                Console.WriteLine("young whippershnapper");
            }
            else if (number > 10)
            {
                Console.WriteLine("Getting old...");
            }
            else
            {
                Console.WriteLine("Just Living LIfe!");
            }

            int numRings = 5;
            string name = "Kobe";
            if (numRings >= 5 && name == "Kobe")
            {
                Console.WriteLine($"Welcome to the party {name}, congratulations on your {numRings} championships!");
            }
            // boolean example:
            bool crazy = false;
            if (!crazy)
            {
                Console.WriteLine("Let's party!");
            }

            // loop
            for (int i = 0; i < 11; i++)
            {
                Console.WriteLine($"{i}");
            }

            // print out args if there is value
            if (args.Length != 0)
            {
                for (int j = 0; j < args.Length; j++)
                {
                    Console.WriteLine(args[j]);
                }
            }
            // while loop
            int k = 1;
            while (k < 6)
            {
                Console.WriteLine(k);
                k = k + 1;
            }

            // Declaring an array of length 5, initialized by default to all zeroes
            int[] numArray = new int[5];
            for (int index = 0; index < numArray.Length; index++)
            {
                Console.WriteLine($"num array has:{numArray[index]}");
            }
            // Declaring an array with pre-populated values
            // For Arrays initialized this way, the length is determined by the size of the given data
            int[] numArray2 = { 1, 2, 3, 4, 6 };

            int[] newArray = new int[] { 1, 2, 3, 4, 5, 6, 7 };
            newArray[3] = 6;
            for (int idx = 0; idx < newArray.Length; idx++)
            {
                Console.WriteLine($"new array has:{newArray[idx]}");
            }
            // C# this is not possible like in js
            // newArray[8] = 8;
            // Console.WriteLine(newArray[8]);

            // build a List
            List<string> listStrings = new List<string>();
            listStrings.Add("matching Strings");
            listStrings.Add("10");
            listStrings.Add("matching Strings3");
            Console.WriteLine($"list the listStrings {listStrings}");
            // insert at a position
            listStrings.Insert(2, "newString!");
            Console.WriteLine("******");
            foreach (string word in listStrings)
            {
                Console.WriteLine($"list the listStrings {word}");
            }
            Console.WriteLine("******");

            // remove from List
            listStrings.Remove("10");
            listStrings.RemoveAt(0);
            foreach (string word in listStrings)
            {
                Console.WriteLine($"list the listStrings {word}");
            }



            List<object> objList = new List<object>();
            objList.Add("string");
            objList.Add(10);
            objList.Add("another string");

            // Dictionary
            Dictionary<string, string> myDictionary = new Dictionary<string, string>();
            myDictionary.Add("firstKey", "firstValue");
            myDictionary.Add("secondKey", "secondValue");
            foreach (var info in myDictionary)
            {
                Console.WriteLine($"key is: {info.Key} and value is: {info.Value}");
            }

            // call Math class
            // Math newNumber = new Math();
            // this way is possible because of the `static` keyword in the function defintion of Add
            int sum = Math.Add(1, 1);
            Console.WriteLine($"sum is {sum}");

            // calling function from within Program class
            print100();

            // using the random library
            Random rand = new Random();
            for (int val = 0; val < 10; val++)
            {
                //Prints the next random value between 2 and 8
                Console.WriteLine(rand.Next(2, 8));
            }
        }

        String AnotherFunction()
        {
            return "something";
        }
        public static void print100()
        {
            for (int i = 0; i < 101; i++)
            {
                Console.WriteLine(i);
            }
        }
    }

    class Math
    {
        // create a simple function to add 2 numbers together and return them
        public static int Add(int num1, int num2)
        {
            Console.WriteLine("Something happens");
            return num1 + num2;
        }
    }
}
