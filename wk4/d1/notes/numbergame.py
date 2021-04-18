import random 	             
number = random.randint(1, 100)
request.session['number'] = number

# access to request.session from html and other methods inside views.py

guess = request.POST['guess']
if request.session['number'] == guess:
    # something happens!
    result == "low"
    pass
else if request.session['number'] > request.POST['guess']:
    # something else happens!
    pass