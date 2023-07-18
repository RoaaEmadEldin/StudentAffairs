from django.shortcuts import render, redirect
from shared_app.models import Student
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotAllowed
from django.template import loader
from django.contrib import messages
from django.urls import reverse
import re
from datetime import datetime
from django.http import JsonResponse

def updatedelete(request):
    return render(request, 'Update&Delete.html')

def update(request):
    updateexist = False
    studentid = request.POST.get('id')
    name = request.POST.get('name')
    gpa = request.POST.get('gpa')
    phone = request.POST.get('phone')
    dob = request.POST.get('dob')
    level = request.POST.get('level')
    gender = request.POST.get('gender')
    status = request.POST.get('status')

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
    
    try:
        student = Student.objects.get(student_id=studentid)
    except Student.DoesNotExist:
        error = "Student doesn't exist"
        return HttpResponse(error)

    # Update student fields
    if name:
        student.name = name
        updateexist = True
    if gpa:
        student.gpa = gpa
        updateexist = True
    if phone:
        student.phone_number = phone
        updateexist = True
    if dob:
        student.dob = dob
        updateexist = True
    if level:
        if student.department == 'G' and int(level) > 2:
            error = "Invalid level for department 'G'"
            return HttpResponse(error)
        else:
            student.level = level
        updateexist = True
    if gender:
        student.gender = gender
        updateexist = True
    if status:
        student.status = status
        updateexist = True
    if not updateexist:
        error = "No updates given to update"
        return HttpResponse(error)

    student.save()
    success = "Student updated successfully."
    response = {'clearFields': True}
    return JsonResponse(response)

    

def delete(request):
    if request.method == 'POST':
        studentid = request.POST.get('id2')
        if len(studentid) < 8:
            error = 'Invalid ID, Please Make Sure ID Consists Of 8 Numbers.'
            return HttpResponse(error)
    
        try:
            student = Student.objects.get(student_id=studentid)
        except Student.DoesNotExist:
            error = "Student doesn't exist"
            return HttpResponse(error)
        student.delete()
        success = "Student deleted successfully."
        response = {'clearFields': True}
        return JsonResponse(response)


