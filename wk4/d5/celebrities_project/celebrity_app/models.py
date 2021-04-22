from django.db import models

# Create your models here.


class Celebrity(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=255)
    occupation = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.occupation}"

