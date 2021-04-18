from django.shortcuts import render, HttpResponse, redirect

# Create your views here.


def index(request):
    print(request.session['name'])
    print(request.session['email'])
    return render(request, "index.html")


def process_login(request):
    if request.POST:
        print(request.POST)
        request.session['name'] = request.POST['name']
        request.session['email'] = request.POST['email']
    return redirect("/")
