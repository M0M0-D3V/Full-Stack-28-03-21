from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # Render
    path('', views.index),
    path('celebrities', views.celebrities),
    path('celebrities/create', views.celebrities_create),
    path('celebrities/<int:celebrity_id>', views.celebrity_show),
    path('celebrities/<int:celebrity_id>/edit', views.celebrities_edit),

    # # Redirect
    path('login', views.login),
    path('celebrities/new', views.celebrities_new),
    path('celebrities/<int:celebrity_id>/update', views.celebrities_update),
    path('celebrities/<int:celebrity_id>/delete', views.celebrities_destroy),
    path('logout', views.logout),


]
