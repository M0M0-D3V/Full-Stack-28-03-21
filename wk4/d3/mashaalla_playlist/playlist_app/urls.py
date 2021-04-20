from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index),
    path('process_artist', views.process_artist),
    path('process_song', views.process_song)
]
