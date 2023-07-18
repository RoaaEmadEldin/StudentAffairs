from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'changestatus'

urlpatterns = [
    path('',  views.changestatus, name='changestatus'),
    path("admin/", admin.site.urls),
]