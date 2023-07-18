from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from shared_app.models import Student


def viewin_active(request):
    students = Student.objects.all().values()
    template = loader.get_template('View_Act_Inact.html')
    context = {
        'students': students,
    }
    return HttpResponse(template.render(context, request))
# Create your views here.
