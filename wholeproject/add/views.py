from django.shortcuts import render, redirect
from shared_app.models import Student
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotAllowed
from django.template import loader
from django.contrib import messages
from django.urls import reverse
import re
from datetime import datetime
from django.http import JsonResponse

def add(request):
    return render(request, 'AddStudent.html')

def addstudent(request):
    studentid = request.POST.get('id')
    name = request.POST.get('name')
    gpa = request.POST.get('gpa')
    phone = request.POST.get('phone')
    dob = request.POST.get('date')
    level = request.POST.get('level')
    gender = request.POST.get('gender')
    status = request.POST.get('status')
    email = request.POST.get('Email')
    department = request.POST.get('department')

    if len((studentid)) < 8:
        error = 'Invalid ID, Please Make Sure ID Consists Of 8 Numbers.'
        return HttpResponse(error)

    regex2 = r'^[a-zA-Z.]+\s[a-zA-Z.]+\s[a-zA-Z.]+$'
    if name and not re.match(regex2, name):
        error = 'Please Enter Name including first, middle, and last name'
        return HttpResponse(error)
    
    if gpa and (float(gpa) < 0 or float(gpa) > 4):
        error = 'Invalid GPA, Please Enter GPA between 0.00 to 4.00'
        return HttpResponse(error)

    if phone and (len(phone) != 11 or phone[0] != '0' or phone[1] != '1' or phone[2] not in ['0', '1', '2', '5']):
        error = 'Invalid Mobile Number, Please Enter Phone Number that starts with 012, 011, 010, or 015'
        return HttpResponse(error)

    if dob:
        inputdate = datetime.strptime(dob, "%Y-%m-%d").date()
        currentdate = datetime.now().date()
        if inputdate > currentdate:
            error = 'Invalid Date, Please Enter Date before the current date'
            return HttpResponse(error)
    
    regex1 = r"^[0-9]+@stud.uni.edu.eg$"
    id = ""
    for i in range(len(email)):
        if email[i] != "@":
            id += email[i]
        else:
            break
    if (not re.match(regex1, email)) or (id != student_id):
        error="Invalid Email, Please Enter Valid Email"
        return HttpResponse(error)

    if department != "G" and (level == "Level 1" or level == "Level 2"):
        error="Invalid Department, Levels below 3 must be General"
        return HttpResponse(error)

    try:
        student = Student.objects.get(student_id=studentid)
        error="ID already exists in the database"
        return HttpResponse(error)
    except Student.DoesNotExist:
        student = Student(student_id=student_id,name=name, gpa=gpa, email=email, phone_number=phone_number,departmentartment=department, status=status, level=level,dob=dob,gender=gender)
        student.save()
        success=("Student added successfully!")
        response={'clearFields':True}
        return JsonResponse(response) 