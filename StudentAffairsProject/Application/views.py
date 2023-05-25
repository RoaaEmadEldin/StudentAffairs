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

def Assign(request):
    if (request.method == 'POST'):
        StudentID = request.POST['id']
        StudentDep = request.POST['department']
        if (len(StudentID) < 8):
            error = 'Invalid ID, Please Make Sure ID Consists Of 8 Numbers.'
            return HttpResponse(error)
        try:
            student = Student.objects.get(student_id = StudentID)
        except Student.DoesNotExist:
            error = 'There is no such Student with the provided ID'
            return HttpResponse(error)

        if (student.level > 2):
            student.department = StudentDep
            student.save()
            success = 'Department is Assigned Successfully'
            return HttpResponse(success)

        error = 'The Studnet\'s Level is Less than 2, Can\'t Assign a Department!'
        return HttpResponse(error)

