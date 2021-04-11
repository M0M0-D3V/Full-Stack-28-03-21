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
print(dir())
del first_name
# dir() will give you a list of all the variables avaialble
# names that start with __ are global
print(dir())
# lists are the javascript equivalent for array
new_list = []
new_list1 = [1, 2, 3]
# new_list[0] = 1
# length
# print(f"length is: {len(new_list)}")
new_list1.append(4)
new_list1.append("4")
new_list1.append(True)
result = new_list1.pop()
print(result)
print(new_list1)
another_list = ["name", "name", "name", "name"]
# new dictionary in python
new_dictionary = {
    "name": "name",
    "name": "name1",
    "name": "name2",
    "name": "name3",  # will return name: name3
}
another_dictionary = {
    'name': 'name',
    'age': 38,
    'weight': 160.2, 'has_glasses': False
}
# print(another_list)
# print(another_dictionary['name'])
# print(another_dictionary.name)
another_dictionary['hobbies'] = ['climbing', 'coding']
# print(another_dictionary)
# print(type("another_dictionary"))
print(len(another_dictionary))
# type casting
print(str(10) + '10')
print(10 + int('10'))
# copy paste from platform
x = 12
if x > 50:
    print("bigger than 50")
else:
    print("smaller than 50")
# because x is not greater than 50, the second print statement is the only one that will execute

x = 55
if x > 10:
    print("bigger than 10")
elif x > 50:
    print("bigger than 50")
else:
    print("smaller than 10")
# even though x is greater than 10 and 50, the first true statement is the only one that will execute, so we will only see 'bigger than 10'

if x < 10:
    print("smaller than 10")
# nothing happens, because the statement is false
# python we need : to identify where code block is
# and or not
if not x == True:
    pass
if x != 10:
    pass

# for loop in python
# start stop step
# for x in range(0, 11, 1):
for x in range(11):
    print(x)

# another example
y = [1, 2, 3]
# y = 10
for x in range(len(y)):
    print(x)
# loop through dictionary
my_dict = {"name": "Noelle", "language": "Python"}
for k in my_dict:
    print(k)
    print(my_dict[k])
my_dict = {"name": "Noelle", "language": "Python"}
for k in my_dict.keys():
    print(k)
for v in my_dict.values():
    print(v)
for k, v in my_dict.items():
    print(k, v)

# while loop
x = 0
while x < 10:
    # do something
    print(x)
    x += 1
else:
    print("final statement")

if x < 10:
    print("x is less than 10")
elif x == 10:
    print("x is equal to 10")
else:
    print("x is more than 10")
