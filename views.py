from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Student
def viewAct_inAct_students(request):
    students = Student.objects.all().values()
    template = loader.get_template('viewStudents.html')
    context = {
        'students': students,
    }
    return HttpResponse(template.render(context, request))
# Create your views here.

