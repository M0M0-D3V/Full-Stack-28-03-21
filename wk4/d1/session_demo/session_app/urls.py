from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('process_login', views.process_login),
]
