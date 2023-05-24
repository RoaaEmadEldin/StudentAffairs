# from django.urls import path,include
# from . import views

# urlpatterns = [
#     path('members/', views.members, name='members'),
#      path('addrecord/', views.add_student, name='add_student'),
    
# ]
from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
    path('members/addstudent/', views.addstudent, name='addstudent'),
]
