# :star: WELCOME TO DAY 2 :star2:

## Today's Topics:
1. Morning - OOP
2. Afternoon - Functional Programming
--------------------------
## OOP
Classes
- `Class` keyword in js is "syntactical sugar"
- at our level, we can work with js classes in more or less the same way as we do in other languages, but there are some differences
```
class Foo {}
typeof Foo;
```
- "In JavaScript, class inheritance is implemented on top of prototypal inheritance" - Eric Elliot

Prototype
- Prototype: "a first, typical or preliminary model of something, especially a machine, from which other forms are developed or copied."
- JS is a prototype based language, different from languages with classical inheritance (like C# and Java)
- Prototypal Inheritance: A prototype is a WORKING object instance. Objects inherit directly from other objects.
  - working object instance refers to the fact that it is not a blueprint like a class, it is an actual working instance already, unlike a class which is not an instance itself, because it is a blueprint used to create instances.
  - proof the prototype is a working object:
    - `Array.prototype.push('this i`s a working prototype');`
    - `Array.prototype[0]`
### - Inheritance and Super
### - Dojo CCG (Card Collecting Game)
---------------------
## Functional Programming
### - Multi-Paradigm (JS)
### - Function Composition
### - Callback Functions
### - The Big Freeze
### - Map and Filter