from django.db import models

# Create your models here.


class Hero(models.Model):
    name = models.CharField(max_length=45)
    image = models.TextField()
    description = models.TextField()
    # powers field is automatically added because of the MTMField
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # this is optional, works both ways
    # power = models.ManyToManyField(Power, related_name="heroes")

    def __str__(self):
        return f"Hero is: {self.name} and ID is {self.id}"


class Power(models.Model):
    name = models.CharField(max_length=45)
    image = models.TextField()
    description = models.TextField()
    # heroes field automatically added if power is added to Hero class
    heroes = models.ManyToManyField(Hero, related_name="powers")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Power is: {self.name} and ID is {self.id}"


# notes
# Hero.objects.create(
#     name="Superman",
#     image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cartoonbucket.com%2Fwp-content%2Fuploads%2F2017%2F04%2FSuperman-Fighting.jpg&f=1&nofb=1",
#     description="from another planet, fighting bad guys"
# )
# Hero.objects.create(
#     name=“Wonder Woman”,
#     image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomicbookroundup.com%2Fimg%2Fcovers%2Fw%2Fwonder-woman-(2016)%2F20.jpg&f=1&nofb=1",
#     description=“Wonder Woman is a compassionate caring, stubborn, opinionated, highly competitive, outgoing, immortal Amazon. Wonder Woman is a warrior born. She tries to avoid conflict but if pressed she will engage in battle and on occasion lose herself in the pleasure of battle.”
# )


# Power.objects.create(
#     name="Flying",
#     image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.winudf.com%2Fv2%2Fimage%2FY29tLkFtZXJpY2FuRm94LmFwcDAwOTBfc2NyZWVuc2hvdHNfNl84Y2NmYzU5%2Fscreen-6.jpg%3Ffakeurl%3D1%26type%3D.jpg&f=1&nofb=1",
#     description="soaring in the sky over everything"
# )
