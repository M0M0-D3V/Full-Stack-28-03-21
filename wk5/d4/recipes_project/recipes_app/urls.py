from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # return render templates
    path('', views.index),
    path('recipes', views.recipes),
    path('recipes/new', views.new_recipes),
    path('recipes/<int:r_id>/edit', views.edit_recipe),
    path('recipes/<int:r_id>', views.show_recipe),

    # return redirects
    path('register', views.register),
    path('login', views.login),
    path('recipes/create', views.create_recipe),
    path('recipes/<int:r_id>/update', views.update_recipe),
    path('recipes/<int:r_id>/delete', views.delete_recipe),
    path('logout', views.logout),
    # tried it
    path('recipes/<int:r_id>/tried', views.tried_recipe),
    # like
    path('recipes/<int:r_id>/like', views.like_recipe),
    # unlike
    path('recipes/<int:r_id>/unlike', views.unlike_recipe),

]


# - start project
# - models
# - migrate
# - start building one template at a time
