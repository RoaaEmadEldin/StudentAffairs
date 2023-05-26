from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'view_in_active'

urlpatterns = [
    path('',  views.viewin_active, name='viewin_active'),
    path("admin/", admin.site.urls),
]