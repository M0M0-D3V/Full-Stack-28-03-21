from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # return render templates
    path('', views.index),
    path('recipes', views.recipes),
    path('recipes/new', views.new_recipes),
    # 3. /recipes/<int:id> - show one recipe and info

    # 5. /recipes/<int:id> - form to edit recipe

    # return redirects
    path('register', views.register),
    # 1-b. /login - post route for login
    # 4-a. /recipes/create - post route to create
    path('recipes/create', views.create_recipe),
    # 5-a. /recipes/update - post route to update
    # 5-b. /recipes/delete - post route to delete
    path('logout', views.logout),

]


# - start project
# - models
# - migrate
# - start building one template at a time
