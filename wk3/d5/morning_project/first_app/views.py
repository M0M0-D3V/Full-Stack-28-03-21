from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

from time import gmtime, strftime
# Create your views here.

# in Flask
# @route('/')


def chewbacca(request):
    if request.method == "GET":
        print("got the GET Method!")
        print(request.method)
    context = {
        "name": "Noelle",
        "favorite_color": "turquoise",
        "pets": ["Bruce", "Fitz", "Georgie"],
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime()),
    }
    return render(request, "index.html", context)


def another_method(request, number):
    return HttpResponse(f"Yes we received the number! {number}")


def word_method(request, number, word):
    return HttpResponse(f"Yes we received the number! {number} {word}")


def redirected_method(request):
    return redirect("/")


def json_path(request):
    return JsonResponse({"response": "JSON response from redirected_method", "status": True})


def post_page(request):
    return render(request, "another.html")


def post_function(request):
    print(f"request is {request.POST}")
    context = {
        "one": request.POST['one'],
        "two": request.POST['two']
    }
    return render(request, "result.html", context)
