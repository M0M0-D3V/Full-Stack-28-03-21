# one way to start putting the classes together

class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"new balance is {self.balance}")
        return self

    def withdraw(self, amount):
        pass

    def display_account_info(self):
        pass

    def yield_interest(self):
        pass


# [x] Update the User class __init__ method
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

# [x] Update the User class make_deposit method
    def make_deposit(self, amount):
        self.account.deposit(amount)
        # print(f"new balance is {self.account.balance}")
        return self

# [] Update the User class make_withdrawal method

# [] Update the User class display_user_balance method

new_person = User("name", "email@email.com")
print(new_person.account.int_rate)
new_person.make_deposit(40)

# object = {
#     "keyhere1": "value1",
#     "keyhere2": "value2",
#     "keyhere3": "value3",
#     "keyhere4": "value4"
# }
# object['keyhere1']
