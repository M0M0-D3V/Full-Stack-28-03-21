# Import Flask to allow us to create our app.
from flask import Flask, render_template
# Global variable __name__ tells Flask whether or not we are running the file
app = Flask(__name__)
# directly, or importing it as a module.


# The "@" symbol designates a "decorator" which attaches the following
# function to the '/' route. This means that whenever we send a request to
# localhost:5000/ we will run the following "hello_world" function.
# http://localhost:5000/
@app.route('/')
def hello_world():
    print("printing hello!")
    print("printing hello!")
    print("printing hello!")
    return 'Hello World!'  # Return the string 'Hello World!' as a response.

# route on browser was localhost:5000/new


@app.route('/new')
def new_route():
    # other logic
    # query from database
    # clean up code
    # algorithm?
    return "<h1>marhaban!<h1>"


@app.route('/<name>')
def name_route(name):
    # find a way to typecast string to int
    return f"hello {name}"


@app.route('/display')
def show_html():
    return render_template('index.html')


@app.route('/repeat')
def repeat():

    users_server = [
        {'first_name': 'Michael', 'last_name': 'Choi'},
        {'first_name': 'John', 'last_name': 'Supsupin'},
        {'first_name': 'Mark', 'last_name': 'Guillen'},
        {'first_name': 'KB', 'last_name': 'Tonel'}
    ]
    return render_template("index.html", phrase="hello", times=5, users=users_server)


@app.route('/images')
def images():
    img_list = [
        "https://wallpapercave.com/wp/3Hg2wQy.jpg",
        "https://wallpaperaccess.com/full/2897934.jpg",
        "https://i.pinimg.com/originals/20/e5/22/20e5224a89e2a9d9f34be288a929ba82.jpg"
    ]

    for x in img_list:
        print(x)
    return render_template("new.html", images=img_list)


app.run(debug=True)      # Run the app in debug mode.
