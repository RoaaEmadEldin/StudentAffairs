from django.shortcuts import render
from shared_app.models import Student
from django.http import JsonResponse

def search(request):
    return render(request, 'SearchAct.html')

def searchactive(request):
    name = request.GET.get('name')
    if name:
        students = Student.objects.filter(name__icontains=name, status='Active')
        student_info = []
        for student in students:
            student_info.append({
                'id': student.student_id,
                'name': student.name,
                'gpa': str(student.gpa),
                'level': student.level,
                'status': student.status,
                'dep': student.department,
                'email': student.email,
                'phone': student.phone_number,
                'dob': str(student.dob),
                'gender': student.gender,
            })
        return JsonResponse(student_info, safe=False)
    else:
        return JsonResponse([], safe=False)
