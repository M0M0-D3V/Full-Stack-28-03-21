from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from .models import User, Recipe
from django.contrib import messages
import bcrypt
# Create your views here.


def index(request):
    if 'uid' in request.session:
        return redirect("/recipes")
    context = {
    }
    return render(request, "index.html", context)


def recipes(request):
    if 'uid' not in request.session:
        return redirect("/")
    context = {
        "user": User.objects.get(id=request.session['uid']),
        "all_recipes": Recipe.objects.all(),
        "user_tried_recipes": Recipe.objects.filter(tried_by=User.objects.get(id=request.session['uid']))
    }
    return render(request, "recipes.html", context)


def new_recipes(request):
    if 'uid' not in request.session:
        return redirect("/")
    return render(request, "new.html")


def edit_recipe(request, r_id):
    context = {
        'recipe': Recipe.objects.get(id=r_id)
    }
    return render(request, "edit.html", context)


def show_recipe(request, r_id):
    context = {
        'recipe': Recipe.objects.get(id=r_id)
    }
    return render(request, "show.html", context)


def register(request):
    if request.method == "POST":
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(
            password.encode(), bcrypt.gensalt()).decode()  # create the hash
        new_user = User.objects.create(
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            password=pw_hash)
        request.session['uid'] = new_user.id
        return redirect("/recipes")  # never render on a post, always redirect!


def login(request):
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        logged_user = User.objects.get(email=request.POST['email'])
        request.session['uid'] = logged_user.id
        return redirect('/recipes')
    return redirect("/")


def logout(request):
    request.session.flush()
    return redirect("/")


def create_recipe(request):
    if request.method == "POST":
        errors = Recipe.objects.recipe_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            print("errors have been found")
            return redirect("/recipes/new")
        under_30 = False
        if request.POST['under_30'] == "true":
            under_30 = True
        Recipe.objects.create(
            name=request.POST['name'],
            description=request.POST['desc'],
            instruction=request.POST['instruction'],
            under_30=under_30,
            upload_by=User.objects.get(id=request.session['uid'])
        )
        print("new recipe has been created")
    return redirect("/recipes")


def update_recipe(request, r_id):
    if request.method == "POST":
        errors = Recipe.objects.recipe_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            print("errors have been found")
            return redirect(f"/recipes/{r_id}/edit")
        under_30 = False
        if request.POST['under_30'] == "true":
            under_30 = True
        recipe = Recipe.objects.get(id=r_id)
        recipe.name = request.POST['name']
        recipe.description = request.POST['desc']
        recipe.instruction = request.POST['instruction']
        recipe.under_30 = under_30
        recipe.save()
    return redirect("/recipes")


def delete_recipe(request, r_id):
    recipe = Recipe.objects.get(id=r_id)
    recipe.delete()
    return redirect("/recipes")


def tried_recipe(request, r_id):
    user = User.objects.get(id=request.session['uid'])
    recipe = Recipe.objects.get(id=r_id)
    recipe.tried_by.add(user)
    # or you can
    # user.tried_recipes.add(recipe)
    return redirect("/recipes")


def like_recipe(request, r_id):
    user = User.objects.get(id=request.session['uid'])
    recipe = Recipe.objects.get(id=r_id)
    recipe.liked_by.add(user)
    return redirect("/recipes")


def unlike_recipe(request, r_id):
    user = User.objects.get(id=request.session['uid'])
    recipe = Recipe.objects.get(id=r_id)
    recipe.liked_by.remove(user)
    return redirect("/recipes")
