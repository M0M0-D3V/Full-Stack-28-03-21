from django.shortcuts import render, HttpResponse, redirect

# Create your views here.


def index(request):
    # print(request.session)
    # print(request.session['name'])
    # print(request.session['email'])
    # request.session['name']
    # another method of checking for keys in session
    if 'name' in request.session:
        print('key exists!')
    else:
        print("key 'name' does NOT exist")

    get_name = request.session.get('name')
    if get_name is None:
        return render(request, "index.html")
    else:
        return redirect("/welcome")


def process_login(request):
    if request.POST:
        print(request.POST)
        request.session['name'] = request.POST['name']
        request.session['email'] = request.POST['email']
    return redirect("/welcome")


def welcome(request):

    context = {
        # "name": request.session['name'],
        # "email": request.session['email'],
        # colors is already in request.session
    }
    return render(request, "welcome.html", context)


def process_boxes(request):
    get_boxes = request.session.get('boxes')
    # print(request.session['boxes'])
    if get_boxes is None:  # get_boxes is empty
        request.session['boxes'] = []
    color = request.POST['color']
    request.session['boxes'].append(color)
    request.session.save()
    return redirect("/welcome")


def logout(request):
    request.session.flush()
    return redirect("/")
