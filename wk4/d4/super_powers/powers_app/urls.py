from django.urls import path
from . import views

urlpatterns = [
    # all heroes
    path('', views.index),
    # all powers
    path('powers', views.powers),
    path('heroes/<int:id>', views.one_hero),
    path('powers/<int:id>', views.one_power),

    # return redirect
    path('process_hero', views.process_hero),
    path('process_power', views.process_power),
    path('process_add/<int:hero_id>', views.process_add),
    path('process_add_to_hero/<int:power_id>', views.process_add_to_hero),

]
