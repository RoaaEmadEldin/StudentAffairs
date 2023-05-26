from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'assigndep'

urlpatterns = [
    path('',  views.assigndep, name='assigndep'),
    path('Assign', views.Assign, name = 'Assign'),
    path("admin/", admin.site.urls),
]