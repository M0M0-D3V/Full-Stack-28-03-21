from django.shortcuts import render, redirect
from games_app.models import Game
# Create your views here.


def index(request):
    all_games = Game.objects.all()
    # can manipulate queries before passing it to context

    context = {
        "all_games": all_games
    }
    return render(request, "index.html", context)


def process_form(request):
    if request.method == "POST":
        titlezzz = request.POST['titlez']
        descriptionzzz = request.POST['descriptionz']
        publisherzzz = request.POST['publisherz']
        Game.objects.create(
            title=titlezzz,
            description=descriptionzzz,
            publisher=publisherzzz,
        )
    return redirect("/")
