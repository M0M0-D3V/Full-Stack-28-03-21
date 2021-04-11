# How to run code
# Shell -> type in python or python3 for mac
# through cmd or terminal -> python + filename.py or python3 for mac
# print statements
print("hello world!")
# code block
# syntax causes code blocks to rely on indentation


def something():
    return 0


# variable
x = 100
# naming convention
# snake_case for python
# can use any words for variable as long as it is not a reserved key word
slkjslfjskldfj = 100
print(slkjslfjskldfj)
value = 100
if x == 100:
    pass


name = "Zen"
print("My name is", name)

name = "Zen"
print("My name is " + name)

# f string format
first_name = "Zen"
last_name = "Coder"
age = 27
print(f"My name is {first_name} {last_name} and I am {age} years old.")


first_name = "Zen"
last_name = "Coder"
age = 27
print("My name is {} {} and I am {} years old.".format(first_name, last_name, age))
# output: My name is Zen Coder and I am 27 years old.
print("My name is {} {} and I am {} years old.".format(age, first_name, last_name))
# output: My name is 27 Zen and I am Coder years old.
