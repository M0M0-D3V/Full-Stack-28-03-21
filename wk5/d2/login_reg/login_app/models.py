from django.db import models
import re
import bcrypt
from datetime import datetime, timedelta
# Create your models here.


class UserManager(models.Manager):
    def register_validator(self, post_data):
        errors = {}
        # check first name 2 char
        if len(post_data['first_name']) < 2:
            errors['first_name'] = "First name must be at least 2 characters, yo"
        # check last name 2 char
        if len(post_data['last_name']) < 2:
            errors['last_name'] = "Last name must be at least 2 characters, yo"
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid email format"
        # check password char len 8
        if len(post_data['password']) < 8:
            errors['password'] = "Password must be at least 8 characters, please"
        # check confirm password == password
        if post_data['password'] != post_data['confirm_pw']:
            errors['confirm_pw'] = "Confirm password does not match Password"
        print("reached the validator for register")

        # check if birthday entered is at least 13 years
        # compare date - post date if > or < than 13
        year = timedelta(days=365)
        thirteen_years = 13 * year
        # covert birthday to datetime format
        birthday = datetime.strptime(post_data['birthday'], '%Y-%m-%d')
        if birthday > datetime.today() - thirteen_years:
            errors['birthday'] = "You must be at least 13 years old"
        # unique email
        user_list = User.objects.filter(email=post_data['email'])
        if len(user_list) > 0:
            errors['not_unique'] = "Email is already registered and exists"
        return errors

    def login_validator(self, post_data):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Invalid email format"
        # check password char len 8
        if len(post_data['password']) < 8:
            errors['password'] = "Password must be at least 8 characters, please"
        # check if email is in db
        user_list = User.objects.filter(email=post_data['email'])
        if len(user_list) == 0:
            errors['email2'] = "Email was not found in db"
        elif not bcrypt.checkpw(post_data['password'].encode(), user_list[0].password.encode()):
            errors['match'] = "Password does not match the db"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45, unique=True)
    birthday = models.DateField(default=datetime.now())
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
