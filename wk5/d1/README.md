# Week 5 Day 1 - Validations

## Adding Validations

- Overview together
- Add code to Celebrities project

#### :white_check_mark: Inheritance -> models.Manager

```python
# Inside your app's models.py file
from django.db import models
# Our custom manager!
# No methods in our new manager should ever receive the whole request object as an argument!
# (just parts, like request.POST)
class BlogManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(postData['name']) < 5:
            errors["name"] = "Blog name should be at least 5 characters"
        if len(postData['desc']) < 10:
            errors["desc"] = "Blog description should be at least 10 characters"
        return errors
```

#### :white_check_mark:Override -> objects

```python
class Blog(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BlogManager()    # add this line!
```

#### :white_check_mark:Add method call -> views.py

```python
# Inside your app's views.py file
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages

from .models import Blog
def update(request, id):
    # pass the post data to the method we wrote and save the response in a variable called errors
    errors = Blog.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/blog/edit/'+id)
    else:
        # if the errors object is empty, that means there were no errors!
        # retrieve the blog to be updated, make the changes, and save
        blog = Blog.objects.get(id = id)
        blog.name = request.POST['name']
        blog.desc = request.POST['desc']
        blog.save()
        messages.success(request, "Blog successfully updated")
        # redirect to a success route
        return redirect('/blogs')
```

#### :white_check_mark:Error Messages -> Loop onto html template

```html
{% if messages %}
<ul class="messages">
  {% for message in messages %}
  <li {% if message.tags %} class="{{ message.tags }}" {% endif %}>
    {{ message }}
  </li>
  {% endfor %}
</ul>
{% endif %}
```
## If we have time...
### How to add DateField() and validate Date