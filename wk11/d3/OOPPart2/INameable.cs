namespace OOPPart2
{
    interface INameable
    {
        // remember interface acts as a blueprint for blueprints! (classes)
        // it enforces a set of rules or like a contract between the behaviors of class to match this interface.
        // classes must implement these rules

        // create a method signature to require MyNameIs(param)
        public void MyNameIs();
        // each class that inherits must have this function to say their name

    }
}