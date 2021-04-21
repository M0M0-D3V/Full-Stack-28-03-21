from django.shortcuts import render, redirect
from .models import Hero, Power
# Create your views here.


def index(request):
    context = {
        "all_heroes": Hero.objects.all()
    }
    return render(request, "index.html", context)


def powers(request):
    context = {
        "all_powers": Power.objects.all()
    }
    return render(request, "powers.html", context)


def one_hero(request, id):
    context = {
        "this_hero": Hero.objects.get(id=id),
        "all_powers": Power.objects.all()
    }
    return render(request, "one_hero.html", context)


def one_power(request, id):
    context = {
        "this_power": Power.objects.get(id=id),
        "all_heroes": Hero.objects.all()
    }
    return render(request, "one_power.html", context)


def process_hero(request):
    if request.method == "POST":
        # create our hero!
        Hero.objects.create(
            name=request.POST['name'],
            image=request.POST['img'],
            description=request.POST['desc']
        )
    return redirect("/")


def process_power(request):
    if request.method == "POST":
        # create our power!
        Power.objects.create(
            name=request.POST['name'],
            image=request.POST['img'],
            description=request.POST['desc']
        )
    return redirect("/powers")


def process_add(request, hero_id):
    # receiving power id from form
    this_power = Power.objects.get(id=request.POST['power'])
    # receiving her id from url
    this_hero = Hero.objects.get(id=hero_id)
    this_hero.powers.add(this_power)
    return redirect(f"/heroes/{hero_id}")


def process_add_to_hero(request, power_id):
    this_power = Power.objects.get(id=power_id)
    this_hero = Hero.objects.get(id=request.POST['power'])
    this_power.heroes.add(this_hero)
    return redirect(f"/powers/{power_id}")
