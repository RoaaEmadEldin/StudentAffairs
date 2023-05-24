
# from pyexpat.errors import messages
# from django import template
# from django.shortcuts import render, redirect
# from django.http import HttpResponse
# from django.template import loader
# from members.models import Student
# from django.urls import reverse
# from datetime import date

# def members(request):
#     template = loader.get_template('addStudent.html')
#     return HttpResponse(template.render({},request))
 
# def addstudent(request):
#     if request.method == 'POST':

#         student_id=request.POST.get('student_id','')    
#         name = request.POST.get('name','')
#         gpa = request.POST.get('gpa',0)
#         email = request.POST.get('email','')
#         phone_number = request.POST.get('phone_number','')
#         department = request.POST.get('department','')
#         status = request.POST.get('status','')
#         level = request.POST.get('level','')
#         dob= request.POST.get('dob', date.fromisoformat('2000-01-01'))
#         student = Student(student_id=student_id,name=name, gpa=gpa, email=email, phone_number=phone_number,department=department, status=status, level=level,dob=dob)
#         student.save()
#         return redirect(reverse('members'))
#     return HttpResponse("Invalid Request Method")


from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from members.models import Student
from django.urls import reverse
from datetime import date
from django.core.exceptions import ObjectDoesNotExist


def members(request):
    template = loader.get_template('addStudent.html')
    return HttpResponse(template.render({},request))
 
def addstudent(request):
    if request.method == 'POST':

        # student_id=request.POST.get('student_id','') 
        # name = request.POST.get('name','')
        # gpa = request.POST.get('gpa',0)
        # email = request.POST.get('email','')
        # phone_number = request.POST.get('phone_number','')
        # department = request.POST.get('department','')
        # status = request.POST.get('status','')
        # level = request.POST.get('level','')
        # dob= request.POST.get('dob', date.fromisoformat('2000-01-01'))
        student_id=request.POST['student_id']
        name = request.POST['name']
        gpa = request.POST['gpa']
        email = request.POST['email']
        phone_number = request.POST['phone_number']
        department = request.POST['department']
        status = request.POST['status']
        level = request.POST['level']
        dob= request.POST['dob']
        try:
            student = Student.objects.get(student_id=student_id)
            print("Object already exists in the database")
            return HttpResponse("Object already exists in the database")
        except ObjectDoesNotExist:
            student = Student(student_id=student_id,name=name, gpa=gpa, email=email, phone_number=phone_number,department=department, status=status, level=level,dob=dob)
            student.save()
            return redirect(reverse('members'))
    return HttpResponse("Invalid Request Method")

