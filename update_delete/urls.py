from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'update_delete'

urlpatterns = [
    path('',  views.updatedelete, name='updatedelete'),
    path('update', views.update, name='update'), 
    path('delete', views.delete, name='delete'),
    path("admin/", admin.site.urls),
]