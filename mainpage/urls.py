from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.main, name='main'),
    path('Lab/', views.lab, name='lab'),
    path('Humanresources/', views.humanresources, name='humanresources'),
    path('Higherstudies/', views.higherstudies, name='higherstudies'),
    path('Studentaffairs/', include('login.urls')),
    path('Studentaffairs/HomePage/', include('homepage.urls', namespace='homepage')),
    path('Studentaffairs/AddStudent/', include('add.urls'), name='add'),
    path('Studentaffairs/UpdateDelete/', include('update_delete.urls'), name='updatedelete'),
    path('Studentaffairs/SearchAct/', include('searchactive.urls', namespace='searchactive')),
    path('Studentaffairs/AssignDep/', include('assigndep.urls'), name='assigndep'),
    path('Studentaffairs/ViewActInact/', include('view_in_active.urls'), name='viewactinact'),
    path('Studentaffairs/ChangeStatus/', include('changestatus.urls'), name='changestatus'),
    path("admin/", admin.site.urls),
]

