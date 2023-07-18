from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'homepage'

urlpatterns = [
    path('',  views.homepage, name='homepage'),
    path('AddStudent/', include('add.urls'), name='addstudent'),
    path('UpdateDelete/', include('update_delete.urls'), name='updatedelete'),
    path('SearchAct/', include('searchactive.urls'), name='searchactive'),
    path('AssignDep/', include('assigndep.urls'), name='assigndep'),
    path('ViewActInact/', include('view_in_active.urls'), name='viewactinact'),
    path('ChangeStatus/', include('changestatus.urls'), name='changestatus'),
    path("admin/", admin.site.urls),
]