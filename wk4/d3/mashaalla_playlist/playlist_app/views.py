from django.shortcuts import render, redirect
from .models import Artist, Song
# Create your views here.


def index(request):
    context = {
        "all_artists": Artist.objects.all()
    }
    return render(request, "index.html", context)


def process_artist(request):
    if request.method == "POST":
        # name = request.POST['name']
        # age = request.POST['age']
        Artist.objects.create(
            name=request.POST['name'],
            age=request.POST['age']
        )
    return redirect("/")


def process_song(request):
    if request.method == "POST":
        artist = Artist.objects.get(id=request.POST['singer'])
        Song.objects.create(
            singer=artist,
            title=request.POST['title'],
            youtube_link=request.POST['yt_link']
        )
    return redirect("/")
