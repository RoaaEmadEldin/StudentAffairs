from django.shortcuts import render, redirect
from .models import Student
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.contrib import messages
from django.urls import reverse
import json
from django.http import JsonResponse

def HomePage(request):
    template = loader.get_template('HomePageSA.html')
    return HttpResponse(template.render({}, request))

def AssignDep(request):
    template = loader.get_template('AssignDep.html')
    return HttpResponse(template.render({}, request))

def Assign(request, ID, Department):
    StudentID = request.GET.get("ID")
    StudentDep = request.GET.get("Department")
    messagesList = []
    successMessage = []
    try:
        student = Student.objects.get(student_id = StudentID)
    except Student.DoesNotExist:
        messagesList.clear()
        successMessage.clear()
        messagesList.append("There is no such Student with the provided ID")
        return render(request, 'AssignDep.html', {'messagesList': messagesList})

    if (student.level > 2):
        student.department = StudentDep
        student.save()
        messagesList.clear()
        successMessage.clear()
        successMessage.append("Department is Assigned Successfully")
        return render(request, 'AssignDep.html', {'successMessage': successMessage})

    messagesList.clear()
    successMessage.clear()
    messagesList.append("The Studnet's Level is Less than 2, Can't Assign a Department!")
    return render(request, 'AssignDep.html', {'messagesList': messagesList})
