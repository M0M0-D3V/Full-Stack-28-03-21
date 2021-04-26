from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt
from datetime import date
# Create your views here.


def index(request):
    if 'uid' in request.session:
        return redirect("/welcome")
    context = {
        'today': date.today()
    }
    return render(request, "index.html", context)


def welcome(request):
    if 'uid' not in request.session:
        return redirect("/")
    context = {
        "user": User.objects.get(id=request.session['uid'])
    }
    return render(request, "welcome.html", context)


def register(request):
    if request.method == "POST":
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            # for key in errors:
            #     messages.error(request, errors[key])
            return redirect("/")
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(
            password.encode(), bcrypt.gensalt()).decode()  # create the hash
        # prints something like b'$2b$12$sqjyok5RQccl9S6eFLhEPuaRaJCcH3Esl2RWLm/cimMIEnhnLb7iC'
        print(pw_hash)
        # be sure you set up your database so it can store password hashes this long (60 characters)
        # make sure you put the hashed password in the database, not the one from the form!
        new_user = User.objects.create(
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            birthday=request.POST['birthday'],
            password=pw_hash)
        request.session['uid'] = new_user.id
        return redirect("/welcome")  # never render on a post, always redirect!


def login(request):
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        logged_user = User.objects.get(email=request.POST['email'])
        request.session['uid'] = logged_user.id
        return redirect('/welcome')
    # redirect back to a safe route
    return redirect("/")
