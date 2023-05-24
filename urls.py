from django.urls import path
from . import views
urlpatterns = [path('members/', views.viewAct_inAct_students, name = 'viewAct_inAct_students')]