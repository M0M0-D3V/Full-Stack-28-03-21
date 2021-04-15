from django.urls import path
from . import views
urlpatterns = [
    path('', views.chewbacca),
    path('<int:number>', views.another_method),
    path('star/<int:number>', views.another_method),
    path('star/<int:number>/<str:word>', views.word_method),
    path('redirected_route', views.redirected_method),
    path('json_path', views.json_path),
    path('jedi', views.post_page),
    path('some_route', views.post_function),

]
