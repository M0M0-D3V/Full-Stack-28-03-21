from django.db import models
from datetime import datetime
# from datetime
# Create your models here.


class CelebrityManager(models.Manager):
    def basic_validator(self, teddy_bear):
        errors = {}
        # add keys and values to errors dictionary for each invalid field
        if len(teddy_bear['name']) < 8:
            errors["name"] = "name should be at least 8 characters"
        if len(teddy_bear['image']) < 8:
            errors["image"] = "image url should be at least 8 characters"
        if len(teddy_bear['job']) < 8:
            errors["job"] = "job should be at least 8 characters"
        # build another if statement for checking date
        # check if date is in past
        # first get today
        # today2 = datetime.datetime.today()
        today = datetime.today()
        # then get date from teddy_bear
        date_from_form = datetime.strptime(teddy_bear['debut'], '%Y-%m-%d')
        # print(date_from_form)
        # compare dates and create error if debut is not in past
        if date_from_form > today:
            errors['debut'] = "debut date must be in the past"
        return errors


class Celebrity(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=255)
    occupation = models.CharField(max_length=45)
    debut_date = models.DateField(default=datetime.today)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = CelebrityManager()

    def __str__(self):
        return f"{self.name} - {self.occupation}"
