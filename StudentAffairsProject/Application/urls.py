from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePage, name = 'HomePage'),
    path('AssignDep/', views.AssignDep, name = 'AssignDep'),
    path('Assign', views.Assign, name = 'Assign'),
]
