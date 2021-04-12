# PYTHON OOP
# Intro to OOP
# Classes
# - when we use a variable, we create an *instance* of a class
# - Classes - custom data types we can create with OOP
# Attributes
# Methods
# - Method vs Function
# functions are functions that are standalone
# methods are function that belong to a class

# WHY OOP?

# Let's build something!
# Apps,>> Cellphones, >> Plan

# Chaining methods...
# Association Between Classes
# class Human:

#     def __init__(self):
#         self.name = "Rawan"
#         self.email = "r@w.com"
#         self.account_balance = 0
# from filename import Class

class App:  # Facebook
    def __init__(self, name_param, date_release, category, version, size="40mb"):
        self.name = name_param  # Facebook
        self.date_release = date_release
        self.size = size
        self.category = category
        self.version = version

    def notify(self):
        print(f"heyyyy just letting you know! {self.name} something (:")
        return self


class Phone:
    def __init__(self, brand, os, color, capacity, version):
        self.brand = brand
        self.os = os
        self.color = color
        self.capacity = capacity
        self.version = version
        self.apps = []

    def add_app(self, app):
        # pass
        raise NotImplementedError

        # self.apps.append(app)
        # print(f"confirm adding new app {app.name}")
        # return self

    def show_app(self):
        print(f"apps in phone {self.color} {self.brand} {self.version}")
        for app in self.apps:
            print(app.name)
        return self

    def display_info(self):
        print(f"brand is: {self.brand}")
        print(f"os is: {self.os}")
        print(f"color is: {self.color}")
        print(f"capacity is: {self.capacity}")
        print(f"version is: {self.version}")


facebook = App("Facebook", "1-Jan-2001", "Social", "1")
# print(facebook.name)
# print(facebook.date_release)
# print(facebook.size)
# print(facebook.category)
# print(facebook.version)

instagram = App("Instagram", "4-May-1995", "Social", "2", "20mb")
# print(instagram.name)
# print(instagram.date_release)
# print(instagram.size)
# print(instagram.category)
# print(instagram.version)

gmail = App("gmail", "1-1-11", "Productivity", "3", "100mb")
# instagram.notify()
# print('*' * 10)
# gmail.notify().notify().notify()
# print('*' * 10)


# hissah_phone = Phone("iPhone", "iOS", "white", "64gb", "11")
# rawan_phone = Phone("iPhone", "iOS", "Black", "256gb", "12pro")
# abeer_phone = Phone("iPhone", "iOS", "Green", "126gb", "11")
# hissah_phone.add_app(instagram)
# hissah_phone.add_app(App("Snapchat", "1-1-1", "Social", "1"))
# rawan_phone.add_app(gmail)
# rawan_phone.add_app(App("Notion Planner", "2019", "planner", "2"))
# # abeer_phone(facebook)
# hissah_phone.show_app()
# rawan_phone.show_app()


class IPhone(Phone):
    def __init__(self, color, capacity, version, brand="iPhone", os="iOS"):
        super().__init__(brand, os, color, capacity, version)
        self.assistant = "Siri"
        self.apps = []

    def add_app(self, app):
        # super().add_app(app)
        self.apps.append(app)
        print(
            f"finished installing app to HomeScreen {app.name}-- {self.assistant}")
        return self


# instantiate an iPhone
new_iPhone = IPhone("white", "256gb", "11")
new_iPhone.display_info()
# new_iPhone.add_app(facebook)
new_iPhone.add_app(instagram)
new_iPhone.show_app()


# class Person:
#     def pay_bill(self):
#         pass
#         # raise NotImplementedError


# # Millionaire inherits from Person
# class Millionaire(Person):
#     def pay_bill(self):
#         print("Here you go! Keep the change!")


# # Grad Student also inherits from the Person class
# class GradStudent(Person):
#     def pay_bill(self):
#         print("Can I owe you ten bucks or do the dishes?")
