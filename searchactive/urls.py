from django.contrib import admin
from django.urls import path
from . import views

app_name = 'searchactive'

urlpatterns = [
    path('', views.search, name='search'),
    path('searchactive/', views.searchactive,name='searchactive'),
    path("admin/", admin.site.urls),
]
