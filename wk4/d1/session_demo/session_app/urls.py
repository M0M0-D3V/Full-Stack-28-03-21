from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('process_login', views.process_login),
    path('welcome', views.welcome),
    path('process_boxes', views.process_boxes),
    path('logout', views.logout),
]
