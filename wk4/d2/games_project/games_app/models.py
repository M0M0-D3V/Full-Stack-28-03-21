from django.db import models

# Create your models here.


class Game(models.Model):  # __init__(self, title, description, publisher...)
    # v all member attributes
    title = models.CharField(max_length=100)
    description = models.TextField()
    publisher = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Game object: {self.title} ({self.id})"

# new_game = Game(title="",description="",publisher="")
# game = Game.objects.create(title=" mario maker", description=" create  you’r own game  !", publisher=" nintendo")
# Game.objects.create(title="final fantasy7",description="rpg",publisher="squaresoft")
# Game.objects.create(title="little nightmares", description=" hungry little girl who must escape the Maw", publisher="namco")
# Game.objects.create(title="watch dogs" , description="Hacking game", publisher="Ubisoft")
