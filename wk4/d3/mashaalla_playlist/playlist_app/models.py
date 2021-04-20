from django.db import models

# Create your models here.


class Artist(models.Model):
    name = models.CharField(max_length=45)
    age = models.IntegerField()
    # songs attribute is added because of the relationship created by ForeignKey
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Artist {self.id}- {self.name}"


class Song(models.Model):
    singer = models.ForeignKey(
        Artist, related_name="songs", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    youtube_link = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Song {self.id}- {self.title} - by {self.artist.name}"

# Notes below
# Artist.objects.create(name="", age=)
# Artist.objects.create(name=“Taylor swift”, age=31)  #1
# Artist.objects.create(name="ansel elgort", age=27)  #2
# Artist.objects.create(name="Ed Sheeran", age=30)    #3


# artist1 = Artist.objects.get(id=1)
# # Song(title="", youtube_link="")
# Song(singer=artist1, title="blank space",
#      youtube_link="https://www.youtube.com/watch?v=e-ORhEE9VVg")
