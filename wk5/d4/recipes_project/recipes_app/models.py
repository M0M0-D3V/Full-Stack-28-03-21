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
    password = models.CharField(max_length=100)
    # recipes
    # liked_recipes
    # tried_recipes
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()


class RecipeManager(models.Manager):
    def recipe_validator(self, post_data):
        errors = {}
        if len(post_data['name']) < 3:
            errors['name'] = "Name must be at least 3 characters"
        if len(post_data['desc']) < 3:
            errors['desc'] = "Description must be at least 3 characters"
        if len(post_data['instruction']) < 3:
            errors['instruction'] = "Instructions must be at least 3 characters"
        
        return errors


class Recipe(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    instruction = models.TextField()
    under_30 = models.BooleanField(default=False)
    upload_by = models.ForeignKey(
        User, related_name="recipes", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name="liked_recipes")
    tried_by = models.ManyToManyField(User, related_name="tried_recipes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = RecipeManager()
